import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'dummy',
  baseURL: 'http://127.0.0.1:3000' // Change this to the service address you deployed yourself
});

async function start() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: 'Hello' },
    ],
    model: 'bing',
  });
  console.log(completion.choices[0].message.content)
}

start()
