export default {
	moduleConfig: {
		account: {
			description:
				'Ce module va vous permettre de gérer un compte utilisateur. Vous pourrez créer un compte, vous connecter et interagir avec votre compte.',
			warning: 'Ce module est nécessaire pour utiliser les autres modules.',
		},
		users: {
			description:
				'Ce module va vous permettre de communiquer avec le service users en utilisant un SDK côté server obligatoire pour ce service.',
		},
		databases: {
			description:
				'Ce module va vous permettre de communiquer avec une base de données. Vous pourrez créer, lire, mettre à jour et supprimer des données.',
		},
		storage: {
			description:
				"Ce module va vous permettre de communiquer avec des buckets de storage et les fichiers à l'intérieur.",
		},
	},
	storage: {
		title: 'On dirait bien que l’on a des fichiers disponibles dans un bucket',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet mollis lectus ut iaculis. In neque ligula, auctor vitae lorem in, venenatis lobortis purus. Ut ac rhoncus ex, ut egestas leo. Mauris nec rutrum magna, sit amet tincidunt justo. Sed pellentesque vitae nibh eget imperdiet. Ut sodales commodo turpis, rutrum porttitor odio porttitor sed. Curabitur et turpis vitae mauris pulvinar consequat non ut ligula. Aenean mi orci, cursus ac libero id, consequat elementum mi. Etiam gravida quam eget tempus maximus. Phasellus et diam congue, accumsan felis eget, egestas arcu. Maecenas cursus sapien id risus faucibus aliquet. Proin eget dictum nulla. Phasellus odio nisi, tempor at lorem sed, commodo gravida tellus.',
		link: 'Il semblerait qu’il manque quelque chose non ?',
		'count#zero': 'Vous avez {count} fichier dans ce bucket',
		'count#one': 'Vous avez {count} fichier dans ce bucket',
		'count#other': 'Vous avez {count} fichiers dans ce bucket',
		upload: {
			title: 'Ajouter au bucket la clé manquante',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet mollis lectus ut iaculis. In neque ligula, auctor vitae lorem in, venenatis lobortis purus. Ut ac rhoncus ex, ut egestas leo. Mauris nec rutrum magna, sit amet tincidunt justo. Sed pellentesque vitae nibh eget imperdiet. Ut sodales commodo turpis, rutrum porttitor odio porttitor sed. Curabitur et turpis vitae mauris pulvinar consequat non ut ligula. Aenean mi orci, cursus ac libero id, consequat elementum mi. Etiam gravida quam eget tempus maximus. Phasellus et diam congue, accumsan felis eget, egestas arcu. Maecenas cursus sapien id risus faucibus aliquet. Proin eget dictum nulla. Phasellus odio nisi, tempor at lorem sed, commodo gravida tellus.',
			button: 'Upload les fichiers',
		},
	},
	users: {
		title: 'Voyons voir qui peut nous aider...',
	},
	login: {
		title: 'Accédez à votre compte',
		connection: 'Connexion',
		noAccount: 'Vous n’avez pas encore de compte ? ',
		signUp: 'Inscrivez-vous',
		googleSignIn: 'Connexion avec Google',
		password: 'Mot de passe',
		email: 'Adresse email',
	},
	home: {
		startButton: "Démarrer l'AppVenture",
		title:
			"Voyage au coeur d'Appwrite :\n Le backend open-source qui challenge Firebase 🧳",
		description:
			"Bienvenue dans l'AppVenture ! 🗺️ \n Elle sera votre carte au trésor, votre boussole et votre compagnon fidèle dans votre quête, vous aidant à déverrouiller les secrets de chaque destination que nous explorerons ! 🧳",
	},
	databases: {
		coordinates: {
			title: "Qu'est ce que l'on retrouve ici...",
			list: {
				title: 'Coordonnées :',
			},
			form: {
				title: 'Vous avez trouvé une nouvelle coordonnée ?',
				submitButton: 'Noter cette coordonnée',
			},
			labels: {
				name: 'Nom',
				latitude: 'Latitude',
				longitude: 'Longitude',
			},
		},
	},
	register: {
		title: 'Créez votre compte',
		signUpButton: 'S’inscrire',
		alreadyHaveAccount: 'Vous avez déjà un compte ? ',
		signIn: 'Connectez vous',
		name: 'Nom',
		email: 'Adresse Email',
	},
	functions: {
		title: 'Notre base de données est attaquée ...',
		description:
			'Notre collection contenant les indices que vous avez récupéré jusque la n’est pas sécurisé ... n’importe quel utilisateur peut accéder aux documents qu’elle contient. Cependant, on a la possibilité d’empecher d‘autre utilisateur que vous même d’y accéder, et on va utiliser une Cloud Function pour arriver à nos fin !',
		addButton: 'Ajouter un élément',
		addButtonLoading: 'Chargement ...',
	},
	validation: {
		content: 'Entrez la bonne réponse dans l’application de solution',
		button: 'Aller sur l’application de solution',
		seeClue: 'Voir l’indice',
		copied: 'Copié !',
		title: {
			functions: 'Le module de fonction est terminé ! 🎉',
			databases: 'Le module de base de données est terminé ! 🎉',
			storage: 'Le module de storage est terminé ! 🎉',
			users: 'Le module users est terminé ! 🎉',
			account: 'Le module account est terminé ! 🎉',
		},
		question: {
			functions: 'Quel est le dernier runtime sorti à ce jour ?',
			databases:
				'Quel base de donnée est utilisé par Appwrite pour stocker vos données ?',
			storage:
				'Quelles sont les méthodes avec lesquelles nous pouvons requêter le storage ?',
			users: 'De quoi a-t-on besoin pour utiliser la Users API',
			account: 'Combien de provider OAuth sont disponible sur Appwrite ?',
		},
		answer: {
			functions: ['Deno', 'PHP', 'Bun'],
			databases: ['PostgreSQL', 'Mongo DB', 'Maria DB'],
			storage: ['SDK, Rest, GraphQL', 'SDK, Rest', 'SDK, GraphQL'],
			users: ['SDK serveur', 'API key', 'SDK serveur et API key'],
			account: ['10', '37', '50'],
		},
		redirect: 'Se rendre aux coordonées',
		endContent:
			'Bravo ! Vous avez réussi à réunir toutes les coordonnées qui nous seront necessaires pour atteindre le trésor, allons-y sans tarder !',
	},
	treasure: {
		title: 'Félicitation ! 🥳',
		content:
			'Vous avez terminé votre AppVenture avec succès ! Vous êtes maintenant prêt à poursuivre votre voyage et à explorer ce qui rend Appwrite si extraordinaire... Le trésor que vous cherchez a toujours été là, depuis le début, sous vos yeux. Il est temps de le découvrir. 🏴‍',
		contentStep1:
			"Faites un pas en arrière et réfléchissez à tout ce que vous avez appris lors de cette AppVenture ! Vous avez découvert Appwrite, un BAAS (Backend as a Service) puissant qui vous permet de gérer l'authentification, le stockage de fichiers, les bases de données et bien plus encore, le tout en un seul endroit ! 🤩",
		contentStep2:
			"Vous avez construit une application qui utilise ces fonctionnalités pour résoudre des énigmes, collecter des indices et atteindre de nouveaux sommets ! 🏔️ Vous avez peut-être trouvé cela impressionnant, mais sachez que ce n'est que le début de ce que vous pouvez accomplir avec Appwrite... 🚀",
		secretIntro:
			"Bravo, vous y êtes... Vous avez exploré les mystères d'Appwrite, résolu des énigmes, maîtrisé ses fonctionnalités pour découvrir le trésor ultime qui fait d'Appwrite ce qu'il est aujourd'hui... \n",
		secret: 'La communauté open source qui soutient ce projet 🫶🏼',
		communityButton: 'Rejoindre la communauté',
		workshopOpinion: 'Donnez votre avis sur le workshop',
	},
} as const;
