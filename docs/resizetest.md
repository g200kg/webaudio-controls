<script src="../webaudio-controls.js"></script>

# Resizing After Creation  

This is a resize test after creating the **webaudio-controls** elements.
Attributes such as "diameter", "width", and "height" can be changed later to resize.  
  

---

## Knob
Size :
<button onclick="document.getElementById('knob1').diameter=25">
  Small</button>
<button onclick="document.getElementById('knob1').diameter=50">
  Mid</button>
<button onclick="document.getElementById('knob1').diameter=100">
  Large</button>  
<webaudio-knob id="knob1" diameter="50"></webaudio-knob>
  
```html
<button onclick="document.getElementById('knob1').diameter=25">
  Small</button>
<button onclick="document.getElementById('knob1').diameter=50">
  Mid</button>
<button onclick="document.getElementById('knob1').diameter=100">
  Large</button>  
<webaudio-knob id="knob1" diameter="50"></webaudio-knob>
```  
  
  
## Param
Size :
<button onclick="document.getElementById('param1').width=25">
  Width Small</button>
<button onclick="document.getElementById('param1').width=100">
  Width Large</button>
<button onclick="document.getElementById('param1').height=16">
  Height Small</button>
<button onclick="document.getElementById('param1').height=48">
  Height Large</button>
<button onclick="document.getElementById('param1').fontsize=9">
  Font Small</button>
<button onclick="document.getElementById('param1').fontsize=48">
  Font Large</button>  
<webaudio-param id="param1" link="knob" width="100" height="16">
</webaudio-param>  

```html
<button onclick="document.getElementById('param1').width=25">
  Width Small</button>
<button onclick="document.getElementById('param1').width=100">
  Width Large</button>
<button onclick="document.getElementById('param1').height=16">
  Height Small</button>
<button onclick="document.getElementById('param1').height=48">
  Height Large</button>
<button onclick="document.getElementById('param1').fontsize=9">
  Font Small</button>
<button onclick="document.getElementById('param1').fontsize=48">
  Font Large</button>  
<webaudio-param id="param1" link="knob" width="100" height="16">
</webaudio-param>   
```
  

## Slider
Size :
<button onclick="$('sli1').height=50;$('sli1').width=10">Small</button>
<button onclick="$('sli1').height=100;$('sli1').width=20">Mid</button>
<button onclick="$('sli1').height=200;$('sli1').width=40">Large</button>  
<webaudio-slider id="sli1" height="100" width="20"></webaudio-slider>  

```html
<button onclick="$('sli1').height=50;$('sli1').width=10">Small</button>
<button onclick="$('sli1').height=100;$('sli1').width=20">Mid</button>
<button onclick="$('sli1').height=200;$('sli1').width=40">Large</button>  
<webaudio-slider id="sli1" height="100" width="20"></webaudio-slider>  
```
  

## Switch
Size :
<button onclick="$('sw1').height=25;$('sw1').width=25">Small</button>
<button onclick="$('sw1').height=50;$('sw1').width=50">Mid</button>
<button onclick="$('sw1').height=100;$('sw1').width=100">Large</button>  
<webaudio-switch id="sw1" height="50" width="50"></webaudio-switch>

```html
<button onclick="$('sw1').height=25;$('sw1').width=25">Small</button>
<button onclick="$('sw1').height=50;$('sw1').width=50">Mid</button>
<button onclick="$('sw1').height=100;$('sw1').width=100">Large</button>  
<webaudio-switch id="sw1" height="50" width="50"></webaudio-switch>
```
  
  
## Keyboard
Size :
<button onclick="$('kbd1').width=100;$('kbd1').height=20;">Small</button>
<button onclick="$('kbd1').width=200;$('kbd1').height=40;">Mid</button>
<button onclick="$('kbd1').width=400;$('kbd1').height=80;">Large</button>  
Keys :
<button onclick="$('kbd1').keys=13;">13 Keys</button>
<button onclick="$('kbd1').keys=25;">25 Keys</button>
<button onclick="$('kbd1').keys=49;">49 Keys</button>
<button onclick="$('kbd1').keys=61;">61 Keys</button>  
<webaudio-keyboard id="kbd1" width="400" height="80"></webaudio-keyboard>
  
  
```html
Size :
<button onclick="$('kbd1').width=100;$('kbd1').height=20;">Small</button>
<button onclick="$('kbd1').width=200;$('kbd1').height=40;">Mid</button>
<button onclick="$('kbd1').width=400;$('kbd1').height=80;">Large</button>  
Keys :
<button onclick="$('kbd1').keys=13;">13 Keys</button>
<button onclick="$('kbd1').keys=25;">25 Keys</button>
<button onclick="$('kbd1').keys=49;">49 Keys</button>
<button onclick="$('kbd1').keys=61;">61 Keys</button>  
<webaudio-keyboard id="kbd1" width="400" height="80"></webaudio-keyboard>
```  
  
---
