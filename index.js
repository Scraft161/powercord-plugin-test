const { Plugin } = require("powercord/entities");

module.exports = class UserEmbeds extends Plugin {
	startPlugin() {
		// Initializing Here
		powercord.api.commands.registerCommand({
			command: 'embed',
			aliases: [ 'emb' ],
			description: 'Send a message as embed.',
			usage: '{c} [ title content ]',
			executor ([ title, content ]) {
				let reply;

				reply = {
					type: 'rich',
					title: `${title}`,
					description: `${content}`
				}

				return {
					send: false,
					reply
				};
			}
		});
	}
	pluginWillUnload() {
		// Unloading Here
		powercord.api.commands.unregisterCommand('embed')
	}
}
