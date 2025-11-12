const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('timeout')
        .setDescription('Timeout a member')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('The member to timeout')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('duration')
                .setDescription('Duration in minutes')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(40320)) // Max 28 days
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('Reason for timeout')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
    
    async execute(interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getInteger('duration');
        const reason = interaction.options.getString('reason') || 'No reason provided';

        if (!target) {
            return interaction.reply({ content: '❌ User not found in this server!', ephemeral: true });
        }

        if (target.id === interaction.user.id) {
            return interaction.reply({ content: '❌ You cannot timeout yourself!', ephemeral: true });
        }

        if (target.id === interaction.guild.ownerId) {
            return interaction.reply({ content: '❌ You cannot timeout the server owner!', ephemeral: true });
        }

        if (!target.moderatable) {
            return interaction.reply({ content: '❌ I cannot timeout this user! They may have higher permissions.', ephemeral: true });
        }

        try {
            await target.timeout(duration * 60 * 1000, reason);

            const embed = new EmbedBuilder()
                .setColor('#ffaa00')
                .setTitle('⏰ Member Timed Out')
                .setDescription(`${target.user.tag} has been timed out.`)
                .addFields(
                    { name: '👤 User', value: `${target.user.tag} (${target.id})`, inline: true },
                    { name: '👮 Moderator', value: `${interaction.user.tag}`, inline: true },
                    { name: '⏱️ Duration', value: `${duration} minute(s)`, inline: true },
                    { name: '📝 Reason', value: reason }
                )
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error timing out member:', error);
            await interaction.reply({ content: '❌ Failed to timeout the member!', ephemeral: true });
        }
    },
};
