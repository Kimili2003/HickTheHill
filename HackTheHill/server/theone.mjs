// Make sure to include these imports:
import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
console.log('Initialized OpenAI API client');
import fs from 'fs';  // Import the File System module to handle file operations

const jsonFilePath = '/Users/macbookair/Desktop/HAck The Hill Finial/Lockedin-anjali/HackTheHill/server/output.json';

// Read and parse the JSON file
const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');  // Read the file content synchronously
const parsedData = JSON.parse(jsonData);  // Parse the JSON data into an object

// Store the content in the 'content' variable
const content = parsedData.content;  // Assuming 'content' is the key inside the JSON file

console.log('Content from JSON:', content);

import express from 'express'; // Import express
const app = express(); // Create the Express app
console.log('Express app created');

import { MongoClient } from 'mongodb'; // Import MongoClient for MongoDB
console.log('MongoClient imported for MongoDB');

console.log('processPdf function imported from pdf-scraper.js');

const port = process.env.PORT || 5000;

const mongoURI = 'mongodb://localhost:27017'; // Replace with your actual MongoDB URI

// Connect to MongoDB
let client; // Declare a global client variable to hold the connection

const prompt = `what is this course for (just one word)?: "${content}"`;
const result = await model.generateContent(prompt);

console.log(result.response.text());


// // Import necessary modules and libraries
// import 'dotenv/config';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from 'fs';  // For file operations
// import express from 'express';  // Express framework
//
// // Initialize Google Generative AI client
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// console.log('Initialized Google Generative AI client');
//
// // File path for your JSON file
// const jsonFilePath = '/Users/macbookair/Desktop/HAck The Hill Finial/Lockedin-anjali/HackTheHill/server/output.json';
//
// // Express setup
// const app = express();
// const port = process.env.PORT || 5000;

// import 'dotenv/config';
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from 'fs';  // Import the File System module
// import express from 'express';  // Import Express
//
// // Initialize Google Generative AI client
// const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
// console.log('Initialized Google Generative AI client');
//
// // File path for your JSON file
// const jsonFilePath = '/Users/macbookair/Desktop/HAck The Hill Finial/Lockedin-anjali/HackTheHill/server/output.json';
//
// // ** Initialize Express App Here **
// const app = express();
// const port = process.env.PORT || 5000;  // Define the port
//
// // Route to process AI generation from the JSON file
// app.get('/generate-content', async (req, res) => {
//     try {
//         // Read and parse the JSON file
//         const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');  // Read the file content synchronously
//         const parsedData = JSON.parse(jsonData);  // Parse the JSON data into an object
//         const content = parsedData.content;  // Assuming 'content' is the key inside the JSON file
//
//         console.log('Content from JSON:', content);
//
//         // Use the content in the prompt
//         const prompt = `What is this course for (just one word)?: "${content}"`;
//
//         // Generate the AI response
//         const result = await model.generateContent({
//             prompt: prompt
//         });
//
//         // Send the generated response back to the client
//         res.send(result.response.text());
//     } catch (error) {
//         console.error('Error generating content:', error);
//         res.status(500).send('Error generating content.');
//     }
// });
//
// // Start the server after routes have been defined
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

