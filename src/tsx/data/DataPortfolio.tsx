const czu = require("../../assets/img/czu.png");
const ultrap = require("../../assets/img/ultrap.png");
const gleq = require("../../assets/img/gleq.png");
const uslugiru = require("../../assets/img/uslugiru.png");
const coromed = require("../../assets/img/coromed.png");
const react = require("../../assets/img/react.png");

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
		title: "Ultra Protocol",
		description:
			"	V tomto projektu jsem tvořil celé HTML, (S)CSS a Javascript podle dodaného grafického návrhu. Projekt obsahoval relativně spoustu animací. Bohužel tento projekt je již neaktivní, tak na něho odkazuji pomocí wayback machine.",
		image: ultrap,
		alt: "Náhled Ultra Protocol",
		link: "https://web.archive.org/web/20211022115446/https://ultraprotocol.io/",
	},
	{
		title: "Green Light Equity",
		description:
			"	Webová stránka dělaná ve Wordpressu, jelikož klient potřeboval dashboard pro přidávání blogových článků. Celá stránka (kromě grafu) je psaná ručně a následně vložena do Worpressu za použití HTML, (S)CSS a Javascriptu.",
		image: gleq,
		alt: "Náhled Gleq",
		link: "https://gleq.eu/en/",
	},
	{
		title: "Uslugiru",
		description:
			"	Projekt také vytvořen pomocí Wordpressu. Stejně jako předchozí projektech je hlavní stránka psaná ručně.",
		image: uslugiru,
		alt: "Náhled Uslugiru",
		link: "https://uslugiru.com/en/",
	},
	{
		title: "React Testovací stránka",
		description:
			'	Testovací stránka bez responzivního a graficky uceleného designu. Projekt je zaměřený hlavně na použítí Reactu. Kalkulačka je vytvořena pomocí tutoriálu a sekce s "Articles" je poté dělána samostatně.',
		image: react,
		alt: "Náhled React projektu",
		link: "https://gnotagnoob.github.io/React-Calculator/#/articles",
	},
	{
		title: "Školní Projekt",
		description:
			"	Projekt byl tvořen v rámci školního předmětu Web Design ve skupinách po 3. Projekt byl zaměřen na využítí důležitých značek a na jejich správnou sémantickou implementaci. Požadavky pro CSS byly použití mobile-first přístupu a využití moderních prvků jako jsou Flex a Grid. \n 	HTML, (S)CSS jsem tvořil já. Grafiku a obsah tvořili moji kolegové.",
		image: czu,
		alt: "Náhled školního projektu",
		link: "https://gnotagnoob.github.io/School-project/",
	},
	{
		title: "Coromed",
		description:
			"	E-shop vytvořen ve Wordpressu podle grafického návrhu. Hlavní stránka je psaná ručně a stránky vygenerované Wordpressem mají přepsané CSS.",
		image: coromed,
		alt: "Náhled Coromed",
		link: "https://coromedplus.com/",
	},
];
