export const data = {
	config: {
		navigation: [
			{
				title: "Domů",
				link: "/",
			},
			{
				title: "Insomnia",
				link: "/insomnia",
			},
			{
				title: "Proč?",
				link: "/proc",
			},
			{
				title: "Inso 2021",
				link: "/inso2021",
			},
			{
				title: "Tým",
				link: "/tym",
			},
			{
				title: "Kontakt",
				link: "/kontakt",
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
							targetBlank: true,
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
						textAlign: "center",
					}
				},
				{
					template: "video",
					fields: {
						video: {
							src: "https://www.youtube.com/embed/9xdZA-f1IfI",
							width: 560,
							height: 315,
						}
					}
				},
				{
					template: "columnsBlock",
					fields: {
						title: "Proč právě Insomnia?",
						columns: [
							{
								title: "Kurz na míru",
								text: "Program je uzpůsoben potřebám jednotlivých účastníků. Budeme po tobě proto chtít hodně informací ještě před začátkem kurzu. Je pro nás důležité, abys to, co se na Insomnii naučíš, mohl/a rovnou vyzkoušet v oddíle. Odměnou ti ale budou smysluplně strávené čtyři „víkendy“.",
								icon: "star",
							},
							{
								title: "Zážitky a sebepoznání",
								text: "Kromě naučných a praktických programů se můžeš těšit i na sebepoznávací a zážitkové akce. Chceme, aby sis odvezl/a i vzpomínky a myšlenky, které v tobě zůstanou ještě dlouho po kurzu.",
								icon: "person",
							},
							{
								title: "Učení praxí",
								text: "Vynasnažíme se vše dělat co nejvíc prakticky!  Na nějaké memorování nepotřebných formalit nás neužije. Chceme jednotlivé čekatelské kompetence co nejvíc provázat s tím, co děláš v oddíle i jinde.",
								icon: "stars",
							},
							{
								title: "Víkendový, přesto intenzivní",
								text: "Insomnia má v roce 2021 4 víkendy (z toho jeden prodloužený) a několik online workshopů.  Společně strávíme okolo patnácti dní, to není zrovna málo. Když chce člověk vzdělání, zážitky a sebepoznání, musí tomu věnovat nějaký čas.",
								icon: "stars",
							},
							{
								title: "Chceme výstupy",
								text: "Proč jsou část kurzu na jaře a část na podzim?  Chceme totiž znát výstupy toho, co jsi v oddíle vyzkoušel/a, ať už to bude jednoduchá hra nebo naplánování celé víkendovky. Chceme vědět, jak se ti to povedlo, být ti při ruce, když budeš potřebovat radu a poskytnout ti kvalitní zpětnou vazbu.",
								icon: "mark",
							},
							{
								title: "Bude to výzva",
								text: "Už tě možná napadlo, že to vše asi nebude jednoduché. Ale není se čeho obávat, za zády ti bude stát tým ochotných instruktorů, kteří udělají vše pro to, abys kurz úspěšně dokončil/a.",
								icon: "moon",
							},
						]
					}
				},
				{
					template: "gallery",
					fields: {
						images: [
							"/images/image_1.png",
							"/images/image_2.png",
							"/images/image_3.png",
							"/images/image_4.png",
							"/images/image_5.png",
							"/images/image_6.png",
						]
					}
				},
				{
					template: "quotation",
					fields: {
						text: "Insomnie (nespavost) je porucha spánku, při níž jedinec nemůže usnout nebo se v spánku často probouzí",
						source: "Wikipedia",
						sourceUrl: "https://cs.wikipedia.org/wiki/Insomnie",
					}
				}
			]
		}
	}
}
