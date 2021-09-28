import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene();

//Ortografic camera
// var aspect = window.innerWidth / window.innerHeight;
// var d = 20
// const camera = new THREE.OrthographicCamera( -d * aspect, d *aspect,d,-d,1,1000);

// camera.position.set(40,40,40);
// camera.lookAt(scene.position);

//Perspective camera




const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Lights
const pointLight = new THREE.PointLight(0x404040,10)
pointLight.position.set(0,20,0);

//Plane
const geometry = new THREE.BoxGeometry(50,5,50);

const material = new THREE.MeshPhysicalMaterial( { } );

const plane = new THREE.Mesh( geometry, material );
plane.position.set(0,0,0);

//Player
const SphereGeometry = new THREE.BoxGeometry(5,5,5)
const sphereMaterial = new THREE.MeshPhysicalMaterial( { } );

const sphere = new THREE.Mesh( SphereGeometry,sphereMaterial);
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

