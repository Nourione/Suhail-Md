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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_28_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUaWZxaTlRUlpTbEZ2MHFuem1LSTZDUG9XdXNFbXN5WWxnbUtBMnp2YTRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjcwODA2NTg2OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTg5RDYzQzUzQUNERUEyQkI0OTU3MEM4RDZBRUFEN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzMzNjc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzA4MDY1ODY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFMUY5MjI4NDczMTEyMTk1RUE2RUM0NURFN0Y5MTI5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3MzM2NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTlVDZC1SYktRWmFVUlgxNjA2cEh1UVwiLFxuICBcInBob25lSWRcIjogXCIwNDZlYzA2MS1mMmQzLTQ3YjktOTRjZi0xOWE4MjMyNjM4ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgOTgsXG4gICAgICAxMDIsXG4gICAgICAxODcsXG4gICAgICA2LFxuICAgICAgMCxcbiAgICAgIDEyOCxcbiAgICAgIDEzNyxcbiAgICAgIDEyNCxcbiAgICAgIDI1MCxcbiAgICAgIDE3MCxcbiAgICAgIDExOSxcbiAgICAgIDIwLFxuICAgICAgMjI1LFxuICAgICAgMjIyLFxuICAgICAgMTY4LFxuICAgICAgMjA2LFxuICAgICAgMTUwLFxuICAgICAgMjIwLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgNzAsXG4gICAgICA0MyxcbiAgICAgIDI0NSxcbiAgICAgIDI5LFxuICAgICAgOTYsXG4gICAgICAxMTQsXG4gICAgICAxMDcsXG4gICAgICAyNyxcbiAgICAgIDk2LFxuICAgICAgNCxcbiAgICAgIDE2OSxcbiAgICAgIDE4OCxcbiAgICAgIDY3LFxuICAgICAgMzUsXG4gICAgICAxMjQsXG4gICAgICAxOTQsXG4gICAgICAxODUsXG4gICAgICAxOTIsXG4gICAgICAxMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQk1aQjFZTk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjcwODA2NTg2OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVElTU0VSIFNVUFBPUlRcIixcbiAgICBcImxpZFwiOiBcIjE3MzcwMTgxNTM0OTI2MToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piSWdYd1E2WTNOc2dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwickJnMDNtei8zbVpkZ3lhKzJYTGVUK2p0aEdvNEd2eHNkRGMxdUk5Q3NGYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0MnM2bVdNUU9vQlVWanRYWHVkRjZpdzlXOXl4TnNPcHFjQnBIeFhpa0RyYVlYMEhSUlRrOVlmbGZwUkhZMkxsZ1FPaDVXWTVYZnN4Z2Fhb1FVUGpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoUDAvOFVlT3E3ZW90dWFiVlpLTUp4V1Rha0ZLdW12TmpwZnpJNjdGN1VUNFh0a1BUOGwvd2szdDV3Q3h0aGxqMW1ESHIvbkQ5NEM3NkVGQnZkYm1pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3MDgwNjU4Njk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY3MzM2NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPeUNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU95Qy5qc29uIjogIntcImtleURhdGFcIjpcInl3alBNUjgwZGR5TGJQb1g3ZSsxRG5pcnBFWkRiS2JpeDVVbUdveHdZSzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjYwMDcyNDcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY3MzM2Nzc5NjJcIn0iCn0="  // PUT your SESSION_ID 


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
