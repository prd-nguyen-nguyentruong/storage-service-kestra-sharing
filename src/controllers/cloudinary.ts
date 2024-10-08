import CloudinaryService from "@services/cloudinary"

class CloudinaryController {
  static getRaw = async (req: any, res: any) => {
    const data = await CloudinaryService.getRaw(req.query);

    return res.send({ metadata: data })
  }
}

export default CloudinaryController;