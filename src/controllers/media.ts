import MediaService from "@services/media"

class MediaController {
  static insertRaw = async (req: any, res: any) => {
    const data = await MediaService.insertRaw(req.body);

    return res.send({ metadata: data })
  }
}

export default MediaController;