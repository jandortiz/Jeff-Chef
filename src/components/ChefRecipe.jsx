import ReactMarkdown from 'react-markdown'


export default function ChefRecipe(props) {
	return (
		<section className="suggested-recipe-section">
			{/* <h2>Jeff-Chef recomienda:</h2> */}
			<article className="suggested-recipe-container" aria-live="polite">
				<ReactMarkdown>
					{props.response}
				</ReactMarkdown>
			</article>
		</section>
  )
}