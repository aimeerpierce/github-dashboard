const GHHelper = require("./ghhelper.js");

class GHHandler {
	constructor() {
		this.helper = new GHHelper();
	}

	getName(req,res) {
		let name = req.params.name;

		this.helper.getName(name, (error, data) => {
			res.json({data, error});
		});
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

	getRepoNames(req, res) {
		let name = req.params.name;

		this.helper.getRepoList(name, (error, data) => {
			res.json({data, error});
		});
	}

	//GET /repos/:owner/:repo/issues
	getRepoIssues(req,res) {
		let name = req.params.name;
		let repo = req.params.repo;

		this.helper.getRepoIssues(name, repo, (error, data) => {
			res.json({data, error});
		});
	}

	getRepoCommits(req,res) {
		let name = req.params.name;
		let repo = req.params.repo;

		this.helper.getRepoCommits(name, repo, (error, data) => {
			res.json({data,error});
		});
	}

	getCollaborators(req,res) {
		let name = req.params.name;
		let repo = req. params.repo;

		this.helper.getCollaborators(name, repo, (error, data) => {
			res.json({collaborators: data, error});
		});
	}
}

module.exports = GHHandler;
