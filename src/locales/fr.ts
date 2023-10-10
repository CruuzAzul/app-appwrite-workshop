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
		startButton: 'Commencer l’aventure',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget mattis\n' +
			'tellus. Proin feugiat, magna at posuere bibendum, urna nisl pulvinar\n' +
			'ipsum, eu eleifend justo sem quis risus. Vestibulum fringilla varius\n' +
			'sagittis.',
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
				picture: 'Photo',
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
		title: {
			functions: 'Le module de fonction est terminé ! 🎉',
			databases: 'Le module de base de données est terminé ! 🎉',
			storage: 'Le module de storage est terminé ! 🎉',
			users: 'Le module users est terminé ! 🎉',
			account: 'Le module account est terminé ! 🎉',
		},
	},
} as const;
