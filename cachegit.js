const fs = require("fs"),
	fetch = require("fetch"),
	location = process.argv[2],
	str = fs.readFileSync((location ? location : "") + "cachegit.json");
try {
	const config = JSON.parse(str);
	config.files.forEach((file) => {
		const location = "/"+config.account+"/"+config.repository+"/"+file;
		fetch.fetchUrl("http://cachegit.com/_",{method:"put",payload:location},(err,metadata,body) => {
			if(err) {
				console.log(err);
			} else {
				console.log(body.toString(),location);
			}
		});
	});
} catch(e) {
	console.log(e);
}
