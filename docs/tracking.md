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
<div class="item"><a href="./attributes.html">Examples of Various Attributes</a></div>
<div class="item"><a href="./knobsamples.html">Knob Samples from KnobGallery</a></div>
<div class="item"><a href="./keyboard.html">Working Keyboard Demo</a></div>
<div class="item"><a href="./knobsize.html">Determining Knob Size</a></div>
<div class="item">Slider tracking "rel" and "abs"</div>
<div class="item"><a href="./nonlinear.html">Non-Linear Knobs / Sliders</a></div>
<div class="item"><a href="./multifader.html">Multi-Touch Device Support</a></div>
<div class="item"><a href="./midisupport.html">MIDI Support</a></div>
<div class="item"><a href="./resizetest.html">Resizing After Creation</a></div>
</div>

---

# Slider tracking "rel" and "abs"

By default, slider tracking is set to "rel" mode.  

In this mode, when you operate the slider, the drag distance determines the amount of change from the current value.
Pressing and releasing without dragging does not change the current value.  

If you set the "tracking" attribute to "abs",
then simply pressing or dragging anywhere in the slider will change the value to the value corresponding to that position. 
Fine control (Shift + drag) is ignored when "abs" mode.  

---
## tracking="rel"  

<webaudio-slider id="slider1" tracking="rel"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider1"></webaudio-param>

```html
<webaudio-slider id="slider1" tracking="rel"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider1"></webaudio-param>
```

---

## tracking="abs"  

<webaudio-slider id="slider2" tracking="abs"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider2"></webaudio-param>

```html
<webaudio-slider id="slider2" tracking="abs"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider2"></webaudio-param>
```

Which of "rel" and "abs" is better depends on the case, but "abs" can be used also as changeover switches.  
<table style="font-size:11px;background:#223;padding:8px">
  <tr>
  <td rowspan="4" style="width:30px"><webaudio-slider id="slider3" tracking="abs" min="0" max="3" width="24" height="128"></webaudio-slider></td>
  <td>Triangle</td></tr>
  <tr><td>Square</td></tr>
  <tr><td>Sawtooth</td></tr>
  <tr><td>Sine</td></tr>
</table>


```html
<webaudio-slider id="slider3" tracking="abs"
 min="0" max="3" width="24" height="128">
</webaudio-slider>
```

---

