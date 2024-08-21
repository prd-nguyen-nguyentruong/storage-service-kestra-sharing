import JobRepository from '@src/repositories/job'

class MediaService {

    async insertRaw(body: any) {
        try {
            
            await JobRepository.insert(body);

        } catch (error) {
            console.log(error);
        }
    }
}

export default new MediaService;