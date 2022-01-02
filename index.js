#!/usr/bin/env node
const { Plugin } = require("powercord/entities");

module.exports = class UserEmbeds extends Plugin {
	startPlugin() {
		// Initializing Here
		powercord.api.commands.registerCommand({
			command: 'embed',
			description: 'Send a message as embed.',
			usage: '{c} [ title content arguments ]',
			executor ([ title, content, arguments ]) {
				let reply;

				reply = {
					type: 'rich',
					title: `${title}`,
					description: `${content}`
				}
			}
		});
	}
	pluginWillUnload() {
		// Unloading Here
		powercord.api.commands.unregisterCommand('embed')
	}
}
