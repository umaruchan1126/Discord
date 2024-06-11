const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1221090089514434620/1221097207080423585/nice-hamatora.gif?ex=6669aae5&is=66685965&hm=c12802442aa7ead3138a337bd02f813e916745dce60da0ad949e2dc7f28c1a3e&",
  
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/emojis/966116896405606420.gif?size=96&quality=lossless",
  
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['May I Ask (Luke Chiang)'];

const randomTexts = [
  '🖤🤍Come Talk to me🖤🤍'


];

const randomtext3 = [
  
  '𝓜𝓪𝔂 𝓘 𝓪𝓼𝓴 𝔂𝓸𝓾 𝓱𝓸𝔀 𝔂𝓸𝓾𝓿𝓮 𝓫𝓮𝓮𝓷',
  '𝓦𝓸𝓾𝓵𝓭 𝓘 𝓱𝓪𝓿𝓮 𝓽𝓱𝓮 𝔀𝓸𝓻𝓭𝓼 𝓽𝓸 𝓼𝓪𝔂',
  '𝓓𝓸𝓷𝓽 𝔂𝓸𝓾 𝓴𝓷𝓸𝔀',
  '𝓨𝓸𝓾 𝓶𝓪𝓴𝓮 𝓶𝓮 𝓷𝓮𝓻𝓿𝓸𝓾𝓼 𝓼𝓽𝓲𝓵𝓵',
  '𝓨𝓸𝓾 𝓹𝓾𝓵𝓵 𝓶𝔂 𝓽𝓱𝓸𝓾𝓰𝓱𝓽𝓼 𝓪𝓹𝓪𝓻𝓽',
  '𝓣𝓱𝓸𝓾𝓰𝓱 𝓘𝓿𝓮 𝓫𝓮𝓮𝓷 𝓽𝓻𝔂𝓷𝓪 𝓰𝓮𝓽 𝔂𝓸𝓾 𝓸𝓯𝓯 𝓶𝔂 𝓶𝓲𝓷𝓭',
  '𝓖𝓲𝓿𝓮 𝓶𝓮 𝓽𝓲𝓶𝓮',
  '𝓒𝓪𝓾𝓼𝓮 𝓲𝓽 𝓼𝓽𝓲𝓵𝓵 𝓫𝓾𝓻𝓷𝓼 𝓶𝔂 𝓵𝓲𝓹𝓼',
  '𝓣𝓸 𝓼𝓪𝔂 𝔂𝓸𝓾𝓻 𝓷𝓪𝓶𝓮 𝓸𝓾𝓽 𝓵𝓸𝓾𝓭, 𝓶𝔂 𝓵𝓸𝓿𝓮',
  '𝓘𝓽𝓼 𝓳𝓾𝓼𝓽 𝓶𝔂 𝓷𝓪𝓽𝓾𝓻𝓪𝓵 𝓻𝓮𝓪𝓬𝓽𝓲𝓸𝓷 𝓽𝓸 𝔂𝓸𝓾',
  '𝓜𝓪𝓴𝓲𝓷𝓰 𝓶𝓮 𝓯𝓮𝓮𝓵 𝓵𝓲𝓴𝓮 𝓘𝓿𝓮 𝓵𝓸𝓼𝓽 𝓼𝓪𝓷𝓲𝓽𝔂',
  '𝓐𝓷𝓭 𝓘 𝓬𝓪𝓷𝓽 𝓱𝓮𝓵𝓹 𝓫𝓾𝓽 𝓽𝓸 𝓶𝓲𝓼𝓼 𝔂𝓸𝓾',
  '𝓢𝓸 𝓶𝓪𝓷𝔂 𝓽𝓱𝓲𝓷𝓰𝓼',
  '𝓣𝓱𝓸𝓾𝓰𝓱 𝓘 𝓴𝓷𝓸𝔀 𝓽𝓱𝓮𝓻𝓮𝓼 𝓷𝓮𝓿𝓮𝓻 𝓪 𝓬𝓱𝓪𝓷𝓬𝓮',


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
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);

    const randomButtonText3 = randomtext3[index];
    index = (index + 1) % randomtext3.length;

    
    const pr = new RichPresence()  
      .setName(`CRAMMING`)
      .setURL('https://www.twitch.tv/sachihirokun')
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
