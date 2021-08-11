var req = require.context("./test-files", true, /^(.*\.([jt]s$))[^.]*$/im);

var importKeys = req.keys().slice();

console.log({ importKeys });
var sortedKeys = importKeys.sort((a, b) => {
	if (a.includes('module')) {
		return -1;
	}

	if (a.includes('controller') && !b.includes('module')) {
		return -1;
	}

	return 0;
});
console.log({ sortedKeys });

sortedKeys.forEach(key => req(key));
