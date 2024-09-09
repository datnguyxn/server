import mongoose from "mongoose";
import {
    variable
} from "../configuration/index.js";

const TAG = "User Model";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: "/img/avt_df.jpeg",
    },
    token: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
    googleId: {
        type: String,
    }
}, {
    timestamps: true
});