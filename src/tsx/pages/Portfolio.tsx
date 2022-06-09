import { FunctionComponent } from "react";
import { CardPortfolio } from "../components/CardPortfolio";
import { DataPortfolio } from "../data/DataPortfolio";

export const Portfolio: FunctionComponent = () => {
	//return map of cards with data from DataPortfolio and CardPortfolio
	return (
		<>
			<h1 className="max-w-none border-b-2 border-[color:var(--clr-primary-700)] pb-8 md:pb-8">
				Daniel Svátek - Portfolio
			</h1>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(33ch,1fr))] md:grid-cols-[repeat(auto-fit,minmax(38ch,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(40ch,1fr))] place-content-center gap-20 mt-12 md:mt-20 sm:px-5">
				{DataPortfolio.map((item, index) => (
					<CardPortfolio key={index} {...item} />
				))}
			</div>
		</>
	);
};
