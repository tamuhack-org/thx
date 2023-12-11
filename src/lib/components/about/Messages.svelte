<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let replayClicked = writable(false);

	function showMessage(id) {
		var message = document.getElementById('message-' + id);
		message.style.display = 'inline-block';
	}

	function start() {
		let incoming = Array.from(document.getElementsByClassName('message'));
		let outgoing = Array.from(document.getElementsByClassName('outgoing-message'));

		let messages = incoming.concat(outgoing);

		let timeOut = 1000;

		messages.forEach((message, index) => {
			index += 1;
			setTimeout(() => {
				showMessage(index);
				if (index == messages.length - 1) {
					document.getElementById('writing-container').style.display = 'none';
				}
			}, timeOut);
			timeOut += 2000;
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
	<button class="message" id="message-1">Crazy idea</button>
	<div class="message" id="message-2">
		Let's partner up to make TAMUhack the biggest hardware hackathon in Texas
	</div>
	<div class="message" id="message-3">We'll bring hardware, judges, and prizes...</div>
	<div class="flex justify-end">
		<div class="outgoing-message" id="message-4">We're down 👀</div>
	</div>
	<div id="writing-container" class="writing-container flex justify-start">
		<div class="typing-indicator scale-75">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</div>

<style lang="scss">
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
		transform-origin: left center;
		font-size: 14px;
		border-radius: 25px;
		padding: 10px 17px;
		animation: enter 0.3s ease-in-out;
	}

	.outgoing-message {
		display: none;
		margin-bottom: 10px;
		background-color: #1f8aff;
		font-family: 'Roboto', sans-serif;
		transform-origin: right center;
		color: white;
		font-size: 14px;
		border-radius: 25px;
		padding: 10px 17px;
		animation: enter 0.3s ease-in-out;
	}

	.typing-indicator {
		background-color: #e6e7ed;
		will-change: transform;
		width: auto;
		border-radius: 50px;
		padding: 20px;
		display: table;
		position: relative;
		transform-origin: left center;
		&::before,
		&::after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: -2px;
			height: 20px;
			width: 20px;
			border-radius: 50%;
			background-color: #e6e7ed;
		}
		&::after {
			height: 10px;
			width: 10px;
			left: -10px;
			bottom: -10px;
		}
		span {
			height: 15px;
			width: 15px;
			float: left;
			margin: 0 1px;
			background-color: #9e9ea1;
			display: block;
			border-radius: 50%;
			opacity: 0.4;
			@for $i from 1 through 3 {
				&:nth-of-type(#{$i}) {
					animation: 1s blink infinite ($i * 0.3333s);
				}
			}
		}
	}

	@keyframes blink {
		50% {
			opacity: 1;
		}
	}

	@keyframes enter {
		0% {
			transform: translateY(10px) scale(0.8);
			opacity: 0;
		}
		100% {
			transform: translateY(0px) scale(1);
			opacity: 1;
		}
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
