import CloudinaryServiceExternalAPI from '@src/integrations/cloudinaryService';
import axios from 'axios';

class CloudinaryService {

    async getRaw(query: any) {
        try {
            if (!query?.status) {
                throw new Error('Failed to insert data');
            }
    
            if (query.status === 'fail') {
                return {'message': 'Failed to fetch data'};
            }

            const data = await CloudinaryServiceExternalAPI.getRaw();
            const url = data[0]['url'];
            const response = await axios.get(url);
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }
}

export default new CloudinaryService;