import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

// Initialize the Express app
const app = express();
const port = process.env.PORT || 5000;

// Allow cross-origin requests (CORS) for your React app
app.use(cors());

// Set up Multer to store uploaded files in the 'uploads' folder
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Ensure you have this folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        // When a file is uploaded, it is stored in the 'uploads' folder
        console.log('File uploaded successfully:', req.file);

        // Send a response to the client
        res.json({
            message: 'File uploaded successfully!',
            file: req.file
        });
    } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Error uploading file' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
