# webaudio-controls

GUI parts library for Web application using [Polymer] WebComponents

[Sample 1](http://g200kg.github.com/webaudio-controls/sample1.html)  
[Sample 2](http://g200kg.github.com/webaudio-controls/sample2.html)  
![](https://raw.github.com/g200kg/webaudio-controls/master/img/demo.png)

## How to use
- load polymer.js
- link to webaudio-knob component

> &lt;script src="http://www.polymer-project.org/polymer-all/polymer/polymer.js"&gt;&lt;/script&gt;  
> &lt;link rel="import" href="https://raw.github.com/g200kg/webaudio-controls/master/components/controls.html"&gt;

- insert `webaudio-knob/slider/switch` element


> &lt;webaudio-knob src="img/LIttlePhatty.png" sprites="100" min="0" max="100"&gt;&lt;/webaudio-knob&gt;  
> &lt;webaudio-slider src="img/hsliderbody.png"&gt;&lt;/webaudio-slider&gt;  
> &lt;webaudio-switch src="img/switch_toggle.png" width="32" height="32"&gt;&lt;/webaudio-switch&gt;  

## Attributes
webaudio-knob
---

#### 'src'
**description**: url of the vertical stitched knob image.(relative from where you are refering)   
**default**: internal embedded resource is used if no image-file is specified.

#### 'value'
**description**: the current value.   also used as initial value of the control if specified.  
**default**: `0`

#### 'defvalue'
**description**: the default value that is used when ctrl+click.  
**default**: initial "value" is used instead if not specified.

#### 'min'
**description**: min value of the knob  
**default**: `0`

#### 'max'
**description**: max value of the knob  
**default**: `100`

#### 'step'
**description**: value step of the control. value is always rounded to multiple of 'step'.  
**default**: `1`

#### 'width'
**description**: knob width.  
**default**: `64`

#### 'height'
**description**: knob height.  
**default**: `64`

#### 'diameter'
**description**: knob size. this attribute can be used instead of width / height if the image is square.  
**default**: `64`

#### 'sprites'
**description**: max frame number in the stitched knob-image. note that this is (number of frames) -1.  
**default**: `30`

#### 'sensitivity'  
**description**: pointing device sensitivity.  
**default**:  `1`  that means min-max range correspond to 128px.  

#### 'valuetip'  
**description**: enable the overlayed value-tip display. 0 or 1  
**default**: `1`

#### 'enable'
**description**: enable the pointing device control.  `0` for disable, `1` for enable.  
**default**: `1`  

webaudio-slider 
---

#### 'src'
**description**: url of the slider background image.(relative from where you are refering)   
**default**: internal embedded resource is used if no image-file is specified.

#### 'knobsrc'
**description**: url of the slider-knob part image.(relative from where you are refering)
**default**: internal embedded resource is used if no image-file is specified.

#### 'value'
**description**: the current value.   also used as initial value of the control if specified.  
**default**: `0`

#### 'defvalue'
**description**: the default value that is used when ctrl+click.  
**default**: initial "value" is used instead if not specified.

#### 'min'
**description**: min value of the slider  
**default**: `0`

#### 'max'
**description**: max value of the slider  
**default**: `100`

#### 'step'
**description**: value step of the control. value is always rounded to multiple of 'step'.  
**default**: `1`

#### 'width'
**description**: slider width.  
**default**: `64`

#### 'height'
**description**: slider height.  
**default**: `64`

#### 'knobwidth'
**description**: slider knob part width.
**default**: same as 'width' if 'direction' is 'vert', or same as 'height' if the 'direction' is 'horz'.

#### 'knobheight'
**description**: slider knob part height.
**default**: same as 'width' if 'direction' is 'vert', or same as 'height' if the 'direction' is 'horz'.

#### 'ditchLength'  
**description**: knob movable length.
**default**: ('height' - 'knobheight') or ('width' - 'knobwidth') depends of 'direction.

#### 'direction'  
**description**: slider direction. 'vert' or 'horz'.

#### 'sensitivity'  
**description**: pointing device sensitivity.  
**default**:  `1`  that means min-max range correspond to 128px.  

#### 'valuetip'  
**description**: enable the overlayed value-tip display. 0 or 1  
**default**: `1`

#### 'enable'
**description**: enable the pointing device control.  `0` for disable, `1` for enable.  
**default**: `1`  

webaudio-switch
---
#### 'src'  
**description**: url of the vertical stitched switch image.  
**default**: internal embedded resource is used if no image-file is specified.

#### 'value'  
**description**: the current value (`0` or `1`). also used as initial value of the control if specified.  
**default**: `0`

#### 'defvalue'
**description**: the default value that is used when ctrl+click.   
**default**: Initial "value" is used instead if not specified.  

#### 'width'  
**description**: switch width  
**default**:  `32`

#### 'height'
**description**: switch height  
**default**: `32`

#### 'type'  
**description**: switch type. one of  "toggle" or "kick" or "radio".  
**default**: `toggle`  

#### 'group'
**description**: used if the 'type' is `radio`. only one switch can be set to `1` in same group.  
**default**: `null`  

#### 'enable'  
**description**: enable the pointing device control.  
**default**:  `1`  

webaudio-param
---
#### 'src'  
**description**: url of the background image.  transparent if set to 'null'.  
**default**: black rectangle is assigned if no image is specified.

#### 'value'  
**description**: the current value. usually same as linked control.
**default**: `0`  

#### 'width'  
**description**: param display width  
**default**: `32`  

#### 'height'
**description**: param display height  
**default**: `16`

#### 'fontsize'
**description**: font size of the param-display
**default**: `9`  

#### 'color'  
**description**: font color  
**default**: `#ffffff`  

#### 'link'  
**description**: specify the linked webaudio-knob/slider/switch by Id.
**default**: `null`  

## Functions
### setValue(value)
**description**: webaudio-knob/webaudio-slider/webaudio-switch has a function `setValue(value)`. Each control can be setup by calling this function from JavaScript.

## Events
### 'change'
**description**: 'change' event emitted everytime value changes

```
var knobs = document.getElementsByTagName('webaudio-knob');
for (var i = 0; i < knobs.length; i++) {
  var knob = knobs[i];
  knob.addEventListener('change', function(e) {
    console.log(e.target.value);
  });
}
```

## Creating knob images
- Go to [WebKnobMan](http://www.g200kg.com/en/webknobman/gallery.php)
- Find your favorite knob design and click 'Open with WebKnobMan'
- Click on 'Export' to download `png` file
- Of course, you can create your own!

**Note: comply with license requirements**

## License
WebAudio-Controls is developped based on:   
- [WebAudio-Knob](https://github.com/agektmr/webaudio-knob) by [Eiji Kitamura](http://google.com/+agektmr)  
- [WebAudio-Slider](https://github.com/ryoyakawai/webaudio-slider) by [Ryoya KAWAI](https://plus.google.com/108242669191458983485/posts)  
- [WebAudio-Switch](http://aikelab.net/switch/) by [Keisuke Ai](http://d.hatena.ne.jp/aike/)   
Integrated and enhanced by [g200kg](http://www.g200kg.com/)

Copyright 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg(Tatsuya Shinyagaito)  
Licensed under the Apache License, Version 2.0