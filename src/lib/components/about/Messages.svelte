<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let replayClicked = writable(false);

	function showMessage(id) {
		var message = document.getElementById('message-' + id);
		message.style.display = 'inline-block';
	}

	function start() {
		let messages = document.getElementsByClassName('message');
		let timeOut = 1000;

		Array.from(messages).forEach((message, index) => {
			index += 1;
			setTimeout(() => {
				showMessage(index);
			}, timeOut);
			timeOut += 1000;

			console.log('hi');
		});
		timeOut -= 1000;

		// Set replayClicked to true after animations are done
		setTimeout(() => {
			document.getElementById('writing-container').style.display = 'none';
		}, timeOut);
	}

	onMount(() => {
		start();
	});
</script>

<div class="container">
	<button class="message" id="message-1"> Yo </button>
	<div class="message" id="message-2">You wanna make the biggest hardware hackathon in Texas?</div>
	<div class="message" id="message-3">
		See an example <a href="https://adesurirey.github.io/en" target="blank">here</a>
	</div>
	<div id="writing-container" class="writing-container">
		<div class="writing" id="writer">
			<div class="dot left"></div>
			<div class="dot center"></div>
			<div class="dot right"></div>
		</div>
		<div class="message" id="message-4">
			<a href="/" id="replay">replay me</a>
		</div>
	</div>
</div>

<style>
	/* roboto font */
	@import url(https://fonts.googleapis.com/css?family=Roboto);

	/* messages */
	.container {
		max-width: 500px;
		margin: auto;
		padding: 15px;
	}
	.message {
		display: none;
		margin-bottom: 10px;
		background-color: #e5e5ea;
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		border-radius: 25px;
		padding: 10px 17px;
	}

	/* writer */
	.writing {
		display: block;
		height: 38px;
		width: 90px;
		background-color: #e5e5ea;
		border-radius: 25px;
	}
	.writing::before {
		content: '';
		border: solid 20px;
		border-color: transparent transparent #e5e5ea;
		position: relative;
		top: 0px;
		left: -10px;
	}
	.writing .dot {
		height: 10px;
		width: 10px;
		background-color: #aaa;
		opacity: 0.3;
		border-radius: 50%;
		position: relative;
		-webkit-animation: dots 0.9s ease-in-out infinite;
		animation: dots 0.9s ease-in-out infinite;
	}
	.writing .dot.left {
		top: -7px;
		margin-left: 17px;
	}
	.writing .dot.center {
		top: -27x;
		left: 37px;
		-webkit-animation-delay: 0.3s;
	}
	.writing .dot.right {
		top: -37px;
		left: 57px;
		-webkit-animation-delay: 0.6s;
	}
	@-webkit-keyframes dots {
		0% {
			opacity: 1;
		}
	}
	@keyframes dots {
		0% {
			opacity: 1;
		}
	}
</style>
