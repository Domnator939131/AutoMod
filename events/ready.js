const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`✅ Bot is online as ${client.user.tag}`);
        console.log(`📊 Serving ${client.guilds.cache.size} servers`);
        
        // Set bot status
        client.user.setPresence({
            activities: [{ name: 'slash commands | /help', type: ActivityType.Watching }],
            status: 'online',
        });
    },
};
