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
          template: "columns",
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
        },
        {
          template: "columns",
          fields: {
            title: "Insomnia 2021",
            columns: [
              {
                title: "Data a místa",
                text: "20. 3. 2021 – online setkání<br>7.–9. 5. 2021 – putovní víkend <br>4.–6. 6. 2021 – Roztoky u Prahy<br>27.–31. 8. 2021 – Hostinné<br>1.–3. 10 2021 – Vinice v Pardubicích<br><br>+ 3 online semináře mezi březnovým<br>a květnovým setkáním",
                icon: "mark",
              },
              {
                title: "Cena a podmínky",
                text: "Cena kurzu: 2000 Kč<br><br>Podmínky účasti: 16+, roční zkušenost s vedením družiny či podílení se na vedení oddílu.<br><br>Podmínky absolvence: účast na všech částech kurzu a splnění čekatelských kompetencí",
                icon: "person",
              },
              {
                title: "Přihláška",
                text: "Přihlásit se můžeš přímo tady.<br>Přihlašování bude probíhat <a href='#'>tady</a> od 4. do 27. ledna 2021.<br> Do 7. února ti přijdou informace o přijetí či nepřijetí.<br><br> Při výběru budeme zohledňovat tvou motivaci k účasti na Insomnii, potřeby oddílů, budeme se snažit o genderově vyvážený kurz a uvítáme spíše jednotlivce, než skupiny čekatelů z jednoho oddílu.",
                icon: "stars",
              },
            ]
          }
        },
        {
          template: "persons",
          fields: {
            title: "Instruktorský tým, který se na vás těší",
            subtitle: "Insomnia tým je složen z lidí, kteří jsou stále aktivní v rámci různých jednotek Junáka – českého skauta. Najdeš zde vedoucí oddílu či střediska, tak i ty zastávající funkce ve vyšších organizačních složkách. Snažíme se spojovat naší praxi se znalostmi získanými v rámci instruktorského vzdělávání a připravit tak účastníkům program, který bude pro jejich působení v oddíle co nejužitečnější.",
            persons: [
              {
                nick: "Matyáš",
                name: "Matyáš Škvor",
                text: "O vybavení a chození do přírody v jakémkoliv ročním období bych toho chtěl předat víc, než je asi kdo ochoten přijmout. Především se ale potkáme u témat spjatých s vedením a plánováním.<br><br><strong>Co mi v noci nedá spát?</strong><br>Každou chvíli něco jiného – šití vlastního vybavení, plánování dlouhých výletů, FPV drony, mlžné komory, hydroponie, 3D tisk, CNC, YouTube rabbit hole... a především Insomnia, že.",
                image: "/images/person_matyas.png",
              },
              {
                nick: "Marťa",
                name: "Martina Formánková",
                text: "Baví mě komunikace a organizace. Mluvit, poslouchat, přemýšlet, improvizovat, rozvíjet se dialogem. Rozvíjet na kurzu se společně snad budeme nad hodnotami či plánováním, případně i čímkoliv dalším. <br><br><strong>Co mi v noci nedá spát?</strong> Naštěstí poslední dobou máloco. Obvykle ale nějaký ten plán na výlet, cestu, pouť, které potřebuji mít promyšlené a hlavně si je užít i dopředu. Ačkoli v sounosti to u této fáze často bohužel i zůstává.",
                image: "/images/person_marta.png",
              },
              {
                nick: "Delfín",
                name: "Anna Bláhová",
                text: "Co umím a chci předat? V životě se věnuji práci s dětmi, ale na kurzu je takových lidí až moc. Na kurzu se podílím na plánování, hospodaření a taky nevzdělávacích programech, kterých se snažíme na kurz dostat co nejvíc.<br><br><strong>Co mi v noci nedá spát?</strong> Stres ze všeho možného – že zaspím, že nemám dárky k Vánocům pro rodinu, že nejsem nachystaná do práce, blížící se skautské kurzy…",
                image: "/images/person_delfin.png",
              },
              {
                nick: "DaVinci",
                name: "Petr Vinš",
                text: "Setkáme se ponejvíc u témat, která se týkají působení na děti, pobytu s nimi venku, a práce vedoucího na sobě samém. Rád bych předal především: Jak na dětskou skupinu mluvit; co když udělají děti průšvih; jaký program kdy zabere. Rád dle zájmu prodiskutuji zimní táboření v tee-pee, terénní a noční hry, a to, že se líp učí hrát na kytaru v 16 než v 36 letech;) <br><br><strong>Co mi v noci nedá spát?</strong> Obvykle budící se malé děti, že nějaký úkol v seznamu má po termínu, a nově",
                image: "/images/person_davinci.png",
              },
              {
                nick: "Aňa",
                name: "Anna Čechová",
                text: "Ráda si povídám o věcech větších než člověk (spíš obrazně, i když sloni a hory jsou taky prima), rituálech a duchovních programech v oddíle. <br><br><strong>Co mi v noci nedá spát?</strong>",
                image: "/images/person_ana.png",
              },
              {
                nick: "Sovča",
                name: "Kateřina Vorlická",
                text: "Umím si hrát a v oddíle jsem se pohybovala nejvíc u světlušek.  Nejen jako tlumočnici mě zajímá komunikace a další “soft skills”, ačkoliv mi termín “měkké dovednosti” nepřijde nejšťastnější a lepší nemám.  Na kurzu se nejčastěji se ochomýtám u programů věnovaných seberozvoji, praxi a dětem. <br><br><strong>Co mi v noci nedá spát?</strong> Příležitostně děsivé sny, že mám špatnou přípravu do práce nebo provázím zájezd a vlastně nevím kam... Jinak mám na spaní nadání, takže když jsem unavená, zvládnu usnout v ledasjakých podmínkách. Ovečky nepočítám, spíš dumám nad tím, jak věci a svět fungují, překladatelskými oříšky, výlety ven a za obzor, (ponejvíce) pražskou historií a spoustou dalších věcí.",
                image: "/images/person_sovca.png",
              },
              {
                nick: "Mráva",
                name: "Tomáš Weiss",
                text: "Umím si hrát a v oddíle jsem se pohybovala nejvíc u světlušek. <br><br><strong>Co mi v noci</strong>",
                image: "/images/person_mrava.png",
              },
              {
                nick: "Káťa",
                name: "Kateřina Juráková",
                text: "Umím<br><br><strong>Co mi v noci nedá spát?</strong>",
                image: "/images/person_kata.png",
              },
            ]
          }
        },
        {
          template: "contacts",
          fields: {
            title: "Chceš se nás na něco zeptat?",
            subtitle: "Ať už máš dotaz, chceš s námi vyřešit jakýkoli nápad či problém napiš na <a href='mailto:ckinsomnia@skaut.cz' rel='noreferrer noopener'>ckinsomnia@skaut.cz</a> nebo prostě klikni:",
            contacts: [
              {
                type: "e-mail",
                icon: "",
                url: "ckinsomnia@skaut.cz"
              },
              {
                type: "facebook",
                icon: "",
                url: "https://www.facebook.com/ckinsomnia"
              },
              {
                type: "instagram",
                icon: "",
                url: "https://www.instagram.com/ckinsomnia/"
              },
            ]

          }
        }
      ]
    }
  }
}
