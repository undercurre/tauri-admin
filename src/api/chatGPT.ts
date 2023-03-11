import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: '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',
})

const openai = new OpenAIApi(configuration)

export async function getAIMessages(question: string) {
  const responce = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: question,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [' Human:', ' AI:'],
  })
  return responce.data.choices[0].text
}
