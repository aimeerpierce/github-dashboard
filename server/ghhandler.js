const GHHelper = require("./ghhelper.js");

class GHHandler {
	constructor() {
		this.helper = new GHHelper();
	}

	getRepos(req, res) {
		let name = req.params.name;

		this.helper.getRepoList(name, (error, data) => {
			res.json({repos: data, error});
		});
	}

	getRepoCount(req, res) {
		let name = req.params.name;

		this.helper.getRepoList(name, (error, data) => {
			res.json({count: data.length, error})
		});
	}
}

module.exports = GHHandler;