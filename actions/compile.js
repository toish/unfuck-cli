var uf = require('unfuck');
var fsp = require('fs-promise');
var ErrorSet = require('../format/ErrorSet.js');

var path = require('path');

var defaultOptions = {
	"compiler": {
		"type": "Uint8Array",
		"tapeWidth": 30000,
		"in": "String",
		"out": "String",
		"target": "simple-es6",
		"language": "standard"
	},
	"moduleType": "cjs",
	"targetDirectory": "./"
}

module.exports = function () {
	var bfconfig = path.join(process.cwd(), '.bfconflig');

	fsp.readFile(bfconfig, 'utf8')
		.catch((err) => {
			return defaultOptions;
		})
		.then((opt) => {
			return JSON.parse(opt);
		})
		.catch((err) => {
			let es = new ErrorSet();
			setTimeout(function () {
				es.warn('Malformed .bfconfig', 'The .bfconfig file in this project is not valid JSON.\nUsing default configuration.', err);
				es.warn('Hey', 'Oooo another one!');
				es.throw();
			}, 5000)
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			console.log(Math.random())
			return defaultOptions;
		})
		.then((opt) => {
			//console.log(opt)
		})
}
