# webaudio-controls

**WebAudioControls** is GUI parts library for Web application using [Polymer] WebComponents.  
Especially suitable for audio-applications like VST plugins.  

**WebAudioControls** is consist of following components  

Component | Description 
---|---
webaudio-knob | Rotating or some other frame-by-frame animation knob
webaudio-slider | Vertical or Horizontal slider
webaudio-switch | Toggle/Kick/Radio switches
webaudio-param | Editable value display field

Chrome / Firefox / Safari / Opera / IE compatible  
iOS and Android touch devices compatible  

[Live Demo sample1](https://rawgithub.com/g200kg/webaudio-controls/master/sample1.html)  
[Live Demo sample2](https://rawgithub.com/g200kg/webaudio-controls/master/sample2.html)  
[Renoid : Practical application using webaudio-controls](http://www.g200kg.com/renoid/)    
![](https://raw.github.com/g200kg/webaudio-controls/master/img/demo.png)

## To Operate  
Operation | Component | Description
---|---|---
**Click** | Switch/Param | toggle / activate the switch or focus the param
**Drag** | Knob/Slider | up/right to increase value / down/left to decrease value
**Shift + Drag** | Knob/Slider | fine control
**Ctrl + Click** | Knob/Slider/Switch | Set to default value
**Edit with Keyboard** | Param | Edit the value directly
---
## How to use

- load polymer.js
> &lt;script src="//cdnjs.cloudflare.com/ajax/libs/polymer/0.0.20130816/polymer.min.js"&gt;&lt;/script&gt;  

- link to webaudio-knob component
> &lt;link rel="import" href="components/controls.html" &gt;

- insert `webaudio-knob/slider/switch/param` element
> &lt;webaudio-knob src="img/LittlePhatty.png" sprites="100" min="0" max="100"&gt;&lt;/webaudio-knob&gt;  
> &lt;webaudio-slider src="img/hsliderbody.png"&gt;&lt;/webaudio-slider&gt;  
> &lt;webaudio-switch src="img/switch_toggle.png" width="32" height="32"&gt;&lt;/webaudio-switch&gt;  
> &lt;webaudio-param src="" link="knob-1"&gt;&lt;/webaudio-param&gt;

---
## Attributes

### webaudio-knob

Attribute  | Options      | Default          | Description
---        | ---                  | ---                 | ---
**src** | string | Internal embedded resource is used if not specified | url of the vertical stitched knob image
**value** | float | `0` | The current value. Also used as initial value if specified
**defvalue** | float | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**min** | float | `0` | Minimum value of the knob
**max** | float | `100` | Maximum value of the knob
**step** | float | `1` | Value step of the control. The 'value' is always rounded to multiple of 'step'
**width** | int | `64` | Knob display width in px
**height** | int | `64` | Knob display height in px
**diameter** | int | `64` | Knob display diameter in px. This attribute can be used instead of width / height if the display image is square
**sprites** | int | `30` | Max frame number in the stitched knob image. Note that this is (number of frames) - 1
**sensitivity** | float | `1` | Pointing device sensitivity. min-max range correspond to (128 / 'sensitivity') px
**valuetip** | `0`,`1` | `1` | Enable the overlaid value-tip display.
**tooltip** | string | `null` | Tooltip text that will be shown when mouse hover a while
**enable** | `0`,`1` | `1` | Enable the pointing device control.

### webaudio-slider

Attribute  | Options      | Default          | Description
---        | ---                  | ---                 | ---
**src** | string | Internal embedded resource is used if not specified | url of the slider background image
**knobsrc** | string | Internal embedded resouce is used if not specified | url of the slider knob part image
**value** | float | `0` | The current value. Also used as initial value if specified
**defvalue** | float | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**min** | float | `0` | Minimum value of the slider
**max** | float | `100` | Maximum value of the slider
**step** | float | `1` | Value step of the control. The 'value' is always rounded to multiple of 'step'
**width** | int | `24` | Slider display width in px
**height** | int | `128` | Slider display height in px
**knobwidth** | int | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part width in px
**knobheight** | int | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part height in px
**ditchLength** | int | ('height'-'knobheight') or ('width'-'knobwidth')  depends on 'direction' | Knob movable length
**direction** | `"vert"`,`"horz"` | `"vert"` | Slider direction. vertical or horizontal
**sensitivity** | float | `1` | Pointing device sensitivity. min-max range correspond to (128 / 'sensitivity') px
**valuetip** | `0`,`1` | `1` | Enable the overlaid value-tip display.
**tooltip** | string | `null` | Tooltip text that will be shown when mouse hover a while
**enable** | `0`, `1` | `1` | Enable the pointing device control. 

### webaudio-switch

Attribute  | Options      | Default          | Description
---        | ---                  | ---                 | ---
**src** | string | Internal embedded resource is used if not specified | url of the vertical stitched switch image
**value** | `0`,`1` | `0` | The current value (`0` or `1`). Also used as initial value of the switch if specified
**defvalue** | `0`,`1` | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**width** | int | `32` | Switch display width in px
**height** | int | `32` | Switch display height in px
**type** | `"toggle"`,`"kick"`,`"radio"` | `"toggle"` | Switch type. `"toggle"` switch has so-called 'checkbox' function. `"radio"` switch is a radio-button and the `"kick"` switch is a general command button
**group** | string | `null` | Group id string used if the 'type' is `"radio"`. Only one switch will be set to `"1"` in same group
**tooltip** | string | `null` | Tooltip text that will be shown when mouse hover a while
**enable** | `0`,`1` | `1` | Enable the pointing device control

### webaudio-param

Attribute  | Options      | Default          | Description
---        | ---                  | ---                 | ---
**src** | string | Black rectangle if not specified | url of the background image. Transparent if set to `""`
**value** | float | `0` | The current value. Usually same as linked control
**width** | int | `32` | Parameter display width in px
**height** | int | `16` | Parameter display height in px
**fontsize** | int | `9` | Font-size of the parameter display
**color** | string | `"#ffffff"` | Text color
**link** | string | `null` | Specify the linked webaudio-knob/slider/switch by Id

---
## Functions
### setValue(value)
**description**: webaudio-knob/webaudio-slider/webaudio-switch has a function `setValue(value)`. Each control can be setup and redraw by calling this function from JavaScript.

---
## Events
### 'change'
**description**: 'change' event emitted everytime value changes.  
**Note**: The addEventListener() function is recommended for event handler setup instead of 'onchange=' attribute. 'onchange=' attribute seems not work on Safari.

```
var knobs = document.getElementsByTagName('webaudio-knob');
for (var i = 0; i < knobs.length; i++) {
  var knob = knobs[i];
  knob.addEventListener('change', function(e) {
    console.log(e.target.value);
  });
}
```
### 'click'
**description**: 'click' event is emitted if the 'kick' type webaudio-switch has clicked.

---
## Creating knob images

webaudio-knob use a vertical 'stitched' multi-frames animation image, and webaudio-switch use a vertical 'stitched' two-frames animation image.
For example,   
![](https://raw.github.com/g200kg/webaudio-controls/master/img/LittlePhatty_sample.png)
![](https://raw.github.com/g200kg/webaudio-controls/master/img/switch_toggle.png)  

This knob example has only 5 frames but it should has more frames for smooth animation. I recommend to use JKnobMan/WebKnobMan for making these stitched images,

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
## License
WebAudio-Controls is developped based on:  
- [WebAudio-Knob](https://github.com/agektmr/webaudio-knob) by [Eiji Kitamura](http://google.com/+agektmr)  
- [WebAudio-Slider](https://github.com/ryoyakawai/webaudio-slider) by [Ryoya KAWAI](https://plus.google.com/108242669191458983485/posts)  
- [WebAudio-Switch](http://aikelab.net/switch/) by [Keisuke Ai](http://d.hatena.ne.jp/aike/)  
Integrated and enhanced by [g200kg](http://www.g200kg.com/)

Copyright 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg(Tatsuya Shinyagaito)  
Licensed under the Apache License, Version 2.0