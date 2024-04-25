const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://media.discordapp.net/attachments/1221090089514434620/1221097207080423585/nice-hamatora.gif?ex=662bb465&is=662a62e5&hm=098cc9c03f081597aeb91d5708163f418d2b2753a6b9c9cad3c92285e4dc4402&=",
  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['The Story of Us (Taylor Swift)'];

const randomTexts = [
  '🖤🤍Come Talk to me🖤🤍'


];

const randomtext3 = [
  
  '𝓣𝓱𝓲𝓼 𝓲𝓼 𝓵𝓸𝓸𝓴𝓲𝓷𝓰',
  '𝓵𝓲𝓴𝓮 𝓪 𝓬𝓸𝓷𝓽𝓮𝓼𝓽',
  '𝓞𝓯 𝔀𝓱𝓸 𝓬𝓪𝓷 𝓪𝓬𝓽',
  '𝓵𝓲𝓴𝓮 𝓽𝓱𝓮𝔂 𝓬𝓪𝓻𝓮 𝓵𝓮𝓼𝓼',
  '𝓑𝓾𝓽 𝓘 𝓵𝓲𝓴𝓮𝓭 𝓲𝓽 𝓫𝓮𝓽𝓽𝓮𝓻',
  '𝔀𝓱𝓮𝓷 𝔂𝓸𝓾 𝔀𝓮𝓻𝓮 𝓸𝓷 𝓶𝔂 𝓼𝓲𝓭𝓮',
  '𝓣𝓱𝓮 𝓫𝓪𝓽𝓽𝓵𝓮 𝓼 𝓲𝓷 𝔂𝓸𝓾𝓻 𝓱𝓪𝓷𝓭𝓼 𝓷𝓸𝔀',
  '𝓑𝓾𝓽 𝓘 𝔀𝓸𝓾𝓵𝓭 𝓵𝓪𝔂 𝓶𝔂 𝓪𝓻𝓶𝓸𝓻 𝓭𝓸𝔀𝓷',
  '𝓘𝓯 𝔂𝓸𝓾 𝓼𝓪𝔂 𝔂𝓸𝓾 𝓭',
  '𝓻𝓪𝓽𝓱𝓮𝓻 𝓵𝓸𝓿𝓮 𝓽𝓱𝓪𝓷 𝓯𝓲𝓰𝓱𝓽',
  '𝓢𝓸 𝓶𝓪𝓷𝔂 𝓽𝓱𝓲𝓷𝓰𝓼',
  '𝓽𝓱𝓪𝓽 𝔂𝓸𝓾 𝔀𝓲𝓼𝓱 𝓘 𝓴𝓷𝓮𝔀',
  '𝓑𝓾𝓽 𝓽𝓱𝓮 𝓼𝓽𝓸𝓻𝔂 𝓸𝓯 𝓾𝓼',
  '𝓶𝓲𝓰𝓱𝓽 𝓫𝓮 𝓮𝓷𝓭𝓲𝓷𝓰 𝓼𝓸𝓸𝓷',


];

const randomtext4 = [
  '★☆★☆★☆★', '☆★☆★☆★☆'


];

const randomtext5 = [];

const randomLinks = [
  "https://matias.me/nsfw/",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();

  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName(`CRAMMING`)
      .setURL('https://matias.me/nsfw/')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1159457353029140521")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
