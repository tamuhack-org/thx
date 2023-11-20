<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Matter from 'matter-js';
	import Marquee from 'svelte-fast-marquee';
	// Image file path
	const imagePath = '/favicon.png';

	onMount(() => {
		var Engine = Matter.Engine,
			Render = Matter.Render,
			Runner = Matter.Runner,
			Composites = Matter.Composites,
			Common = Matter.Common,
			MouseConstraint = Matter.MouseConstraint,
			Mouse = Matter.Mouse,
			Composite = Matter.Composite,
			Bodies = Matter.Bodies;

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
				background: '#000000',
				wireframeBackground: 'transparent',
				width: width,
				height: height
			}
		});

		// create runner
		var runner = Runner.create();
		Runner.run(runner, engine);

		// Create a rectangular body with the image texture
		const imageBody = Matter.Bodies.rectangle(100, 100, 100, 100, {
			render: {
				sprite: {
					texture: '/static/favicon.png'
				}
			}
		});

		console.log(imageBody.render.sprite?.texture);

		Composite.add(world, [imageBody]);

		let bodies = [
			// walls
			Bodies.rectangle(width / 2, 0, width, 10, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: true
				}
			}),
			Bodies.rectangle(width / 2, height, width, 10, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: true
				}
			}),
			Bodies.rectangle(width, height / 2, 10, height, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: true
				}
			}),
			Bodies.rectangle(0, height / 2, 10, height, {
				isStatic: true,
				restitution: 1,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2,
					visible: true
				}
			})
		];
		Composite.add(world, bodies);

		engine.gravity.y = 0;

		let stack = Composites.stack(50, 120, 8, 5, 0, 0, function (x, y) {
			// Modify polygon rendering properties here
			return Bodies.polygon(x, y, 90, Common.random(20, 50), {
				frictionAir: 0,
				restitution: 0.4,
				render: {
					fillStyle: '#FFFFFF',
					strokeStyle: '#000000',
					lineWidth: 2
				}
			});
		});

		Composite.add(world, stack);

		// add mouse control
		let mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse: mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: true
					}
				}
			});

		Composite.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;
		Render.run(render);
	});
</script>

<div class="flex flex-col h-[calc(100dvh)] w-full gap-32 font-poppins">
	<Marquee class="py-2 bg-black text-white font-semibold">
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
		<p>APPLY NOW • JANUARY 27 - 28, 2024 •&nbsp;</p>
	</Marquee>
	<div class="flex">
		<h1 class="w-full text-center text-4xl lg:text-[200px] text-blue-400 font-black tracking-wider">
			TAMUHACK
		</h1>
	</div>
	<div class="flex px-8">
		<div id="physics-container" class="w-full h-rounded-lg bg-blue-400 overflow-hidden" />
	</div>
</div>
