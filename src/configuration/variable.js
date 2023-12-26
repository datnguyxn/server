import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 3000,
    URL: process.env.URL || 'http://localhost',
    MONGO_URI: process.env.DATABASE_URL,
    JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES,
}