import { useState } from "react"

import ChefRecipe from "./ChefRecipe";
import IngredientsList from "./IngredientsList"

import { getRecipeFromOpenAI } from '../utils/aiCalling'


export default function MainContent() {
	const [myIngredients, setMyIngredients] = useState([]);
	const [finalRecipe, setFinalRecipe] = useState("")


	async function getAIRecipe() {
		const recipeAiResponse = await getRecipeFromOpenAI(myIngredients)
		setFinalRecipe(recipeAiResponse)
	}


	const ingredientsToDisplay = myIngredients.map(ingredient => {
			return (<li key={ingredient}>🍴{ingredient}</li>)
		})


	function submitMyForm(formData) {
		const newIngredient = formData.get("ingredient");
		console.log(newIngredient)
		if (newIngredient.length > 0) {
			setMyIngredients(prevIngredient => [...prevIngredient, newIngredient]);
		}
		else {
			alert("Ingresa al menos un ingrediente")
			setMyIngredients(prevIngredient => [...prevIngredient])
		}
	}

	function clearRecipes() {
		setMyIngredients(prevIngredient => [])
		setFinalRecipe(prevRecipe => "")
	}


	return (
		<main className="main-container">
			<p className="main-container-text">Jeff-Chef te ayuda en la creación de tus recetas favoritas con los ingredientes que desees y enfoque en <b>comida típica Española.</b> </p>

			<p className="main-container-text">A continuación ingresa <b>mínimo 4</b> ingredientes y deléitate con las delicias que Jeff-Chef tiene para ofrecerte. </p>

			<div className="form-container">
				<form action={submitMyForm} className="ingredients-form">
					<input
						className="input-ingredients-form"
						type="text"
						placeholder="e.g Tomate"
						aria-label="Add ingredients"
						name="ingredient"
					/>
					<button className="button-ingredients-form">Agrega Ingredientes</button>
				</form>

			<form action={clearRecipes}>
				<button className="button-new-recipe">Nueva receta</button>
			</form>
		</div>

			{ingredientsToDisplay.length > 0 && <IngredientsList
				ingredientsToDisplay={ingredientsToDisplay}
				getAIRecipe={getAIRecipe}
				/>}

			{finalRecipe && <ChefRecipe response={finalRecipe} />}
		</main>
	)
}