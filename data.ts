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
				},
				{
					template: "richText",
					fields: {
						title: "Čekatelský lesní kurz",
						text: `
						<p>Co ti v noci nedá spát? Strach z vedení, obava z přebírání zodpovědnosti? Množství čekatelských kompetencí, které musíš splnit?</p>
						<p><strong>Na Insomnii ti s tím pomůžeme!</strong></p>
						<p>ČK Insomnia je víkendový čekatelský kurz, který ale rozsahem odpovídá lesním kurzům. I díky tomu se do něj vejde i to,<br> co zrovna tvůj oddíl trápí, večerní hraní na kytaru nebo zážitkové hry. Kurz v příštím roce proběhne koronaviru navzdory <br>– a to podle situace částečně ve fyzickém a částečně v digitálním prostoru.</p>
						<p>Pokud toužíš po kvalitním víkendovém čekatelském kurzu – Insomnia je přímo pro tebe.</p>
						`,
						textAlign: "center"
					}
				},
				{
					template: "video",
					fields: {
						video: {
							src: "https://www.youtube.com/embed/9xdZA-f1IfI",
							width: 560,
							height: 315
						}
					}
				}
			]
		}
	}
}
