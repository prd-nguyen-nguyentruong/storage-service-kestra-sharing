import mongoose, { ConnectOptions } from 'mongoose';
import { MONGO_URL } from "@config/app.config.ts";

class MongoService {
    public start(): void {
        this.connectToMongoDB();
    }

    private connectToMongoDB(): void {
        mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
    }
}

export default MongoService;