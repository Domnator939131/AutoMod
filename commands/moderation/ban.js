const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Ban a member from the server')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The member to ban')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for banning')
                .setRequired(false))
        .addIntegerOption(option =>
            option.setName('delete_days')
                .setDescription('Number of days of messages to delete (0-7)')
                .setMinValue(0)
                .setMaxValue(7)
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    
    async execute(interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';
        const deleteDays = interaction.options.getInteger('delete_days') || 0;

        if (target.id === interaction.user.id) {
            return interaction.reply({ content: '❌ You cannot ban yourself!', ephemeral: true });
        }

        if (target.id === interaction.guild.ownerId) {
            return interaction.reply({ content: '❌ You cannot ban the server owner!', ephemeral: true });
        }

        const member = await interaction.guild.members.fetch(target.id).catch(() => null);
        if (member && !member.bannable) {
            return interaction.reply({ content: '❌ I cannot ban this user! They may have higher permissions.', ephemeral: true });
        }

        try {
            await interaction.guild.members.ban(target, { 
                reason: `${reason} | Banned by ${interaction.user.tag}`,
                deleteMessageSeconds: deleteDays * 24 * 60 * 60
            });

            const embed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('🔨 Member Banned')
                .setDescription(`${target.tag} has been banned from the server.`)
                .addFields(
                    { name: '👤 User', value: `${target.tag} (${target.id})`, inline: true },
                    { name: '👮 Moderator', value: `${interaction.user.tag}`, inline: true },
                    { name: '📝 Reason', value: reason },
                    { name: '🗑️ Messages Deleted', value: `${deleteDays} day(s)`, inline: true }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error banning member:', error);
            await interaction.reply({ content: '❌ Failed to ban the member!', ephemeral: true });
        }
    },
};
