const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Display all available commands'),
    
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle('📚 Bot Commands')
            .setDescription('Here are all the available commands:')
            .addFields(
                {
                    name: '🛡️ Moderation Commands',
                    value: '`/kick` - Kick a member from the server\n' +
                           '`/ban` - Ban a member from the server\n' +
                           '`/timeout` - Timeout a member\n' +
                           '`/clear` - Delete multiple messages',
                    inline: false
                },
                {
                    name: '🔧 Utility Commands',
                    value: '`/ping` - Check bot latency\n' +
                           '`/serverinfo` - Display server information\n' +
                           '`/userinfo` - Display user information\n' +
                           '`/help` - Show this help message',
                    inline: false
                },
                {
                    name: '🎮 Fun Commands',
                    value: '`/8ball` - Ask the magic 8ball a question\n' +
                           '`/roll` - Roll a dice\n' +
                           '`/coinflip` - Flip a coin',
                    inline: false
                }
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

        await interaction.reply({ embeds: [embed] });
    },
};
