export default {
	moduleConfig: {
		account: {
			description:
				'This module is used to handle a users account. You can sign-up, sign-ip and interact with your account.',
			warning: 'This module is mandatory to use the other modules',
		},
		users: {
			description:
				'This module is used to interact with the users service with a backend SDK, mandatory for this service.',
		},
		databases: {
			description:
				'This module will allow you to use the database. You will be able to create, read, update and delete data.',
		},
		storage: {
			description:
				'This module will allow you to communicate with storage buckets and the files inside it.',
		},
	},
	storage: {
		title: 'It looks like we have some file in a bucket',
		linkPreview: 'And if we look at what these files look like?',
		linkUpload: 'Once you have found the key, let’s add it to the bucket!',
		'count#zero': 'You have {count} file in this bucket',
		'count#one': 'You have {count} file in this bucket',
		'count#other': 'You have {count} files in this bucket',
		upload: {
			title: 'Add the missing key to the bucket',
			button: 'Upload files',
		},
	},
	users: {
		title: 'Let’s see who can help us...',
		noData: 'It looks like something’s missing ...',
	},
	login: {
		title: 'Access to your account',
		connection: 'Connection',
		noAccount: 'You don’t have an account yet ? ',
		signUp: 'Sign-up',
		googleSignIn: 'Sign-in with Google',
		password: 'Password',
		email: 'Email address',
	},
	home: {
		startButton: 'Start the AppVenture',
		title:
			'Journey to the heart of Appwrite: the open-source backend that challenges Firebase 🧳',
		description:
			'Welcome to the AppVenture! 🗺️ \n It will be your treasure map, your compass, and your faithful companion on your quest, helping you unlock the secrets of every destination we explore! 🧳',
	},
	databases: {
		coordinates: {
			title: 'What do we have here...',
			list: {
				title: 'Coordinates:',
			},
			form: {
				title: 'You found a new coordinate ?',
				submitButton: 'Add this coordinate',
			},
			labels: {
				name: 'Name',
				latitude: 'Latitude',
				longitude: 'Longitude',
			},
		},
	},
	register: {
		title: 'Create your account',
		signUpButton: 'Sign-up',
		alreadyHaveAccount: 'Already have an account ? ',
		signIn: 'Sign-in',
		name: 'Name',
		email: 'Email address',
	},
	functions: {
		title: 'Destination list',
		description:
			'Once in the clouds, all that’s left is to find the destination you need to reach to discover a new coordinate. However, they are all encrypted, so you’ll have to decrypt it all...',
		addButton: 'Add a destination',
		addButtonLoading: 'Loading ...',
		destination: 'Destination',
		flight: 'Flight',
		noData:
			'Please initialize the database service in your client configuration',
	},
	validation: {
		content: 'Enter the correct answer in the solution application',
		button: 'Go to solution application',
		seeClue: 'See the clue',
		copied: 'Copied !',
		title: {
			functions: 'Functions module is done ! 🎉',
			databases: 'Database module is done ! 🎉',
			storage: 'Storage module is done ! 🎉',
			users: 'Users module is done ! 🎉',
			account: 'Account module is done ! 🎉',
		},
		question: {
			functions: 'What is the latest runtime released to date?',
			databases: 'Which database is used by Appwrite to store your data?',
			storage: 'What are the methods through which we can query the storage?',
			users: 'What do we need to use the Users API?',
			account: 'How many OAuth providers are available on Appwrite?',
		},
		answer: {
			functions: ['Deno', 'PHP', 'Bun'],
			databases: ['PostgreSQL', 'Mongo DB', 'Maria DB'],
			storage: ['SDK, Rest, GraphQL', 'SDK, Rest', 'SDK, GraphQL'],
			users: ['Server SDK', 'API key', 'Server SDK and API key'],
			account: ['10', '37', '50'],
		},
		redirect: 'Go to coordinates',
		endContent:
			'Congratulations! You’ve managed to gather all the coordinates we need to reach the treasure, so let’s get going!',
	},
	treasure: {
		title: 'Congratulations ! 🥳',
		content:
			"You've successfully completed your AppVenture! Now you're ready to continue your journey and explore what makes Appwrite so extraordinary... The treasure you've been looking for has always been there, right in front of you. Now it's time to discover it. 🏴‍",
		contentStep1:
			"Take a step back and reflect on everything you've learned on this AppVenture! You've discovered Appwrite, a powerful BAAS (Backend as a Service) that lets you manage authentication, file storage, databases and much more, all in one place! 🤩",
		contentStep2:
			"You've built an app that uses these features to solve puzzles, collect clues and reach new heights! 🏔️ You may have found this impressive, but know that this is just the beginning of what you can achieve with Appwrite.... 🚀",
		secretIntro:
			"Congratulations, you've done it... You've explored Appwrite's mysteries, solved its riddles, mastered its features to discover the ultimate treasure that makes Appwrite what it is today... \n",
		secret: 'The open source community behind this project 🫶🏼',
		communityButton: 'Join the community',
		workshopOpinion: 'Give your opinion on the workshop',
	},
} as const;
