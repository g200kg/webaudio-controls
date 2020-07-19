<script src="../webaudio-controls.js"></script>

<style>
.item{
  background:#444;
  margin:4px;
  padding:0px 3px;
}
</style>
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item"><a href="./index.html">Overview</a></div>
<div class="item"><a href="./defstyle.html">Default Style of Controls</a></div>
<div class="item"><a href="./attrubutes.html">Examples of Various Attributes</a></div>
<div class="item"><a href="./knobsamples.html">Knob Samples from KnobGallery</a></div>
<div class="item"><a href="./keyboard.html">Working Keyboard Demo</a></div>
<div class="item">Determining Knob Size</div>
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

<webaudio-knob id="knob1" ></webaudio-knob>  
```html
<webaudio-knob id="knob1" ></webaudio-knob>
```

<br/>

<webaudio-knob id="knob2" diameter="32"></webaudio-knob>  
```html
<webaudio-knob id="knob2" diameter="32"></webaudio-knob>
```

<br/>


<webaudio-knob id="knob3" width="200" height="50"></webaudio-knob>  
```html
<webaudio-knob id="knob3" width="200" height="50"></webaudio-knob>
```

<br/>

<webaudio-knob id="knob4" src="../knobs/Aqua.png"></webaudio-knob>
```html
<!-- Original Aqua.png image size (64x64) is used -->
<webaudio-knob id="knob4" src="../knobs/Aqua.png"></webaudio-knob>
```

<br/>

<webaudio-knob id="knob5" src="../knobs/Aqua.png" diameter="32"></webaudio-knob>
```html
<webaudio-knob id="knob5" src="../knobs/Aqua.png" diameter="32"></webaudio-knob>
```

<br/>

<webaudio-knob id="knob6" src="../knobs/Aqua.png" sprites="100"></webaudio-knob>

```html
<webaudio-knob id="knob6" src="../knobs/Aqua.png" sprites="100"></webaudio-knob>
```

<br/>

<webaudio-knob id="knob7" src="../knobs/Aqua.png" sprites="100" width="200" height="50"></webaudio-knob>
```html
<webaudio-knob id="knob7" src="../knobs/Aqua.png" sprites="100" width="200" height="50"></webaudio-knob>
```

<br/>

<hr/>


