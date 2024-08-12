import ScrapeService from "@services/scrape"

class ScrapeController {
  static getStatus = async (req: any, res: any) => {
    const data = await ScrapeService.getStatus(req.query);

    return res.send({ metadata: data })
  }
}

export default ScrapeController;