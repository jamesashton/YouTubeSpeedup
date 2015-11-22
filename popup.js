document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('slowDown').addEventListener('click', function () {
		chrome.tabs.executeScript({
			code: 'var v=document.getElementsByTagName(\"video\")[0];v.playbackRate = v.playbackRate - 0.25;'
		});
	}, false);
	document.getElementById('reset').addEventListener('click', function () {
		chrome.tabs.executeScript({
			code: 'var v=document.getElementsByTagName(\"video\")[0];v.playbackRate = 1;'
		});
	}, false);
	document.getElementById('speedUp').addEventListener('click', function () {
		chrome.tabs.executeScript({
			code: 'var v=document.getElementsByTagName(\"video\")[0];v.playbackRate = v.playbackRate + 0.25;'
		});
	}, false);
}, false);