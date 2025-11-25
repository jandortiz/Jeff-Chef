export async function getRecipeFromOpenAI(ingredientsArr){
	const response = await fetch(import.meta.env.VITE_BACKEND_URL, {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({ ingredients: ingredientsArr }) 
	})

	if (!response.ok) {
		throw new Error("Backend fail")
	}

	const  data = await response.json()
	return data.recipe;
}