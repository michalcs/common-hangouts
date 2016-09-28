if (document.location.pathname.match(/\/hangouts/g)) {

	document.querySelector('title').innerText = 'Common Hangouts';
	document.querySelector('link[rel="shortcut icon"]').href = chrome.extension.getURL('icons/ch-favicon.ico');

	var accLinks = document.querySelectorAll('#gb a[href^="/u/"]');

	for (i = 0; i < accLinks.length; ++i) {
		if (accLinks[i].href.match(/\/u\/\d\/$/i)) {
			accLinks[i].href = accLinks[i].href + 'hangouts';
		}
	}

}


mailU = document.querySelector('#gb23');
	console.log(mailU);

function fixVidCta() {

	var checkC = document.querySelector('body[viewport-id="gtn-roster-iframe-id-b"]');
	
	if (checkC){


		var mailU = document.location.pathname.match(/\d/i);

		var oldVid = document.querySelector('[id=":h.p"]');
		var newVid = oldVid.cloneNode(true);
		oldVid.parentNode.replaceChild(newVid, oldVid);

		function openVid(){
			var wW = screen.width*.8;
			var wH = screen.height*.8;
			var wL = (screen.width-wW)/2;
			var wT = ((screen.height-wH)/2)-50;
			window.open('//hangouts.google.com/hangouts/_/?authuser='+mailU+'','','width='+wW+',height='+wH+',left='+wL+',top='+wT+',location=0,menubar=0,scrollbars=0,status=0,toolbar=0,resizable=1');
		}

		newVid.addEventListener('click', openVid, false);
	}

}

setTimeout(function(){ fixVidCta(); }, 1000);
