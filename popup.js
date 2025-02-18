// Function to close the popup ad
function closePopup() {
    document.getElementById('popup-ad').classList.add('hidden');
}

// Show the popup ad after 1 second when the page loads
window.onload = function () {
    setTimeout(() => {
        document.getElementById('popup-ad').classList.remove('hidden');
    }, 1000);
};
