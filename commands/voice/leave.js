const { SlashCommandBuilder } = require('discord.js');
const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leave')
        .setDescription('Leave a VC'),
    async execute(interaction) {
        if (!interaction.member.voice.channel.id) {
            return interaction.reply('Not in a Voice Channel.');
        }
        const connection = getVoiceConnection(interaction.guildId);
        if (!connection) {
            return interaction.reply('Not in a Voice Channel.');
        }
        connection.destroy();
        return interaction.reply('Successfully Disconnected.');
    },
};
