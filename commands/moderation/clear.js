const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Delete multiple messages')
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Number of messages to delete (1-100)')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(100))
        .addUserOption(option =>
            option.setName('target')
                .setDescription('Only delete messages from this user')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    
    async execute(interaction) {
        const amount = interaction.options.getInteger('amount');
        const target = interaction.options.getUser('target');

        await interaction.deferReply({ ephemeral: true });

        try {
            let messages = await interaction.channel.messages.fetch({ limit: amount + 1 });

            // Filter by target user if specified
            if (target) {
                messages = messages.filter(msg => msg.author.id === target.id);
            }

            // Filter out messages older than 14 days (Discord API limitation)
            const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;
            messages = messages.filter(msg => msg.createdTimestamp > twoWeeksAgo);

            if (messages.size === 0) {
                return interaction.editReply({ content: '❌ No messages found to delete!' });
            }

            const deleted = await interaction.channel.bulkDelete(messages, true);

            const embed = new EmbedBuilder()
                .setColor('#00ff00')
                .setTitle('🗑️ Messages Cleared')
                .setDescription(`Successfully deleted ${deleted.size} message(s).`)
                .addFields(
                    { name: '👮 Moderator', value: `${interaction.user.tag}`, inline: true },
                    { name: '📊 Amount', value: `${deleted.size}`, inline: true }
                )
                .setTimestamp();

            if (target) {
                embed.addFields({ name: '👤 Target User', value: `${target.tag}`, inline: true });
            }

            await interaction.editReply({ embeds: [embed] });
        } catch (error) {
            console.error('Error clearing messages:', error);
            await interaction.editReply({ content: '❌ Failed to delete messages! Messages older than 14 days cannot be deleted.' });
        }
    },
};
