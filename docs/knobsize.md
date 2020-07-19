<script src="../webaudio-controls.js"></script>

<style>
.item{
  background:#444;
  margin:4px;
  padding:0px 3px;
}
webaudio-knob{
  border:1px solid #f00;
}
</style>
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item"><a href="./index.html">Overview</a></div>
<div class="item"><a href="./install.html">Install</a></div>
<div class="item"><a href="./specs.html">Attributes, Functions, Events</a></div>
<div class="item"><a href="./options.html">WebAudioControlsOptions</a></div>
<div class="item"><a href="./knobimage.html">Creating Knob Images</a></div>
<div class="item"><a href="./defstyle.html">Default Style of Controls</a></div>
<div class="item"><a href="./attributes.html">Examples of Various Attributes</a></div>
<div class="item"><a href="./knobsamples.html">Knob Samples from KnobGallery</a></div>
<div class="item"><a href="./keyboard.html">Working Keyboard Demo</a></div>
<div class="item"><a href="./knobsize.html">Determining Knob Size</a></div>
<div class="item"><a href="./tracking.html">Slider tracking "rel" and "abs"</a></div>
<div class="item"><a href="./nonlinear.html">Non-Linear Knobs / Sliders</a></div>
<div class="item"><a href="./multifader.html">Multi-Touch Device Support</a></div>
<div class="item"><a href="./midisupport.html">MIDI Support</a></div>
<div class="item"><a href="./resizetest.html">Resizing After Creation</a></div>
</div>

---

# Determining Knob Size

There are several factors that determine the knob size. The following factors have higher priority from the top and are checked in order.

Note that the specification in the style sheet does not affect the size of the knob display, although the outline of the element changes.

- `width`, `height` attributes of the element
- `diameter` attribute of the element
- `knobWidth`, `knobHeight` specified by `WebAudioControlsOptions`
- `knobDiameter` specified by `WebAudioControlsOptions`
- Image size specified by `src`
- Default size (64px x 64px)

---

<webaudio-knob id="knob1" ></webaudio-knob>
<br/>

The default size (64 x 64px) is used if there is no other size factor.
```html
<webaudio-knob></webaudio-knob>
```

---

<webaudio-knob id="knob2" diameter="32"></webaudio-knob>  
<br/>

If the `diameter` is specified, the knob will be that size
```html
<webaudio-knob diameter="32"></webaudio-knob>
```

---

<webaudio-knob id="knob3" width="200" height="50"></webaudio-knob>  
<br/>

When `width` and `height` attributes are specified individually.
```html
<webaudio-knob width="200" height="50"></webaudio-knob>
```

---


<webaudio-knob id="knob4" src="../knobs/Aqua.png"></webaudio-knob>
<br/>

If a `src` image is specified and nothing else is provided, the original size of the image is used.
At this time, `sprites` are automatically calculated assuming that one frame of the knob image is square.  
```html
<webaudio-knob src="../knobs/Aqua.png"></webaudio-knob>
```

---

<webaudio-knob id="knob5" src="../knobs/Aqua.png" diameter="32"></webaudio-knob>  
<br/>

If `src` and `diameter` is specified, the original image will be resized.
```html
<webaudio-knob src="../knobs/Aqua.png" diameter="32">
</webaudio-knob>
```

---

<webaudio-knob id="knob7" src="../knobs/Aqua.png"
   sprites="100"
   width="200" height="50">
</webaudio-knob>  
<br/>

When width height is specified individually with src.
```html
<webaudio-knob src="../knobs/Aqua.png"
  sprites="100" 
  width="200" height="50">
</webaudio-knob>
```

---
<webaudio-knob id="knob5" src="../knobs/hsw5.png" sprites="4"></webaudio-knob>  
<br/>

If one frame of the knob image is not square, the `sprites` attribute should be set to (number of frames - 1).
```html
<webaudio-knob src="../knobs/hsw5.png" sprites="4">
</webaudio-knob>
```

---



