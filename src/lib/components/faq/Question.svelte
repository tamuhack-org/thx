<script lang="ts">
	import { IconChevronDown } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	export let item: { question: string; answers: string[] };
	let open = false;

	onMount(() => {
		class Accordion {
			constructor(el) {
				// Store the <details> element
				this.el = el;
				// Store the <summary> element
				this.summary = el.querySelector('summary');
				// Store the <div class="content"> element
				this.content = el.querySelector('.content');

				// Store the animation object (so we can cancel it if needed)
				this.animation = null;
				// Store if the element is closing
				this.isClosing = false;
				// Store if the element is expanding
				this.isExpanding = false;
				// Detect user clicks on the summary element
				this.summary.addEventListener('click', (e) => this.onClick(e));
			}

			onClick(e) {
				// Stop default behaviour from the browser
				e.preventDefault();
				// Add an overflow on the <details> to avoid content overflowing
				this.el.style.overflow = 'hidden';
				// Check if the element is being closed or is already closed
				if (this.isClosing || !this.el.open) {
					this.open();
					// Check if the element is being openned or is already open
				} else if (this.isExpanding || this.el.open) {
					this.shrink();
				}
			}

			shrink() {
				// Set the element as "being closed"
				this.isClosing = true;

				// Store the current height of the element
				const startHeight = `${this.el.offsetHeight}px`;
				// Calculate the height of the summary
				const endHeight = `${this.summary.offsetHeight}px`;

				// If there is already an animation running
				if (this.animation) {
					// Cancel the current animation
					this.animation.cancel();
				}

				// Start a WAAPI animation
				this.animation = this.el.animate(
					{
						// Set the keyframes from the startHeight to endHeight
						height: [startHeight, endHeight]
					},
					{
						duration: 200,
						easing: 'ease-out'
					}
				);

				// When the animation is complete, call onAnimationFinish()
				this.animation.onfinish = () => this.onAnimationFinish(false);
				// If the animation is cancelled, isClosing variable is set to false
				this.animation.oncancel = () => (this.isClosing = false);
			}

			open() {
				// Apply a fixed height on the element
				this.el.style.height = `${this.el.offsetHeight}px`;
				// Force the [open] attribute on the details element
				this.el.open = true;
				// Wait for the next frame to call the expand function
				window.requestAnimationFrame(() => this.expand());
			}

			expand() {
				// Set the element as "being expanding"
				this.isExpanding = true;
				// Get the current fixed height of the element
				const startHeight = `${this.el.offsetHeight}px`;
				// Calculate the open height of the element (summary height + content height)
				const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

				// If there is already an animation running
				if (this.animation) {
					// Cancel the current animation
					this.animation.cancel();
				}

				// Start a WAAPI animation
				this.animation = this.el.animate(
					{
						// Set the keyframes from the startHeight to endHeight
						height: [startHeight, endHeight]
					},
					{
						duration: 200,
						easing: 'ease-out'
					}
				);
				// When the animation is complete, call onAnimationFinish()
				this.animation.onfinish = () => this.onAnimationFinish(true);
				// If the animation is cancelled, isExpanding variable is set to false
				this.animation.oncancel = () => (this.isExpanding = false);
			}

			onAnimationFinish(open) {
				// Set the open attribute based on the parameter
				this.el.open = open;
				// Clear the stored animation
				this.animation = null;
				// Reset isClosing & isExpanding
				this.isClosing = false;
				this.isExpanding = false;
				// Remove the overflow hidden and the fixed height
				this.el.style.height = this.el.style.overflow = '';
			}
		}

		var details = document.querySelectorAll('details');

		details.forEach((el) => {
			new Accordion(el);
		});
	});
</script>

<details class="text-[#192F6D] relative border-opacity-30 border-[#192F6D] faq-question">
	<summary
		class="cursor-pointer text-lg md:text-xl flex justify-between items-center font-medium"
		on:click={() => (open = !open)}
	>
		{item.question}
		<!-- <img src="/assets/arrow.png" class="arrow h-full w-auto" alt="arrow" /> -->
		<span class:arrow-open={open} class:arrow-close={!open} class="flip">
			<IconChevronDown class="w-5 h-5" />
		</span>
	</summary>
	<p class="content text-base lg:text-xl pt-4 pb-2">
		{#each item.answers as answer}
			<p class="">{answer}</p>
		{/each}
	</p>
</details>
<div
	class="w-full h-[2px] bg-dark opacity-25 mt-2 md:mt-4 mb-6 rounded-full faq-question-bottom"
></div>

<style>
	.arrow-close {
		animation: flip-icon 0.25s ease-in-out;
		transform: rotateX(180deg);
	}

	.arrow-open {
		animation: flip-icon-close 0.25s ease-in-out;
		transform: rotateX(0deg);
	}

	@keyframes flip-icon {
		0% {
			transform: rotateX(0deg);
		}
		100% {
			transform: rotateX(180deg);
		}
	}

	@keyframes flip-icon-close {
		0% {
			transform: rotateX(180deg);
		}
		100% {
			transform: rotateX(0deg);
		}
	}
</style>
