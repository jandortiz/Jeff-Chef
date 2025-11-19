import ReactMarkdown from 'react-markdown'


export default function ChefRecipe(props) {
	return (
		<section className="suggested-recipe-section">
			<article className="suggested-recipe-container" aria-live="polite">
				<ReactMarkdown>
					{props.response}
				</ReactMarkdown>
			</article>
		</section>
  )
}