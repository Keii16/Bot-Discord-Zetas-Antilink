# Discord Anti-Link Bot

## Overview
This is a Discord anti-link bot that prevents non-admin users from sending links in Discord channels, with support for whitelisted channels where links are allowed. The bot is written in Node.js using Discord.js v14.

## Project Architecture
- **Language**: Node.js 20.x
- **Main Dependencies**:
  - `discord.js`: Discord API wrapper for bot functionality
  - `dotenv`: Environment variable management
  - `express`: Web framework (currently not used but available for future web interface)
- **Main Files**:
  - `index.js`: Main bot code with anti-link logic
  - `package.json`: Project dependencies and configuration

## Features
- **Anti-Link Protection**: Automatically deletes messages containing links from non-admin users
- **Whitelist Support**: Allows links in specified channels (configured via channel IDs)
- **Admin Override**: Administrators can send links in any channel
- **Ping Command**: Simple `!ping` command that responds with "Pong 🏓"

## Configuration
- **Environment Variables**:
  - `DISCORD_TOKEN`: Bot token from Discord Developer Portal (stored in Replit Secrets)
- **Whitelist Channels**: Configured in `index.js` via the `whitelistChannels` array (currently contains example IDs)

## Recent Changes (September 11, 2025)
- Imported from GitHub repository
- Set up Node.js environment in Replit
- Installed all npm dependencies
- Configured Discord bot token as environment secret
- Set up workflow to run the bot continuously
- Bot successfully connected and is running

## Bot Status
✅ **Currently Running**: Bot is logged in and active
- Bot Username: Zetas Antilink#1430
- Status: Connected and monitoring messages

## Usage Notes
- The bot monitors all messages for links using regex pattern `/(https?:\/\/[^\s]+)/gi`
- Non-admin users who post links outside whitelisted channels will have their messages deleted
- Bot responds with a warning message when links are removed
- Administrators have full link posting privileges

## Future Enhancements
- Web dashboard using the Express framework
- Dynamic whitelist management
- More sophisticated link detection
- Logging and analytics features