import React, {Component} from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
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
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    //renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );

    const light = new THREE.AmbientLight(0x404040);
    const lightSource = new THREE.DirectionalLight('rgb(0,50,204)');
    light.position.set(0, 10, 0);
    scene.add(light);
    scene.add(lightSource);

    const canvas = renderer.domElement;
    camera.position.z = 20;
    camera.position.y = 10;
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
    //const controls = new OrbitControls(camera, canvas);
    const gltfLoader = new GLTFLoader();
    const url = '../../monkey/scene.gltf';

    gltfLoader.load(url, (gltf) => {
      const root = gltf.scene;
      scene.add(root);
      root.rotateY(+45);
    });



    const animate = function () {
      requestAnimationFrame( animate );
    
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render( scene, camera );
    };
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