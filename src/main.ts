import * as THREE from 'three';
import { REVISION } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import gsap from 'gsap'
import GUI from 'lil-gui'


// init

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 1, 1)

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement)
const isPlaying = true;
const gui = new GUI()

controls.update()

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// animation

function animation(time: any) {
  requestAnimationFrame(animation);
   mesh.rotation.x = time / 2000; 
   mesh.rotation.y = time / 1000;
/* 	controls.update(); */
  renderer.render(scene, camera);

}
