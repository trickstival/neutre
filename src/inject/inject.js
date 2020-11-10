chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		
		setInterval(() => {
			neutre()
		}, 100)
	}
	}, 10);
});

function neutre () {
	const vowel = 'e'
	const regex = /(\w?)(a|o|ó|á)(\W|(s|r|u|l\s)|$)/gi
	const replacement = `$1${vowel}$3`
	findAndReplaceDOMText(document.body, {
		find: regex,
		replace: replacement
	})
	console.log('oie', findAndReplaceDOMText)
}
