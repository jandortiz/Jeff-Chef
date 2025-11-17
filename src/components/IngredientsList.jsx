export default function IngredientsList(props) {
	return (
		<section className="get-recipe-section">
			<h2>Lista de ingredientes:</h2>
			<ul className="ingredients-list-container">{props.ingredientsToDisplay}</ul>
		
			{props.ingredientsToDisplay.length > 3 && <div className="get-recipe-container">
				<div className="get-recipe-info">
					<h3>¿Estás preparado para crear tu receta?</h3>
					<p>Crea tu receta con la lista de ingredientes ingresada</p>
				</div>
						
				<button className="get-recipe-button" onClick={props.getAIRecipe}>Crear receta</button>
			</div>}
		</section>
	)
}