const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

document.onkeyup = function (e) 
{
    var keyCode = e.keyCode;

    if(keyCode == 77) 
    {
        bgSong.volume = bgSong.volume == volume ? 0 : volume;
    }
    else if(keyCode == 38)
    {
        if(bgSong.volume != 0)
        {
            volume = clamp(volume + 0.02, 0.01, 1);
            bgSong.volume = volume;
        }
    }
    else if(keyCode == 40)
    {
        if(bgSong.volume != 0)
        {
            volume = clamp(volume - 0.02, 0.01, 1);
            bgSong.volume = volume;
        }
    }
    else if(keyCode == 70)
    {
        scene.fog = scene.fog == null ? new THREE.Fog('#b5b7ba', 10, 200) : null;
        clouds.forEach(cl => 
        {
            cl.visible = !cl.visible;
        });
    }
    else if(keyCode == 82)
    {
        controls.autoRotate = !controls.autoRotate;
    }
    else if(keyCode == 13)
    {
        if(bgSong.paused)
        {
            bgSong.play();
        }
    }
};