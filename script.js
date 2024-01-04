function randomNumberGenerator(number) {
    return Math.floor(Math.random() * number);
}

const numerologyData = {
    lifePath: [
        "Your life path number shows that a journey with learning and personal growth",
        "Adventurous and adaptation are a big part of your life.",
        "Your path will be full of creativity and self-exploration."
    ],
    destinyNumber: [
        "Your destiny is to find knowledge and to share it with the people needs it.",
        "You are meant to develop harmony to people around you.",
        "Leadership and significant achievement are in your future."
    ],
    soulUrge: [
        "Your soul's desire is to achieve the inner balance and mindfulness.",
        "You are most fulfilled when able to help others",
        "Creative exploration is your soul's most desire."
    ]
};

const asciiArts = [
    `
      111
     11111
      111
      111
    `,
    `
      222
     2   2
      222
       2
     22222
    `,
    `
      333
     33333
       33
       33
    `
  ];

let numerologyReading = [];
let selectedAsciiArt = asciiArts[randomNumberGenerator(asciiArts.length)];

for (let aspect in numerologyData) {
    let optionIdx = randomNumberGenerator(numerologyData[aspect].length);
    numerologyReading.push(numerologyData[aspect][optionIdx]);
}

function formatReading(reading, art) {
    return `🔮 Your Numerology Reading 🔮\n${art}\n${reading.join('\n\n')}`;
  }

console.log(formatReading(numerologyReading, selectedAsciiArt));