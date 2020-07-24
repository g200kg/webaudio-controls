---
pageid: DetailSpecs
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

## Attributes

### webaudio-knob

<webaudio-knob></webaudio-knob>

Attribute       | Options| Default| Description
----------------|--------|--------|------------
**src**         | string | null   | url of the knob image, Single frame or vertical stitched. Internal embedded resource is used if not specified.
**value**       | float  | `0`    | The current value. Also used as initial value if specified
**defvalue**    | float  | Initial 'value' is used if not specified | The default value that will be used when ctrl+click
**min**         | float  | `0`    | Minimum value of the knob
**max**         | float  | `100`  | Maximum value of the knob
**step**        | float  | `1`    | Value step of the control. The 'value' is always rounded to multiple of 'step'
**width**       | int    | `null` | Knob width in px. diameter value is used if this value is not specified.
**height**      | int    | `null` | Knob height in px. diameter value is used if this value is not specified.
**diameter**    | int    | `src` image size or `64`   | Knob diameter in px. This attribute can be used instead of width / height if the display image is square. If no `width` `height` `diameter` is specified, the `src` image size is used as is. In addition, 64px square embedded resource will be used if `src` is also not specified.
**sprites**     | int    | `null` | If `0`, the `src` image should be single frame knob image that indicate middle position. the image will be rotated -135deg to +135deg.<br/>If `sprites` is 1 or more, the `src` image should be vertically stitched multi-framed image. `sprites` specify the max frame number in the stitched knob image. Note that this is (number of frames) - 1.<br/> If `sprites` attribute is not specified (default), assuming one knob image is a square, it will be calculated from the width and height of the image specified in `src`, i.e. height / width - 1 will be used as the `sprites`.
**sensitivity** | float  | `1`    | Pointing device sensitivity. min-max range correspond to (128 / `sensitivity`) px
**log**         | int    | `0`    | If this value is set to 1, then the value change is logarithmic. For example, if `min="10"` and `max="1000"`, then the center value of the knob will be 100. Here, if `min` is 0 or negative, an error occurs. If `log` is set to 0, then the change in value is linear.
**valuetip**    | `0`<br/>`1`| `0`    | Enable the overlaid value-tip display. This is equivalent to `tooltip="%s"`.
**tooltip**     | string | `null` | Specifies the tooltip text that appears when you hover the mouse cursor for a while. If the text contains "%s", it will be replaced with the current value. Also, if the `conv` attribute is specified, the converted current value, `convValue` is  used for display. 
**conv**        | string | `null` | If this attribute is specified, That string will be evaluated as an expression and stored to `convValue` as a string. This `convValue` will be used for the valuetip, tooltip and the linked webaudio-param display. In this expression, the `x` will represent current `value`. For example, `conv="(Math.pow(10,x)*20).toFixed(0)"` is specified, for range of value between 0 and 3, the range of convValue corresponds to 20 to 20000. As another example, if `conv="['sin','saw','sqr','tri'][x]"` is specified, for values from 0 to 3, each string are assigned respectively.
**enable**      | `0`<br/>`1`| `1`    | Enable control with the pointing device.
**colors**      | string | "#e00;#000;#fff" | Semicolon separated 3 colors for 'indicator', 'body' and 'highlight'. These colors are used in default knob (when `src` is not provided).
**outline**     | `0`<br/>`1`<br/>string| `0`    | Border style when focused. `0`:no outline. `1`:equivalent to `"1px solid #ccc"`. Any other string will be applied to the style's outline attribute only when it has focus. 
**midilearn**   | `0`<br/>`1`| `0`    | If `1`, MIDI learn function with right-click menu is enabled.
**midicc**      | string | null   | Assign MIDI control change to this knob, with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).

### webaudio-slider

<webaudio-slider direction="horz"></webaudio-slider>

