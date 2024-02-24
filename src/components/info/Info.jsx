import { useParams } from "react-router-dom";
import './info.css';
import { searchList } from './../../helpers/searchList';

const Info = () => {
	const {id} = useParams();

	function findCard() {
		return searchList.find(item => item.id == id)
	}
	const card = findCard();

	return (
		<section className="info">
			<div className="container">
				<span className="info__subtitle">Описание вакансии</span>
				<div className="info__wrapper">
					<h3 className="info__title">О вакансии</h3>
					<p className="info__paragraph" id="muted">{card.about}</p>
					<h3 className="info__title">Задачи</h3>
					<p className="info__paragraph" id="muted">{card.tasks}</p>
					<h3 className="info__title">Будет преимуществом</h3>
					<p className="info__paragraph" id="muted">{card.advantage}</p>
					<h3 className="info__title">Условия</h3>
					<ul className="info__list">
						<li className="info__offer" id="muted">Своевременная достойная заработная плата (обсуждается с финальным кандидатом).</li>
						<li className="info__offer" id="muted">Офис А класса Москва Сити (м. Деловой центр/Выставочная), уютное рабочее пространство, оснащенное необходимым современным оборудованием. Молодой дружный коллектив и никакой бюрократии.</li>
						<li className="info__offer" id="muted">Корпоративное питание (бесплатный завтрак-обед-полдник-ужин, фрукты, орехи, сыры, молочные продукты, чай, кофе и другие напитки и сладости).</li>
						<li className="info__offer" id="muted">Дополнительные поощрения после прохождения испытательного срока, абонемент в фитнес-клуб (оплата 100%).</li>
					</ul>
					<br />
					<span id="muted">Мы ждем тебя в нашей команде и готовы предложить интересные проекты и профессиональное развитие!</span>
				</div>
			</div>
		</section>
	);
}

export default Info;