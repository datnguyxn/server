import mongoose from "mongoose";
import variable from "./variable.js";
const connect = async () => {
    try {
        await mongoose.connect(variable.MONGO_URI);
        return {
            status: '✅',
            message: 'Connected to database successfully.'
        }
    } catch (e) {
        console.log(e);
        return {
            status: '❌',
            message: 'Failed to connect to database.'
        }
    }
}
export default connect;