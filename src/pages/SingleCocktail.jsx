import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [cocktail, setCocktail] = useState(null)

	useEffect(() => {
		setLoading(true)
		async function getCocktail() {
			try {
				const response = await fetch(`${url}${id}`)
				const data = await response.json()
				// console.log(data)
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strInstructions: instructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					} = data.drinks[0]
					const ingredients = [
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
					]
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					}
				} else {
					setCocktail(null)
				}
			} catch (error) {
				console.log(error)
				setLoading(false)
			}
		}
		getCocktail()
	}, [id])

	return (
		<div>
			<h2>{id}</h2>
		</div>
	)
}

export default SingleCocktail
