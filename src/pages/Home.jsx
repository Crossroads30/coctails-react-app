import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Cocktail from '../components/Cocktail'

const Home = () => {
	return (
		<main>
			<SearchForm />
			<Cocktail />
		</main>
	)
}

export default Home
