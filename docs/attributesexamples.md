---
pageid: AttributesExamples
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

<div id="side" style="position:fixed;right:0%;top:90px;height:80%">
  <div id="consframe" style="color:#fff;width:240px;height:100%;background:rgba(0,0,0,0.4);overflow:scroll;margin:0;padding:5px">
    <div id="cons"><br/><br/>--- Events ---<br/></div>
  </div>
  <button onclick="Clear()" style="position:absolute;left:0;top:-20px">Clear</button>
</div>


# Examples of Various Attributes

You can customize the appearance and behavior of `webaudio-controls` by adding attributes to the tags. Here are some examples.  
  


## webAudio-knob

By default, the webaudio-knob tag looks like this.

<webaudio-knob id="knb1"></webaudio-knob>

```html
<webaudio-knob id="knb1"></webaudio-knob>
```

Examples of color variation by `colors` attribute.

|    | colors attribute
|----|------------------------
|<webaudio-knob id="knb2a" colors="#fc0;#000;#444"></webaudio-knob>|`colors="#fc0;#000;#444"`
|<webaudio-knob id="knb2b" colors="#fc0;#8ab;#fff"></webaudio-knob>|`colors="#fc0;#8ab;#fff"`
|<webaudio-knob id="knb2c" colors="#08f;#800;#fff"></webaudio-knob>|`colors="#08f;#800;#fff"`
|<webaudio-knob id="knb2d" colors="#fc0;#a0b;#fcc"></webaudio-knob>|`colors="#fc0;#a0b;#fcc"`
|<webaudio-knob id="knb2e" colors="#f88;#400;#a00"></webaudio-knob>|`colors="#f88;#400;#a00"`
|<webaudio-knob id="knb2f" colors="#888;#000;#0f0"></webaudio-knob>|`colors="#888;#000;#0f0"`

An external Knob image-file can be assigned by the `src` attribute.  
Also, specify the range of the value in `min`/`max`. The initial value is "60". The value is changed in `step` of "20".  

<webaudio-knob id="knob3" src="../knobs/LittlePhatty.png"
 sprites="100" value="60" min="-100" max="100" step="20" diameter="64" valuetip="1"></webaudio-knob>

```html
  <webaudio-knob id="knb3"
    src="../knobs/LittlePhatty.png" diameter="64"
    sprites="100" value="60"
    min="-100" max="100" step="20">
  </webaudio-knob>
```

The knob image will be resized to specified size (even recommended to prepare required size image for clear display).  

<webaudio-knob id="knb4" src="../knobs/LittlePhatty.png" sprites="100" diameter="32"></webaudio-knob><br/>

```html
  <webaudio-knob id="knb4"
    src="../knobs/LittlePhatty.png" diameter="32"
    sprites="100">
  </webaudio-knob>
```

Non-square image can be used with specifying `width`/`height` instead of diameter.  

<webaudio-knob id="knb5" src="../img/hsw5.png" sprites="4" value="2" min="0" max="4" width="128" height="32"></webaudio-knob><br/>

```html
  <webaudio-knob id="knb5" 
    src="../img/hsw5.png" sprites="4" 
    width="128" height="32"
    value="2" min="0" max="4">
  </webaudio-knob>
```

`webaudio-knob` can has tooltip-text and editable parameter display field with `webaudio-param`.  

<webaudio-knob id="knb6" src="../knobs/LittlePhatty.png" sprites="100" diameter="64" valuetip="0" tooltip="Knob Test : %s"></webaudio-knob>
<webaudio-param link="knb6"></webaudio-param><br/>

```html
  <webaudio-knob id="knb6"
    src="../knobs/LittlePhatty.png"
    sprites="100" diameter="64"
    tooltip="Knob Test %s">
  </webaudio-knob>
  <webaudio-param link="knb6"></webaudio-param>
```

---

## webAudio-slider

If no slider image is provided by the `src` attribute, a simple built-in image will be used. 

The direction of the slider is automatically determined by specifying the `width` and `height`, but can also be specified explicitly with the `direction` attribute.  

If you don't specify the `width` and `height`, and you don't specify the `direction`, the default is 128 x 24px. The default is horizontal direction. ( This differs from older versions, but this is for compatibility with `<input type="range">` ).

<webaudio-slider id="sli1a" direction="vert"></webaudio-slider>
<webaudio-slider id="sli1b" direction="horz"></webaudio-slider>

```html
<webaudio-slider id="sli1a" direction="vert">
</webaudio-slider>
<webaudio-slider id="sli1b" direction="horz">
</webaudio-slider>
```

These are examples of color variation by `colors` attribute :

