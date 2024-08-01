const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "212708065869";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_49_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1tNlNFVDZBVGFIYzlYdFdZLzV5YkNFNkREVmJ2YTRqSVYzN3ZKY09rU2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzA4MDY1ODY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDN0EzOUZDODFENjMzMTc4RDc0MTBBNUJBOTg4Qzc4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDg5NjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MDgwNjU4NjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgwRTE0QTU3RTY2OTQ5NEFDMDc4MzZGMkFFQjdFRUIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU0ODk2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjcwODA2NTg2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTFFNDNBNTFERjdFNTc3RTA1QzM4RUM1OTI4MzFBMUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQ4OTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzA4MDY1ODY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MTI3MDhCQ0NDOTE3Q0MyQzIxNTdERjFCNjdDRUQwQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDg5NjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNFY2dUpKY2NUZXk3WDM0VUpuMDh1UVwiLFxuICBcInBob25lSWRcIjogXCIwNmVjOWQxNS03ZGFkLTQ4ZTMtYmZkNi1mNWQ0MzdkOTJhMjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNCxcbiAgICAgIDEzOSxcbiAgICAgIDEyNyxcbiAgICAgIDc1LFxuICAgICAgMTYxLFxuICAgICAgMixcbiAgICAgIDE5MSxcbiAgICAgIDEwNCxcbiAgICAgIDE2NyxcbiAgICAgIDE2LFxuICAgICAgNDgsXG4gICAgICAxOCxcbiAgICAgIDIxNyxcbiAgICAgIDIyMixcbiAgICAgIDIxMSxcbiAgICAgIDE3NCxcbiAgICAgIDIyNyxcbiAgICAgIDE1NCxcbiAgICAgIDE2MSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE5MixcbiAgICAgIDI0NSxcbiAgICAgIDE5NSxcbiAgICAgIDIyMyxcbiAgICAgIDc0LFxuICAgICAgMTYyLFxuICAgICAgMTczLFxuICAgICAgMjcsXG4gICAgICAxMjIsXG4gICAgICAxMjcsXG4gICAgICAzNCxcbiAgICAgIDEzNCxcbiAgICAgIDE0OSxcbiAgICAgIDk5LFxuICAgICAgNCxcbiAgICAgIDM1LFxuICAgICAgNTYsXG4gICAgICAxMTEsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMThCV0JYNzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjcwODA2NTg2OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibm91cmlvZmZpY2lhbFwiLFxuICAgIFwibGlkXCI6IFwiMTczNzAxODE1MzQ5MjYxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmZhZzZFR0VOdUZzTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaSklNZnZIRnpBTEdRdGcrQW1yQjB0Z2lsU1dFVEtuMldEMkJqcTZxWnl3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImtCMlQ2c2dObU0wYi93dlhRRU9aOUNnUFViZ2VKdWFkL3RrV2EzQzE4WHh2dzYvbmVvT3hrZTdpTkVzODJZd0J5OHIxQ2pSVWYyRVRSa09ZMHJsb0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJLeTRtYklZSUpRdGQvN0czMFlVWE1vRWovb3ZUemFoT24rSWpZdXVZUFVZd01CMndNZlpYY1ZhUlRRcFRBaGUrdENUUGlCdHlseGNxSW9mbDE2cUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIxMjcwODA2NTg2OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1NDg5NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCazBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJrMC5qc29uIjogIntcImtleURhdGFcIjpcIlE1dll5SnYxaFUvckNFRmVaMjBkMG8weWQ0OHFHUmxqOEpFakNqa0pzYzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3OTg3OTUxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTQ4OTYxMDU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
