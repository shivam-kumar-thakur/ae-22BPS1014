import dotenv from "dotenv";
dotenv.config()

import app from "./app.js";
import { connectDatabase } from "./db/connect.db.js";
import cron from 'node-cron';

import { vehicleDetails } from "./models/vehicle.model.js";
import { startEmailWorker } from "./mailQueue/consumer.queue.js";

connectDatabase()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Started Listening on Port : ",process.env.PORT);

        // mail queue
        startEmailWorker();

        // job to run every hour, for removing wasted in db
        cron.schedule('0 * * * *', async () => {
            console.log('Running scheduled task to remove expired allocations');
            await vehicleDetails.removeExpiredAllocations();
        });

    })
})
.catch((error)=>{
    console.log("Failed to connect Database : ",error);
})