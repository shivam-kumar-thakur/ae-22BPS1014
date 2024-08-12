import { Queue } from "bullmq";


const emailQueue = new Queue("Email-Queue", {
    connection: {
        host: '127.0.0.1',
        port: 6379,
    }
});


export const addEmail = async (mailDetails) => {
    try {
        const newRequest = await emailQueue.add(mailDetails.type, mailDetails);
        console.log("Job added with ID:", newRequest.id);
        console.log("Mail Details:", mailDetails);

        return newRequest.id ? true : false;
    } catch (error) {
        console.error("Error adding email to the queue:", error);
        return false;
    }
};
