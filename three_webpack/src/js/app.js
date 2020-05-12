import {OrbitControls} from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshLambertMaterial, Mesh} from 'three';


let scene = new Scene();
let camera = new PerspectiveCamera( 100, window.innerWidth /window.innerHeight, 0.1, 1000 );
let renderer = new WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#e5e5e5");
document.body.appendChild( renderer.domElement );

let geometry = new BoxGeometry(50, 50, 100)
let material = new MeshLambertMaterial({color: 0xFFCc00});
let mesh = new Mesh(geometry, material);
scene.add(mesh);

let controls = new OrbitControls ( camera, renderer.domElement );

// initialise
camera.position.set( 0, 20, 100 );
camera.updateProjectionMatrix();
controls.update();

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
}

animate();