<script src="../webaudio-controls.js"></script>
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

<div id="side" style="position:fixed;right:0%;top:90px;height:80%">
  <div id="consframe" style="color:#fff;width:240px;height:100%;background:rgba(0,0,0,0.4);overflow:scroll;margin:0;padding:5px">
    <div id="cons"><br/><br/>--- Events ---<br/></div>
  </div>
  <button onclick="Clear()" style="position:absolute;left:0;top:-20px">Clear</button>
</div>

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
<div class="item">Examples of Various Attributes</div>
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

# Examples of Various Attributes

You can customize the appearance and behavior of webaudio-controls by adding attributes to the tags. Here are some examples.  
  


## WebAudio-Knobs

These are default webaudio-knobs. If no knob-image is specified, simple embedded image resource is used. But colors are customizable.  

<webaudio-knob id="knob1a"></webaudio-knob> <webaudio-knob id="knob1b" colors="#fc0;#000;#444"></webaudio-knob>
```html
  <webaudio-knob id="knob1a"></webaudio-knob>
  <webaudio-knob id="knob1b" colors="#fc0;#000;#444"></webaudio-knob>
```

Knob image file is assigned.
  Value range can be specified by min/max. The initial value is "60". The value is changed in step of "20".  

<webaudio-knob id="knob2" src="../knobs/LittlePhatty.png"
 sprites="100" value="60" min="-100" max="100" step="20" diameter="64" valuetip="1"></webaudio-knob>

```html
  <webaudio-knob id="knob2"
    src="../knobs/LittlePhatty.png" diameter="64"
    sprites="100" value="60"
    min="-100" max="100" step="20">
  </webaudio-knob>
```

The knob image will be resized to specified size (even recommended to prepare required size image for clear display)  

<webaudio-knob id="knob3" src="../knobs/LittlePhatty.png" sprites="100" diameter="32"></webaudio-knob><br/>

```html
  <webaudio-knob id="knob3"
    src="../knobs/LittlePhatty.png" diameter="32"
    sprites="100">
  </webaudio-knob>
```

non-square image can be used with specifying width/height instead of diameter.  

<webaudio-knob id="knob4" src="../img/hsw5.png" sprites="4" value="2" min="0" max="4" width="128" height="32"></webaudio-knob><br/>

```html
  <webaudio-knob id="knob4" 
    src="../img/hsw5.png" sprites="4" 
    width="128" height="32"
    value="2" min="0" max="4">
  </webaudio-knob>
```

webaudio-knob can has tooltip-text and editable parameter display field with webaudio-param.  

<webaudio-knob id="knob5" src="../knobs/LittlePhatty.png" sprites="100" diameter="64" valuetip="0" tooltip="Knob Test : %s"></webaudio-knob>
<webaudio-param id="para5" link="knob5"></webaudio-param><br/>

```html
  <webaudio-knob id="knob5"
    src="../knobs/LittlePhatty.png"
    sprites="100" diameter="64"
    tooltip="Knob Test %s">
  </webaudio-knob>
  <webaudio-param link="knob5"></webaudio-param>
```

---

## WebAudio-Sliders

These are default webaudio-sliders. If no slider-image is specified, 
  simple embedded image resource is used, but colors can be customize.
  The slider direction is specified by "direction" attribute.  

<webaudio-slider id="slider1a"></webaudio-slider>
<webaudio-slider id="slider1b" colors="#850;#230;#fff"></webaudio-slider>
<webaudio-slider id="slider1c" direction="horz"></webaudio-slider><br/>

```html
  <webaudio-slider id="slider1a"></webaudio-slider>
  <webaudio-slider id="slider1b" colors="#850;#230;#fff"></webaudio-slider>
  <webaudio-slider id="slider1c" direction="horz"></webaudio-slider>
```

Specifying the sliderbase and sliderknob images.  

<webaudio-slider id="slider3" direction="horz" src="../img/hsliderbody.png" knobsrc="../img/hsliderknob.png"></webaudio-slider><br/>

```html
  <webaudio-slider id="slider3" direction="horz"
    src="../img/hsliderbody.png"
    knobsrc="../img/hsliderknob.png">
  </webaudio-slider>
```

Value step is specified, resized, tooltip-text and webaudio-param are added.  

<webaudio-slider id="slider4" direction="horz" src="../img/hsliderbody.png" knobsrc="../img/hsliderknob.png" min="0" max="1" step="0.1" width="60" height="20" valuetip="0" tooltip="Slider Test"></webaudio-slider>
<webaudio-param link="slider4"></webaudio-param><br/>

```html
  <webaudio-slider id="slider4" direction="horz"
    src="../img/hsliderbody.png"
    knobsrc="../img/hsliderknob.png"
    min="0" max="1" step="0.1"
    width="60" height="20"
    tooltip="Slider Test">
  </webaudio-slider>
  <webaudio-param link="slider4"></webaudio-param>
```

---

## WebAudio-Switches

These are default webaudio-switch. If no switch-image is specified, simple embedded image resource is used.
  default switch type is "toggle".  

<webaudio-switch id="sw1a"></webaudio-switch>
<webaudio-switch id="sw1b" colors="#0c0;#008;#fff"></webaudio-switch>

```html
  <webaudio-switch id="sw1a"></webaudio-switch>
  <webaudio-switch id="sw1b" colors="#0c0;#008;#fff"></webaudio-switch>
```

Image file is specified. Images are resized to specified size.  

<webaudio-switch id="sw2a" src="../knobs/switch_toggle.png" width="32" height="32"></webaudio-switch>
<webaudio-switch id="sw2b" src="../knobs/switch_toggle.png" width="64" height="64"></webaudio-switch>  

```html
  <webaudio-switch id="sw2a" src="../knobs/switch_toggle.png"
    width="32" height="32">
  </webaudio-switch>
  <webaudio-switch id="sw2b" src="../knobs/switch_toggle.png"
    width="64" height="64">
  </webaudio-switch>
```

This is a 'kick' type switch. this switch is 'on' only while pressing.  

<webaudio-switch id="sw3" src="../knobs/switch_toggle.png" type="kick" width="54" height="54"></webaudio-switch>  

```html
  <webaudio-switch id="sw3"
    type="kick" 
    src="../knobs/switch_toggle.png"
    width="54" height="54">
  </webaudio-switch>
```

These are 'radio' type switches. In this mode, only one switch is activated in the group.  

<webaudio-switch id="sw4a" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" value="1" tooltip="Radio-A"></webaudio-switch>
<webaudio-switch id="sw4b" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" tooltip="Radio-B"></webaudio-switch>
<webaudio-switch id="sw4c" src="../knobs/switch_toggle.png" type="radio" group="radio1" width="54" height="54" invert="1" tooltip="Radio-C"></webaudio-switch><br/>

```html
  <webaudio-switch id="radioA"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" value="1" tooltip="Radio-A">
  </webaudio-switch>
  <webaudio-switch id="radioB"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" tooltip="Radio-B">
  </webaudio-switch>
  <webaudio-switch id="radioC"
    src="../knobs/switch_toggle.png"
    type="radio" group="radio1"
    width="54" height="54" invert="1" tooltip="Radio-C">
  </webaudio-switch>
```

---

## Keyboards

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

---
