const { SlashCommandBuilder } = require('discord.js');
const {
    getVoiceConnection,
    createAudioPlayer,
    createAudioResource,
} = require('@discordjs/voice');
const { join } = require('node:path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play Audio in VC'),
    async execute(interaction) {
        if (!interaction.member.voice.channel.id) {
            return interaction.reply('Not in a Voice Channel.');
        }
        const connection = getVoiceConnection(interaction.guildId);
        if (!connection) {
            return interaction.reply('Not in a Voice Channel.');
        }
        const player = createAudioPlayer();
        const resource = createAudioResource(join(global.ROOT_DIR, 'resources/test.mp3'));
        player.play(resource);

        // Play "track.mp3" across two voice connections
        connection.subscribe(player);
        return interaction.reply('Now Playing: Test File');
    },
};
