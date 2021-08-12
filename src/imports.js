var req = require.context("./app", true, /^(.*\.([jt]s$))[^.]*$/im);

req
	.keys()
	.sort((a, b) => {
		if (a.includes('module')) {
			return -1;
		}

		if (a.includes('controller') && !b.includes('module')) {
			return -1;
		}

		return 0;
	})
	.forEach(key => req(key));


