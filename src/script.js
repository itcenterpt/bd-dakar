import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'


const scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var d = 20
const camera = new THREE.OrthographicCamera( -d * aspect, d *aspect,d,-d,1,1000);

camera.position.set(40,40,40);
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(50,10,50);

//const texture = new THREE.TextureLoader().load( '../img/desertUVmap.jpg');

const light = new THREE.AmbientLight(0x404040,3);
const pointLight = new THREE.PointLight(0x404040,10)
pointLight.position.set(40,45,40)
//const material = new THREE.MeshBasicMaterial( { material:texture } );
const material = new THREE.MeshPhysicalMaterial( { } );


const plane = new THREE.Mesh( geometry, material );
scene.add(pointLight);
scene.add( plane );

