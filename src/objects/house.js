(function (HouseGenerator) 
{
    // Generate a house (5 types)
    HouseGenerator.create = function(x = 0, y = 0, z = 0, type = random())
    {
        var house = new THREE.Group();

        switch(type)
        {
            case 1:
                var windowOn = random(1, 11) % 2 == 0;
                var isGray = random(1, 20) % 2 == 0;

                // Create an array of materials to be used in a cube, one for each side
                var cubeMaterialArray = [];

                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Right
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture }));  // Left
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 'gray', map: concreteTexture })); // Up
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Down
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Front
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Back

                var windowOutMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });
                var windowInMatOn = new THREE.MeshPhongMaterial({ color: 'goldenrod', map: windowTexture });
                var windowInMatOff = new THREE.MeshPhongMaterial({ color: 'gray', map: windowTexture });
                
                var doorMat = new THREE.MeshPhongMaterial({ map: isGray ? whiteWoodTexture : woodDoorTexture });

                var width = random(2.2, 2.5, true);
                var pBoxGeometry = new THREE.BoxGeometry(2, 1, 1);
                var hBoxGeometry = new THREE.BoxGeometry(width, 1, 1.25);

                var windowOutGeometry = new THREE.BoxGeometry(0.8, 0.75, 1.35);
                var windowInGeometry = new THREE.BoxGeometry(0.7, 0.65, 1.36);

                var dBoxGeometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
                                
                var fHouseWall = new THREE.Mesh(pBoxGeometry, cubeMaterialArray);
                var houseSecond = new THREE.Mesh(hBoxGeometry, cubeMaterialArray);
                
                var fWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var fWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var sWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var sWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var door = new THREE.Mesh(dBoxGeometry, doorMat);

                fHouseWall.position.set(0, 0.5, 0);
                fHouseWall.castShadow = true;
                fHouseWall.receiveShadow = true;

                houseSecond.position.set(0, 1.5, 0);
                houseSecond.castShadow = true;
                houseSecond.receiveShadow = true;

                var fWindowX = random(0.5, 0.6, true);
                var fWindowY = random(1.4, 1.51, true);

                var sWindowX = random(-0.5, -0.4, true);
                var sWindowY = random(1.4, 1.51, true);

                fWindowOut.position.set(fWindowX, fWindowY, 0);
                fWindowOut.castShadow = true;
                fWindowOut.receiveShadow = true;

                fWindowIn.position.set(fWindowX, fWindowY, 0);
                fWindowIn.castShadow = true;
                fWindowIn.receiveShadow = true;

                sWindowOut.position.set(sWindowX, sWindowY, 0);
                sWindowOut.castShadow = true;
                sWindowOut.receiveShadow = true;

                sWindowIn.position.set(sWindowX, sWindowY, 0);
                sWindowIn.castShadow = true;
                sWindowIn.receiveShadow = true;

                door.position.set(0, 0.38, 0.28);
                door.castShadow = true;
                door.receiveShadow = true;
                
                house.add(fHouseWall);
                house.add(houseSecond);
                house.add(fWindowOut);
                house.add(fWindowIn);
                house.add(sWindowOut);
                house.add(sWindowIn);
                house.add(door);
            break;
            case 2:
                var windowOn = random(1, 11) % 2 == 0;
                var isGray = random(1, 20) % 2 == 0;

                // Create an array of materials to be used in a cube, one for each side
                var cubeMaterialArray = [];

                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: crackedConcreteTexture  })); // Right
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture }));  // Left
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 'gray', map: concreteTexture })); // Up
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Down
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Front
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: isGray ? grayBrickTexture : brickTexture })); // Back

                var windowOutMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });
                var windowInMatOn = new THREE.MeshPhongMaterial({ color: 'goldenrod', map: windowTexture });
                var windowInMatOff = new THREE.MeshPhongMaterial({ color: 'gray', map: windowTexture });

                var doorMat = new THREE.MeshPhongMaterial({ map: isGray ? whiteWoodTexture : woodDoorTexture });

                var width = random(1.9, 2.5, true);
                var pBoxGeometry = new THREE.BoxGeometry(width, 1.5, 1.5);
                var hBoxGeometry = new THREE.BoxGeometry(width, 1.5, 1.5);

                var windowOutGeometry = new THREE.BoxGeometry(0.6, 0.55, 1.65);
                var windowInGeometry = new THREE.BoxGeometry(0.5, 0.45, 1.66);

                var dBoxGeometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
                                
                var fHouseWall = new THREE.Mesh(pBoxGeometry, cubeMaterialArray);
                var houseSecond = new THREE.Mesh(hBoxGeometry, cubeMaterialArray);
                
                var fWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var fWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var sWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var sWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var tWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var tWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var foWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var foWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var door = new THREE.Mesh(dBoxGeometry, doorMat);

                fHouseWall.position.set(0, 0.75, 0);
                fHouseWall.castShadow = true;
                fHouseWall.receiveShadow = true;

                houseSecond.position.set(0, 2.25, 0);
                houseSecond.castShadow = true;
                houseSecond.receiveShadow = true;

                var fWindowX = random(0.5, 0.6, true);
                var fWindowY = random(2.35, 2.55, true);

                var sWindowX = random(-0.5, -0.4, true);
                var sWindowY = random(2.35, 2.55, true);

                var tWindowX = random(-0.5, -0.4, true);
                var tWindowY = random(1.4, 1.8, true);

                var foWindowX = random(0.5, 0.6, true);
                var foWindowY = random(1.4, 1.8, true);

                fWindowOut.position.set(fWindowX, fWindowY, 0);
                fWindowOut.castShadow = true;
                fWindowOut.receiveShadow = true;

                fWindowIn.position.set(fWindowX, fWindowY, 0);
                fWindowIn.castShadow = true;
                fWindowIn.receiveShadow = true;

                sWindowOut.position.set(sWindowX, sWindowY, 0);
                sWindowOut.castShadow = true;
                sWindowOut.receiveShadow = true;

                sWindowIn.position.set(sWindowX, sWindowY, 0);
                sWindowIn.castShadow = true;
                sWindowIn.receiveShadow = true;

                tWindowOut.position.set(tWindowX, tWindowY, 0);
                tWindowOut.castShadow = true;
                tWindowOut.receiveShadow = true;

                tWindowIn.position.set(tWindowX, tWindowY, 0);
                tWindowIn.castShadow = true;
                tWindowIn.receiveShadow = true;

                foWindowOut.position.set(foWindowX, foWindowY, 0);
                foWindowOut.castShadow = true;
                foWindowOut.receiveShadow = true;

                foWindowIn.position.set(foWindowX, foWindowY, 0);
                foWindowIn.castShadow = true;
                foWindowIn.receiveShadow = true;

                door.position.set(0, 0.38, 0.53);
                door.castShadow = true;
                door.receiveShadow = true;
                
                var windowsCount = random(1, 5);

                house.add(fHouseWall);
                house.add(houseSecond);
                house.add(fWindowOut);
                house.add(fWindowIn);
                if(windowsCount > 1)
                {
                    house.add(sWindowOut);
                    house.add(sWindowIn);
                    if(windowsCount > 2)
                    {

                        house.add(tWindowOut);
                        house.add(tWindowIn);
                        if(windowsCount > 3)
                        {
                            house.add(foWindowOut);
                            house.add(foWindowIn);
                        }
                    }
                }
                house.add(door);
            break;
            case 3:
                var windowOn = random(1, 11) % 2 == 0;

                // Create an array of materials to be used in a cube, one for each side
                var cubeMaterialArray = [];

                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: stoneWallTexture  })); // Right
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: stoneWallTexture }));  // Left
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 'gray', map: crackedConcreteTexture })); // Up
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: crackedConcreteTexture })); // Down
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: stoneWallTexture })); // Front
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ map: stoneWallTexture })); // Back

                var windowOutMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });
                var windowInMatOn = new THREE.MeshPhongMaterial({ color: 'goldenrod', map: windowTexture });
                var windowInMatOff = new THREE.MeshPhongMaterial({ color: 'gray', map: windowTexture });

                var doorMat = new THREE.MeshPhongMaterial({ map: woodDoorTexture });

                var hBoxGeometry = new THREE.BoxGeometry(2, 1.5, 1.5);

                var windowOutGeometry = new THREE.BoxGeometry(0.6, 0.55, 1.65);
                var windowInGeometry = new THREE.BoxGeometry(0.5, 0.45, 1.66);

                var dBoxGeometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
                
                var houseObj = new THREE.Mesh(hBoxGeometry, cubeMaterialArray);
                
                var fWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var fWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var sWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var sWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var door = new THREE.Mesh(dBoxGeometry, doorMat);

                houseObj.position.set(0, 0.75, 0);
                houseObj.castShadow = true;
                houseObj.receiveShadow = true;

                fWindowOut.position.set(0.5, 1, 0);
                fWindowOut.castShadow = true;
                fWindowOut.receiveShadow = true;

                fWindowIn.position.set(0.5, 1, 0);
                fWindowIn.castShadow = true;
                fWindowIn.receiveShadow = true;

                sWindowOut.position.set(-0.5, 1, 0);
                sWindowOut.castShadow = true;
                sWindowOut.receiveShadow = true;

                sWindowIn.position.set(-0.5, 1, 0);
                sWindowIn.castShadow = true;
                sWindowIn.receiveShadow = true;

                door.position.set(0.77, 0.38, 0);
                door.rotation.set(0, -Math.PI / 2, 0);
                door.castShadow = true;
                door.receiveShadow = true;

                house.add(houseObj);
                house.add(door);
                house.add(fWindowOut);
                house.add(fWindowIn);
                house.add(sWindowOut);
                house.add(sWindowIn);
            break;
            case 4:
                var windowOn = random(1, 11) % 2 == 0;
                var isGray = random(1, 20) % 2 == 0;

                // A selection of colors that I think look good
                var colorArray = ['#ffc800', '#68d9e8', '#218ab8', '#19b067', '#7960bf', '#e59437', '#ecedab', '#ededed', '#f084d1']
                var randomColor = colorArray[random(1, 10)];

                // Create an array of materials to be used in a cube, one for each side
                var cubeMaterialArray = [];
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: flatTexture })); // Right
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: flatTexture }));  // Left
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 'gray', map: concreteTexture })); // Up
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: flatTexture })); // Down
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: flatTexture })); // Front
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: flatTexture })); // Back

                var windowOutMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });
                var windowInMatOn = new THREE.MeshPhongMaterial({ color: 'goldenrod', map: windowTexture });
                var windowInMatOff = new THREE.MeshPhongMaterial({ color: 'gray', map: windowTexture });

                var doorMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });

                var width = random(1.9, 2.5, true);
                var pBoxGeometry = new THREE.BoxGeometry(width, 1.5, 1.5);
                var hBoxGeometry = new THREE.BoxGeometry(width, 1.5, 1.5);

                var windowOutGeometry = new THREE.BoxGeometry(0.6, 0.55, 1.65);
                var windowInGeometry = new THREE.BoxGeometry(0.5, 0.45, 1.66);

                var dBoxGeometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
                                
                var fHouseWall = new THREE.Mesh(pBoxGeometry, cubeMaterialArray);
                var houseSecond = new THREE.Mesh(hBoxGeometry, cubeMaterialArray);
                
                var fWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var fWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var sWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var sWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var tWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var tWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var foWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var foWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var door = new THREE.Mesh(dBoxGeometry, doorMat);

                fHouseWall.position.set(0, 0.75, 0);
                fHouseWall.castShadow = true;
                fHouseWall.receiveShadow = true;

                houseSecond.position.set(0, 2.25, 0);
                houseSecond.castShadow = true;
                houseSecond.receiveShadow = true;

                var fWindowX = random(0.5, 0.6, true);
                var fWindowY = random(2.35, 2.55, true);

                var sWindowX = random(-0.5, -0.4, true);
                var sWindowY = random(2.35, 2.55, true);

                var tWindowX = random(-0.5, -0.4, true);
                var tWindowY = random(1.4, 1.8, true);

                var foWindowX = random(0.5, 0.6, true);
                var foWindowY = random(1.4, 1.8, true);

                fWindowOut.position.set(fWindowX, fWindowY, 0);
                fWindowOut.castShadow = true;
                fWindowOut.receiveShadow = true;

                fWindowIn.position.set(fWindowX, fWindowY, 0);
                fWindowIn.castShadow = true;
                fWindowIn.receiveShadow = true;

                sWindowOut.position.set(sWindowX, sWindowY, 0);
                sWindowOut.castShadow = true;
                sWindowOut.receiveShadow = true;

                sWindowIn.position.set(sWindowX, sWindowY, 0);
                sWindowIn.castShadow = true;
                sWindowIn.receiveShadow = true;

                tWindowOut.position.set(tWindowX, tWindowY, 0);
                tWindowOut.castShadow = true;
                tWindowOut.receiveShadow = true;

                tWindowIn.position.set(tWindowX, tWindowY, 0);
                tWindowIn.castShadow = true;
                tWindowIn.receiveShadow = true;

                foWindowOut.position.set(foWindowX, foWindowY, 0);
                foWindowOut.castShadow = true;
                foWindowOut.receiveShadow = true;

                foWindowIn.position.set(foWindowX, foWindowY, 0);
                foWindowIn.castShadow = true;
                foWindowIn.receiveShadow = true;

                door.position.set(0, 0.38, 0.53);
                door.castShadow = true;
                door.receiveShadow = true;
                
                var windowsCount = random(1, 5);

                house.add(fHouseWall);
                house.add(houseSecond);
                house.add(fWindowOut);
                house.add(fWindowIn);
                if(windowsCount > 1)
                {
                    house.add(sWindowOut);
                    house.add(sWindowIn);
                    if(windowsCount > 2)
                    {

                        house.add(tWindowOut);
                        house.add(tWindowIn);
                        if(windowsCount > 3)
                        {
                            house.add(foWindowOut);
                            house.add(foWindowIn);
                        }
                    }
                }
                house.add(door);
            break;
            case 5:
                var windowOn = random(1, 11) % 2 == 0;
                
                // A selection of colors that I think look good
                var colorArray = ['#ffc800', '#68d9e8', '#218ab8', '#19b067', '#7960bf', '#e59437', '#ecedab', '#ededed', '#f084d1']
                var randomColor = colorArray[random(1, 10)];
                
                // Create an array of materials to be used in a cube, one for each side
                var cubeMaterialArray = [];

                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: grayBrickTexture  })); // Right
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: grayBrickTexture }));  // Left
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: 'gray', map: concreteTexture })); // Up
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: grayBrickTexture })); // Down
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: grayBrickTexture })); // Front
                cubeMaterialArray.push(new THREE.MeshPhongMaterial({ color: randomColor, map: grayBrickTexture })); // Back

                var windowOutMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });
                var windowInMatOn = new THREE.MeshPhongMaterial({ color: 'goldenrod', map: windowTexture });
                var windowInMatOff = new THREE.MeshPhongMaterial({ color: 'gray', map: windowTexture });

                var doorMat = new THREE.MeshPhongMaterial({ map: whiteWoodTexture });

                var width = random(2.2, 2.5, true);
                var pBoxGeometry = new THREE.BoxGeometry(2, 1.5, 1.5);
                var hBoxGeometry = new THREE.BoxGeometry(width, 1.5, 1.75);

                var windowOutGeometry = new THREE.BoxGeometry(0.6, 0.55, 1.85);
                var windowInGeometry = new THREE.BoxGeometry(0.5, 0.45, 1.86);

                var dBoxGeometry = new THREE.BoxGeometry(0.5, 0.75, 0.5);
                                
                var fHouseWall = new THREE.Mesh(pBoxGeometry, cubeMaterialArray);
                var houseSecond = new THREE.Mesh(hBoxGeometry, cubeMaterialArray);
                
                var fWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var fWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var sWindowOut = new THREE.Mesh(windowOutGeometry, windowOutMat);
                var sWindowIn = new THREE.Mesh(windowInGeometry, windowOn ? windowInMatOn : windowInMatOff);

                var door = new THREE.Mesh(dBoxGeometry, doorMat);

                fHouseWall.position.set(0, 0.75, 0);
                fHouseWall.castShadow = true;
                fHouseWall.receiveShadow = true;

                houseSecond.position.set(0, 2.25, 0);
                houseSecond.castShadow = true;
                houseSecond.receiveShadow = true;

                var fWindowX = random(0.5, 0.6, true);
                var fWindowY = random(2.35, 2.55, true);

                var sWindowX = random(-0.5, -0.4, true);
                var sWindowY = random(2.35, 2.55, true);

                fWindowOut.position.set(fWindowX, fWindowY, 0);
                fWindowOut.castShadow = true;
                fWindowOut.receiveShadow = true;

                fWindowIn.position.set(fWindowX, fWindowY, 0);
                fWindowIn.castShadow = true;
                fWindowIn.receiveShadow = true;

                sWindowOut.position.set(sWindowX, sWindowY, 0);
                sWindowOut.castShadow = true;
                sWindowOut.receiveShadow = true;

                sWindowIn.position.set(sWindowX, sWindowY, 0);
                sWindowIn.castShadow = true;
                sWindowIn.receiveShadow = true;

                door.position.set(0, 0.38, 0.53);
                door.castShadow = true;
                door.receiveShadow = true;
                
                house.add(fHouseWall);
                house.add(houseSecond);
                house.add(fWindowOut);
                house.add(fWindowIn);
                house.add(sWindowOut);
                house.add(sWindowIn);
                house.add(door);
            break;
            default:
                if(!alert("The program is trying to access house type number " + type + ". There is no such type. Page will be refreshed now."))
                {
                    window.location.reload();
                }
            break;
        }

        // This lowering is done because the ground deviation is between 0 and -0.5
        house.position.set(x, y - 0.25, z);
        return house;
    };
 
}
(this['HouseGenerator'] = {}));