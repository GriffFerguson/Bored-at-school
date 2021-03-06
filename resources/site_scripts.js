//TO RUN ON SITE LOAD
window.onload = function() {
	console.log("Running window-load scripts");
}

//SIDE PANEL
function sidePanel(element, method) {
	var panel = null;
	var otherPanel = null;
	var trigger = null;

	if (element == controls) {
		console.log("controls")
		panel = document.getElementById("controls");
		otherPanel = document.getElementById("about");
		trigger = document.getElementById("control-button");
		if (method == 'open') {
			console.log("open")
			panel.classList.add("open-panel");
			setTimeout(() => {panel.classList.add("display-content")}, 200);
			trigger.setAttribute("onclick", "sidePanel(controls, 'close')")
			sidePanel(otherPanel, 'close');
		}
		if (method == 'close') {
			console.log("close")
			panel.classList.remove("open-panel");
			panel.classList.remove("display-content");
			trigger.setAttribute("onclick", "sidePanel(controls, 'open')")
		}
	}

	if (element == about) {
		panel = document.getElementById("about");
		otherPanel = document.getElementById("controls");
		trigger = document.getElementById("about-button");
		if (method == 'open') {
			panel.classList.add("open-panel");
			setTimeout(() => {panel.classList.add("display-content")}, 200);
			trigger.setAttribute("onclick", "sidePanel(about, 'close')")
			sidePanel(otherPanel, 'close');
		}
		if (method == 'close') {
			panel.classList.remove("open-panel");
			panel.classList.remove("display-content");
			trigger.setAttribute("onclick", "sidePanel(about, 'open')")
		}
	}
}

//EMBED
function embed() {
	var path = window.location.pathname;
	var dir = path.substring(0, path.lastIndexOf('/'));
	var location = "https://boredatschool.netlify.app" + dir + "/embed.html";
	//LINK
	document.getElementById("embed-link").innerHTML +=
	'<span id="embed-link-span" onclick="embedLinkCopy()">' + location + '</span>';
	//CODE
	document.getElementById("embed-code").innerText +=
	'<iframe src="' + location + '" style="width:50vh;height:50vh;display:block;"></iframe>'
}

function toggleEmbed() {
	document.getElementById("embed-link").classList.toggle("open-embed");
	document.getElementById("embed-copy").style.opacity = "0";
}
function embedLinkCopy() {
	var path = window.location.pathname;
	var dir = path.substring(0, path.lastIndexOf('/'));
	var loc = "https://boredatschool.netlify.app" + dir + "/embed.html"
	navigator.clipboard.writeText(loc);
	document.getElementById("embed-copy").style.opacity = "1";
	console.log("wrote to clipboad: " + loc);
}

function embedCodeCopy() {
	var path = window.location.pathname;
	var dir = path.substring(0, path.lastIndexOf('/'));
	var loc = "https://boredatschool.netlify.app" + dir + "/embed.html"
	var code = '<iframe src="' + loc + '" style="min-width:65vw;min-height:65vh;display:block;"></iframe>';
	navigator.clipboard.writeText(code);
	document.getElementById("embed-copy").style.opacity = "1";
	console.log("wrote to clipboad: " + code);
}

//Get diagnostic data
function getDiagnostics() {
	console.log(
		"Diagnostic Data:\r\nDevice type: " + deviceType + 
		"\r\nScreen width: " + screenDimensions[0] + 
		"\r\nScreen height: " + screenDimensions[1]);
		return'Screen size data updated on resize & on page load; device type data retrieved on page load'
}