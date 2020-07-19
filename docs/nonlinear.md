<link rel="stylesheet" href="./docstyle.css">

<script>
WebAudioControlsOptions={
  useMidi:1,
  knobSrc:"../knobs/simplegray.png",
  knobSprites:100,
  knobDiameter:100,
}
</script>

<script src="../webaudio-controls.js"></script>

Basic Usage :
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item"><a href="./index.html">Overview</a></div>
<div class="item"><a href="./install.html">Install</a></div>
<div class="item"><a href="./specs.html">Attributes, Functions, Events</a></div>
<div class="item"><a href="./options.html">WebAudioControlsOptions</a></div>
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
<div class="item cur"><a href="./nonlinear.html">Non-Linear Knobs / Sliders</a></div>
<div class="item"><a href="./multifader.html">Multi-Touch Device Support</a></div>
<div class="item"><a href="./midisupport.html">MIDI Support</a></div>
<div class="item"><a href="./resizetest.html">Resizing After Creation</a></div>
</div>

---

<script>
function input(elem){
    document.getElementById("raw").innerHTML="Raw Value : knob.value = "+elem.value;
    document.getElementById("conv").innerHTML="Converted Value : knob.convValue = "+elem.convValue;
}
function input2(elem){
    document.getElementById("raw2").innerHTML="Raw Value : knob.value = "+elem.value;
    document.getElementById("conv2").innerHTML="Converted Value : knob.convValue = "+elem.convValue;
}
</script>

# Non-Linear Knobs / Sliders

In some cases, you may want the knob to vary nonlinear changes with respect to the rotation of the knob.
For example, a knob for setting a frequency in the range of 20Hz to 20,000Hz will make an exponential change with rotation.  
There are two approaches to realize a knob that changes nonlinearly.  
The 'log' attribute simply makes the number change curve an exponential change, and the 'conv' attribute allows for more complex behavior.  

---
## "log" attribute
If you specify log="1" as an attribute, the change in `value` will be exponential.  
In this mode, the value increases at the same rate for a fixed rotation angle of the rotating knob.
For example, if min="1" and max="100", it will be "10" in the center of the knob.  
value must be able to reach from min value to max value in geometric progression. So be aware that min cannot be 0.  

<webaudio-knob id="knob0" min="1" max="100" log="1"></webaudio-knob>
<webaudio-param link="knob0"></webaudio-param>  

```html
<webaudio-knob id="knob0" min="1" max="100" log="1"></webaudio-knob>
<webaudio-param link="knob0"></webaudio-param>
```

---

## "conv" attribute

The'conv' attribute can specify a conversion function. 
The value of the knob changes linearly, but the value passed through the conversion function is stored as convValue.
This is a example of converting a value from 0 to 100 exponentially from 1 to 10000 by "conv" attribute.  

Here the `conv` attribute is `conv="Math.pow(10000,x/100)"`,
it means the knob's raw value range 0-100 is converted to exponential 1-10000.  

If use with `<webaudio-param>`, it will show the convValue.  
When using with webaudio-param, by adding an inverse conversion expression to the `rconv` of webaudio-param attribute,
directly number-edit in webaudio-param will be possible.  

To get converted value, use `knob.convValue` instead of `knob.value`.  
Note that the `convValue` is a string, then you can make more complex display not only number values.  

<webaudio-knob id="knob1" valuetip="1" conv="Math.pow(10000,x/100)" oninput="input(this)"></webaudio-knob>
<webaudio-param link="knob1" rconv="Math.log10(x)/4*100"></webaudio-param>

```html
<webaudio-knob id="knob1" conv="Math.pow(10000,x/100)"></webaudio-knob>
<webaudio-param link="knob1" rconv="Math.log10(x)/4*100"></webaudio-param>
```

<div id="raw">Raw Value : knob.value = 0</div>
<div id="conv">Converted Value : knob.convValue = 1</div>  
  
  
With this approach, it is possible to realize a knob that has a special action other than exponential change.  
The following example changes exponentially from "20" to "20000" for the change of value 0-100,
and if the converted value is 1000 or over, "kHz" is displayed, otherwise "Hz".  

<script>
function valueconv(x){
  x = 20*Math.pow(1000,x/100);
  if(x<=1000) return x.toFixed(2) + " Hz";
  return (x/1000).toFixed(2) + " kHz";
}
</script>

<webaudio-knob id="knob2" valuetip="1" min="0" max="100" conv="valueconv"></webaudio-knob>
<webaudio-param link="knob2" width="80"></webaudio-param><br/>

```html
<script>
function valueconv(x){
  x = 20 * Math.pow( 1000, x / 100 );
  if(x &lt;= 1000) return x.toFixed(2) + " Hz";
  return (x/1000).toFixed(2) + " kHz";
}
</script>
<webaudio-knob id="knob2" valuetip="1" min="0" max="100" conv="valueconv"></webaudio-knob>
<webaudio-param link="knob2" width="80"></webaudio-param>
```

---
