(function (CloudGenerator) 
{
    // Generate a cloud (3 types)
    CloudGenerator.create = function(type = random(1, 4), size = random(1, 1.5, true))
    {
        var cloud = new THREE.Group();
        
        switch(type)
        {
            case 1:
                var cloudsMat = new THREE.MeshBasicMaterial({ map: fCloudTexture, transparent: true, side: THREE.DoubleSide });
                var cloudGeo = new THREE.PlaneBufferGeometry(20, 15, 8, 8);

                var cloudO = new THREE.Mesh(cloudGeo, cloudsMat);
                cloud.add(cloudO);
            break;
            case 2:
                var cloudsMat = new THREE.MeshBasicMaterial({ map: sCloudTexture, transparent: true, side: THREE.DoubleSide });
                var cloudGeo = new THREE.PlaneBufferGeometry(20, 15, 8, 8);

                var cloudO = new THREE.Mesh(cloudGeo, cloudsMat);
                cloud.add(cloudO);
            break;
            case 3:
                var cloudsMat = new THREE.MeshBasicMaterial({ map: tCloudTexture, transparent: true, side: THREE.DoubleSide });
                var cloudGeo = new THREE.PlaneBufferGeometry(10, 10, 8, 8);

                var cloudO = new THREE.Mesh(cloudGeo, cloudsMat);
                cloud.add(cloudO);
            break;
            default:
                if(!alert("The program is trying to access cloud type number " + type + ". There is no such type. Page will be refreshed now."))
                {
                    window.location.reload();
                }
            break;
        }

        cloud.position.set(random(-10, 50, true), random(15, 25, true), random(-10, 50, true));
        cloud.scale.set(size, size, size);
        return cloud;
    };
 
}
(this['CloudGenerator'] = {}));