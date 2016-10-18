document.addEventListener('DOMContentLoaded', function() {
	sendBtn.addEventListener('click', function(e) {
		e.preventDefault();
		var xhr = new XMLHttpRequest();
			form = this.form,
			body = 'email=' + encodeURIComponent(email.value) + '&password=' + encodeURIComponent(password.value);
		console.log(body);
		xhr.addEventListener('readystatechange', function() {
			switch (xhr.readyState) {
				case 1:
					showPreloader();
					break;
				case 4:
					hidePreloader();
					break;
			};

		});

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
		preloader.style.display = "inline";
		form.style.display = "none";
	};

	function hidePreloader() {
		console.log('end');
		preloader.style.display = "none";
	};


});