const Bot = require('node-telegram-bot-api')
const API_KEY = '5069367671:AAG_g_uzBLjg3DtTDDhHY2EZqxAhKeo48vk'
const bot = new Bot(API_KEY, { polling: true })

bot.onText(/\/print (.+)/, (msg, match) => {
        const chatId = msg.chat.id
        const response = match[1]

        bot.sendMessage(chatId, response)
})
