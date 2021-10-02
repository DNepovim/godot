export const data = {
	config: {
		navigation: [
			{
				title: "Domů",
				link: "/"
			},
			{
				title: "Insomnia",
				link: "/insomnia"
			},
			{
				title: "Proč?",
				link: "/proc"
			},
			{
				title: "Inso 2021",
				link: "/inso2021"
			},
			{
				title: "Tým",
				link: "/tym"
			},
			{
				title: "Kontakt",
				link: "/kontakt"
			},
		]
	},
	pages: {
		frontPage: {
			blocks: [
				{
					template: "cover",
					fields: {
						title: "Insomnia 2021 bude.",
						subtitle: "Přihlašování spuštěno!",
						claim: "Na tvou přihlášku se těšíme<br>od 4. do 27. ledna 2021.",
						button: {
							label: "Chci na Insomnii!",
							link: "/",
							targetBlank: true
						}
					}
				}
			]
		}
	}
}
