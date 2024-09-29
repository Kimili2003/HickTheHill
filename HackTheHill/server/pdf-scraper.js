const fs = require('fs');            // For reading and writing files
const pdfParse = require('pdf-parse'); // For extracting PDF content

// Function to parse the PDF
async function parsePdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    try {
        const data = await pdfParse(dataBuffer);
        return data.text; // Extracted text from the PDF
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw error;
    }
}

// Function to store data in a JSON file
async function storeInJsonFile(textContent) {
    try {
        // Convert textContent to a JSON object
        const dataToStore = {
            content: textContent
        };

        // Save it in a JSON file
        const jsonFilePath = 'output.json'; // Path where the JSON file will be saved
        fs.writeFileSync(jsonFilePath, JSON.stringify(dataToStore, null, 2), 'utf-8'); // Pretty-print the JSON content

        console.log("Data successfully stored in JSON file:", jsonFilePath);
    } catch (error) {
        console.error("Error storing data in JSON file:", error);
    }
}

// Main function to handle everything
async function processPdf(filePath) {
    try {
        console.log("Reading and parsing PDF...");
        const textContent = await parsePdf(filePath);

        console.log("Storing content in JSON file...");
        await storeInJsonFile(textContent);
    } catch (error) {
        console.error("Error processing PDF:", error);
    }
}

// Test the script
// Corrected file path with forward slashes
const pdfFilePath = '/Users/macbookair/Downloads/Course Outline_PHYS 2903R_S241.pdf';

processPdf(pdfFilePath);

export class processPdf {
}