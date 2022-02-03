// Info management
var infoDiv = document.getElementById('info');

// Audio management
var bgSong = document.getElementById('bg');

var volume = 0.15;
bgSong.volume = volume;
bgSong.play();

var clock = new THREE.Clock();
var time = 0;
var deltaTime = 0;

var clouds = [];

// Animate function
function animate()
{
    deltaTime = clock.getDelta();
    time += deltaTime;
    
    controls.update(time);
    renderer.render(scene, camera);

    clouds.forEach(cl => 
    {
        // This is kinda an optimisation because I assume a person will turn off the clouds if it lags with them
        if(cl.visible)
        {
            cl.position.x += (between(cl.position.z, -1, 1) ? 1 : cl.position.z) * 0.05 * deltaTime;
            cl.position.z += (between(cl.position.x, -1, 1) ? 1 : cl.position.x) * 0.025 * deltaTime;
        
            // Borders
            if(cl.position.x > 50)
            {
                cl.position.x = -10;
            }
            else if(cl.position.x < -10)
            {
                cl.position.x = 50;
            }

            if(cl.position.z > 50)
            {
                cl.position.z = -10;
            }
            else if(cl.position.z < -10)
            {
                cl.position.z = 50;
            }
        }
    });

    if(time > 10 && !infoDiv.hidden)
    {
        infoDiv.style.display = 'none'; 
    }
}

// Renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Scene setup
var scene = new THREE.Scene();
scene.fog = new THREE.Fog('#b5b7ba', 10, 200);
renderer.setClearColor(scene.fog.color);

// Aspect
var aspect = window.innerWidth / window.innerHeight;

// Camera setup
var camera = new THREE.PerspectiveCamera(30, aspect);
camera.position.set(18, 0, 100);
camera.lookAt(18, 0, 100);

// Light setup
var light = new THREE.SpotLight('white', 1);
light.position.set(20, 500, 30);
light.target = scene;
light.angle = Math.PI / 20;
light.penumbra = 1;
light.castShadow = true;
light.shadow.mapSize.width = 1024 / 2; 
light.shadow.mapSize.height = 1024 / 2; 
light.shadow.camera.near = 50; 
light.shadow.camera.far = 200; 
light.shadow.camera.left = -50; 
light.shadow.camera.right = 50; 
light.shadow.camera.top = -50; 
light.shadow.camera.bottom = 50; 
light.shadow.bias = -0.0001; 
light.shadow.radius = 3;
scene.add(light);

var contraLight = new THREE.SpotLight('white', 0.7);
contraLight.position.set(-10, 130, -40);
contraLight.target = scene;
contraLight.angle = Math.PI / 20;
contraLight.penumbra = 1;
scene.add(contraLight);

var topLight = new THREE.SpotLight('white', 0.7);
topLight.position.set(0, 100, 0);
topLight.target = scene;
topLight.angle = Math.PI / 20 / 1;
topLight.penumbra = 1;
scene.add(topLight);

var ambLight = new THREE.AmbientLight('white', 0.7);
scene.add(ambLight);

// Orbit controls
var controls =  new THREE.OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = (85 * Math.PI) / 180.0;
controls.target.set(18, 0, 20);
controls.autoRotate = true;
  
// Restart auto rotation after the last interaction with a 3000 ms (3 s) timeout
// Only if the rotation was not stopped by the user
controls.addEventListener('end', function()
{
    if(controls.autoRotate)
    {
        controls.autoRotate = false;
        autorotateTimeout = setTimeout(function()
        {
            controls.autoRotate = true;
        }, 3000);
    }
});

controls.update();

// Textures setup
var textureLoader = new THREE.TextureLoader();
const MAX_ANISOTROPY = renderer.capabilities.getMaxAnisotropy();

var skyTexture = textureLoader.load(skyTile);

skyTexture.wrapS = THREE.MirroredRepeatWrapping;
skyTexture.wrapT = THREE.MirroredRepeatWrapping;

scene.background = skyTexture;

var asphaltTexture = textureLoader.load(asphaltTile);

