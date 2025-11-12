const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        // Find a general or welcome channel
        const channel = member.guild.channels.cache.find(
            ch => ch.name === 'general' || ch.name === 'welcome' || ch.name === 'chat'
        );

        if (!channel) return;

        const welcomeEmbed = new EmbedBuilder()
            .setColor('#00ff00')
            .setTitle('👋 Welcome to the server!')
            .setDescription(`Welcome ${member}! We're glad to have you here.`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '📊 Member Count', value: `${member.guild.memberCount}`, inline: true },
                { name: '📅 Account Created', value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}:R>`, inline: true }
            )
            .setTimestamp()
            .setFooter({ text: member.guild.name, iconURL: member.guild.iconURL() });

        try {
            await channel.send({ embeds: [welcomeEmbed] });
        } catch (error) {
            console.error('Error sending welcome message:', error);
        }
    },
};
