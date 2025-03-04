const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=heFknCRJ#n9wepUcXejoI7AIyWOVei8Lyfjq4APEFWl_GNaOxDjg' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94770377817' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌false': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://dbmasteruser:6f%25pG%3C9P,)%yGopWFh%7C}%2An%23,Z%25Geq(,r6@ls-f8f13eaa01e8449cf926550c14e4a1740b175578.czw8mu4c671v.us-east-1.rds.amazonaws.com:5432/blacksavi' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'nonbutton' : process.env.MODE,
STATUS_REPLY_MESSAGE: 'false',    
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? 'false' : process.env.DELETEMSGSENDTO        
};
