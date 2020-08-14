import React, {Component} from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// const Wrapper = {
//   position:'absolute',
//   left:'300px',
//   bottom:'0px',
//   height:'100%'
// }

class MonkeyWrapper extends Component{
  componentDidMount(){
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0x000000, 0 );
    //renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );
    camera.position.set( 0, 0, 3);

    const blueLight = new THREE.AmbientLight('rgb(77, 53, 172)', 0.5);
    const PurpleLight = new THREE.AmbientLight('rgb(151, 49, 185)', 0.5);
    const lightSource = new THREE.DirectionalLight('rgb(255,255,255)');

    blueLight.position.set(-1.5 , 3.2, 6);
    PurpleLight.position.set(-1.5 , 3.2, 6);
    lightSource.position.set(-1.5 , 3.2, 6);

    scene.add(blueLight);
    scene.add(PurpleLight);
    scene.add(lightSource);

    const canvas = renderer.domElement;

    //Define consts that will be used to move camera on mousemove
    let mouseX = undefined;
    let mouseY = undefined
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;


    function resizeRendererToDisplaySize(renderer) {
   
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    // GLTF LOADER
    const controls = new OrbitControls(camera, canvas);
    const gltfLoader = new GLTFLoader();
    const url = '../../monkey/scene.gltf';
    let root;
    gltfLoader.load(url, (gltf) => {
      root = gltf.scene;
      root.scale.set(6,6,6)
      root.position.set(0,0,0)
      scene.add(root);
      // root.rotateY(0);
    });



    const animate = function () {
      requestAnimationFrame( animate );
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
    //   //Move camera according to mouse input
    // console.log(camera.position.x);

      render();
    };

    function onDocumentMouseMove( event ) {
      mouseX = ( event.clientX - windowHalfX ) / 1000;
      mouseY = ( event.clientY - windowHalfY ) / 1000;
    }
    function tilt(event){
      mouseX = Math.round(event.gamma * 2);
      mouseY = Math.round(event.beta * 2);
    }
    
    if(matchMedia('(pointer:fine)').matches){
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    } else {
      document.addEventListener( 'deviceorientation', tilt, false );
    }

    const render = () => {

      if (root){
      root.rotation.x += ( mouseY - root.rotation.x ) * .05;
      root.rotation.y += ( mouseX - root.rotation.y ) * .05;
      }
      renderer.render( scene, camera );

    }

    animate();
  }
  render(){
    return(
        <div ref={ref => this.mount = ref}
        style={{height:'100%'}} 
        />
    )
  }

}

export default MonkeyWrapper