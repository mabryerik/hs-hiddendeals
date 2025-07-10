// Only show modal if not already verified in this session
if (!sessionStorage.getItem('ageVerified')) {
	document.getElementById('age-modal').style.display = 'flex';
}

// "Yes" button — set session flag and hide modal
document.getElementById('age-yes').onclick = function () {
	sessionStorage.setItem('ageVerified', 'true');
	document.getElementById('age-modal').style.display = 'none';
};

// "No" button — redirect or show message
document.getElementById('age-no').onclick = function () {
	alert('You must be 21 or older to enter this site.');
	window.location.href = 'https://www.responsibility.org/';
};
