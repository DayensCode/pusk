import './card.css';

const Card = () => {
	return (
		<li className="card">
			<a href="#!">
				<div className="card__top">
					<h3 className="card__title">Social Media Customer Support</h3>
					<div className="card__conditions">
						<div className="card__condition">
							Зароботная плата
							<span>от 80 000 руб</span>
						</div>
						<div className="card__condition">
							Опыт работы
							<span>3-6 лет</span>
						</div>
						<div className="card__condition">
							Формат работы
							<span>Офис, полный день</span>
						</div>
					</div>
				</div>
				<div className="card__body">
					<h4 className="card__subtitle">Что предстоит делать</h4>
					<ul className="card__duties">
						<li>Помогать и консультировать пользователей в социальных сетях</li>
						<li>Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов</li>
						<li>Помогать и консультировать пользователей в социальных сетях</li>
						<li>Собирать обратную связь от пользователей по удобству, функциональности и качеству работы продуктов</li>
					</ul>
				</div>
				<button type="button" className="card__button">Смотреть вакансию</button>
			</a>
		</li>
	);
}

export default Card;