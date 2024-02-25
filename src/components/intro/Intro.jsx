import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './intro.css';

import backgroundImageHome from "./../../img/background.svg";
import backgroundImageVacancy from "./../../img/background-vacancy.svg";
import backgroundImageJob from "./../../img/background-job.svg";

const Intro = ({title, centeredTitle, signatureVacancy, signatureHome, pay, format, experience}) => {
	const { pathname } = useLocation();

	const backgroundElement = useRef(null);

	useEffect(() => {

		if (pathname === '/vacancy') {
			backgroundElement.current.style.setProperty("padding", "340px 0 260px");
			backgroundElement.current.style.setProperty("text-align", "center");
			backgroundElement.current.style.setProperty("background-image",`url(${backgroundImageVacancy})`);
		} else if (pathname === '/') {
			backgroundElement.current.style.setProperty("background-image",`url(${backgroundImageHome})`);
		} else {
			backgroundElement.current.style.setProperty("padding", "340px 0 72px");
			backgroundElement.current.style.setProperty("text-align", "center");
			backgroundElement.current.style.setProperty("background-image",`url(${backgroundImageJob})`);
		}
	},)

	return (
		<section ref={backgroundElement} className="intro">
			<div className="container">
				<span className="intro__signature" id="muted">{signatureHome}</span>
				<h1 className="intro__title">{title}</h1>
				<h2 className={pathname.includes("/vacancy") ? "reused-title intro__vacancy-title" : "reused-title intro__job-title"}>{centeredTitle}</h2>
				<span className="reused-signature" id="muted">{signatureVacancy}</span>
				<div className={pathname.includes("/job") ? "intro__job-conditions" : "none"}>
					<div className="intro__job-condition" id="muted">
						Заработная плата
						<span className="intro__job-value">{pay}</span>
					</div>
					<div className="intro__job-condition" id="muted">
						Формат работы
						<span className="intro__job-value">{format}</span>
					</div>
					<div className="intro__job-condition" id="muted">
						Требуемый опыт
						<span className="intro__job-value">{experience}</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;