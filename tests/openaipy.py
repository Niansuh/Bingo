import openai

openai.api_key = "dummy"
openai.api_base = "https://niansuhai-bingo.hf.space" # You can change this to your own deployed service. The bingo service version needs to be >= 0.9.0
# create a chat completion
completion = openai.ChatCompletion.create(model="gpt-4", stream=False, messages=[{"role": "user", "content": "Hello"}])
print(completion.choices[0].message.content)
