import mongoose from "mongoose";
import variable from "./variable.js";

const TAG = "Connect Database";
const connect = async () => {
    try {
        await mongoose.connect(variable.MONGO_URI);
        console.log(TAG, 'Connected to database successfully.');
        return {
            status: '✅',
            message: 'Connected to database successfully.'
        }
    } catch (e) {
        console.log(TAG, e);
        return {
            status: '❌',
            message: 'Failed to connect to database.'
        }
    }
}
export default connect;