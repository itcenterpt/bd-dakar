
import * as THREE from 'three'
import { PointLightShadow } from 'three';

const scene = new THREE.Scene();

//Ortografic camera
// var aspect = window.innerWidth / window.innerHeight;
// var d = 20
// const camera = new THREE.OrthographicCamera( -d * aspect, d *aspect,d,-d,1,1000);

// camera.position.set(40,40,40);
// camera.lookAt(scene.position);

//Perspective camera


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
renderer

document.body.appendChild( renderer.domElement );

//Lights
const pointLight = new THREE.PointLight(0x404040,10)
pointLight.position.set(0,20,0);

//Plane
const geometry = new THREE.BoxGeometry(50,5,50);

const material = new THREE.MeshPhysicalMaterial( { } );

const plane = new THREE.Mesh( geometry, material );
plane.position.set(0,0,0);
plane.material.color.setHex(0xff9a00);

//Player
const SphereGeometry = new THREE.BoxGeometry(5,5,5)
const sphereMaterial = new THREE.MeshPhysicalMaterial( { } );


const sphere = new THREE.Mesh( SphereGeometry,sphereMaterial);
sphere.material.color.setColorName('red');
sphere.position.set(0,10,0);



const camera = new THREE.PerspectiveCamera( 100,window.innerWidth /window.innerHeight, 1, 1000 );
 camera.position.x = sphere.position.x;
 camera.position.y = sphere.position.y + 7,5;
 camera.position.z = sphere.position.z + 15;
 camera.lookAt(sphere.position);

//Scene
scene.add(pointLight);
scene.add( plane );
scene.add(sphere);



function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}
animate();
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// // Objects
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// // Materials

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color(0xff0000)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */

// const clock = new THREE.Clock()

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()

