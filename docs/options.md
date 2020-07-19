<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

Basic Usage :
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item"><a href="./index.html">Overview</a></div>
<div class="item"><a href="./install.html">Install</a></div>
<div class="item"><a href="./specs.html">Attributes, Functions, Events</a></div>
<div class="item cur"><a href="./options.html">WebAudioControlsOptions</a></div>
<div class="item"><a href="./knobimage.html">Creating Knob Images</a></div>
<div class="item"><a href="./defstyle.html">Default Style of Controls</a></div>
<div class="item"><a href="./example.html">Examples of Various Attributes</a></div>
</div>
<br/>

Advanced Usage and Application Note :
<div style="display:flex;width:100%;flex-wrap:wrap">
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

## WebAudioControlsOptions
By setting the global object, `WebAudioControlsOptions`, you can specify default values such as the knob size or colors etc when attribute setting on each tag is omitted.
This declaration should be prior to the `webaduio-controls.js` loading.

```html
<script>
WebAudioControlsOptions={
  useMidi:1,
  knobDiameter:80,
  switchWidth:40,
  switchHeight:20,
};
</script>
<script src="webaudio-controls.js"></script>
```
The items that can be set are as follows

name        | default | description
------------|---------|----------------
useMidi     |0        | enable control from midi devices
midilearn   |0        | enable midilearn function for each knobs/sliders/switches
outline     |0        | border display when focused
valuetip    |0        | valuetip display
knobWidth   |null     | width for knobs
knobHeight  |null     | height for knobs
knobDiameter|64       | diameter for knobs
knobSrc     |null     | knob image source
knobSprites |null     | knob image number of frames
knobColors  |"#e00;#000;#000"| color setting for knobs
sliderWidth |24       | width for sliders
sliderHeight|128      | height for sliders
sliderKnobWidth|0     | width of slider knob
sliderKnobHeight|0    | height of sliderknob
sliderColors|"#e00;#000;#fcc"| color setting for sliders
switchWidth |0        | width for switches
switchHeight|0        | height for switches
switchDiameter|24     | diameter for switches
switchColors|"#e00;#000;#fcc"| color setting for switches
paramWidth  |32       | width for param
paramHeight |20       | height for param
paramSrc    |null     | param background image source
paramColors |"#fff;#000"| color setting for param

---
