import emoji from "react-easy-emoji";

export const greetings = {
	name: "Karthikeyan Ramanathan",
	title: "Hi all, I'm Karthi",
	description:
		"A passionate and motivated backend Web Developer and can work as a full stack Developer with Angular being the front-end, having experience of building Web applications with Java / Spring / SpringBoot / Hibernate / Oracle and some other cool libraries and frameworks",
	resumeLink: "https://github.com/karthirm/karthirm/tree/main/resumes/Karthikeyan-Ramanathan_Resume.pdf",
	blogsLink:"https://karthikeyanrm.hashnode.dev",
	mailLink:"mailto:karthirm90@gmail.com"
};

export const openSource = {
	githubUserName: "karthirm",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/karthirm",
	instagram: "https://www.instagram.com/karthikeyanramanathan/",
	twitter: "https://twitter.com/karthirm",
	github: "https://github.com/karthirm",
	linkedin: "https://www.linkedin.com/in/karthikeyan-ramanathan-28636113/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"An EVER-IMPROVING BACK END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK AND LEARNING ANGULAR",
	skills: [
		emoji(
			"⚡ Develop highly available and scalable back-end stack for web applications"
		),
		emoji(
			"⚡ Possess good knowledge in Java, Spring Boot, Hibernate, Microservices"
		),
		emoji(
			"⚡ Deployed applications into third party services such as Heroku/ Netlfiy/ Google Cloud"
		),
		emoji(
			"⚡ Possess sufficient knowledge in Docker, Openshift & Kubernetes to work on containerization and orchestration of microservices"
		),
		emoji(
			"⚡ Have worked on integrating the applications with CI/CD - Bitbucket-Jenkins as well Github-Heroku"
		),
	],

	softwareSkills: [
		{
			skillName: "java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "Spring",
			fontAwesomeClassname: "logos:spring",
		},
		{
			skillName: "Hibernate",
			fontAwesomeClassname: "logos:Hibernate",
		},
		{
			skillName: "Oracle-db",
			fontAwesomeClassname: "logos:oracle",
		},
		{
			skillName: "mysql-db",
			fontAwesomeClassname: "vscode-icons:file-type-mysql",
		},
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "vscode-icons:file-type-angular",
		},
		{
			skillName: "Openshift",
			fontAwesomeClassname: "logos:Openshift-icon",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend",
		progressPercentage: "50",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "PSG College Of Technology, Coimbatore",
		subHeader: "Master of Science in Theoretical Computer Science",
		duration: "July 2008 - April 2013",
		desc: "A research oriented course based on Mathematics & Computer Science for a span of 5 years",
		descBullets: [
			"Was part of a research work related to botnets which becomes one of the top threats to Internet",
			"Found a detection mechanism using SNMP MIB statistical model to detect IRC botnets",
			"This research work was published as a paper in a Switzerland Science Journal given below as link",
		],
	  link: "http://www.inderscience.com/info/inarticle.php?artid=58653",
	},
];

export const experience = [
	{
		role: "Software Engineer",
		company: "FIS Global",
		companylogo: "/img/icons/common/fisLogo.jpeg",
		date: "September 2018 – Present",
		desc: "Banking domain projects",
		descBullets: [
			"ACT - Web application which provides choice lists, input details for loan application.",
			"Customer Management - New bank Setup by integrating with Docker, Openshift. Data Migration Using flyway tool.",
		],
	},
	{
		role: "Associate Developer",
		company: "CTS",
		companylogo: "/img/icons/common/ctsLogo.png",
		date: "October 2013 – August 2018",
		desc: "Healthcare domain projects",
		descBullets: [
			"SR2 - Web application which assists pharmacies in managing patients who are on specialty medications",
			"SORA - Provides the statistical report of the user and teams.",
			"340B - US government created a program to provide medication to eligible patients at a very low cost.",
		],
	},
	{
		role: "Software Engineer Intern",
		company: "Tecnotree",
		companylogo: "/img/icons/common/tecnotreeLogo.png",
		date: "Nov 2012 – Apr 2013",
		desc: "Developed 'Lucky Draw'. ",
		descBullets: [
			"A web application which is integrated with the external systems to extract the eligible draw list",
			"The draw list is the list of subscribers based on the criteria attached with draw configuration specification.",
			"Developed the UI pages to pick up eligible draw list, running draw process and sql backend setup.",
		],
	},
	{
		role: "Research Intern",
		company: "IIT Madras, Chennai",
		companylogo: "/img/icons/common/IITLogo.png",
		date: "Apr 2011 – Nov 2011",
		desc: "'Study and Analysis of Botnets’",
		descBullets: [
			"Aimed at studying the characteristics of various kinds of botnets",
			"An extensive survey on literature available on botnets was made",
			"Testbed setup called RUBOT framework, was used to conduct various experiments on the various botnet types.",
		],
	},
];

export const projects = [
	{
		name: "Corona Tracker",
		desc: "A Java Spring-Boot application which tracks the reported data of confirmed COVID-19 cases across the globe with Johns Hopkins University's data-source.",
		link: "https://corona-tracker-app-1.herokuapp.com/",
	},
	{
		name: "Employee Management",
		desc: "A simple CRUD application for employees which is developed using Spring-Boot, Hibernate & mysql in the backend and thymeleaf as front-end template engine",
		link: "https://springboot-thymeleaf-app.herokuapp.com/employees/getAll",
	},
	{
		name: "Movie Rating App",
		desc: "Created a microservices application that consumes Movie-DB API to give ratings.They communicate with other using Eureka, uses Spring cloud config server for consistency, Circuit-Breaker for fault tolerance ",
		github: "https://github.com/karthirm/Microservices-movieapp",
		//link: "https://github.com/karthirm/Microservices-movieapp",
	},
];

export const feedbacks = [
	{
		name: "Clark Linda",
		feedback:
			"Karthik has been an asset for our project. His leadership capabilities has helped us to resolve downtime issues in our project",
	},
	{
		name: "Demarino Vincent",
		feedback:
			"Played a very big role in migrating the application to the new stack which deploys our customer management app into Openshift/Docker",
	},
	{
		name: "Susan",
		feedback:
			"Excel macro tools which were developed by Karthik has reduced the manual effort by more than 300 hours for our team, well done",
	},
	{
		name: "Hari",
		feedback:
			"Karthik has been really innovative and have resolved a lot of production batch job issues for healthcare domain. Great job and keep it up",
	},
];
