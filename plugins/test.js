const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "test",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")

q
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})