import CloudinaryServiceExternalAPI from '@src/integrations/cloudinaryService';
import MediaService from '@services/media'
import axios from 'axios';

class CloudinaryService {

    async getRaw(query: any) {
        try {

            if (query.status === 'fail') {
                throw new Error('Failed to fetch data');
            }

            const data = await CloudinaryServiceExternalAPI.getRaw();

            const url = data[0]['url'];
            const response = await axios.get(url);
            MediaService.insertRaw(response.data);

            return true;

        } catch (error) {
            return false;
        }
    }
}

export default new CloudinaryService;