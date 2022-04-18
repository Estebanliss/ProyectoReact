const products = [
    {
      id: 1,
      name: "Spectacular Spider-Man Facsimile Edition (2022) #1",
      stock: 16,
      cost: 3.99,
      description: "By the mid-1970s, Spidey fans could thrill to their favorite hero’s escapades in AMAZING SPIDER-MAN, his high-octane encounters with other super-types in MARVEL TEAM-UP, his all-ages adventures in SPIDEY SUPER STORIES and reprints of classic stories in MARVEL TALES – and still it wasn’t enough! Such was the clamor that a second solo title debuted with a focus on the man beneath the mask: the always popular Peter Parker! But fear not, there’s plenty of costumed action in this frantic first issue – and when the deadly Tarantula strikes at Peter’s university, it’s Spidey who feels the sting! Will the Tarantula claim the mayor’s life, or can our wall-crawling Web-Head save the day in suitably spectacular fashion? It’s one of the all-time great Marvel comic books, boldly re-presented in its original form, ads and all! Reprinting SPECTACULAR SPIDER-MAN (1976) #1.",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/2/90/62432e610ac07/clean.jpg"
      ],
      sales: 10.000,
      categoryId: "comic",
      Rating: "Rated T",
    },
    {
      id: 2,
      name: "Deadpool: Bad Blood (2022) #1",
      stock: 23,
      cost: 3.99,
      description: "Deadpool’s smash-hit, first-ever original graphic novel – now serialized in comics form! Wade Wilson has been shooting, stabbing and otherwise annoying people for a long time. He’s made a lot of enemies. But one he just can’t quite place is the brutal Thumper, who keeps showing up out of the blue to pound him into jelly. What is Deadpool’s past connection to this beefy face masher? Wade has as much of a clue as you do! So he decides to call in some help from an old friend: Domino! Superstar co-creator of the Merc with a Mouth, Rob Liefeld, tells his greatest Deadpool tale yet!",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/f/03/62432e8e49266/clean.jpg"
      ],
      sales: 6.300,
      categoryId: "comic",
      Rating: "Parental Advisory",
    },
    {
      id: 3,
      name: "Amazing Spider-Man Facsimile Edition (2022) #238",
      stock: 122,
      cost: 3.99,
      description: "GWEN STACY: SPIDER-WOMAN! In one universe, it wasn't Peter Parker bitten by the radioactive Spider, but Gwen Stacy! She's smart, charming and can lift a car-- Just don't tell her Police Chief father! How is she involved in Spider-Verse? Seeds of AMAZING SPIDER-MAN #9 are planted here!",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/9/00/62432ea15bdc9/clean.jpg"
      ],
      sales: 3.122,
      categoryId: "comic",
      Rating: "Rated T",
    },
    {
      id: 4,
      name: "Captain Marvel Annual (2022) #1",
      stock: 232,
      cost: 3.99,
      description: "Captain Marvel…behind bars?! Carol has gotten herself into an intergalactic scale of trouble with the K’rasky military and now she’s locked up in their city-like prison…with the Starjammers. Will they be able to blast their way out? Or will they be lost to the authoritarian labyrinth of K’rasky law?",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/9/10/62432e9acd0a8/clean.jpg"
      ],
      sales: 1.122,
      categoryId: "comic",
      Rating: "Rated T+",
    },
    {
      id: 5,
      name: "The Thing (2021) #6",
      stock: 232,
      cost: 3.99,
      description: "MARVEL UNIVERSE GOES OUT WITH A BANG! It all comes down to this! The secret power behind Mot is revealed at last – but with it comes a very personal threat to Ben Grimm! Can the Thing battle his way past the one foe that waits for all of us and snatch victory from the jaws of defeat? And in order to do so, will it mean working hand-in-glove with Doctor Doom?",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/3/f0/62432e4f2879d/clean.jpg"
      ],
      sales: 1.122,
      categoryId: "comic",
      Rating: "Rated T+",
    },
    {
      id: 6,
      name: "Marvel's Midnight Suns | Gameplay Reveal",
      stock: 232,
      cost: 10.99,
      description: "Deep dive into the gameplay experience of ‘Marvel’s Midnight Suns’ - an epic tactical RPG set in the darker side of the Marvel Universe.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/midnightsons_lob_crd_02.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 7,
      name: "Welcome to Knowhere | Marvel's Guardians of the Galaxy",
      stock: 232,
      cost: 10.99,
      description: "Oh, flark! There’s even more music from Marvel’s Guardians of the Galaxy?! Turn the volume to eleven and get your galactic grove on with Marvel’s Guardians of the Galaxy: Welcome to Knowhere EP Original Video Game Soundtrack, available to stream.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsguardiansofthegalaxy_lob_crd_02.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 8,
      name: "An Exclusive Look At MARVEL Future Revolution",
      stock: 232,
      cost: 10.99,
      description: "A new future begins! We're giving you an exclusive look at the upcoming MARVEL Future Revolution, our first open world action RPG on mobile, now! Pre-register here: https://netmarble.sng.link/D80n1/5teu ",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/futurerevolution_lob_crd_01.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 9,
      name: "Marvel's Avengers: The MODOK Threat Trailer",
      stock: 232,
      cost: 10.99,
      description: "People around the world have turned their backs on the Avengers. Ms. Marvel must reassemble her idols while facing AIM's leader, George Tarleton, who has his own vision for the future.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelsavengers_lob_crd_01_0.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 10,
      name: "Marvel's Spider-Man: Miles Morales | Launch Trailer",
      stock: 232,
      cost: 10.99,
      description: "The latest adventure in the Spider-Man universe will build on and expand ‘Marvel’s Spider-Man’ through an all-new story. Players will experience the rise of Miles Morales as he masters new powers to become his own Spider-Man.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/msmmm_lob_crd_02_0.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 11,
      name: "Marvel Contest of Champions",
      stock: 232,
      cost: 10.99,
      description: "Iron Man vs. Captain America! Hulk vs. Wolverine! Drax vs. Deadpool! The greatest battles in Marvel history are in your hands! The greedy Elder of the Universe known as The Collector has summoned you to a brawl of epic proportions against a line-up of vile villains including Thanos, Kang the Conqueror, and many more! Experience the ultimate free-to-play fighting game on your mobile device… Contest of Champions! Who's on your team?",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvelcontestofchapions_lob_crd_01_0.jpg"
      ],
      sales: 1.122,
      categoryId: "game",
      Rating: "Rated T+",
    },
    {
      id: 12,
      name: "Secret Wars (2015) #2",
      stock: 232,
      cost: 10.99,
      description: "When the Marvel Universe is gone, all that remains is Battleworld! Learn the secrets of this brave new realm in this special oversized issue!",
      image: [
        "https://i.annihil.us/u/prod/marvel/i/mg/9/40/5cb737237a2de/clean.jpg"
      ],
      sales: 1.122,
      categoryId: "100",
      Rating: "Rated T+",
    },
    {
      id: 13,
      name: "Doctor Strange in the Multiverse of Madness",
      stock: 232,
      cost: 10.99,
      description: "Doctor Strange in the Multiverse of Madness —a thrilling ride through the Multiverse with Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. Doctor Strange in the Multiverse of Madness opens in U.S. theaters on May 6, 2022.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
      ],
      sales: 1.122,
      categoryId: "movie",
      Rating: "Rated T+",
    },
    {
      id: 14,
      name: "Spider-Man: No Way Home",
      stock: 232,
      cost: 10.99,
      description: "https://www.youtube.com/watch?v=ZYzbalQ6Lg8",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg"
      ],
      sales: 1.122,
      categoryId: "movie",
      Rating: "Rated T+",
    },
    {
      id: 15,
      name: "Eternals",
      stock: 232,
      cost: 10.99,
      description: "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of the shadows to reunite against mankind's most ancient enemy, the Deviants.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg"
      ],
      sales: 1.122,
      categoryId: "movie",
      Rating: "Rated T+",
    },
    {
      id: 16,
      name: "Shang-Chi and The Legend of The Ten Rings",
      stock: 232,
      cost: 10.99,
      description: "Marvel Studios' Shang-Chi and The Legend of The Ten Rings stars Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu, Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng.",
      image: [
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg"
      ],
      sales: 1.122,
      categoryId: "movie",
      Rating: "Rated T+",
    },
    
  ];

  module.exports = {
    products,
  }