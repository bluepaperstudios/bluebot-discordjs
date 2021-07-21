const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `beep`) {
		message.channel.send('Boop.');
	} else if (message.content === `bps!server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `bps!user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (message.content === `bps!website`) {
                message.channel.send('https://bluepaperstudios.webnode.nl/');
        } else if (message.content === `bps!youtube`) {
                message.channel.send('https://m.youtube.com/channel/UCswi7LYBpri--oTWAiA24_g\nhttps://m.youtube.com/channel/UCZnqGbuMDkjhW4I3HydnAPA');
        } else if (message.content === `bps!partners`) {
                message.channel.send('we have **1** partner!\n use **bps!partner <number>** to see a partner');
        } else if (message.content === `bps!partner 1`) {
                message.channel.send('**partner 1**\n**newgamesonline**\n\n👍friendly server\n🎮life chat\n\njoin now\nhttps://discord.gg/FnnXDef8mJ');
        } else if (message.content === `bps!eco`) {
                message.channel.send('**coming soon**');
        }
});

client.login('your token');
