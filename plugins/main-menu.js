let handler = async (m, { isPrems, conn }) => {
   m.react('👾')
   let img = 'https://ibb.co/7N8yHZ2q/avatar-contact.jpg'
   let texto = `
🪙 𝐌 𝐔 𝐋 𝐓 𝐈 - 𝐌 𝐄 𝐍 𝐔́ 

      「 *📚 𝘐𝘯𝘧𝘰 📚* 」  
┣━━━━━━━━━━━━━━┫
┃⋗ 👤 *.owner*  
┃⋗ 🌟 *.grupos*  
┃⋗ 📜 *.menu*  
┃⋗ 📖 *.menu2*  
┃⋗ 📚 *.menu3* 
┃⋗ 🖇️ *.menu4* 
┃⋗ 🐶 *.menu5*
┃⋗ 🏓 *.ping*  
┃⋗ ⏳ *.runtime*  
┃⋗ 📢 *.reportar*  
┃⋗ 💡 *.sugerencia*
┗━━━━━━━━━━━━━━┛

「 *🦅 𝘔𝘢𝘴𝘤𝘰𝘵𝘢𝘴 🦅* 」
┣━━━━━━━━━━━━━━┫
┃⋗ 🛒 *.comprar*  
┃⋗ 💲 *.contratar* 
┃⋗ 🍖 *.alimentar*  
┃⋗ 💰 *.costos*  
┃⋗ 👀 *.nombre* 
┃⋗ 🐺 *.mimascota*  
┃⋗ 🐹 *.mascotas*  
┃⋗ 🦅 *.mascota*
┃⋗ 🕳️ *.excavar*
┃⋗ 🐶 *.paseo*
┃⋗ 🥎 *.pelota*
┃⋗ 🚩 *.level*
┃⋗ 🚩 *.levelmax*
┃⋗ 🔥 *.batalla 1*
┃⋗ 🛡️ *.batalla 2*
┃⋗ 🗡️ *.batalla 3*
┃⋗ 💣 *.batalla4*
┃⋗ ⚔️ *.batallainfo* 
┃⋗ 📍 *.infomasc*
┃⋗ 👥 *.viajar*
┃⋗ 🎁 *.masc*
┗━━━━━━━━━━━━━━┛

  「 *🔎 𝘉𝘶𝘴𝘲𝘶𝘦𝘥𝘢𝘴 🔎* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛒 *.mercadolibre*  
┃⋗ 🖼️ *.pinterest <texto>*  
┃⋗ 📷 *.imagen <texto>*  
┃⋗ 📹 *.imag <texto>*  
┃⋗ 🔍 *.ytsearch <búsqueda>*  
┗━━━━━━━━━━━━━━┛  

    「 *👥 𝘎𝘳𝘶𝘱𝘰𝘴 👥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💡 *.ds*  
┃⋗ 🗑️ *.del*   
┃⋗ 🔗 *.link*  
┃⋗ ❌ *.kick @user*  
┃⋗ 🎯 *.ruletaban*  
┃⋗ 👮 *.admins < Texto >*  
┃⋗ 📣 *.todos*  
┃⋗ 🏁 *.emotag*
┃⋗ 🚫 *.banchat*  
┃⋗ ✅ *.unbanchat*  
┃⋗ 🚫 *.mute*  
┃⋗ ✅ *.unmute*  
┃⋗ ⏰ *.horario*  
┃⋗ 🤫 *.hidetag*  
┃⋗ 📜 *.reglas*  
┃⋗ 👻 *.fantasmas*  
┃⋗ 🔄 *.nuevolink*  
┃⋗ 🎁 *.donarsala*  
┃⋗ 🎟️ *.sorteo*  
┃⋗ 📲 *.invite <número>*  
┃⋗ 🛠️ *.group open / close*  
┃⋗ 🔓 *.grupo abrir / cerrar*  
┃⋗ 🖼️ *.setppgc*  
┃⋗ ✏️ *.setname <text>*  
┃⋗ 📝 *.setreglas + Texto*  
┃⋗ 🔓 *.abrirgrupoen minutos*  
┃⋗ 🔒 *.cerrargrupoen minutos*  
┃⋗ 👋 *.setwelcome @user + texto*  
┃⋗ 🗑️ *.delwelcome*
┃⋗ 👋 *.setbye @user + texto* 
┃⋗ 🗑️ *.delbye*
┃⋗ 📊 *.encuesta pregunta|opciones*  
┃⋗ 📈 *.promote @usuario*  
┃⋗ 📉 *.demote @usuario*  
┗━━━━━━━━━━━━━━┛  

   「 *😺 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 😺* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🛡️ *.autoadmin*  
┃⋗ ⛔ *.ban @user*
┃⋗ ✅ *.unban @user* 
┃⋗ ☠️ *.delmascota*
┃⋗ 📢 *.anuncio*
┃⋗ 🎖️ *.darxp [@usuario]*    
┃⋗ 🔑 *.dsowner*  
┃⋗ 🌐 *.join <link>*  
┃⋗ 🔄 *.reiniciar*  
┃⋗ 🚪 *.salir*  
┃⋗ 🔄 *.update*  
┗━━━━━━━━━━━━━━┛  

「 *🎨 𝘓𝘰𝘨𝘰 - 𝘮𝘢𝘬𝘦𝘳 🎨* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ❤️ *.logocorazon <texto>*  
┃⋗ 🎄 *.logochristmas <texto>*  
┃⋗ 👩🏻‍❤️‍👨🏻 *.logopareja <texto>*  
┃⋗ 💥 *.logoglitch <texto>*  
┃⋗ 😔 *.logosad <texto>*  
┃⋗ 🎮 *.logogaming <texto>*  
┃⋗ 🌟 *.logosolitario <texto>*  
┃⋗ 🐉 *.logodragonball <texto>*  
┃⋗ ⚡ *.logoneon <texto>*  
┃⋗ 🐱 *.logogatito <texto>*  
┃⋗ 🎮 *.logochicagamer <texto>*  
┃⋗ 💪 *.logoarmy <texto>*  
┃⋗ 🍥 *.logonaruto <texto>*  
┃⋗ 🚀 *.logofuturista <texto>*  
┃⋗ ☁️ *.logonube <texto>*  
┃⋗ 👼 *.logoangel <texto>*  
┃⋗ 🌌 *.logocielo <texto>*  
┃⋗ 🎨 *.logograffiti3d <texto>*  
┃⋗ 🔲 *.logomatrix <texto>*  
┃⋗ 👻 *.logohorror <texto>*  
┃⋗ 🎭 *.logoalas <texto>*  
┃⋗ 🎮 *.logopubg <texto>*  
┃⋗ ⚔️ *.logoguerrero <texto>*  
┃⋗ 🎮 *.logopubgfem <texto>*  
┃⋗ 🏆 *.logolol <texto>*  
┃⋗ 👾 *.logoamongus <texto>*  
┃⋗ 📖 *.logoportadaplayer <texto>*  
┃⋗ 📝 *.logoportadaff <texto>*  
┃⋗ 🐅 *.logovideotiger <texto>*  
┃⋗ 🎬 *.logovideointro <texto>*  
┃⋗ 🎮 *.logovideogaming <texto>*  
┃⋗ 😿 *.sadcat <texto>*  
┃⋗ 🐦 *.tweet <comentario>*  
┗━━━━━━━━━━━━━━┛  

   「 *📸 𝘐𝘮𝘢́𝘨𝘦𝘯𝘦𝘴 📸* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🐱 *.neko*  
┃⋗ 🖼️ *.pinterest <búsqueda>*  
┃⋗ 💑 *.ppcouple*  
┃⋗ 💕 *.waifu*  
┗━━━━━━━━━━━━━━┛  

   「 *📴 𝘖𝘯 / 𝘖𝘧𝘧 📴* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ ✅ *.enable*  
┃⋗ ❌ *.disable*  
┗━━━━━━━━━━━━━━┛  

  「 *📥 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 📥* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎧 *.play <canción>*
┃⋗ 🎧 *.aud <canción>*
┃⋗ 🎧 *.spotify <canción>*
┃⋗ 📸 *.ig <link>*  
┃⋗ 🎥 *.fb <link>*
┃⋗ 🎧 *.sound <Canción>*  
┃⋗ 🎥 *.tiktok <url tt>*  
┃⋗ 🖼️ *.tiktokimg <url>*  
┃⋗ 🙋 *.tiktokuser <usuario>*          
┗━━━━━━━━━━━━━━┛  

「 *🔧 𝘏𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 🔧* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎙️ *.gtts <texto>*  
┃⋗ 🌦️ *.clima <ciudad/país>*  
┃⋗ 🤥 *.fake <texto/@tag/texto>*
┃⋗ 💻 *.Ia <texto>*  
┃⋗ 🖼️ *.hd*  
┃⋗ 🖼️ *.hd2*  
┃⋗ 📷 *.ibb*  
┃⋗ 🔠 *.morse <encode|decode>*  
┃⋗ 🔍 *.ver*  
┃⋗ 🔄 *.reenviar*  
┃⋗ 🎥 *.togifaud*  
┃⋗ 🎵 *.tomp3*  
┃⋗ 🌐 *.tourl*  
┃⋗ 🎥 *.tovid <sticker>* 
┃⋗ 🎧 *.whatmusic* 
┗━━━━━━━━━━━━━━┛  

   「 *🎲 𝘋𝘪𝘷𝘦𝘳𝘴𝘪𝘰́𝘯 🎲* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🤗 *.abrazar <@usuario>*  
┃⋗ 🐾 *.acariciar @tag*  
┃⋗ ❓ *.acertijo*  
┃⋗ 🎲 *.dado* 
┃⋗ 🎬 *.advpeli*  
┃⋗ 🛌 *.afk <razón>*  
┃⋗ 😍 *.minovia @user*
┃⋗ 😍 *.minovio @user*
┃⋗ 🌈 *.gay <@tag> | <nombre>*  
┃⋗ 🌈 *.lesbiana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajero <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruano <@tag> | <nombre>*  
┃⋗ 🇵🇪 *.peruana <@tag> | <nombre>*  
┃⋗ 🐵 *.pajera <@tag> | <nombre>*  
┃⋗ 😈 *.puto <@tag> | <nombre>*  
┃⋗ 😈 *.puta <@tag> | <nombre>*  
┃⋗ 🤕 *.manco <@tag> | <nombre>*  
┃⋗ 🤕 *.manca <@tag> | <nombre>*  
┃⋗ 🐀 *.rata <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituta <@tag> | <nombre>*  
┃⋗ 🛑 *.prostituto <@tag> | <nombre>*  
┃⋗ 💡 *.consejo*  
┃⋗ 💃 *.dance <@user>*  
┃⋗ 🔍 *.doxear <nombre> | <@tag>*  
┃⋗ 😈 *.follar*  
┃⋗ ❤️ *.formarpareja*  
┃⋗ 🌈 *.gay2*  
┃⋗ 🔞 *.horny*  
┃⋗ 🧠 *.iqtest*  
┃⋗ 💋 *.besar @tag*  
┃⋗ ❤️ *.love <@user>*  
┃⋗ 🥰 *.enamorada @tag*  
┃⋗ 😂 *.meme*  
┃⋗ 💕 *.lov2 @tag | nombre*  
┃⋗ 👿 *.cachuda @tag | nombre*  
┃⋗ ✊🏿 *.negra @tag | nombre*  
┃⋗ 🍼 *.adoptado @tag | nombre*  
┃⋗ 👙 *.sintetas @tag | nombre*  
┃⋗ 🍑 *.sinpoto @tag | nombre*  
┃⋗ 🍆 *.sinpito @tag | nombre*  
┃⋗ 😬 *.feo @tag | nombre*  
┃⋗ 👿 *.cachudo @tag | nombre*  
┃⋗ 😬 *.fea @tag | nombre*  
┃⋗ ✊🏿 *.negro @tag | nombre*  
┃⋗ 🍼 *.adoptada @tag | nombre*  
┃⋗ 🥷 *.nombreninja <texto>*  
┃⋗ 😈 *.penetrar @user*  
┃⋗ 🔮 *.personalidad <nombre>*  
┃⋗ 💌 *.piropo*  
┃⋗ 🎴 *.ppt*  
┃⋗ ❓ *.pregunta*  
┃⋗ 😢 *.pucheros @tag*  
┃⋗ 😂 *.reirse @tag*  
┃⋗ 🎲 *.reto*  
┃⋗ 😭 *.triste @tag*  
┃⋗ 👫 *.ship*  
┃⋗ 🎰 *.slot <apuesta>*  
┃⋗ 😳 *.sonrojarse @tag*  
┃⋗ 🔝 *.top <texto>*  
┃⋗ 🔄 *.turno*  
┃⋗ 🔞 *.violar*  
┃⋗ 🌌 *.zodiac <AAAA MM DD>*  
┃⋗ 🐾 *.pokedex <pokemon>* 
┃⋗ 🎰 *.apostar <cantidad>* 
┗━━━━━━━━━━━━━━┛  

   「 *📌 𝘍𝘳𝘦𝘦 𝘍𝘪𝘳𝘦 📌* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🔥 *.4vs4*  
┃⋗ 🔥 *.6vs6*  
┃⋗ 🔥 *.8vs8*  
┃⋗ 🔥 *.12vs12*  
┃⋗ 🔥 *.16vs16*  
┃⋗ 💣 *.guerra*  
┃⋗ 🔐 *.interna*  
┃⋗ 📜 *.reglasclk*
┃⋗ 📜 *.reglaslideres*  
┃⋗ 📜 *.reglaslideres2*  
┃⋗ ⚔️ *.scrim*  
┃⋗ 🎮 *.menu4*  
┃⋗ 🏝️ *.bermuda*  
┃⋗ 🟦 *.cuadrilatero*  
┃⋗ 🛑 *.hexagonal* 
┗━━━━━━━━━━━━━━┛  

   「 *🔉 𝘈𝘶𝘥𝘪𝘰𝘴 🔉* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 🎵 *.bass <mp3/vn>*  
┃⋗ 🎵 *.blown <mp3/vn>*  
┃⋗ 🎵 *.deep <mp3/vn>*  
┃⋗ 🎵 *.earrape <mp3/vn>*  
┃⋗ 🎵 *.fast <mp3/vn>*  
┃⋗ 🎵 *.fat <mp3/vn>*  
┃⋗ 🎵 *.nightcore <mp3/vn>*  
┃⋗ 🎵 *.reverse <mp3/vn>*  
┃⋗ 🎵 *.robot <mp3/vn>*  
┃⋗ 🎵 *.slow <mp3/vn>*  
┃⋗ 🎵 *.smooth <mp3/vn>*  
┃⋗ 🎵 *.tupai <mp3/vn>*  
┃⋗ 🎵 *.reverb <mp3/vn>*  
┃⋗ 🎵 *.chorus <mp3/vn>*  
┃⋗ 🎵 *.flanger <mp3/vn>*  
┃⋗ 🎵 *.distortion <mp3/vn>*  
┃⋗ 🎵 *.pitch <mp3/vn>*  
┃⋗ 🎵 *.highpass <mp3/vn>*  
┃⋗ 🎵 *.lowpass <mp3/vn>*  
┃⋗ 🎵 *.underwater <mp3/vn>*  
┗━━━━━━━━━━━━━━┛  

      「 *𝘈𝘯𝘪𝘮𝘦 🌸* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🌐 *.animelink*  
┃⋗ 🦸‍♂️ *.akira*  
┃⋗ 👽 *.akiyama*  
┃⋗ 👧 *.anna*  
┃⋗ 🌸 *.asuna*  
┃⋗ 💃 *.ayuzawa*  
┃⋗ 🌀 *.boruto*  
┃⋗ 🦋 *.chiho*  
┃⋗ 💖 *.chitoge*  
┃⋗ 💣 *.deidara*  
┃⋗ 🛡️ *.erza*  
┃⋗ 🌼 *.elaina*  
┃⋗ 🐼 *.eba*  
┃⋗ 🌟 *.emilia*  
┃⋗ 👑 *.hestia*  
┃⋗ 🍃 *.hinata*  
┃⋗ 🎶 *.inori*  
┃⋗ 🌺 *.isuzu*  
┃⋗ 🦇 *.itachi*  
┃⋗ 🍃 *.itori*  
┃⋗ 🏯 *.kaga*  
┃⋗ 🌀 *.kagura*  
┃⋗ 🎨 *.kaori*  
┃⋗ 🍣 *.keneki*  
┃⋗ 🐤 *.kotori*  
┃⋗ 💘 *.kurumi*  
┃⋗ 🐍 *.madara*  
┃⋗ ⚔️ *.mikasa*  
┃⋗ 🎤 *.miku*  
┃⋗ ⚡ *.minato*  
┃⋗ 🌪️ *.naruto*  
┃⋗ 🔥 *.nezuko*  
┃⋗ 💫 *.sagiri*  
┃⋗ 🐉 *.sasuke*  
┃⋗ 🌸 *.sakura*  
┃⋗ 🦖 *.pokedex <pokemon>*  
┗━━━━━━━━━━━━━━┛  

    「 *𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘴 🏞* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 🖼️ *.img (reply)*  
┃⋗ 💬 *.qc <texto>*  
┃⋗ 💩 *.scat*  
┃⋗ 🎨 *.sticker*  
┃⋗ 🖋️ *.wm <nombre>|<autor>*  
┃⋗ 🎞️ *.tovid <sticker>*  
┗━━━━━━━━━━━━━━┛

      「 *𝘕𝘴𝘧𝘸 🔞* 」
┣━━━━━━━━━━━━━━┫    
┃⋗ 🔞 *.booty*  
┃⋗ 🔞 *.ecchi*  
┃⋗ 🔞 *.furro*  
┃⋗ 🔞 *.lesbianas*  
┃⋗ 🔞 *.nsfwloli*  
┃⋗ 🔞 *.panties*  
┃⋗ 🔞 *.pene*  
┃⋗ 🔞 *.rule34 <búsqueda>*  
┃⋗ 🔞 *.pechos*  
┃⋗ 🔞 *.tetas*  
┃⋗ 🔞 *.trapito*  
┗━━━━━━━━━━━━━━┛

    「 *🌟 𝘙𝘗𝘎 🌟* 」     
┣━━━━━━━━━━━━━━┫  
┃⋗ 💼 *.claim*  
┃⋗ 💼 *.crimen*  
┃⋗ 🪙 *.darCreds *@user <cantidad>*  
┃⋗ 🪙 *.Creds*  
┃⋗ ⚡ *.levelup*  
┃⋗ ⛏️ *.minar*  
┃⋗ 🛍️ *.Buy*  
┃⋗ 🛍️ *.Buyall*
┃⋗ 💼 *.work*  
┗━━━━━━━━━━━━━━┛  

   「 *📂 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰 📂* 」  
┣━━━━━━━━━━━━━━┫  
┃⋗ 📝 *.sn*  
┃⋗ 📝 *.perfil*  
┃⋗ 📝 *.perfil @user*  
┃⋗ 📝 *.reg *<nombre.edad>*  
┃⋗ 📝 *.unreg*  
┗━━━━━━━━━━━━━━┛

> @SAPITOBOT`

   const fkontak = {
      "key": {
         "participants": "0@s.whatsapp.net",
         "remoteJid": "status@broadcast",
         "fromMe": false,
         "id": "Halo"
      },
      "message": {
         "contactMessage": {
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
         }
      },
      "participant": "0@s.whatsapp.net"
   }
   await conn.sendFile(m.chat, img, 'img.jpg', texto, m, null, fkontak)
   global.db.data.users[m.sender].lastcofre = new Date * 1
}

handler.command = ['menu', 'menú', 'multimenu', 'help', 'comandos', 'ayuda']
export default handler
