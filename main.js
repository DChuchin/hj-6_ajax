document.addEventListener('DOMContentLoaded', function() {
	sendBtn.addEventListener('click', function(e) {
		e.preventDefault();
		var xhr = new XMLHttpRequest();
			form = this.form,
			body = 'email=' + encodeURIComponent(email.value) + '&password=' + encodeURIComponent(password.value);
		console.log(body);
		xhr.addEventListener('loadstart', loadStart);
		xhr.addEventListener('loadend', loadEnd);
		//xhr.addEventListener('load', showData);
		xhr.addEventListener('error', showError);
		// xhr.addEventListener('readystatechange', function() {
		// 	switch (xhr.readyState) {
		// 		case 1:
		// 			showPreloader();
		// 			break;
		// 		case 4:
		// 			hidePreloader();
		// 			break;
		// 	};
		//
		// });

		xhr.open('POST', 'http://netology-hj-ajax.herokuapp.com/homework/login_json', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		xhr.send(body);



		// showPreloader();

		// xhr.addEventListener('loadend', hidePreloader)

		// xhr.addEventListener('load', function () {
		// 	var data = JSON.parse(xhr.responseText);
		// 	console.log('good')
		// 	console.log(data);
		// });

		// xhr.addEventListener('error', function () {
		// 	console.log('error');
		// 	console.log(xhr.status +': ' + xhr.statusText);
		// });

	});

	function showPreloader() {
		console.log('start');
		preloader.style.display = "inherit";
	};

	function hidePreloader(e) {
		preloader.style.display = "none";
	};

	function showData(data) {
		user.style.display="inherit";
		for (prop in data) {
			console.log(prop + ': ' + data[prop]);
		}
	};
	function showError(msg) {
		hidePreloader();
		showForm();
		error.innerHTML = msg;
	};

	function loadStart() {
		hideForm();
		showPreloader();
	};
	function loadEnd() {
		hidePreloader();
		if (this.status == 200) {
			var data = JSON.parse(this.responseText);
			showData(data);
		} else {
			showForm();
			showError(this.status + ': ' + this.statusText);
		}
	};
	function showForm() {
		form.style.display="inherit";
	};
	function hideForm() {
		form.style.display="none";
	};


});
