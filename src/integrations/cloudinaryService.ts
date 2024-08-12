import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_NAME } from '@src/config/app.config';
import { v2 as cloudinary, ConfigOptions, UploadApiResponse } from 'cloudinary';


class CloudinaryServiceExternalAPI {
    public static cloudinaryClient: typeof cloudinary;

    constructor() {
        const config: ConfigOptions = {
            cloud_name: CLOUDINARY_NAME,
            api_key: CLOUDINARY_API_KEY,
            api_secret: CLOUDINARY_API_SECRET,
        }

        cloudinary.config(config);
        CloudinaryServiceExternalAPI.cloudinaryClient = cloudinary;
    }

    getRaw = async (): Promise<UploadApiResponse> => {
        try {
          const result = await CloudinaryServiceExternalAPI.cloudinaryClient.api.resources({
            resource_type: 'raw',
          });
          return result.resources;
        } catch (error) {
          throw new Error(`Failed to fetch raw: ${error}`);
        }
      }
}

export default new CloudinaryServiceExternalAPI;