const request = require('request');

class GHHelper {
	constuctor() {

	}

	getRepoList(name, cb) {
		const options = {
			url: 'https://api.github.com/users/' + name + '/repos',
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}

			cb(null, JSON.parse(body));
		});
	}

	//GET /repos/:owner/:repo/issues
	getRepoIssues(name, repo, cb) {
		const options = {
			url: 'https://api.github.com/repos/' + name + '/' + repo + '/issues',
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}
			cb(null, JSON.parse(body));
		});

	}

	//GET /repos/:owner/:repo/collaborators
	getCollaborators(name,repo,cb) {
		const options = {
			url: 'https://api.github.com/repos/' + name + '/' + repo + '/collaborators',
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}
			cb(null, JSON.parse(body));
		});

	}

	//GET /users/:username
	getName(name,cb) {
		const options = {
			url: 'https://api.github.com/users/' + name ,
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}
			cb(null, JSON.parse(body));
		});
	}

	//GET /repos/:owner/:repo/commits
	getRepoCommits(name,repo,cb) {
		const options = {
			url: 'https://api.github.com/repos/' + name + '/' + repo + '/commits',
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}
			cb(null, JSON.parse(body));
		});
	}

	//GET /repos/:owner/:repo/stats/code_frequency
	getAdditions(name,repo,cb) {
		const options = {
			url: 'https://api.github.com/repos/' + name + '/' + repo + '/stats/code_frequency',
			headers: {
				'User-Agent': 'aimeerpierce'
			}
		};

		request(options, (error, response, body) => {
			if (error) {
				cb(error, null);
				return;
			}
			cb(null, JSON.parse(body));
		});
	}
}

module.exports = GHHelper;
