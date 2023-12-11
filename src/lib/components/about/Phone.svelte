<script>
	import Messages from './Messages.svelte';
</script>

<div class="iphone-x scale-90 md:scale-100 -translate-y-8 md:translate-y-0">
	<div class="flex flex-col justify-center w-full h-[110px] border-b-[1px]">
		<div class="flex justify-center w-full translate-y-3">
			<div></div>
			<div class="rounded-full h-12 w-12 bg-gray-400 text-center text-2xl my-auto">
        <div class= ""></div>
      </div>
			<div></div>
		</div>
	</div>
	<Messages />
</div>

<style lang="scss">
	body {
		background: #f4f6fc;

		&:after {
			content: 'Made with ❤️ by Adiel Hercules';
			position: absolute;
			top: 0;
			right: 0;
			padding: 10px;
			background-color: #3f436b;
			color: #fff;
			opacity: 0.6;
		}
	}

	.iphone-x {
		position: relative;
		margin: 40px auto;
		width: 360px;
		height: 780px;
		background-color: white;
		border-radius: 40px;
		box-shadow:
			0px 0px 0px 11px #1f1f1f,
			0px 0px 0px 13px #191919,
			0px 0px 0px 20px #111;

		&:before,
		&:after {
			content: '';
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
		}

		&:after {
			bottom: 7px;
			width: 140px;
			height: 4px;
			background-color: #f2f2f2;
			border-radius: 10px;
		}

		&:before {
			top: 0px;
			width: 56%;
			height: 30px;
			background-color: #1f1f1f;
			border-radius: 0px 0px 40px 40px;
		}

		span {
			position: absolute;
			display: block;
			color: transparent;
		}

		s {
			position: absolute;
			display: block;
			color: transparent;
		}

		s {
			top: 50px;
			color: #fff;
			text-align: center;
			text-decoration: none;
			width: 100%;
			font-size: 70px;
			font-weight: 100;
			padding-top: 60px;
		}

		span {
			bottom: 50px;
			width: 40px;
			height: 40px;
			background-color: rgba(0, 0, 0, 0.3);
			border-radius: 50%;
			left: 30px;

			& + span {
				left: auto;
				right: 30px;
			}
		}
	}
</style>
