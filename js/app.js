setTimeout(function(){
	var email = prompt("Put your email here to sign up and or are interested in getting updates.")
	var arr = email.split('');
	for(var i = 0; i < arr.length; i++){
		// console.log('fwaiofaewohi')
		if(arr[i] == '@'){
			console.log('test')

			var div = document.createElement('div');
			div.innerHTML = "Thanks, your email '" + email + "' has been successsfully addded to our mailing list."
			div.setAttribute('id', 'snacks');
			document.body.appendChild(div)
			div.setAttribute('class', 'show');

			setTimeout(function(){
				div.className = div.className.replace("show", ""); 
			}, 3000);
		}else{
			console.log('afjaijae')
		}
	}
}, 1000);