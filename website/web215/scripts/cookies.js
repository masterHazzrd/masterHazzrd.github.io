// Utility Functions
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Collect Current Session Info
function getSessionInfo() {
    const browser = navigator.userAgent;
    const timestamp = new Date().toLocaleString();
    const session = Math.random().toString(36).substring(7); // Simulating session info
    // Simulate fetching IP (use external API in production)
    const ip = "192.168.0.1";

    return { browser, timestamp, session, ip };
}

// Populate Session Info
function populateSessionInfo() {
    const currentInfo = getSessionInfo();

    // Display Current Info
    document.getElementById("current_browser").textContent = `Browser: ${currentInfo.browser}`;
    document.getElementById("current_timestamp").textContent = `Timestamp: ${currentInfo.timestamp}`;
    document.getElementById("current_ip").textContent = `IP Address: ${currentInfo.ip}`;
    document.getElementById("current_session").textContent = `Session Info: ${currentInfo.session}`;

    // Save to Cookies
    setCookie("browser", currentInfo.browser, 7);
    setCookie("timestamp", currentInfo.timestamp, 7);
    setCookie("ip", currentInfo.ip, 7);
    setCookie("session", currentInfo.session, 7);
}

// Populate Last Session Info
function populateLastSessionInfo() {
    const lastBrowser = getCookie("browser");
    const lastTimestamp = getCookie("timestamp");
    const lastIp = getCookie("ip");
    const lastSession = getCookie("session");

    document.getElementById("last_browser").textContent = `Browser: ${lastBrowser || "N/A"}`;
    document.getElementById("last_timestamp").textContent = `Timestamp: ${lastTimestamp || "N/A"}`;
    document.getElementById("last_ip").textContent = `IP Address: ${lastIp || "N/A"}`;
    document.getElementById("last_session").textContent = `Session Info: ${lastSession || "N/A"}`;
}

// Purge Cookies
document.getElementById("purge_cookies_button").addEventListener("click", () => {
    deleteCookie("browser");
    deleteCookie("timestamp");
    deleteCookie("ip");
    deleteCookie("session");
    alert("Cookies have been purged!");
    populateLastSessionInfo();
});

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
    populateSessionInfo();
    populateLastSessionInfo();
});
