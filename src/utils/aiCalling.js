import OpenAI from 'openai'
import SYSTEM_PROMPT  from './recipePrompt'



const OpenAIapiKey = import.meta.env.VITE_CHEFF_OPENAI_API_KEY



const client = new OpenAI({apiKey:OpenAIapiKey, dangerouslyAllowBrowser:true})


export async function getRecipeFromOpenAI(ingredientsArr) {

	const openAIResponse = await client.responses.create({
		model:"chatgpt-4o-latest",
		input: [
			{
				role: "assistant",
				content: `${SYSTEM_PROMPT}`
			},
			{
				role: "user",
				content: `I have the following ingredients: ${ingredientsArr.join(" ")}. Please give me a recipe you'd recommend I make!`
			}
		]
	})
	return openAIResponse['output_text']
}



