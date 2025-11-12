# Discord Bot

A modern, feature-rich Discord bot built with discord.js v14 featuring moderation tools, utility commands, and fun interactions.

## Features

### 🛡️ Moderation Commands
- `/kick` - Kick members from the server
- `/ban` - Ban members with optional message deletion
- `/timeout` - Timeout members for a specified duration
- `/clear` - Bulk delete messages (up to 100)

### 🔧 Utility Commands
- `/ping` - Check bot latency and response time
- `/serverinfo` - Display detailed server information
- `/userinfo` - View information about any user
- `/help` - Display all available commands

### 🎮 Fun Commands
- `/8ball` - Ask the magic 8ball a question
- `/roll` - Roll a dice with customizable sides
- `/coinflip` - Flip a coin

### 🎉 Additional Features
- Welcome messages for new members
- Modern slash commands
- Permission-based command access
- Rich embeds for better UX
- Error handling and logging

## Setup

### Prerequisites
- Node.js v16.9.0 or higher
- A Discord bot token
- Discord application with bot enabled

### Installation

1. Clone the repository or download the files

2. Install dependencies:
```bash
npm install
```

3. Configure the bot:
   - Copy `.env.example` to `.env`
   - Fill in your bot credentials:
```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
GUILD_ID=your_guild_id_for_testing (optional)
```

4. Deploy slash commands:
```bash
npm run deploy
```

5. Start the bot:
```bash
npm start
```

## Getting Your Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. Go to the "Bot" section
4. Click "Reset Token" to get your bot token
5. Copy the token to your `.env` file

## Bot Permissions

The bot requires the following permissions:
- Read Messages/View Channels
- Send Messages
- Embed Links
- Attach Files
- Read Message History
- Add Reactions
- Kick Members (for moderation)
- Ban Members (for moderation)
- Manage Messages (for clear command)
- Moderate Members (for timeout command)

### Invite Link
Use this URL structure to invite your bot (replace CLIENT_ID):
```
https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&permissions=1099511627830&scope=bot%20applications.commands
```

## Project Structure

```
discord-bot/
├── commands/
│   ├── moderation/    # Moderation commands
│   ├── utility/       # Utility commands
│   └── fun/          # Fun commands
├── events/           # Event handlers
├── utils/            # Utility functions
├── bot.js           # Main bot file
├── deploy-commands.js # Command deployment script
├── .env             # Environment variables (not in git)
├── .env.example     # Example environment file
└── package.json     # Dependencies and scripts
```

## Commands Overview

| Command | Description | Permissions Required |
|---------|-------------|---------------------|
| `/kick` | Kick a member | Kick Members |
| `/ban` | Ban a member | Ban Members |
| `/timeout` | Timeout a member | Moderate Members |
| `/clear` | Delete messages | Manage Messages |
| `/ping` | Check latency | None |
| `/serverinfo` | Server details | None |
| `/userinfo` | User details | None |
| `/help` | Command list | None |
| `/8ball` | Magic 8ball | None |
| `/roll` | Roll dice | None |
| `/coinflip` | Flip coin | None |

## Development

To add new commands:

1. Create a new file in the appropriate `commands/` subdirectory
2. Use this template:

```javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commandname')
        .setDescription('Command description'),
    
    async execute(interaction) {
        // Your command logic here
        await interaction.reply('Response');
    },
};
```

3. Run `npm run deploy` to register the new command
4. Restart the bot

## Troubleshooting

### Commands not showing up
- Make sure you ran `npm run deploy`
- Wait a few minutes for Discord to update
- Check that your bot has the `applications.commands` scope

### Bot not responding
- Verify your token in `.env` is correct
- Check that the bot has proper permissions
- Look for errors in the console

### Permission errors
- Ensure the bot's role is higher than the target user's highest role
- Verify the bot has the required permissions in the server

## Support

For issues or questions:
- Check the console for error messages
- Verify all environment variables are set correctly
- Ensure you're using Node.js v16.9.0 or higher

## License

ISC License - Feel free to modify and use as needed!

## Credits

Built with [discord.js](https://discord.js.org/) v14
