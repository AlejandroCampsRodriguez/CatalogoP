require('dotenv').config({ path: '.dev' });
const axios = require('axios');

const apiKey = process.env.OPENROUTER_API_KEY;

async function run() {
  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'openai/gpt-4o-mini',
      messages: [
        { role: 'user', content: 'Hola, esto es un test.' }
      ]
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': 'http://localhost', // obligatorio para OpenRouter
        'X-Title': 'Mi App test'            // opcional pero recomendado
      }
    }
  );

  console.log(response.data.choices[0].message.content);
}

run();
console.log('API Key cargada:', process.env.OPENROUTER_API_KEY);