import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body; // Extract the prompt value from the request body

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data.data[0].b64_json;
    console.log('Generated image:', image); // Log the generated image for debugging
    res.status(200).json({ photo: image });
  }  catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      console.error('API Error:', error.response.data.error);
    } else {
      console.error('Error:', error);
    }
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
