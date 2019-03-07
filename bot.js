const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

const myDiscriminator = ["0001", "0002","0005", "0009"];
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

const password = "901901901901"; //بسورد حسابك
const token = "NTQwNTE1MzU5MjI1MDIwNDE5.D2MmbA.-_EIhrA4qrDxw_IU9b9WApUkxmU"; //توكن حسابك
 //Toxic Codes
bot.login(token); //Toxic Codes

function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password).then((u) => {
      console.log(Date.now(), "Username: " + u.username, "Discriminator: " + u.discriminator);
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch((err) => {
      console.log(Date.now(), "An error occurred. Trying again in sixty (60) seconds.");
      setTimeout(changeDiscriminator, 60 * 1e3);
    });
  } catch(e) {
    console.log(Date.now(), `[${e}] Trying again in 30 seconds.`); //Toxic Codes
    setTimeout(changeDiscriminator, 30 * 1e3);
  } //Toxic Codes
} //Toxic Codes

bot.once("ready", () => {
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`)  //Toxic Codes
      process.exit(); //Toxic Codes
  } //Toxic Codes
}); //Toxic Codes

client.login(process.env.BOT_TOKEN);
