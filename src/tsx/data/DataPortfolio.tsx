//object with data for portfolio page with attributes: title, description, image, link

export interface IDataPortfolio {
	title: string;
	description: string;
	image: string;
	link: string;
	alt: string;
}

export const DataPortfolio = [
	{
		title: "Školní projekt",
		description:
			"Projekt byl tvořen v rámci školního předmětu Web Design ve skupinách po 3. Projekt byl zaměřen na využítí důležitých značek a na jejich správnou sémantickou implementaci. Požadavky pro CSS byly použití mobile-first designu a využití moderních prvků jako jsou Flex a Grid.<br>HTML a CSS (respektive Sass) část projektu jsem tvořil já. Grafiku a obsah tvořili moji kolegové",
		image: "../../assets/img/czu.png",
		alt: "Náhled školního projektu",
		link: "https://gnotagnoob.github.io/School-project/",
	},
	{
		title: "Ultra Protocol",
		description: "This is my portfolio page",
		image: "../../assets/img/ultrap.png",
		alt: "",
		link: "https://web.archive.org/web/20211022115446/https://ultraprotocol.io/",
	},
];
