import { Job as jobModel } from "@models/job";

class WeatherRepository {
  get = async (params = {}) => {
    return await jobModel.find(params);
  }

  insert = async (data: any) => {
    await jobModel.create(data);
  }
}

export default new WeatherRepository();