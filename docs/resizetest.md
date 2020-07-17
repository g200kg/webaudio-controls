<script src="../webaudio-controls.js"></script>

# Resizing After Creation  

This is a resize test after creating the **webaudio-controls** elements.
Attributes such as "diameter", "width", and "height" can be changed later to resize.  
  

---

## Knob
Size :
<button onclick="document.getElementById('knob').diameter=25">Small</button>
<button onclick="document.getElementById('knob').diameter=50">Mid</button>
<button onclick="document.getElementById('knob').diameter=100">Large</button>  
<webaudio-knob id="knob" diameter="50"></webaudio-knob>
  
```html
<button onclick="document.getElementById('knob').diameter=25">Small</button>
<button onclick="document.getElementById('knob').diameter=50">Mid</button>
<button onclick="document.getElementById('knob').diameter=100">Large</button>  
<webaudio-knob id="knob" diameter="50"></webaudio-knob>
```  
  
  
## Param
Size :
<button onclick="document.getElementById('param').width=25">Width Small</button>
<button onclick="document.getElementById('param').width=100">Width Large</button>
<button onclick="document.getElementById('param').height=16">Height Small</button>
<button onclick="document.getElementById('param').height=48">Height Large</button>
<button onclick="document.getElementById('param').fontsize=9">Font Small</button>
<button onclick="document.getElementById('param').fontsize=48">Font Large</button>  
<webaudio-param id="param" link="knob" width="100" height="16"></webaudio-param>  

```html
<button onclick="document.getElementById('param').width=25">Width Small</button>
<button onclick="document.getElementById('param').width=100">Width Large</button>
<button onclick="document.getElementById('param').height=16">Height Small</button>
<button onclick="document.getElementById('param').height=48">Height Large</button>
<button onclick="document.getElementById('param').fontsize=9">Font Small</button>
<button onclick="document.getElementById('param').fontsize=48">Font Large</button>  
<webaudio-param id="param" link="knob" width="100" height="16"></webaudio-param>  
```
  

## Slider
Size :
<button onclick="document.getElementById('sli').height=50;document.getElementById('sli').width=10">Small</button>
<button onclick="document.getElementById('sli').height=100;document.getElementById('sli').width=20">Mid</button>
<button onclick="document.getElementById('sli').height=200;document.getElementById('sli').width=40">Large</button>  
<webaudio-slider id="sli" height="100" width="20"></webaudio-slider>  

```html
<button onclick="document.getElementById('sli').height=50;document.getElementById('sli').width=10">Small</button>
<button onclick="document.getElementById('sli').height=100;document.getElementById('sli').width=20">Mid</button>
<button onclick="document.getElementById('sli').height=200;document.getElementById('sli').width=40">Large</button>  
<webaudio-slider id="sli" height="100" width="20"></webaudio-slider>  
```
  

## Switch
Size :
<button onclick="document.getElementById('sw').height=25;document.getElementById('sw').width=25">Small</button>
<button onclick="document.getElementById('sw').height=50;document.getElementById('sw').width=50">Mid</button>
<button onclick="document.getElementById('sw').height=100;document.getElementById('sw').width=100">Large</button>  
<webaudio-switch id="sw" height="50" width="50"></webaudio-switch>

```html
<button onclick="document.getElementById('sw').height=25;document.getElementById('sw').width=25">Small</button>
<button onclick="document.getElementById('sw').height=50;document.getElementById('sw').width=50">Mid</button>
<button onclick="document.getElementById('sw').height=100;document.getElementById('sw').width=100">Large</button>  
<webaudio-switch id="sw" height="50" width="50"></webaudio-switch>
```
  
  
## Keyboard
Size :
<button onclick="document.getElementById('keyb').width=100;document.getElementById('keyb').height=20;">Small</button>
<button onclick="document.getElementById('keyb').width=200;document.getElementById('keyb').height=40;">Mid</button>
<button onclick="document.getElementById('keyb').width=400;document.getElementById('keyb').height=80;">Large</button>  
Keys :
<button onclick="document.getElementById('keyb').keys=13;">13 Keys</button>
<button onclick="document.getElementById('keyb').keys=25;">25 Keys</button>
<button onclick="document.getElementById('keyb').keys=49;">49 Keys</button>
<button onclick="document.getElementById('keyb').keys=61;">61 Keys</button>  
<webaudio-keyboard id="keyb" width="400" height="80" onchange="console.log(event.note)"></webaudio-keyboard>
  
  
```html
Size :
<button onclick="document.getElementById('keyb').width=100;document.getElementById('keyb').height=20;">Small</button>
<button onclick="document.getElementById('keyb').width=200;document.getElementById('keyb').height=40;">Mid</button>
<button onclick="document.getElementById('keyb').width=400;document.getElementById('keyb').height=80;">Large</button>  
Keys :
<button onclick="document.getElementById('keyb').keys=13;">13 Keys</button>
<button onclick="document.getElementById('keyb').keys=25;">25 Keys</button>
<button onclick="document.getElementById('keyb').keys=49;">49 Keys</button>
<button onclick="document.getElementById('keyb').keys=61;">61 Keys</button>  
<webaudio-keyboard id="keyb" width="400" height="80" onchange="console.log(event.note)"></webaudio-keyboard>
```  
  
---