const ComputerVisionClient = require('@azure/cognitiveservices-computervision').ComputerVisionClient;
const ApiKeyCredentials = require('@azure/ms-rest-js').ApiKeyCredentials;

const key = 'd48b4b4156d34c6d8fca8635441e0bd9';
const endpoint = 'https://jerry-image-analysis.cognitiveservices.azure.com/';
const client = new ComputerVisionClient(new ApiKeyCredentials({ inHeader: { 'Ocp-Apim-Subscription-Key': key } }), endpoint);

function analyzeImage(imageURL) {
    const features = ["Categories", "Description", "Tags", "Objects"];
    const result = client.analyzeImage(imageURL, { visualFeatures: features });
    return result;
}

exports.analyzeImage = analyzeImage;