|    | colors attribute
|----|----
|<webaudio-slider id="sli2a" colors="#0f0;#000;#ff0" width="200" height="30"></webaudio-slider>|`"#0f0;#000;#ff0"`
|<webaudio-slider id="sli2b" colors="#fc0;#8ab;#fff" width="200" height="30"></webaudio-slider>|`"#fc0;#8ab;#fff"`
|<webaudio-slider id="sli2c" colors="#08f;#800;#fff" width="200" height="30"></webaudio-slider>|`"#08f;#800;#fff"`
|<webaudio-slider id="sli2d" colors="#fc0;#a0b;#fcc" width="200" height="30"></webaudio-slider>|`"#fc0;#a0b;#fcc"`
|<webaudio-slider id="sli2e" colors="#f88;#400;#fcc" width="200" height="30"></webaudio-slider>|`"#f88;#400;#fcc"`
|<webaudio-slider id="sli2f" colors="#888;#000;#0f0" width="200" height="30"></webaudio-slider>|`"#888;#000;#0f0"`

If you specify a slider background image and a thumb image, it will look like this.

<webaudio-slider id="sli3" direction="horz" src="../img/hsliderbody.png" knobsrc="../img/hsliderknob.png"></webaudio-slider><br/>

```html
  <webaudio-slider id="sli3" direction="horz"
    src="../img/hsliderbody.png"
    knobsrc="../img/hsliderknob.png">
  </webaudio-slider>
```

Value step is specified, resized, tooltip-text and webaudio-param are added.  

<webaudio-slider id="sli4" direction="horz" src="../img/hsliderbody.png" knobsrc="../img/hsliderknob.png" min="0" max="1" step="0.1" width="60" height="20" valuetip="0" tooltip="Slider Test"></webaudio-slider>
<webaudio-param link="sli4"></webaudio-param><br/>

```html
  <webaudio-slider id="sli4" direction="horz"
    src="../img/hsliderbody.png"
    knobsrc="../img/hsliderknob.png"
    min="0" max="1" step="0.1"
    width="60" height="20"
    tooltip="Slider Test">
  </webaudio-slider>
  <webaudio-param link="sli4"></webaudio-param>
```

---

## webAudio-switch

These are default `webaudio-switch`. If no switch image is specified, simple built-in image resource is used.  
Default switch type is "toggle".  

<webaudio-switch id="sw1"></webaudio-switch>

```html
  <webaudio-switch id="sw1"></webaudio-switch>
```

An example of color variation by `colors` attribute.

|    | colors attribute
|----|----
|<webaudio-switch id="sw2a" colors="#0f0;#000;#ff0" width="50" height="50"></webaudio-switch>|`"#0f0;#000;#ff0"`
|<webaudio-switch id="sw2b" colors="#fc0;#8ab;#fff" width="50" height="50"></webaudio-switch>|`"#fc0;#8ab;#fff"`
|<webaudio-switch id="sw2c" colors="#08f;#800;#fff" width="50" height="50"></webaudio-switch>|`"#08f;#800;#fff"`
|<webaudio-switch id="sw2d" colors="#fc0;#a0b;#fcc" width="50" height="50"></webaudio-switch>|`"#fc0;#a0b;#fcc"`
|<webaudio-switch id="sw2e" colors="#f88;#400;#fcc" width="50" height="50"></webaudio-switch>|`"#f88;#400;#fcc"`
|<webaudio-switch id="sw2f" colors="#888;#000;#0f0" width="50" height="50"></webaudio-switch>|`"#888;#000;#0f0"`


This is an example when a background image file is specified by `src` attribute. If the size is not specified, the image will be displayed at its original size, but if the `width` and `height` are specified, the image will be resized.

<webaudio-switch id="sw3a" src="../knobs/switch_toggle.png" width="32" height="32"></webaudio-switch>
<webaudio-switch id="sw3b" src="../knobs/switch_toggle.png" width="64" height="64"></webaudio-switch>  

```html
  <webaudio-switch id="sw3a" src="../knobs/switch_toggle.png"
    width="32" height="32">
  </webaudio-switch>
  <webaudio-switch id="sw3b" src="../knobs/switch_toggle.png"
    width="64" height="64">
  </webaudio-switch>
```

This is a 'kick' type switch. This switch is 'on' only while pressing.  

<webaudio-switch id="sw4" src="../knobs/switch_toggle.png" type="kick" width="54" height="54"></webaudio-switch>  

```html
  <webaudio-switch id="sw4"
    type="kick" 
    src="../knobs/switch_toggle.png"
    width="54" height="54">
  </webaudio-switch>
```

These are 'radio' type switches. In this mode, only one switch is activated in the group. A group is composed of those that match the `group` attribute.  

