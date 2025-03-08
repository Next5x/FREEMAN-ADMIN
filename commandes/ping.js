"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Test ping.... \n\n\n 𝘙𝘈𝘏𝘔𝘈𝘕𝘐 𝘔𝘋 𝘐𝘚 𝘈𝘊𝘛𝘐𝘝𝘌 \n\n\n' + "𝐀𝐋𝐖𝐀𝐘𝐒 𝐐𝐀𝐑𝐓";
    let d = '                                                                           𝑯𝒆𝒂𝒍𝒕𝒉 𝒔𝒕𝒂𝒕𝒖𝒔✨';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/ce58cf8c538b1496fda33.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");

