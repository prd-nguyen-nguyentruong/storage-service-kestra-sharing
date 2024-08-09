import CloudinaryServiceExternalAPI from '@src/integrations/cloudinaryService';

class CloudinaryService {

    async getImages() {
        try {
            const data = CloudinaryServiceExternalAPI.getImages();

            return data;

        } catch (error) {
            console.log(error)
        }
    }
}

export default new CloudinaryService;