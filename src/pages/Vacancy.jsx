import Search from "../components/search/Search";
import Intro from "../components/intro/Intro";

const Vacancy = () => {
	return (
		<main>
			<Intro 
				centeredTitle="Твори, создавай" 
				signatureVacancy="Стань частью команды криптоэнтузиастов и dev-гениев, которые создают бизнес решая потребности людей"
			/>
			<Search />
		</main>
	);
}

export default Vacancy;