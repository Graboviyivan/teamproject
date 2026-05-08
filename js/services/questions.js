const questionsData = {
  easy: [
    {
      question: "Як називається серія ігор, де можна грати за гангстерів і красти машини?",
      imgquestion: "https://images.ctfassets.net/wn7ipiv9ue5v/3yVDlCOrJnXMrb0yS4ea0y/0fa10a1920b6c6ddaa37b64e95d05cb0/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg",
      answers: ["Red Dead Redemption", "Grand Theft Auto", "Manhunt", "Max Payne"],
      correct: 1,
    },
    {
      question: "У якій GTA вперше з’явився мультиплеєр?",
      imgquestion: "https://play-lh.googleusercontent.com/UMbELQfIJCw7HMl3xT9ypYNczwH_njQJM1Z0B7EuTURnG0pbVq6sxy6NBAxL-NVMg8o=w526-h296-rw",
      answers: ["Gta3", "Gta4", "Gta2", "Gta5"],
      correct: 3,
    },
    {
      question: "Яке ім’я у головного героя Red Dead Redemption 2?",
      imgquestion: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
      answers: ["Томмі Версетті", "Карл Джонсон", "Артур Морган", "Джиммі Хопкінс"],
      correct: 2,
    },
    {
      question: "Яка тварина – символ гри Red Dead Redemption?",
      imgquestion: "https://www.eurofest.org.ua/wp-content/uploads/2026/03/skilky-hlav-u-rdr2-povnyi-hid-po-siuzhetu-fd29.webp",
      answers: ["Мавпа", "Кінь", "Гієна", "Кіт"],
      correct: 1,
    },
  ],
  medium: [
    {
      question: "Як називається вигаданий напій у всесвіті GTA, що пародіює Coca-Cola?",
      imgquestion: "https://static.wikia.nocookie.net/gta/images/c/ca/CJandBigSmoke-GTASA-JustBusinessMission.jpg/revision/latest/smart/width/386/height/259?cb=20230206190534&path-prefix=ru",
      answers: [
        "Biola",
        "Sprunk",
        "Pepsi",
        "Sprite",
      ],
      correct: 1,
    },
    {
      question: "У Red Dead Redemption 2 як називається банда, в якій перебуває Артур Морган?",
      imgquestion: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc4/rdr2-switch-2-port-alive.jpg",
      answers: [
        "Банда Ван дер Лінде",
        "Банда О'Дрісколів",
        "Банда Бронте",
        "Брати Лемойн",
      ],
      correct: 0,
    },
    {
      question: "Яка радіостанція в GTA: Vice City грає музику 80-х?",
      imgquestion: "https://imag.malavida.com/mvimgbig/download-fs/gta-vice-city-11647-1.jpg",
      answers: [
        "West Coast Classics",
        "Radio Los Santos",
        "The Lowdown",
        "Flash FM",
      ],
      correct: 3,
    },
    {
      question: "У якому році вийшла перша GTA?",
      imgquestion: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTk39MFEEX97_GzE3Wu7qEQbX-ZXc6i2D50g&s",
      answers: ["", "", "", ""],
      correct: 1,
    },
  ],
  hard: [
    {
      question: "?",
      imgquestion: "",
      answers: ["", "", "", ""],
      correct: 2,
    },
    {
      question: "?",
      imgquestion: "",
      answers: ["", "", "", ""],
      correct: 1,
    },
    {
      question: "?",
      imgquestion: "",
      answers: ["", "", "", ""],
      correct: 0,
    },
    {
      question: "?",
      imgquestion: "",
      answers: ["", "", "", "Е"],
      correct: 3,
    },
  ],
};
let score = 0;
let time = 10;
let curentQuestion = 0;
let curentQuestionList = [];
let timerId;

