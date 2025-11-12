const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a member from the server')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The member to kick')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for kicking')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    
    async execute(interaction) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!target) {
            return interaction.reply({ content: '❌ User not found in this server!', ephemeral: true });
        }

        if (target.id === interaction.user.id) {
            return interaction.reply({ content: '❌ You cannot kick yourself!', ephemeral: true });
        }

        if (target.id === interaction.guild.ownerId) {
            return interaction.reply({ content: '❌ You cannot kick the server owner!', ephemeral: true });
        }

        if (!target.kickable) {
            return interaction.reply({ content: '❌ I cannot kick this user! They may have higher permissions.', ephemeral: true });
        }

        try {
            await target.kick(reason);

            const embed = new EmbedBuilder()
                .setColor('#ff9900')
                .setTitle('👢 Member Kicked')
                .setDescription(`${target.user.tag} has been kicked from the server.`)
                .addFields(
                    { name: '👤 User', value: `${target.user.tag} (${target.id})`, inline: true },
                    { name: '👮 Moderator', value: `${interaction.user.tag}`, inline: true },
                    { name: '📝 Reason', value: reason }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error kicking member:', error);
            await interaction.reply({ content: '❌ Failed to kick the member!', ephemeral: true });
        }
    },
};
