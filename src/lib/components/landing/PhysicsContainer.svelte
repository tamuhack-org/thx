<script lang="ts">
	import { onMount } from 'svelte';
	import Matter from 'matter-js';
	let visibleWalls = false;

	const renderEngine = () => {
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

		let stack = Composites.stack(50, 120, 6, 4, 0, 0, function (x, y) {
			return Bodies.circle(x + Common.random(100, 120), y, 30, {
				restitution: 0.4,
				frictionAir: 0,
				render: {
					sprite: {
						texture: '/assets/fish.svg',
						xScale: Common.random(8, 12) / 100,
						yScale: Common.random(8, 12) / 100
					}
				}
			});
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
		renderEngine();
	});
</script>

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
