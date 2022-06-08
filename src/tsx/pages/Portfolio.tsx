import { FunctionComponent } from "react";
import { CardPortfolio } from "../components/CardPortfolio";
import { DataPortfolio } from "../data/DataPortfolio";

export const Portfolio: FunctionComponent = () => {
	//return map of cards with data from DataPortfolio and CardPortfolio
	return (
		<>
			<h1>Daniel Svátek - Portfolio</h1>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(20ch,40ch))] md:grid-cols-[repeat(auto-fit,minmax(40ch,50ch))] gap-20 mt-16 px-5">
				{DataPortfolio.map((item, index) => (
					<CardPortfolio key={index} {...item} />
				))}
			</div>
		</>
	);
};
