<script lang="ts">
	import { onMount } from 'svelte';
	import Matter from 'matter-js';
	let visibleWalls = false;

	let screenWidth: number;
	let screenHeight: number;

	const renderEngine = () => {
		var Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Composites = Matter.Composites,
			Common = Matter.Common,
			MouseConstraint = Matter.MouseConstraint,
			Mouse = Matter.Mouse,
			Composite = Matter.Composite,
			Bodies = Matter.Bodies,
			Body = Matter.Body;

		const physicsContainer = document.getElementById('physics-container');
		const width = physicsContainer?.clientWidth || 2000;
		const height = physicsContainer?.clientHeight || 300;

		// create engine
		let engine = Engine.create(),
			world = engine.world;

		// create renderer
		let render = Render.create({
			element: physicsContainer,
			engine: engine,
			options: {
				background: 'transparent',
				wireframes: false,
				width: width,
				height: height
			}
		});

		// create runner
		var runner = Runner.create();
		Runner.run(runner, engine);

		let bodies = [
			// walls
			Bodies.rectangle(width / 2, 0, width, 10, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: visibleWalls
				}
			}),
			Bodies.rectangle(width / 2, height, width, 10, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: visibleWalls
				}
			}),
			Bodies.rectangle(width, height / 2, 10, height, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: visibleWalls
				}
			}),
			Bodies.rectangle(0, height / 2, 10, height, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: visibleWalls
				}
			})
		];
		Composite.add(world, bodies);

		engine.gravity.y = 0;

		let stack = Composites.stack(50, 120, 4, 2, 0, 0, function (x, y, col, row) {
			let imageName = '';
			let bodySize = 30;

			// Use a switch statement to handle different images and sizes
			switch (row * 4 + col + 1) {
				case 1:
					imageName = 'assets/stingy1.png';
					bodySize = 35;
					break;
				case 2: {
					imageName = 'assets/jelly1.png';
					bodySize = 32;
					break;
				}
				case 3: {
					let body = Bodies.rectangle(x + Common.random(100, 120), y, 180, 60, {
						restitution: 0.4,
						frictionAir: 0,
						render: {
							sprite: {
								texture: 'assets/sharky1.png',
								xScale: 0.1,
								yScale: 0.1
							}
						}
					});

					Body.setVelocity(body, { x: Common.random(-1, 1), y: Common.random(-1, 1) });
					return body;
				}
				case 4: {
					let body = Bodies.rectangle(x + Common.random(100, 120), y, 180, 60, {
						restitution: 0.4,
						frictionAir: 0,
						render: {
							sprite: {
								texture: 'assets/sharky2.png',
								xScale: 0.1,
								yScale: 0.1
							}
						}
					});

					Body.setVelocity(body, { x: Common.random(-1, 1), y: Common.random(-1, 1) });
					return body;
				}

				case 6: {
					imageName = 'assets/fishy1.png';
					bodySize = 25;
					break;
				}
				default: {
					imageName = 'assets/jelly1.png';
					bodySize = 35;
					break;
				}
			}
			let body = Bodies.circle(x + Common.random(100, 120), y, bodySize, {
				restitution: 0.4,
				frictionAir: 0,
				render: {
					sprite: {
						texture: imageName,
						xScale: 0.1,
						yScale: 0.1
					}
				}
			});

			Body.setVelocity(body, { x: Common.random(-1, 1), y: Common.random(-1, 1) });
			return body;
		});

		Composite.add(world, stack);

		// add mouse control
		let mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2
				}
			});

		mouseConstraint.mouse.element.removeEventListener(
			'mousewheel',
			mouseConstraint.mouse.mousewheel
		);
		mouseConstraint.mouse.element.removeEventListener(
			'DOMMouseScroll',
			mouseConstraint.mouse.mousewheel
		);
		Composite.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;
		Render.run(render);
	};

	onMount(() => {
		if (screenWidth > 768) {
			renderEngine();
		}
	});
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div class="flex justify-center w-full px-8 pb-8 max-h-[500px]">
	<div
		id="physics-container"
		class="w-full max-w-[2000px] min-h-[300px] xl:min-h-[400px] 2xl:min-h-[500px] h-full rounded-xl border-blue-200 overflow-hidden border-[2px]"
	/>
</div>

<style>
	#physics-container {
		background-image: url('/assets/landingbg.svg');
		background-size: cover;
	}
</style>