Attribute       | Options| Default | Description
----------------|--------|---------|------------
**src**         | string | `null`  | url of the slider background image. Solid background color is used if not specified. If the empty string "" is specified, the background will not be drawn and will be transparent.
**knobsrc**     | string | `null`  | url of the slider knob part image. Internal embedded resouce is used if not specified.
**value**       | float  | `0`     | The current value. Also used as initial value if specified.
**defvalue**    | float  | Initial 'value' is used if not specified | The default value that will be used when ctrl+click.
**min**         | float  | `0`     | Minimum value of the slider.
**max**         | float  | `100`   | Maximum value of the slider.
**step**        | float  | `1`     | Value step of the control. The 'value' is always rounded to multiple of 'step'.
**width**       | int    | `src` image width or `128`    | Slider display width in px. If not specified, the image width specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 128.
**height**      | int    | `src` image height or `24`   | Slider display height in px. If not specified, the image height specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 24.
**knobwidth**   | int    | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part width in px.
**knobheight**  | int    | same as 'width' if 'direction' is `vert`, or same as 'height' if 'direction' is `horz` | Slider knob part height in px.
**ditchlength** | int    | ('height'-'knobheight') or ('width'-'knobwidth')  depends on 'direction' | Knob movable length.
**direction**   | `"vert"`<br/>`"horz"`| `null` | Slider direction. vertical or horizontal. If not specified, direction is automatically determined to the longer direction by the `width` and `height`.
**tracking**    | `"rel"`<br/>`"abs"`| `"rel"` | If 'abs', the slider follows 1:1 to the position of the pointing device. In this mode, sensitivity is ignored. Otherwise, the slider will move by the offset you dragged the pointing device.
**sensitivity** | float  | `1`     | Pointing device sensitivity. min-max range correspond to (128 / 'sensitivity') px.
**log**         | int    | `0`     | If this value is set to 1, then the value change is logarithmic. For example, if `min="10"` and `max="1000"`, then the center value of the knob will be 100. Here, if `min` is 0 or negative, an error occurs. If `log` is set to 0, then the change in value is linear.
**valuetip**    | `0`<br/>`1`| `0`     | Enable the overlaid value-tip display.
**tooltip**     | string | `null`  | Tooltip text that will be shown when mouse hover a while. If the text include a C-printf style value formatter like `%8.2f`, it will be replaced by current value. This formatter should be `%[n][.][m]{d,f,x,X,s}`. Here the 'n' is total columns, 'm' is after the decimal point columns. If the `conv` function is specified, the converted value `convValue` is used for display.
**conv**        | string | `null`  | If this attribute is specified, That string will be evaluated as an expression and stored as `convValue` as a string. This `convValue` will be used for the valuetip, tooltip and the linked webaudio-param display. In this expression, the `x` will represent current `value`. For example, `conv="(Math.pow(10,x)*20).toFixed(0)"` is specified, for range of value between 0 and 3, the range of convValue corresponds to 20 to 20000. As another example, if `conv="['sin','saw','sqr','tri'][x]"` is specified, for values from 0 to 3, each string are assigned respectively.
**enable**      |`0`<br/>`1`| `1`     | Enable control with the pointing device.
**colors**      | string | "#e00;#000;#fff" | Semicolon separated 3 colors for 'knob', 'background' and 'highlight'. These colors are used in default knob (when `src` or `knobsrc` is not provided).
**outline**     | `0`<br/>`1`<br/>string| `0`    | Border style when focused. `0`:no outline. `1`:equivalent to `"1px solid #ccc"`. Any other string will be applied to the style's outline attribute only when it has focus. 
**midilearn**   | `0`<br/>`1`| `0`     | If `1`, MIDI learn function with right-click menu is enabled.
**midicc**      | string | null    | Assign MIDI control change to this slider. with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).


### webaudio-switch

<webaudio-switch></webaudio-switch>

Attribute       | Options   | Default | Description
----------------|-----------|---------|------------
**src**         | string    | Internal embedded resource is used if not specified | url of the vertical stitched switch image.
**value**       | `0`<br/>`1`   | `0`     | The current value (`0` or `1`). Also used as initial value of the switch if specified.
**defvalue**    | `0`<br/>`1`   | Initial 'value' is used if not specified | The default value that will be used when ctrl+click.
**width**       | int       | `src` image width or `32`    | Switch display width in px. If not specified, the image width specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 32.
**height**      | int       | `src` image height * 0.5 or `32`    | Switch display height in px. If not specified, the half the image height specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 32.
**diameter**    | int       | `null`  | Switch diameter in px. This attribute can be used instead of width / height if the display image is square. If no `width` `height` `diameter` is specified, the switch size is calculated form the `src` image size. In addition, 32px square embedded resource will be used if `src` is also not specified.
**type**        | `"toggle"`<br/>`"kick"`<br/>`"radio"` | `"toggle"` | Switch type. `"toggle"` switch has so-called 'checkbox' function. `"radio"` switch is a radio-button and the `"kick"` switch is a general command button.
**group**       | string    | `null`  | Group id string used if the 'type' is `"radio"`. Only one switch will be set to `"1"` in same group.
**invert**      | `0`<br/>`1`   | `0`     | exchange on and off image.
**tooltip**     | string    | `null`  | Tooltip text that will be shown when mouse hover a while.
**enable**      | `0`<br/>`1`   | `1`     | Enable control with the pointing device.
**colors**      | string    | "#e00;#333;#fff" | Semicolon separated 3 colors for 'knob', 'background' and 'highlight'. These colors are used in default switch (when `src` is not provided).
**outline**     | `0`<br/>`1`<br/>string| `0`    | Border style when focused. `0`:no outline. `1`:equivalent to `"1px solid #ccc"`. Any other string will be applied to the style's outline attribute only when it has focus. 
**midilearn**   | string    | null    | If `true`, MIDI learn function with right-click menu is enabled.
**midicc**      | string    | null    | Assign MIDI control change to this switch. with format `ch.cn`, here the `ch` is channel (1-16, ignore channel if 0) and `cn` is control number (0-119).

