const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1159457353029140521')
    .setType('PLAYING')
    .setURL('https://www.twitch.tv/thirstymonster') //Must be a youtube video link 
    .setState('している')
    .setName('ㅤ')
    .setDetails(`Programming 👋⚓ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://discord.com/channels/740833438352932916/1060830136414519336/1180670571281907842') //You can put links in tenor or discord and etc.

    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/731154864360390726.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.

    .addButton('DM', 'https://discord.gg/m1sery')
    .addButton('ONLY FANS', 'https://www.youtube.com/watch?v=2xx_2XNxxfA');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Programming 👋⚓ [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
