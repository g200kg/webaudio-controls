---
pageid: Tracking
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# Slider tracking "rel" and "abs"

By default, slider tracking is set to "rel" mode.  

In this mode, when you operate the slider, the drag distance determines the amount of change from the current value.
Pressing and releasing without dragging does not change the current value.  

If you set the "tracking" attribute to "abs",
then simply pressing or dragging anywhere in the slider will change the value to the value corresponding to that position. 
Fine control (Shift + drag) is ignored when "abs" mode.  

---
## tracking="rel"  

<webaudio-slider id="slider1" tracking="rel"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider1"></webaudio-param>

```html
<webaudio-slider id="slider1" tracking="rel"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider1"></webaudio-param>
```

---

## tracking="abs"  

<webaudio-slider id="slider2" tracking="abs"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider2"></webaudio-param>

```html
<webaudio-slider id="slider2" tracking="abs"
  value="50" min="0" max="100" width="400" height="32">
</webaudio-slider>
<webaudio-param link="slider2"></webaudio-param>
```

Which of "rel" and "abs" is better depends on the case, but "abs" can be used also as changeover switches.  
<table style="font-size:11px;background:#223;padding:8px">
  <tr>
  <td rowspan="4" style="width:30px"><webaudio-slider id="slider3" tracking="abs" min="0" max="3" width="24" height="128"></webaudio-slider></td>
  <td>Triangle</td></tr>
  <tr><td>Square</td></tr>
  <tr><td>Sawtooth</td></tr>
  <tr><td>Sine</td></tr>
</table>


```html
<webaudio-slider id="slider3" tracking="abs"
 min="0" max="3" width="24" height="128">
</webaudio-slider>
```

---

