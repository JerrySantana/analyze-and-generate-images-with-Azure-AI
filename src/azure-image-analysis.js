const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = process.env.VISION_KEY;
const endpoint = process.env.VISION_ENDPOINT;
const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

async function analyzeImage(imageURL) {
    const features = ["Categories", "Description", "Tags", "Objects", "ImageType", "Color"];
    const result = await client.analyzeImage(imageURL, { visualFeatures: features });
    return result;
}

exports.analyzeImage = analyzeImage;