### webaudio-param

<webaudio-param></webaudio-param>

Attribute      | Options | Default | Description
---------------|---------|---------|------------
**src**        | string  | Black rectangle if not specified | Background image or color. Transparent if set to `""`, or url to background image.
**value**      | float   | `0`     | The current value. Usually same as linked control
**width**      | int     | `src` image width or `32`    | Parameter display width in px. If not specified, the image width specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 32.
**height**     | int     | `src` image height or `20`    | Parameter display height in px. If not specified, the image height specified by the `src` attribute will be used as is. In addition, if no `src` is specified, it will be 20.
**fontsize**   | int     | `9`     | Font-size of the parameter display.
**colors**     | string  | `"#fff;#000"` | Semicolon separated 2 colors for text and background. background color is used when `src` is not defined.
**outline**     | `0`<br/>`1`<br/>string| `0`    | Border style when focused. `0`:no outline. `1`:equivalent to `"1px solid #ccc"`. Any other string will be applied to the style's outline attribute only when it has focus. 
**link**       | string  | `null`  | Specify the linked webaudio-knob/slider/switch by Id.
**rconv**      | string  | `null`  | Specify the reverse conversion of target's `conv`. It is needed if the target knob/slider use conversion by `conv` attribute and the user edit the `webaudio-param` value directory by keyboard. The reverse converted value will be set to linked target. For example, when the target knob/slider use `conv="Math.pow(10,x)*20"` attribute, this `webaudio-param` should be `rconv="Math.log10(x/20)"`.

### webaudio-keyboard

<webaudio-keyboard></webaudio-keyboard>

Attribute  | Options   | Default| Description
-----------|-----------|--------|------------
**values** | int array | `[]`   | The array of current pressed key numbers. "values" may has more than one element in multi-touch environment.
**width**  | int       | `480`  | Keyboard display width in px
**height** | int       | `128`  | Keyboard display height in px
**min**    | int       | `0`    | Lowest Key number. Each key is numbered incrementally from this number. If the "min" is not `0` and the modulo 12 is not zero, the keyboard is started from corresponding position (not-C). Note that the specified key should be a 'white-key'.
**keys**   | int       | `25`   | Number of keys. `25` means 25 keys keyboard.
**colors** | string    | '#222; #eee;#ccc; #333;#000; #e88;#c44; #c33;#800' | semicolon separated 9 keyboard colors. 'border; whitekey-grad-from;whitekey-grad-to; blackkey-grad-from;blackkey-grad-to; active-whitekey-grad-from;active-whitekey-grad-to; active-blackkey-grad-from;active-blackkey-grad-to'. Each key surface can has garadient left to right with 'from' and 'to'.
**outline**     | `0`<br/>`1`<br/>string| `0`    | Border style when focused. `0`:no outline. `1`:equivalent to `"1px solid #ccc"`. Any other string will be applied to the style's outline attribute only when it has focus. 
**enable** | `0`<br/>`1`   | `1`    | Enable control with the pointing device.

---
## Functions

### setValue(value, fire)  
`webaudio-knob` | `webaudio-slider` | `webaudio-switch`  
**description**: Each control can be setup and redraw by calling this function from JavaScript.
If the `fire` parameter is `undefined` or `false`, this function will not fire `'change'` event. Or the `change` event will be fired.


### setNote(state, note [,audioContext, when])  
`webaudio-keyboard`  
**description**: webaudio-keyboard can be setup pressing state with this function from JavaScript. corresponding key specified by the `note` is pressed if the `state` is non-zero otherwise the key is released. This function will NOT fire the 'change' event. If the `audioContext` and `when` arguments are specified, the pressing state will be updated after the specified time. `when` is the time in seconds on the `currentTime` time axis of the `audioContext`.

---
## Events

### 'input'  
`webaudio-knob` | `webaudio-slider`  
**description**: 'input' event is fired when knob / slider value changes while dragging.

### 'change'  
`webaudio-knob` | `webaudio-slider` | `webaudio-switch` | `webaudio-keyboard`  
**description**: `change` event is fired when value changes is decided. It means mouse button release for knobs and sliders, or switch / keyboard state changes.
 Also issued when setValue() function call with fire flag is nonzero.
In the event handler of `webaudio-knob`,`webaudio-slider` or `webaudio-switch`, current value can be get with referring `event.target.value`.  

```js
var knobs = document.getElementsByTagName('webaudio-knob');
for (var i = 0; i < knobs.length; i++) {
  var knob = knobs[i];
  knob.addEventListener('change', function(e) {
    console.log(e.target.value);
  });
}
```

For the `webaudio-keyboard`, each 'change' event has the property '.note' that contain a array `[key-state, key-number]`. For example `event.note = [1, 60]` if the key#60 is on, or `event.note = [0, 60]` if the key#60 is off.

```js
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
