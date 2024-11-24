//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/errrbodyhatescylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/yeu6a8.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/tovha7.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ04ycFJTTEFQeDQrdDZjZzNydjkwdFdVc1J4OUpJOVVpc3d6aFloM3oxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXRLVzJ2eHo5Ry9LSENvdElkNEUwdUVjV3llTTdxWHhwQlc1Tm8vTWFBZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHpZWTFtaXN4NEcwdkxtSHVYc3B3eFgzb0tLblJJeVFmVUNySFdvYm4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOM0x3dFF5V1RiVm53V01aK3hnR1c1ZWZpWWgyeitBR1Z5TUFqWUlZSXg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EQnFRdk1RUVFxb1pqZ1c5ZkUxUUpRZndJOXNHWmdEd05mckpZYkdsWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5MRld3OU80ZXptUmFWQnUwZ1Q1YkFFVy8wOHJGem1vZEN4Ymt5OHcyRVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdJaGpYMlZ3L3A0NGx3SGpjUWRlSkIzQlg2SWtMdVkwVjVUYmp2bkVFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHF5Y0ZFaWNQSzhoTTdRbGhUb1EveUJ5MEY1cysyYWRNcXAwTVNXR0gxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlNeklDeU9OQmJQYU02WGZNZ0lEVlgwT0E5Q2pJSEJaTkt0SXA4MC9yanAxMkRrYjFZKzE5U0tDNWNQUzNFNkkvQ2tPbVZ2RkFTZ1FUam51S1ZhdkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJBdDdNY2k0R1NMZ1ZiY1poYzFOMytZcEZtNUVUUzM1TmNhZ0ZIaWlRa2tJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBU2p6SURqUFNTeWZ3eEltQlA4aFpRIiwicGhvbmVJZCI6IjA5YzFjMjkxLTA0NDgtNGNiZC1hNDdhLWYwNDQwNTQyZGQyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiYW51ZGl4QjcvMUxYbnYremNvQXQzZzZ6c2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUFkbmpBZ1lSYU0vN24wRXJlZGdmeHpFRHp3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk3Q1FSQUdZIiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3MjoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLlsIrjgajjgoLjgavjgq/jgr3jgpLoqIDjgYYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xTdndvWUZFTk8ranJvR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im5GckFrUEJZdVlFZVdvb0w4OUxJMEh3WS9nZm42WmxEWDkxRDd5TzZBV3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5wK3pYaEI3dGhtS05VUEZzQ0lZMXN1Q1Z3OHFkYzVMc01NVW85dHVSQi9WOTgvdEtpOFh4S0xVNVZwaEdRY3ZJTmJXdHRla3J4YmdqcFNaNDNLRkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXN0tSbXlwaXkvbEZWdXBNWGRaRXdZN2kweHgrdXp2Ti82TUVUa2hVZktEOFExeGlUM0lDZkQ1S3ltRjBtQnVsVWZVdkxFRkFlU2NaRDJndkJzMVpDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjE1MDQ1NTcyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp4YXdKRHdXTG1CSGxxS0MvUFN5TkI4R1A0SDUrbVpRMS9kUSs4anVnRnIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI0ODQ5NjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHBxIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸❄️™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "Sir Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
