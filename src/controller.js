var plGeometry = new THREE.PlaneBufferGeometry(50, 50, 32, 32);

var planeMat = new THREE.MeshBasicMaterial({ color: 'gray', map: asphaltTexture, side: THREE.DoubleSide });

var plane = new THREE.Mesh(plGeometry, planeMat);

// Plane deviation
for (let firstIterator = 0; firstIterator < 33; firstIterator++) 
{
    for (let secondIterator = 0; secondIterator < 33; secondIterator++) 
    {
        plGeometry.attributes.position.array[3 * (firstIterator * 33 + secondIterator) + 2] = random(-0.5, 0, true);
    }
}

plGeometry.attributes.position.needsUpdate = true;
plGeometry.computeVertexNormals();

plane.rotateX(-Math.PI / 2);
plane.position.set(18.5, 0, 20);

scene.add(plane);

var cloudsCount = random(3, 9);

for (let cloudIterator = 0; cloudIterator < cloudsCount; cloudIterator++)
{
    var cloud = CloudGenerator.create();
    
    scene.add(cloud);
    clouds.push(cloud);
}

var fStageGeometry = new THREE.BoxGeometry(19, 6.5, 18);
var sStageGeometry = new THREE.BoxGeometry(32, 3.5, 31);
var tStageGeometry = new THREE.BoxGeometry(10, 5, 11);

var foStageGeometry = new THREE.BoxGeometry(21, 1, 7);
var fiStageGeometry = new THREE.BoxGeometry(0.25, 0.75, 7);
var siStageGeometry = new THREE.BoxGeometry(0.25, 0.5, 7);
var seStageGeometry = new THREE.BoxGeometry(0.25, 0.25, 7);

var eStageGeometry = new THREE.BoxGeometry(0.75, 3, 3);
var nStageGeometry = new THREE.BoxGeometry(0.75, 2.25, 3);
var teStageGeometry = new THREE.BoxGeometry(0.75, 1.5, 3);
var elStageGeometry = new THREE.BoxGeometry(0.75, 0.75, 3);

var stageMat = new THREE.MeshPhongMaterial({ color: 'gray', map: asphaltTexture });

var firstStage = new THREE.Mesh(fStageGeometry, stageMat);
var secondStage = new THREE.Mesh(sStageGeometry, stageMat);
var thirdStage = new THREE.Mesh(tStageGeometry, stageMat);

var fourthStage = new THREE.Mesh(foStageGeometry, stageMat);
var fifthStage = new THREE.Mesh(fiStageGeometry, stageMat);
var sixthStage = new THREE.Mesh(siStageGeometry, stageMat);
var seventhStage = new THREE.Mesh(seStageGeometry, stageMat);

var eightStage = new THREE.Mesh(eStageGeometry, stageMat);
var ninthStage = new THREE.Mesh(nStageGeometry, stageMat);
var tenthStage = new THREE.Mesh(teStageGeometry, stageMat);
var eleventhStage = new THREE.Mesh(elStageGeometry, stageMat);

firstStage.position.set(3, 2.75, 4);
firstStage.castShadow = true;
firstStage.receiveShadow = true;

secondStage.position.set(9.5, 1.25, 10.5);
secondStage.castShadow = true;
secondStage.receiveShadow = true;

thirdStage.position.set(38.5, 2, 0.5);
thirdStage.castShadow = true;
thirdStage.receiveShadow = true;

var bridge = new THREE.Group();

// Stairs and bridge
fourthStage.position.set(23, 5, 2.5);
fourthStage.castShadow = true;
fourthStage.receiveShadow = true;

fifthStage.position.set(33.625, 4.875, 2.5);
fifthStage.castShadow = true;
fifthStage.receiveShadow = true;

sixthStage.position.set(33.875, 4.75, 2.5);
sixthStage.castShadow = true;
sixthStage.receiveShadow = true;

seventhStage.position.set(34.125, 4.625, 2.5);
seventhStage.castShadow = true;
seventhStage.receiveShadow = true;

bridge.add(fourthStage);
bridge.add(fifthStage);
bridge.add(sixthStage);
bridge.add(seventhStage);

var sStairs = new THREE.Group();

eightStage.position.set(-1, 4.5, 13.375);
eightStage.rotation.set(0, Math.PI / 2, 0);
eightStage.castShadow = true;
eightStage.receiveShadow = true;

ninthStage.position.set(-1, 4.125, 14.125);
ninthStage.rotation.set(0, Math.PI / 2, 0);
ninthStage.castShadow = true;
ninthStage.receiveShadow = true;

tenthStage.position.set(-1, 3.75, 14.875);
tenthStage.rotation.set(0, Math.PI / 2, 0);
tenthStage.castShadow = true;
tenthStage.receiveShadow = true;

eleventhStage.position.set(-1, 3.375, 15.625);
eleventhStage.rotation.set(0, Math.PI / 2, 0);
eleventhStage.castShadow = true;
eleventhStage.receiveShadow = true;

sStairs.add(eightStage);
sStairs.add(ninthStage);
sStairs.add(tenthStage);
sStairs.add(eleventhStage);

var tStairs = sStairs.clone();
tStairs.position.set(2.55, -3, 13);

scene.add(firstStage);
scene.add(secondStage);
scene.add(thirdStage);
scene.add(bridge);
scene.add(sStairs);
scene.add(tStairs);

