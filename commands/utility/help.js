const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('help'),
	async execute(interaction) {
		await interaction.reply('I Have Been Lobotomized.');
	},
};