asphaltTexture.wrapS = THREE.RepeatWrapping;
asphaltTexture.wrapT = THREE.RepeatWrapping;
asphaltTexture.repeat.set(20, 20);
asphaltTexture.anisotropy = MAX_ANISOTROPY;

var brickTexture = textureLoader.load(brickTile);

brickTexture.wrapS = THREE.RepeatWrapping;
brickTexture.wrapT = THREE.RepeatWrapping;
brickTexture.repeat.set(3, 1);
brickTexture.anisotropy = MAX_ANISOTROPY;

var grayBrickTexture = textureLoader.load(grayBrickTile);

grayBrickTexture.wrapS = THREE.RepeatWrapping;
grayBrickTexture.wrapT = THREE.RepeatWrapping;
grayBrickTexture.repeat.set(2, 1);
grayBrickTexture.anisotropy = MAX_ANISOTROPY;

var stoneWallTexture = textureLoader.load(stoneWallTile);

stoneWallTexture.wrapS = THREE.RepeatWrapping;
stoneWallTexture.wrapT = THREE.RepeatWrapping;
stoneWallTexture.repeat.set(2, 2);
stoneWallTexture.anisotropy = MAX_ANISOTROPY;

var concreteTexture = textureLoader.load(concreteTile);

concreteTexture.wrapS = THREE.RepeatWrapping;
concreteTexture.wrapT = THREE.RepeatWrapping;
concreteTexture.repeat.set(3, 3);
concreteTexture.anisotropy = MAX_ANISOTROPY;

var crackedConcreteTexture = textureLoader.load(crackedConcreteTile);

crackedConcreteTexture.wrapS = THREE.RepeatWrapping;
crackedConcreteTexture.wrapT = THREE.RepeatWrapping;
crackedConcreteTexture.repeat.set(1, 3);
crackedConcreteTexture.anisotropy = MAX_ANISOTROPY;

var flatTexture = textureLoader.load(flatTile);

flatTexture.wrapS = THREE.RepeatWrapping;
flatTexture.wrapT = THREE.RepeatWrapping;
flatTexture.repeat.set(3, 2);
flatTexture.anisotropy = MAX_ANISOTROPY;

var whiteWoodTexture = textureLoader.load(whiteWoodTile);

whiteWoodTexture.wrapS = THREE.RepeatWrapping;
whiteWoodTexture.wrapT = THREE.RepeatWrapping;
whiteWoodTexture.repeat.set(3, 3);
whiteWoodTexture.anisotropy = MAX_ANISOTROPY;

var windowTexture = textureLoader.load(windowTile);

windowTexture.wrapS = THREE.RepeatWrapping;
windowTexture.wrapT = THREE.RepeatWrapping;
windowTexture.repeat.set(1, 1);
windowTexture.anisotropy = MAX_ANISOTROPY;

var woodDoorTexture = textureLoader.load(woodDoorTile);

woodDoorTexture.wrapS = THREE.RepeatWrapping;
woodDoorTexture.wrapT = THREE.RepeatWrapping;
woodDoorTexture.repeat.set(1, 1);
woodDoorTexture.anisotropy = MAX_ANISOTROPY;

var fCloudTexture = textureLoader.load(fCloudTile);

fCloudTexture.wrapS = THREE.RepeatWrapping;
fCloudTexture.wrapT = THREE.RepeatWrapping;
fCloudTexture.repeat.set(1, 1);
fCloudTexture.anisotropy = MAX_ANISOTROPY;

var sCloudTexture = textureLoader.load(sCloudTile);

sCloudTexture.wrapS = THREE.RepeatWrapping;
sCloudTexture.wrapT = THREE.RepeatWrapping;
sCloudTexture.repeat.set(1, 1);
sCloudTexture.anisotropy = MAX_ANISOTROPY;

var tCloudTexture = textureLoader.load(tCloudTile);

tCloudTexture.wrapS = THREE.RepeatWrapping;
tCloudTexture.wrapT = THREE.RepeatWrapping;
tCloudTexture.repeat.set(1, 1);
tCloudTexture.anisotropy = MAX_ANISOTROPY;