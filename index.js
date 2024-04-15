window.onload = function () {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}
function showIncidentStatus() {
    document.getElementById("incident-status").style.display = "block";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showDriveEducate() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "block";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}
function showSponsor() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "block";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "none";
}

function showLaw() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "block";
    document.getElementById("report").style.display = "none";
}

function showReport() {
    document.getElementById("incident-status").style.display = "none";
    document.getElementById("drive-educate").style.display = "none";
    document.getElementById("sponsor").style.display = "none";
    document.getElementById("law").style.display = "none";
    document.getElementById("report").style.display = "block";
}