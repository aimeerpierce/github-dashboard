class GHHandler {
	constructor() {

	}

	getRepos(req, res) {
		let name = req.Params('name');


		res.json({message: 'EMPTY'});
	}
}

module.exports = GHHandler;