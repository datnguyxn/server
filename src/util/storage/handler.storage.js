import admin from "firebase-admin";
import multer from "multer";

const TAG = "Handler Storage";

const bucket = admin.storage().bucket();

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
})

const uploadFileToFirebase = async (file) => {
    const blob = bucket.file(`uploads/${Date.now()}_${file.originalname}`);
    const blobStream = blob.createWriteStream({
        metadata: {
            contentType: file.mimetype
        }
    });
    return new Promise((resolve, reject) => {
        blobStream.on('error', (err) => {
            console.log(TAG + '"Upload file to firebase error: "', err);
            reject(err);
        });

        blobStream.on('finish', () => {
            console.log(TAG + '"Upload file to firebase success: "', blob.name);
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            resolve(publicUrl);
        });
        blobStream.end(file.buffer);
    });
};

export default {
    upload,
    uploadFileToFirebase
}