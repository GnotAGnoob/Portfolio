import { IDataPortfolio } from "../data/DataPortfolio";

export const CardPortfolio = (props: IDataPortfolio) => {
	return (
		<a
			href={props.link}
			className="hover:scale-[103%] border-2 rounded-t-2xl border-[color:var(--clr-primary-600)] hover:border-[color:var(--clr-accent-400)] transition-all duration-200 pb-10 overflow-hidden"
			target="_blank"
		>
			<article className="flex flex-col justify-center">
				<div className="flex flex-col justify-center">
					<img src={require("../../assets/img/czu.png")} alt={props.alt} />
				</div>
				<div className="flex flex-col justify-center mt-7 mx-7">
					<h1 className="text-center">{props.title}</h1>
					<p className="mt-4">{props.description}</p>
					<a href={props.link} className="mt-7 text-sm">
						Zobtazit projekt
						<i className="ml-3 fas fa-external-link-alt"></i>
					</a>
				</div>
			</article>
		</a>
	);
};
