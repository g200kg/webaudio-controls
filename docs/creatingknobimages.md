---
pageid: CreatingKnobImages
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

## Creating knob images
webaudio-knob with sprites attribute is `0` use a single frame knob image that indicate center position.
For example,  

![](../img/testknob.png)  

This image will be rotated from -135deg to +135deg. This approach will works well if the image is flat designed, but more complex animation (for example, drop-shadowed, highlighted or something elastic) will need pre-rendered frame-by-frame animation as below.

webaudio-knob (with non zero "sprites") use a vertical 'stitched' multi-frames animation image, and webaudio-switch use a vertical 'stitched' two-frames animation image.
For example,   

![](../img/LittlePhatty_sample.png)
![](../img/switch_toggle.png)  

This knob example has only 5 frames but it should has more frames for smooth animation. I recommend to use JKnobMan / WebKnobMan for making these stitched images,

- [JKnobMan](http://www.g200kg.com/en/software/knobman.html) -- Java based Knob image creation tool.
- [WebKnobMan](http://www.g200kg.com/en/webknobman/) -- WebApp version of the JknobMan
- [KnobGallery](http://www.g200kg.com/en/webknobman/gallery.php) -- knob data sharing space

---

Here is a brief instruction  to export knob-image from KnobGallery

- Go to [KnobGallery](http://www.g200kg.com/en/webknobman/gallery.php)
- Find your favorite knob design and click 'Open with WebKnobMan'
- Click on 'Export' to download `png` file
- Of course, you can create your own!

**Note: comply with license requirements**

---
