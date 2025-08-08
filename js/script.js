function updateYear() {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}
updateYear();
setInterval(updateYear, 1000);