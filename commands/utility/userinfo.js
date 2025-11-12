const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Display information about a user')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The user to get information about')
                .setRequired(false)),
    
    async execute(interaction) {
        const target = interaction.options.getUser('target') || interaction.user;
        const member = await interaction.guild.members.fetch(target.id);

        const roles = member.roles.cache
            .filter(role => role.id !== interaction.guild.id)
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, 10);

        const embed = new EmbedBuilder()
            .setColor(member.displayHexColor || '#5865F2')
            .setTitle(`👤 ${target.tag}`)
            .setThumbnail(target.displayAvatarURL({ dynamic: true, size: 1024 }))
            .addFields(
                { name: '🆔 User ID', value: target.id, inline: true },
                { name: '📅 Account Created', value: `<t:${Math.floor(target.createdTimestamp / 1000)}:R>`, inline: true },
                { name: '📥 Joined Server', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
                { name: '🤖 Bot', value: target.bot ? 'Yes' : 'No', inline: true },
                { name: `🎭 Roles [${roles.length}]`, value: roles.length ? roles.join(', ') : 'None' }
            )
            .setTimestamp()
            .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() });

        if (member.nickname) {
            embed.addFields({ name: '📝 Nickname', value: member.nickname, inline: true });
        }

        await interaction.reply({ embeds: [embed] });
    },
};
