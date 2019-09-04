var scene, renderer, camera;
var cube;
var controls;

init();
animate();

function init()
{
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize (width, height);
    renderer.domElement.setAttribute("data-hide-on-relar", "")

    loader = new THREE.FBXLoader();

    loader.load('assets/Humana_MyPack_20190830.fbx', function ( object ) {
        
        console.log(object);
        scene.add( object );
        object.position.y = -9;

        camera.position = object.position;

        camera.position.z = camera.position.z + width > height ? 30 : 40;
    
    }, undefined, function ( e ) {
    
      console.error( e );
    
    } );
    
    document.body.appendChild(renderer.domElement);

    scene = new THREE.Scene();

    scene.background = new THREE.Color("white");

    var light = new THREE.AmbientLight("#f3f3f3", 1.2); // soft white light
    light.position.y = 26;
    scene.add( light );

    camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);

    controls = new THREE.OrbitControls (camera, renderer.domElement);

    controls.enableZoom = false;
    controls.enablePan = false;
    
    var gridXZ = new THREE.GridHelper(100, 10);
    gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
    // scene.add(gridXZ);
}

function animate()
{
    controls.update();
    requestAnimationFrame ( animate );  
    renderer.render (scene, camera);
}