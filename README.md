# webaudio-controls
**WebAudioControls** is GUI parts Custom Elements library for Web application using WebComponents.  
Especially suitable for audio-applications like VST plugins.  


**webaudio-controls** is consist of following components  

Component         | Description
------------------|------------
webaudio-knob     | Rotating or some other frame-by-frame animation knob
webaudio-slider   | Vertical or Horizontal slider
webaudio-switch   | Toggle/Kick/Radio switches
webaudio-param    | Editable value display field
webaudio-keyboard | Mouse/Touch playable keyboard. multi-touch support.

* Also available 'webaudio-pianoroll' at : [https://github.com/g200kg/webaudio-pianoroll/](https://github.com/g200kg/webaudio-pianoroll/)

#### Difference from old version
There are some difference from old [Polymer 1.4] version.
* Current **webaudio-controls** uses the Custom Elements V1 API directly. In Chrome / Safari / Firefox (59 and later) it works without polyfill. Please install webcomponentsjs on Firefox (58 or less), Edge etc Custom Elements non-compatible browsers.  

* Event firing. Knobs/Sliders fires 'input' event instead of 'change' during drag. This is same behavior as input type=range tags.

* Value post-conversion `conv` attribute is available. It will help for implement, for example, exponential curve parameters. Also Tooltip and Valuetip is integrated. It is now acceptable C-like formatting string for current value display.  

Chrome / Firefox / Safari / Opera compatible  
iOS and Android touch devices compatible  

[Live Demo (with external image-files)](https://g200kg.github.io/webaudio-controls/2.0/sample1.html)  
[Live Demo (with code example)](https://g200kg.github.io/webaudio-controls/2.0/sample2.html)  
[Live Demo (Knob/Slider/Switch/Param/Keyboard default style)](https://g200kg.github.io/webaudio-controls/2.0/sample3.html)  
[Live Demo (Various Knob Images)](https://g200kg.github.io/webaudio-controls/2.0/knobsamples.html)  
[Live Demo (Multi-Touch Fader)](https://g200kg.github.io/webaudio-controls/2.0/multifader.html)  
[Live Demo (webaudio-keyboard to Web MIDI API)](https://g200kg.github.io/webaudio-controls/2.0/sample4.html)  
 (need Web MIDI API support)  
[Renoid : Practical application using webaudio-controls](http://www.g200kg.com/renoid/)  
[webaudio-controls Resize Test](https://g200kg.github.io/webaudio-controls/2.0/resizetest.html)  
[webaudio-controls NonLinear values Test](https://g200kg.github.io/webaudio-controls/2.0/nonlinear.html)

Using with external image-files.  
[![](img/demo.png)](https://g200kg.github.io/webaudio-controls/2.0/sample1.html)  

Default style with no external image-files.  
[![](img/sample3.png)](https://g200kg.github.io/webaudio-controls/2.0/sample3.html)  

## To Operate  
Following user actions are supported.

Operation | Component | Description
---|---|---
**Click** | Switch/Param | toggle / activate the switch or focus the param
**Drag** | Knob/Slider | up/right to increase value / down/left to decrease value
**Shift+Drag** | Knob/Slider | fine control
**Ctrl+Click / Command+Click(Mac)** | Knob/Slider/Switch | set to default value
**Keyboard** | Param/Keyboard | edit the param value directly / [ZSXDCV...for lowest visible 'C' octave] and [Q2W3E... one octave higher] as a music keyboard
**MouseWheel** | Knob/Slider | rotate upward to increase value / downward to decrease value
**Shift+MouseWheel** | Knob/Slider | fine control
**Mouse Button Press / Touch** | Keyboard | play keyboard. multi-touch is supported

---
## How to use

* Install  
  * If you want to load webaudio-controls.js directly from this GitHub page, installation is not necessary.
  * The main file is `webaudio-controls.js`. If you want to support non-WebComponents ready browsers, webcomponents.js is also needed.
  * Use command `bower install --save g200kg/webaudio-controls`, if you use bower. Or download zipped file and deploy appropriately.


* [for WebComponents polyfill] load webcomponents.js  
  * If you want to support only WebComponent ready browsers (Chrome, Firefox), this polyfill is not required.
  * &lt;script src="bower_components/webcomponentsjs/webcomponents-lite.js"&gt;&lt;/script&gt;


- load webaudio-controls  
  * &lt;script src="bower_components/webaudio-controls/webaudio-controls.js"&gt;&lt;/script&gt;
  * Or, if you want to load webaudio-controls.js directly from this GitHub page as CDN: <br/>
&lt;script src="https://g200kg.github.io/webaudio-controls/webaudio-controls.js" &gt;&lt;/script&gt;


* insert **webaudio-knob/slider/switch/param/keyboard** elements. for example...
  * &lt;webaudio-knob src="img/LittlePhatty.png" sprites="100" min="0" max="100"&gt;&lt;/webaudio-knob&gt;  
  * &lt;webaudio-slider src="img/hsliderbody.png"&gt;&lt;/webaudio-slider&gt;  
  * &lt;webaudio-switch src="img/switch_toggle.png" width="32" height="32"&gt;&lt;/webaudio-switch&gt;  
  * &lt;webaudio-param src="" link="knob-1"&gt;&lt;/webaudio-param&gt;  
  * &lt;webaudio-keyboard keys="25" &gt;&lt;/webaudio-keyboard&gt;  

---
## Attributes

### webaudio-knob

Attribute       | Options| Default| Description
----------------|--------|--------|------------
**src**         | string | null   | url of the knob image, Single frame or vertical stitched. Internal embedded resource is used if not specified.
**value**       | float  | `0`    | The current value. Also used as initial value if specified
**defvalue**    | float  | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**min**         | float  | `0`    | Minimum value of the knob
**max**         | float  | `100`  | Maximum value of the knob
**step**        | float  | `1`    | Value step of the control. The 'value' is always rounded to multiple of 'step'
**width**       | int    | `0`    | Knob width in px. diameter value is used if this value is `0`.
**height**      | int    | `0`    | Knob height in px. diameter value is used if this value is `0`.
**diameter**    | int    | `64`   | Knob diameter in px. This attribute can be used instead of width / height if the display image is square.
**sprites**     | int    | `0`    | if `0`, the `src` image should be single frame image that indicate middle position. the image will be rotated -135deg to +135deg. If `sprirites` is not `0`, the `src` image should be vertically stitched multi-framed image. `sprites` specify the max frame number in the stitched knob image. Note that this is (number of frames) - 1
**sensitivity** | float  | `1`    | Pointing device sensitivity. min-max range correspond to (128 / `sensitivity`) px
**valuetip**    | `0`,`1`| `1`    | Enable the overlaid value-tip display.
**tooltip**     | string | `null` | Tooltip text that will be shown when mouse hover a while. If the text include a C-printf style value formatter like `%8.2f`, it will be replaced by current value. This formatter should be `%[n][.][m]{d,f,x,X,s}`. Here the 'n' is total columns, 'm' is after the decimal point columns. If the `conv` function is specified, the converted value `convValue` is used for display.
**conv**        | string | `null` | If this attribute is specified, That string will be evaluated as an expression and stored as `convValue`. This `convValue` will be used for the value chip and the linked webaudio-param display. In this expression, the `x` will represent current `value`. For example, `conv="Math.pow(10,x)*20"` is specified, for range of value between 0 and 3, the range of convValue corresponds to 20 to 20000.
**enable**      | `0`,`1`| `1`    | Enable control with the pointing device.
**colors**      | string | "#e00;#000;#000" | Semicolon separated 3 colors for 'indicator', 'body' and 'highlight'. These colors are used in default knob (when `src` is not provided).
**outline**     | `0`,`1`| `1`    | Border display when focused.
**midilearn**   | `0`,`1`| `0`    | If `1`, MIDI learn function with right-click menu is enabled.
**midicc**      | string | null   | Assign MIDI control change to this knob, with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).

### webaudio-slider

Attribute       | Options| Default | Description
----------------|--------|---------|------------
**src**         | string | null    | url of the slider background image. Solid background color if not specified.
**knobsrc**     | string | null    | url of the slider knob part image. Internal embedded resouce is used if not specified.
**value**       | float  | `0`     | The current value. Also used as initial value if specified.
**defvalue**    | float  | Initial 'value' is used if not specified | The default value that will be used when ctrl+click.
**min**         | float  | `0`     | Minimum value of the slider.
**max**         | float  | `100`   | Maximum value of the slider.
**step**        | float  | `1`     | Value step of the control. The 'value' is always rounded to multiple of 'step'.
**width**       | int    | `24`    | Slider display width in px.
**height**      | int    | `128`   | Slider display height in px.
**knobwidth**   | int    | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part width in px.
**knobheight**  | int    | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part height in px.
**ditchlength** | int    | ('height'-'knobheight') or ('width'-'knobwidth')  depends on 'direction' | Knob movable length.
**direction**   | `"vert"`,`"horz"`| `"vert"` | Slider direction. vertical or horizontal.
**tracking**    | `rel`,`abs`| `rel` | If 'abs', the slider follows 1:1 to the position of the pointing device. In this mode, sensitivity is ignored. Otherwise, the slider will move by the offset you dragged the pointing device.
**sensitivity** | float  | `1`     | Pointing device sensitivity. min-max range correspond to (128 / 'sensitivity') px.
**valuetip**    | `0`,`1`| `1`     | Enable the overlaid value-tip display.
**tooltip**     | string | `null`  | Tooltip text that will be shown when mouse hover a while. If the text include a C-printf style value formatter like `%8.2f`, it will be replaced by current value. This formatter should be `%[n][.][m]{d,f,x,X,s}`. Here the 'n' is total columns, 'm' is after the decimal point columns. If the `conv` function is specified, the converted value `convValue` is used for display.
**conv**        | string | `null`  | If this attribute is specified, That string will be evaluated as an expression and stored as `convValue`. This `convValue` will be used for the value chip and the linked webaudio-param display. In this expression, the `x` will represent current `value`. For example, `conv="Math.pow(10,x)*20"` is specified, for range of value between 0 and 3, the range of convValue corresponds to 20 to 20000.
**enable**      |`0`, `1`| `1`     | Enable control with the pointing device.
**colors**      | string | "#e00;#000;#fff" | Semicolon separated 3 colors for 'knob', 'background' and 'highlight'. These colors are used in default knob (when `src` or `knobsrc` is not provided).
**outline**     | `0`,`1`| `1`     | Border display when focused.
**midilearn**   | `0`,`1`| `0`     | If `1`, MIDI learn function with right-click menu is enabled.
**midicc**      | string | null    | Assign MIDI control change to this slider. with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).


### webaudio-switch

Attribute       | Options   | Default | Description
----------------|-----------|---------|------------
**src**         | string    | Internal embedded resource is used if not specified | url of the vertical stitched switch image
**value**       | `0`,`1`   | `0`     | The current value (`0` or `1`). Also used as initial value of the switch if specified
**defvalue**    | `0`,`1`   | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**width**       | int       | `32`    | Switch display width in px
**height**      | int       | `32`    | Switch display height in px
**type**        | `"toggle"`,`"kick"`,`"radio"` | `"toggle"` | Switch type. `"toggle"` switch has so-called 'checkbox' function. `"radio"` switch is a radio-button and the `"kick"` switch is a general command button
**group**       | string    | `null`  | Group id string used if the 'type' is `"radio"`. Only one switch will be set to `"1"` in same group
**invert**      | `0`,`1`   | `0`     | exchange on and off image
**tooltip**     | string    | `null`  | Tooltip text that will be shown when mouse hover a while
**enable**      | `0`,`1`   | `1`     | Enable control with the pointing device.
**colors**      | string    | "#e00;#000;#fff" | Semicolon separated 3 colors for 'knob', 'background' and 'highlight'. These colors are used in default switch (when `src` is not provided).
**outline**     | `0`,`1`   | `1`     | Border display when focused.
**midilearn**   | string    | null    | If `true`, MIDI learn function with right-click menu is enabled.
**midicc**      | string    | null    | Assign MIDI control change to this switch. with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).

### webaudio-param

Attribute      | Options | Default | Description
---------------|---------|---------|------------
**src**        | string  | Black rectangle if not specified | Background image or color. Transparent if set to `""`, or url to background image.
**value**      | float   | `0`     | The current value. Usually same as linked control
**width**      | int     | `32`    | Parameter display width in px
**height**     | int     | `16`    | Parameter display height in px
**fontsize**   | int     | `9`     | Font-size of the parameter display
**colors**     | string  | `"#e00;#000"` | Semicolon separated 2 colors for text and background. background color is used when `src` is not defined.
**outline**    | `0`,`1` | `1`     | Border display when focused.
**link**       | string  | `null`  | Specify the linked webaudio-knob/slider/switch by Id
**rconv**      | string  | `null`  | Specify the reverse conversion of target's `conv`. It is needed if the target knob/slider use conversion by `conv` attribute and the user edit the `webaudio-param` value directory by keyboard. The reverse converted value will be set to linked target. For example, when the target knob/slider use `conv="Math.pow(10,x)*20"` attribute, this `webaudio-param` should be `rconv="Math.log10(x/20)"`.

### webaudio-keyboard

Attribute  | Options   | Default| Description
-----------|-----------|--------|------------
**values** | int array | `[]`   | The array of current pressed key numbers. "values" may has more than one element in multi-touch environment.
**width**  | int       | `480`  | Keyboard display width in px
**height** | int       | `128`  | Keyboard display height in px
**min**    | int       | `0`    | Lowest Key number. Each key is numbered incrementally from this number. If the "min" is not `0` and the modulo 12 is not zero, the keyboard is started from corresponding position (not-C). Note that the specified key should be a 'white-key'.
**keys**   | int       | `25`   | Number of keys. `25` means 25 keys keyboard.
**colors** | string    | '#222; #eee;#ccc; #333;#000; #e88;#c44; #c33;#800' | semicolon separated 9 keyboard colors. 'border; whitekey-grad-from;whitekey-grad-to; blackkey-grad-from;blackkey-grad-to; active-whitekey-grad-from;active-whitekey-grad-to; active-blackkey-grad-from;active-blackkey-grad-to'. Each key surface can has garadient left to right with 'from' and 'to'.
**outline**| `0`,`1`   | `1`    | Border display when focused.
**enable** | `0`,`1`   | `1`    | Enable control with the pointing device.

---
## Functions
### setValue(value, fire)  
`webaudio-knob` | `webaudio-slider` | `webaudio-switch`  
**description**: Each control can be setup and redraw by calling this function from JavaScript.
If the `fire` parameter is `undefined` or `false`, this function will not fire `'change'` event. Or the `change` event will be fired.


### setNote(state,note)  
`webaudio-keyboard`  
**description**: webaudio-keyboard can be setup pressing state with this function from JavaScript. corresponding key specified by the `note` is pressed if the `state` is non-zero otherwise the key is released. This function will NOT fire the 'change' event.

---
## Events

### 'input'  
`webaudio-knob` | `webaudio-slider`  
**description**: 'input' event is fired when knob / slider value changes while dragging.

### 'change'  
`webaudio-knob` | `webaudio-slider` | `webaudio-switch` | `webaudio-keyboard`  
**description**: 'change' event is fired when value changes is decided. It means mouse button release for knobs and sliders, or switch / keyboard state changes.
 Also issued when setValue() function call with fire flag is nonzero.
In the event handler of `webaudio-knob`,`webaudio-slider` or `webaudio-switch`, current value can be get with referring `event.target.value`.  

```
var knobs = document.getElementsByTagName('webaudio-knob');
for (var i = 0; i < knobs.length; i++) {
  var knob = knobs[i];
  knob.addEventListener('change', function(e) {
    console.log(e.target.value);
  });
}
```

For the `webaudio-keyboard`, each 'change' event has the property '.note' that contain a array `[key-state, key-number]`. For example `event.note = [1, 60]` if the key#60 is on, or `event.note = [0, 60]` if the key#60 is off.

```
var keyboard = document.getElementsById('keyboard');
keyboard.addEventListener('change', function(e) {
	if(e.note[0])
		console.log("Note-On:"+e.note[1]);
	else
		console.log("Note-Off:"+e.note[1]);
});
```

### 'click'  
`webaudio-switch (kick)`  
**description**: 'click' event is emitted if the 'kick' type webaudio-switch has clicked.

---
## WebAudioControlsOptions
By setting the global object, WebAudioControlsOptions, you can specify default values such as the knob size or colors etc when attribute setting on each tag is omitted.
This declaration should be prior to the webaduio-controls.js loading.
```
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
outline     |1        | border display when focused
valuetip    |1        | valuetip display
knobWidth   |0        | width for knobs
knobHeight  |0        | height for knobs
knobDiameter|64       | diameter for knobs
knobSrc     |null     | knob image source
knobSprites |0        | knob image number of frames
knobColors  |"#e00;#000;#000"| color setting for knobs
sliderWidth |24       | width for sliders
sliderHeight|128      | height for sliders
sliderColors|"#e00;#000;#fcc"| color setting for sliders
switchWidth |0        | width for switches
switchHeight|0        | height for switches
switchDiameter|24     | diameter for switches
switchColors|"#e00;#000;#fcc"| color setting for switches
paramWidth  |32       | width for param
paramHeight |16       | height for param
paramColors |"#fff;#000"| color setting for param

---
## Creating knob images
webaudio-knob (with sprites is `0` (default)) use a single frame knob image that indicate center position.
For example,  
![](img/testknob.png)  
This image will be rotated from -135deg to +135deg. This approach will works well if the image is flat designed, but more complex animation (for example, drop-shadowed, highlighted or something elastic) will need pre-rendered frame-by-frame animation as below.

webaudio-knob (with non zero "sprites") use a vertical 'stitched' multi-frames animation image, and webaudio-switch use a vertical 'stitched' two-frames animation image.
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
## MIDI support: knobs, sliders and switches have midilearn/midicc support built-in

To enable MIDI related functions, add the following line before the &lt;link&gt; tag that loads `webaudio-controls.html`  

`<script>WebAudioControlsOptions={useMidi:1}</script>`

<b>Midilearn right click menu</b>: add a <code>midilearn=1</code> attribute to the <code>&lt;webaudio-knob&gt;</code>,  <code>&lt;webaudio-slider&gt;</code> and  <code>&lt;webaudio-switch&gt;</code> elements. Then right click on the element in the GUI, a midi learn menu should appear. Then, operate one of your midi controller and it should start actionning the webaudio-controls widget in the HTML page. <!--You can associate more than one controller to each widget. -->You can hot plug/unplug midi devices, they will be detected.

![Midi Learn Menu](img/midilearn.png)

<b>Declarative association between a midi controller and a GUI webaudiocontrol</b>: There is also an HTML <code>midicc="channel.cc#"</code> attribute that works like this:  <code>midicc="3.2"</code> means "listen to a cc event on channel 3, cc number 2". If you don't know the channel/cc number of your controller: 1) add a <code>midilearn=1</code> attribute so that a right click on the GUI widget will display the midilearn menu, 2) select "learn" in the menu, 3) operate your knob/slider/switch, normally the midi controller and the GUI object are in sync. 4) look at the devtool console, there is a message indicating the channel and cc number, for example "channel 0, cc 28". Then if you add the attribute midicc="0.28" to the HTML of your knob/slider/switch, the midi mapping between your GUI webaudiocontrol and your midi controller will be automatic. Follow the links at the end of this section and look at the HTML source code to see some examples.

Example: associate a knob with a controller on channel 7, cc number 7:

```
<webaudio-knob midilearn=true midicc="7.7" ...></webaudio-knob>
```

<b>External midi event listener (hook): </b>you can also declare in your HTML file your own midi event listener (for example for listening to program changes events): use the <code>webAudioControlsMidiManager</code> object, that comes with an <code>addMidiListener</code> method. Like that you will benefit from the MIDI code included in the webaudiocontrols. Here is an example (also, look at the source code of the Sample1.html demo, and open the devtool console to see midi messages received by the hook at the end of the HTML file).

```
<script>
// add this to your html page that uses webaudiocontrols
webAudioControlsMidiManager.addMidiListener(function(event) {
    var data = event.data;
    var channel = data[0] & 0xf;
    var controlNumber = data[1];

    console.log("Midi event hook: data:[" + data + "] channel:" + channel + " cc:"+controlNumber);

    // do whatever you want with the event
    // ...
});
</script>
```

Demo at: https://wasabi.i3s.unice.fr/AmpSimFA/ and at https://wasabi.i3s.unice.fr/AmpSimFA/sample1.html


---
## License
WebAudio-Controls is developped based on:  
- [WebAudio-Knob](https://github.com/agektmr/webaudio-knob) by [Eiji Kitamura](http://google.com/+agektmr)  
- [WebAudio-Slider](https://github.com/ryoyakawai/webaudio-slider) by [Ryoya KAWAI](https://plus.google.com/108242669191458983485/posts)  
- [WebAudio-Switch](http://aikelab.net/switch/) by [Keisuke Ai](http://d.hatena.ne.jp/aike/)  
Integrated and enhanced by [g200kg](http://www.g200kg.com/)

Copyright (c) 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg /  @micbuffa / @CellouBalde  
Licensed under the Apache License, Version 2.0

---

Knob/Switch images in samples are from [Knob Gallery](http://www.g200kg.com/en/webknobman/gallery.php)  
[switch_toggle.knob](http://www.g200kg.com/en/webknobman/gallery.php?m=p&p=58) by [az](http://bji.yukihotaru.com/) (c) 2011 [CC-BY](http://creativecommons.org/licenses/by/3.0/)  
