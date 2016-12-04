const request = require('request');

class GHHelper {
	constuctor() {

	}

	getRepoList(name, cb) {
		const options = {
			url: 'https://api.github.com/users/' + name + '/repos',
			headers: {
				'User-Agent': 'ghmeier'
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