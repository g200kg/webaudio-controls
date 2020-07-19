<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

Basic Usage :
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item"><a href="./index.html">Overview</a></div>
<div class="item cur"><a href="./install.html">Install</a></div>
<div class="item"><a href="./specs.html">Attributes, Functions, Events</a></div>
<div class="item"><a href="./options.html">WebAudioControlsOptions</a></div>
<div class="item"><a href="./knobimage.html">Creating Knob Images</a></div>
<div class="item"><a href="./defstyle.html">Default Style of Controls</a></div>
<div class="item"><a href="./example.html">Examples of Various Attributes</a></div>
</div>
<br/>

Advanced Usage and Application Notes :
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

# Install

- **webaudio-controls.js**
  - Place "webaudio-controls.js" to an appropriate directory. <br/>This is the only file needed. There are no dependencies on other libraries.  

  [webaudio-controls.js](../webaudio-controls.js)

- **WebComponents polyfill**
  - If you want to support legacy browsers that not support WebComponents, the polyfill for WebComponents is needed :  
  ```<script src="./webcomponents-lite.js"></script>```

- **load webaudio-controls**
  - ```<script src="./webaudio-controls.js"></script>```  
  Or, if you want to load webaudio-controls.js directly from this GitHub page as CDN :  
  - ```<script src="https://g200kg.github.io/webaudio-controls/webaudio-controls.js"></script>```

- **insert webaudio-knob / slider / switch / param / keyboard elements.**
  - `<webaudio-knob id="knob-1" src="../img/LittlePhatty.png" sprites="100" min="0" max="100"></webaudio-knob>`
  - `<webaudio-slider src="../img/hsliderbody.png"></webaudio-slider>`
  - `<webaudio-switch src="../img/switch_toggle.png" width="32" height="32"></webaudio-switch>`
  - `<webaudio-param src="" link="knob-1"></webaudio-param>`
  - `<webaudio-keyboard keys="25"></webaudio-keyboard>`

---

<webaudio-knob id="knob1" src="../img/LittlePhatty.png" sprites="100" min="0" max="100"></webaudio-knob>
<webaudio-slider src="../img/hsliderbody.png"></webaudio-slider>
<webaudio-switch src="../img/switch_toggle.png" width="32" height="32"></webaudio-switch>
<webaudio-param src="" link="knob-1"></webaudio-param>
<webaudio-keyboard keys="25"></webaudio-keyboard>

---
