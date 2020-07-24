---
pageid: Install
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# Install

- **webaudio-controls.js**
  - Place "webaudio-controls.js" to an appropriate directory. <br/>This is the only file needed. There are no dependencies on other libraries.  

  [webaudio-controls.js](https://raw.githubusercontent.com/g200kg/webaudio-controls/master/webaudio-controls.js)

- **WebComponents polyfill**
  - If you want to support legacy browsers that not support WebComponents, the polyfill for WebComponents is needed :  
  ```<script src="../webcomponents-lite.js"></script>```

- **load webaudio-controls**
  - ```<script src="../webaudio-controls.js"></script>```  
  Or, if you want to load webaudio-controls.js directly from this GitHub page as CDN :  
  - ```<script src="https://g200kg.github.io/webaudio-controls/webaudio-controls.js"></script>```

- **insert webaudio-knob / slider / switch / param / keyboard elements.**
  - `<webaudio-knob id="knob-1" src="../knobs/LittlePhatty.png" min="0" max="100"></webaudio-knob>`
  - `<webaudio-slider></webaudio-slider>`
  - `<webaudio-switch src="../knobs/switch_toggle.png" width="32" height="32"></webaudio-switch>`
  - `<webaudio-param link="knob-1"></webaudio-param>`
  - `<webaudio-keyboard keys="25"></webaudio-keyboard>`

---

<webaudio-knob id="knob-1" src="../knobs/LittlePhatty.png" sprites="100" min="0" max="100"></webaudio-knob>
<webaudio-slider></webaudio-slider>
<webaudio-switch src="../knobs/switch_toggle.png" width="32" height="32"></webaudio-switch>
<webaudio-param link="knob-1"></webaudio-param>
<webaudio-keyboard keys="25"></webaudio-keyboard>

---
