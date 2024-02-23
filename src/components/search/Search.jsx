import "./search.css";
import Card from "../card/Card";
import backgroundImage from './../../img/gradient-background.svg';

const Search = () => {
	return (
		<section className="search">
			<div className="search__background">
				<img src={backgroundImage} alt="image"/>
			</div>
			<div className="container">
				<h2 className="reused-title search__title">Кого ищем сейчас</h2>
				<ul className="search__list">
					<Card />
					<Card />
				</ul>
			</div>
		</section>
	);
}

export default Search;