<webaudio-switch id="sw5a" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" value="1" tooltip="Radio-A"></webaudio-switch>
<webaudio-switch id="sw5b" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" tooltip="Radio-B"></webaudio-switch>
<webaudio-switch id="sw5c" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" tooltip="Radio-C"></webaudio-switch><br/>

```html
  <webaudio-switch id="sw5a"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" value="1" tooltip="Radio-A">
  </webaudio-switch>
  <webaudio-switch id="sw5b"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" tooltip="Radio-B">
  </webaudio-switch>
  <webaudio-switch id="sw5c"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" tooltip="Radio-C">
  </webaudio-switch>
```

---

## webaudio-keyboard

This is a default keyboard. 25 keys, 480px X 128px is default.  

<webaudio-keyboard id="kbd1"></webaudio-keyboard>

```html
  <webaudio-keyboard id="kbd1"></webaudio-keyboard>
```

Number of keys, width and height settings. Also the lowest key is set to note "A" by the "min" attribute.  

<webaudio-keyboard id="kbd2" keys="88" min="9" width="600" height="64"></webaudio-keyboard>

```html
  <webaudio-keyboard id="kbd2"
    keys="88" min="9" width="600" height="64">
  </webaudio-keyboard>
```

Color customization by `colors` attribute. 

<webaudio-keyboard colors="#888;#000;#000;#888;#777;#eee;#ddd;#333;#222">
</webaudio-keyboard>

```html
<webaudio-keyboard colors="#888;#000;#000;#888;#777;#eee;#ddd;#333;#222">
</webaudio-keyboard>
```


<webaudio-keyboard colors="#000;#ec0;#db0;#222;#000;#0e3;#0c2;#0e3;#0c2">
</webaudio-keyboard>

```html
<webaudio-keyboard colors="#000;#ec0;#db0;#222;#000;#0e3;#0c2;#0e3;#0c2">
</webaudio-keyboard>
```


<webaudio-keyboard colors="#222;#9dc;#8ca;#4ca;#3a9;#f8a;#f8a;#f8a;#f8a">
</webaudio-keyboard>

```html
<webaudio-keyboard colors="#222;#9dc;#8ca;#4ca;#3a9;#f8a;#f8a;#f8a;#f8a">
</webaudio-keyboard>
```

---

<script type="text/javascript">
function Init() {
  var knobs = document.getElementsByTagName('webaudio-knob');
  for(var i = 0; i < knobs.length; ++i){
    knobs[i].addEventListener('input', AddLogValue);
    knobs[i].addEventListener('change', AddLogValue);
    knobs[i].addEventListener('click', AddLogValue);
  }
  var sliders = document.getElementsByTagName('webaudio-slider');
  for(var i = 0; i < sliders.length; ++i){
    sliders[i].addEventListener('input', AddLogValue);
    sliders[i].addEventListener('change', AddLogValue);
    knobs[i].addEventListener('click', AddLogValue);
  }
  var switches = document.getElementsByTagName('webaudio-switch');
  for(var i = 0; i < switches.length; ++i){
    switches[i].addEventListener('input', AddLogValue);
    switches[i].addEventListener('change', AddLogValue);
    switches[i].addEventListener('click', AddLogValue);
  }
  var kbds = document.getElementsByTagName('webaudio-keyboard');
  for(var i = 0; i < kbds.length; ++i){
    kbds[i].addEventListener('input', AddLogKbd);
    kbds[i].addEventListener('change', AddLogKbd);
    kbds[i].addEventListener('click', AddLogKbd);
  }
  window.addEventListener('scroll',Scroll);
}
function AddLogValue(e) {
  var str = `"${e.type}": ${e.target.id}.value = ${e.target.value}`;
  var con = document.getElementById("cons");
  var conframe = document.getElementById("consframe");
  con.innerHTML += (str+"<br/>");
  conframe.scrollTop = con.scrollHeight;
}
function AddLogKbd(e) {
  var str;
  switch(e.type){
  case "change":
    str = `"${e.type}": ${e.target.id} ev.note = [${e.note}]`;
    break;
  default:
    str = `"${e.type}": ${e.target.id}`;
    break;
  }
  var con = document.getElementById("cons");
  var conframe = document.getElementById("consframe");
  con.innerHTML += (str+"<br/>");
  conframe.scrollTop = con.scrollHeight;
}
function LogClick(e) {
  var str="click:"+e.target.id;
  document.getElementById("cons").innerHTML += (str+"<br/>");
  console.log(str);
}
function Scroll() {
  document.getElementById("consframe").style.top=window.scrollY+"px";
}
function Clear() {
  document.getElementById("cons").innerHTML="--- Events ---<br/>";
}
window.onload=Init;
</script>