// Up
for (let houseIterator = -2; houseIterator < 17; houseIterator++) 
{
    if(houseIterator == 5 || houseIterator == 10 || houseIterator == 13)
    {
        continue;
    }

    var yPlus = houseIterator <= 5 ? 6 + 0.25 : (houseIterator <= 10 ? 3 + 0.25 : (houseIterator >= 13 ? 4.5 + 0.25 : 0));
    var zPlus = houseIterator <= 10 || houseIterator >= 13 ? -3 : 0;

    var currentHouse = HouseGenerator.create(houseIterator * 2.5, yPlus + 0, zPlus + random(0, 1, true));
    currentHouse.rotation.set(0, (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}

// Left
for (let houseIterator = 0; houseIterator < 16; houseIterator++) 
{
    if(houseIterator == 5 || houseIterator == 10)
    {
        continue;
    }
    
    var yPlus = houseIterator <= 5 ? 6 + 0.25 : (houseIterator <= 10 ? 3 + 0.25 : 0);
    var xPlus = houseIterator <= 10 ? -3 : 0;

    var currentHouse = HouseGenerator.create(xPlus + -2 + random(0, 1, true), yPlus + 0, 0.5 + houseIterator * 2.5);
    currentHouse.rotation.set(0, Math.PI / 2 + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}

// Right
for (let houseIterator = 0; houseIterator < 16; houseIterator++) 
{
    if(houseIterator == 2)
    {
        continue;
    }

    var yPlus = houseIterator <= 2 ? 4.5 + 0.25 : 0;
    var xPlus = houseIterator <= 2 ? 3 : 0;

    var currentHouse = HouseGenerator.create(xPlus + 38 + random(0, 1, true), yPlus + 0, 0.5 + houseIterator * 2.5);
    currentHouse.rotation.set(0, -Math.PI / 2 + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}

// Down
for (let houseIterator = 0; houseIterator < 16; houseIterator++) 
{
    if(houseIterator == 12 || houseIterator == 13)
    {
        continue;
    }

    var currentHouse = HouseGenerator.create(houseIterator * 2.5, 0, 40 + random(0, 1, true));
    currentHouse.rotation.set(0, Math.PI + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}

// Additional
for (let houseIterator = 1; houseIterator < 11; houseIterator++) 
{
    if(houseIterator == 6 || houseIterator == 5)
    {
        continue;
    }
    else if(houseIterator == 10)
    {
        var currentHouse = HouseGenerator.create(35.375, 0, houseIterator * 2.5 - 1);
        currentHouse.rotation.set(0, (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);
        
        scene.add(currentHouse);

        continue;
    }

    var currentHouse = HouseGenerator.create(32 + random(0, 1, true), 0, 1 + houseIterator * 2.5);
    currentHouse.rotation.set(0, Math.PI / 2 + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);
    
    scene.add(currentHouse);
}

for (let rowIterator = 0; rowIterator < 2; rowIterator++) 
{
    for (let houseIterator = 1; houseIterator < 10; houseIterator++) 
    {
        if(houseIterator == 5 || (rowIterator == 1 && (houseIterator == 7 || houseIterator == 8)))
        {
            continue;
        }
    
        var yPlus = houseIterator <= 5 ? 6 + 0.25 : (houseIterator <= 10 ? 3 + 0.25 : (houseIterator >= 13 ? 4.5 + 0.25 : 0));
    
        var currentHouse = HouseGenerator.create(0.3 + houseIterator * 2.5, yPlus + 0, 8 + rowIterator * 3 + random(0, 1, true));
        currentHouse.rotation.set(0, (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);
    
        scene.add(currentHouse);
    }
}

for (let rowIterator = -1; rowIterator < 3; rowIterator++) 
{
    for (let houseIterator = 2; houseIterator < 10; houseIterator++) 
    {
        if(rowIterator == 1 || rowIterator == -1)
        {
            houseIterator = 9;
        }
        else if(rowIterator == 0 && (houseIterator == 5 || houseIterator == 6))
        {
            continue;
        }

        var currentHouse = HouseGenerator.create(0.3 + houseIterator * 2.5, 3.25 + 0, 18 + rowIterator * 3 + random(0, 1, true));
        currentHouse.rotation.set(0, (rowIterator == 1 || rowIterator == -1 ? Math.PI / 2 : 0) - (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);
    
        scene.add(currentHouse);
    }
}

for(let rowIterator = 1; rowIterator < 5; rowIterator++)
{
    for (let houseIterator = 11; houseIterator < 16; houseIterator++) 
    {
        if((rowIterator == 1 && (houseIterator == 15 || houseIterator == 14)) || (rowIterator == 2 && (houseIterator == 11 || houseIterator == 12)) || (rowIterator == 3 && (houseIterator == 15 || houseIterator == 14)) || (rowIterator == 4 && (houseIterator == 11 || houseIterator == 12)))
        {
            continue;
        }

        var currentHouse = HouseGenerator.create(rowIterator * 6 - 2 + random(0, 1, true), 0, 0.5 + houseIterator * 2.5);
        currentHouse.rotation.set(0, -Math.PI / 2 + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

        scene.add(currentHouse);
    }
}

for (let houseIterator = 9; houseIterator < 13; houseIterator++) 
{
    var currentHouse = HouseGenerator.create(houseIterator * 2.5, 0, 30 + random(0, 1, true));
    currentHouse.rotation.set(0, Math.PI + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}

for (let houseIterator = 15; houseIterator < 17; houseIterator++) 
{
    var currentHouse = HouseGenerator.create(32 + random(0, 0.5, true), 0, 0.5 + houseIterator * 2.5);
    currentHouse.rotation.set(0, -Math.PI / 2 + (houseIterator % 2 == 0 ? 1 : (-1)) * random(0, Math.PI / 10, true), 0);

    scene.add(currentHouse);
}