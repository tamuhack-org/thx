<script>
	import { onMount } from 'svelte';

	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
	import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';

	// On page load
	onMount(() => {
		// Setup
		const SCENE_WIDTH = 350;
		const SCENE_HEIGHT = 350;
		const FOV = 50;
		const CAMERA_DISTANCE = 8;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(FOV, SCENE_WIDTH / SCENE_HEIGHT, 0.1, 1000);
		camera.position.z = CAMERA_DISTANCE;

		// Add friend
		const loader = new GLTFLoader();
		loader.load(
			'/assets/thx_computer.glb',
			(gltf) => {
				scene.add(gltf.scene);
				gltf.scene.scale.set(1.8, 1.8, 1.8);
			},
			undefined,
			(error) => {
				console.error(error);
			}
		);

		// Add lighting
		const light = new THREE.AmbientLight(0xffffff, 1);
		scene.add(light);

		const pointLight = new THREE.PointLight(0xffffff, 0.3);
		pointLight.position.set(0, 3, 0);
		scene.add(pointLight);

		const pointLight2 = new THREE.PointLight(0xffffff, 3);
		pointLight2.position.set(0, 0.5, 5);
		scene.add(pointLight2);
		// Listen for window resize
		let isAnimating = false;
		function handleResize() {
			isAnimating = window.innerWidth > 1280;
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		// Configure Renderer
		const renderer = new THREE.WebGLRenderer({
			antialias: true
		});
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.setClearColor(0xffffff, 1);
		renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT);
		document.getElementById('friend-zone-haha').appendChild(renderer.domElement);

		// Configure Outline Effect
		const outline_brightness_scalar = 0.5;
		const effect = new OutlineEffect(renderer, {
			defaultAlpha: 1.0,
			defaultThickness: 0.004,
			defaultColor: [
				(0 / 255) * outline_brightness_scalar,
				(0 / 255) * outline_brightness_scalar,
				(0 / 255) * outline_brightness_scalar
			]
		});

		// Configure Camera Orbit Controls
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableZoom = false;
		controls.enablePan = false;
		controls.enableDamping = true;
		controls.dampingFactor = 0.01;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 2.0;
		controls.minPolarAngle = Math.PI / 6;
		controls.maxPolarAngle = (5 * Math.PI) / 6;

		// Animate
		function animate() {
			requestAnimationFrame(animate);

			if (isAnimating) {
				controls.update();
				renderer.render(scene, camera);
				effect.render(scene, camera);
			}
		}
		animate();
	});
</script>

<div id="friend-zone-haha" class="hidden xl:block"></div>

<style>
	#friend-zone-haha {
		filter: invert(1) brightness(0.8) contrast(2.5) saturate(1.5);
		cursor: grab;
	}

	#friend-zone-haha:active {
		cursor: grabbing;
	}
</style>
