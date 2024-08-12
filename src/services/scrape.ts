import axios from 'axios';
import e from 'express';

class ScrapeService {

    async getStatus(query: any) {
        try {
            const response: any = await axios.get("http://scrapy_spider:6800/listjobs.json?project=crawler_app");
            const data = response.data;
            const finished = data?.finished?.find((element: any) => query.jobid === element['id'] );
            console.log("data:", data)
            if (finished) {
                return { status: true };
            }

            return { status: false };


        } catch (error) {
            console.log(error);
        }
    }
}

export default new ScrapeService;