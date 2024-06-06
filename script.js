// Get current date and time
var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = datetime;