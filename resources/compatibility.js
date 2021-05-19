//DETECT SCREEN SIZE & DEVICE TYPE
var screenDimensions = [0,0];
var deviceType = null;
var incompatible = null;

//ON RUNTIME
getScreenSize();
getDeviceType();
compatibility();

//Actual functions
window.addEventListener('resize', () => {getScreenSize();compatibility();})

function getDeviceType() {
	deviceType = navigator.platform;
	if (
		deviceType == 'iPod' ||
		deviceType == 'iPhone' ||
		deviceType == 'iPad' ||
		deviceType == 'Android' ||
		deviceType == 'Pike v7.6 release 92' ||
		deviceType == 'Pike v7.8 release 517' ||
		deviceType == 'iPhone Simulator' ||
		deviceType == 'iPad Simulator' ||
		deviceType == 'iPod Simulator' ||
		deviceType == 'BlackBerry'
	) {incompatible = 'deviceType';}
    console.log("Retriving device type");
}

function getScreenSize() {
	screenDimensions[0] = window.innerWidth;
	screenDimensions[1] = window.innerHeight;
	if (screenDimensions[0] <= 550 ) {incompatible = 'screenWidth';}
	if (screenDimensions[1] <= 400 ) {incompatible = 'screenHeight';}
	if (screenDimensions[0] > 550 && incompatible == 'screenWidth') {incompatible = null;}
	if (screenDimensions[1] > 400 && incompatible == 'screenHeight') {incompatible = null;}
    console.log("Retriving screen size");
	compatibility();
}

function compatibility() {
	if (incompatible == 'screenWidth') {errorMessage('WIDTH_LESS_THAN_MINIMAL')}
	if (incompatible == 'screenHeight') {errorMessage('HEIGHT_LESS_THAN_MINIMAL')}
	if (incompatible == 'deviceType') {errorMessage('INCOMPATIBLE_DEVICE_TYPE')}
	setTimeout(() => {if (incompatible == null) {document.getElementById("compatibility-warn").style.display = 'none';}}, 20);
    console.log("Checking device compatibility");
}

function errorMessage(message) {
	console.log(message);
	var errorMessageText = document.getElementById("errormessage");
	//errorMessageText.innerText = message;
	//errorMessageText.style.display = 'block';
	document.getElementById("errormessage").innerText = message;
	document.getElementById("compatibility-warn").style.display = 'block !important';
}