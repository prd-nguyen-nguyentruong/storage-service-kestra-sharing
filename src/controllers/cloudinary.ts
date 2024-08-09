import CloudinaryService from "@services/cloudinary"

class CloudinaryController {
  static getImages = async (req: any, res: any) => {
    const data = await CloudinaryService.getImages();

    return res.send({ metadata: data })
  }
}

export default CloudinaryController;