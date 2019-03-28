const Discord = require('discord.js')
const fs = require('fs')
const ms = require('ms')
let warns = JSON.parse(fs.readFileSync('./warnings.json', 'utf8'))
module.exports.run = async(bot, message, args) => {

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('prava kupi')
  let warnuser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!warnuser) return message.reply('coldnt find')
  let warnlevel = warns[warnuser.id].warns

  message.reply(`<@${warnuser.id}> has ${warnlevel} warnings`)

}

module.exports.help = {
  name: 'warnlevel'
}