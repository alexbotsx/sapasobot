let handler = async (m, { isPrems, conn }) => {
	let img = 'https://ibb.co/7N8yHZ2q/avatar-contact.jpg'
	let texto = `
╔═════════════════╗
┇•°「 *𝘓𝘰𝘨𝘰 - 𝘮𝘢𝘬𝘦𝘳 🎨* 」°•
╚═════════════════╝
┊⇾ .𝘭𝘰𝘨𝘰𝘤𝘰𝘳𝘢𝘻𝘰𝘯 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘱𝘢𝘳𝘦𝘫𝘢 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘨𝘭𝘪𝘵𝘤𝘩 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘴𝘢𝘥 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘴𝘰𝘭𝘪𝘵𝘢𝘳𝘪𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘥𝘳𝘢𝘨𝘰𝘯𝘣𝘢𝘭𝘭 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘯𝘦𝘰𝘯 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘨𝘢𝘵𝘪𝘵𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘤𝘩𝘪𝘤𝘢𝘨𝘢𝘮𝘦𝘳 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘢𝘳𝘮𝘺 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘯𝘢𝘳𝘶𝘵𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘧𝘶𝘵𝘶𝘳𝘪𝘴𝘵𝘢 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘯𝘶𝘣𝘦 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘢𝘯𝘨𝘦𝘭 (texto) 
┊⇾ .𝘭𝘰𝘨𝘰𝘤𝘪𝘦𝘭𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘨𝘳𝘢𝘧𝘧𝘪𝘵𝘪3𝘥 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘮𝘢𝘵𝘳𝘪𝘹 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘩𝘰𝘳𝘳𝘰𝘳 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘢𝘭𝘢𝘴 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘨𝘶𝘦𝘳𝘳𝘦𝘳𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘱𝘶𝘣𝘨𝘧𝘦𝘮 (texto)
┊⇾ .𝘭𝘰𝘨𝘰lol (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘢𝘮𝘰𝘯𝘨𝘶𝘴 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘱𝘭𝘢𝘺𝘦𝘳 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘱𝘰𝘳𝘵𝘢𝘥𝘢𝘧𝘧 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘵𝘪𝘨𝘦𝘳 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘪𝘯𝘵𝘳𝘰 (texto)
┊⇾ .𝘭𝘰𝘨𝘰𝘷𝘪𝘥𝘦𝘰𝘨𝘢𝘮𝘪𝘯𝘨 (texto)
┊⇾ _.sadcat_ (texto)
┊⇾ _.tweet_ (comentario)
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ _SAPITOBOT_`

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
handler.help = ['menu3']
handler.tags = ['main', 'logo']
handler.command = ['menulogos', 'logos', 'menu3']
export default handler
