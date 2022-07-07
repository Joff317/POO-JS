#! /usr/bin/env node
function perform() {
	let router = require("../router")
	console.log(new router().welcome());
}

perform();