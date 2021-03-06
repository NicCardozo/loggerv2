import { sendToLog } from '../system/modlog'
import { hasUnicode } from '../system/utils'

module.exports = {
  name: 'messageReactionRemoveAll',
  type: 'messageReactionRemoveAll',
  toggleable: true,
  run: function (bot, message) {
    let channel = message.channel
    sendToLog(this.name, bot, {
      guildID: channel.guild.id,
      type: 'Message Reactions Removed',
      changed: `${channel ? `► Channel: ${channel.name}\n` : ''}► Content: ${message ? `\`${message.content}\`` : '`Not Cached`'}\n► ID: **${message.id}**\n► Reactions:\`\`\`ini\n${Object.keys(message.reactions).map(e => hasUnicode(e) ? `${e} = ${message.reactions[e].count}` : `${e.split(':')[0]} = ${message.reactions[e].count}`).join('\n')}\`\`\``,
      color: 8351671,
      simple: `Message with ID of ${message.id} in **${channel.name}** just had it's reactions cleared.`
    })
  }
}
