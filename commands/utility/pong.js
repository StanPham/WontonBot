const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pong')
		.setDescription('pong'),
	async execute(interaction) {
		await interaction.reply('ping!');
	},
};