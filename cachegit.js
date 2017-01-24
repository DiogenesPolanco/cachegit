const fs = require("fs"),
	fetch = require("fetch"),
	git = require('git-rev'),
	location = process.argv[2],
	str = fs.readFileSync((location ? location : "") + "cachegit.json");
try {
	git.branch((branch) => {
		const config = JSON.parse(str);
		config.files.forEach((file) => {
			const location = "/" + config.account + "/" + config.repository + "/" + file + "?cachegit=" + branch;
			fetch.fetchUrl("https://" + config.account + ":none@cachegit.com" + location,{method:"delete"},(err,metadata,body) => {
				if(err) {
					console.log(err);
				} else {
					console.log(body.toString(),location);
				}
			});
		});
	});
} catch(e) {
	console.log(e);
}
