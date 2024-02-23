import "./search.css";
import Card from "../card/Card";
import backgroundImage from './../../img/gradient-background.svg';
import { searchList } from "../../helpers/searchList";

const Search = () => {
	return (
		<section className="search">
			<div className="search__background">
				<img src={backgroundImage} alt="image"/>
			</div>
			<div className="container">
				<h2 className="reused-title search__title">Кого ищем сейчас</h2>
				<ul className="search__list">
					{searchList.map((item) => {
						return <Card key={item.id} title={item.title} pay={item.pay} experience={item.experience} workFormat={item.workFormat} dutiesFirst={item.dutiesFirst} dutiesSecond={item.dutiesSecond} />
					})}
				</ul>
			</div>
		</section>
	);
}

export default Search;