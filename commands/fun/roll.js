const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll a dice')
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('Number of sides on the dice (default: 6)')
                .setRequired(false)
                .setMinValue(2)
                .setMaxValue(100)),
    
    async execute(interaction) {
        const sides = interaction.options.getInteger('sides') || 6;
        const result = Math.floor(Math.random() * sides) + 1;

        const embed = new EmbedBuilder()
            .setColor('#e74c3c')
            .setTitle('🎲 Dice Roll')
            .setDescription(`You rolled a **${result}** on a ${sides}-sided dice!`)
            .setTimestamp()
            .setFooter({ text: `Rolled by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

        await interaction.reply({ embeds: [embed] });
    },
};
