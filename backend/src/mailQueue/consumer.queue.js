import { Worker } from "bullmq";
import { sendEmail as sendMailUtil } from '../utils/sendMail.utils.js';

export function startEmailWorker() {
    const processEmailJob = async (job) => {
        console.log('New job received:', job.id);
        console.log('Job data:', job.data);

        try {
            if (job.data.type === "message") {
                const response = await sendMailUtil(job.data.email, job.data.message, job.data.subject);
                if (!response) {
                    throw new Error("Something went wrong while sending the email");
                }
                console.log(`Email sent successfully for job ${job.id}`);
                return true;
            }
        } catch (error) {
            console.error(`Error processing job ${job.id}:`, error.message);
            throw error;
        }
    };

    const emailWorker = new Worker('Email-Queue', processEmailJob, {
        connection: {
            host: '127.0.0.1',
            port: 6379,
        },
        concurrency: 5, // Number of jobs to process in parallel
    });

    emailWorker.on('failed', (job, err) => {
        console.error(`Job ${job.id} failed with error:`, err.message);
    });

    emailWorker.on('error', (err) => {
        console.error('Worker error:', err);
    });

    console.log('Email worker started');
}
