document.getElementById('palindrom').onclick = Palindrom;
var out = document.getElementById('out');

function Palindrom() {
	var text = document.getElementById('text').value;
	document.getElementById('text').value = '';
	var revString = '';
	var count = text.length;

	for (var i = count; i >= 0; i--) {
		revString += text.charAt(i);
	}

	if (text == revString) {
		out.innerHTML = 'Yes , This is Palindrome';
	} else {
		out.innerHTML = 'No , This is not a Palindrome';
	}
}
