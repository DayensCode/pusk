import { useParams } from "react-router-dom";

import Info from "../components/info/Info";
import Intro from "../components/intro/Intro";
import { searchList } from './../helpers/searchList';

const Job = () => {
	const {id} = useParams();

	function findCard() {
		return searchList.find(item => item.id == id)
	}
	const card = findCard();

	return (
		<main>
			<Intro 
				centeredTitle={card.title}
				pay={card.pay}
				format={card.workFormat}
				experience={card.experience}
			/>
			<Info card={card}/>
		</main>
	);
}

export default Job;