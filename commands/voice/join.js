const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('join')
        .setDescription('Join a VC'),
    async execute(interaction) {
        if (!interaction.member.voice.channel.id) {
            return interaction.reply('Join a Voice Channel.');
        }
        joinVoiceChannel({
            channelId: interaction.member.voice.channel.id,
            guildId: interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        return interaction.reply('Successfully Joined Voice Channel.');
    },
};
