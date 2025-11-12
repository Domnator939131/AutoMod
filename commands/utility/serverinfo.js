const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Display information about the server'),
    
    async execute(interaction) {
        const { guild } = interaction;

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle(`📊 ${guild.name} Server Information`)
            .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
            .addFields(
                { name: '👑 Owner', value: `<@${guild.ownerId}>`, inline: true },
                { name: '📅 Created', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: true },
                { name: '🆔 Server ID', value: guild.id, inline: true },
                { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
                { name: '💬 Channels', value: `${guild.channels.cache.size}`, inline: true },
                { name: '😀 Emojis', value: `${guild.emojis.cache.size}`, inline: true },
                { name: '🎭 Roles', value: `${guild.roles.cache.size}`, inline: true },
                { name: '🚀 Boost Level', value: `Level ${guild.premiumTier}`, inline: true },
                { name: '💎 Boosts', value: `${guild.premiumSubscriptionCount || 0}`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

        if (guild.description) {
            embed.setDescription(guild.description);
        }

        await interaction.reply({ embeds: [embed] });
    },
};
