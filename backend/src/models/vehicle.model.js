import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    vehicle_id: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    registration_number: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
    },
    current_allocations: [
        {
            driver_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "driverDetails",
                required: true,
            },
            time_start: {
                type: Date,
                required: true,
            },
            time_end: {
                type: Date,
                required: true,
            },
        }
    ],
}, { timestamps: true });

// Method to remove expired allocations
vehicleSchema.statics.removeExpiredAllocations = async function() {
    const now = new Date();
    // Finding all vehicles
    const vehicles = await this.find();
    
    for (const vehicle of vehicles) {
        // Remove allocations that have ended more than 5 hours ago
        vehicle.current_allocations = vehicle.current_allocations.filter(allocation => 
            (now - new Date(allocation.time_end)) <= 5 * 60 * 60 * 1000 // 5 hours in milliseconds
        );
        await vehicle.save();
    }
};

// Method to check if the vehicle is available in the given time range
vehicleSchema.methods.isAvailable = function (startTime, endTime) {
    const vehicle = this;
    const start = new Date(startTime);
    const end = new Date(endTime);

    // Checking if any current allocation overlaps with the requested time range
    const isAvailable = vehicle.current_allocations.every(allocation => 
        (end <= allocation.time_start || start >= allocation.time_end)
    );

    return isAvailable;
};

export const vehicleDetails = mongoose.model("vehicleDetails", vehicleSchema);
