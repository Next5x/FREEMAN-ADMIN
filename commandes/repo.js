const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "repo", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
          *𝗙𝗥𝗘𝗘𝗠𝗔𝗡 𝗠𝗗 BOT INFO* 
❒───────────────────❒

*GITHUB LINK*
>https://github.com/Next5x/FREEMAN-ADMIN
*CONTACT OWNER*
> https://wa.me/255756469954 𝗼𝗿 
> https://wa.me/255784766591
*WHATSAPP GROUP*
>https://chat.whatsapp.com/BgNXVP0zSl8KqUrLFfdJMP
⁠
╭───────────────────❒
 │❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
 │❒⁠⁠⁠⁠ *DEV1* : *𝗙𝗥𝗘𝗘𝗠𝗔𝗡 𝗠𝗗*
 │❒⁠⁠⁠⁠ *DEV2* : *𝗧𝗜𝗠𝗡𝗔𝗦𝗔 𝗧𝗘𝗖𝗛*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
         *POWERED BY 𝗙𝗥𝗘𝗘𝗠𝗔𝗡  𝗠𝗗*

❒───────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
