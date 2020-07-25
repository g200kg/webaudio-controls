---
pageid: MultiTouch
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={
  useMidi:1,
  knobSrc:"../knobs/simplegray.png",
  sliderSrc:"../knobs/vsliderbody.png",
  sliderKnobSrc:"../knobs/vsliderknob.png",
  sliderKnobWidth:100,
  sliderKnobHeight:40,
  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

<style>
#base {
    color:#027;
    position:relative;
    display:block;
    background:#888;
    background: linear-gradient(#444 0%, #aaa 3%,#888 97%,#444 100%);
    margin:auto;
    width:600px;
    padding:20px 40px;
}
td{
  text-align: center;
  padding:20px 10px;
}
</style>


# Multi-Touch Device Support  

**webaudio-controls** supports multi-touch devices. You only need to write multiple `webaudio-controls` elements,
no special action in your code is required. This is a demo to operate multiple controls simultaneously 
using multi-touch device.  

Additionally, this demo is set to accept signals from an external MIDI controller
via the Web MIDI API by specifying the "midicc" and "midilearn" attributes.
The MIDI function can be controlled by right-clicking each element to display a menu and assigning MIDI #CC.  

<div id="base">
  <table>
    <tr>
      <td><webaudio-knob diameter="80" value="50" midicc="0.16" midilearn="1"></webaudio-knob></td>
      <td><webaudio-knob diameter="80" value="50" midicc="0.17" midilearn="1"></webaudio-knob></td>
      <td><webaudio-knob diameter="80" value="50" midicc="0.18" midilearn="1"></webaudio-knob></td>
      <td><webaudio-knob diameter="80" value="50" midicc="0.19" midilearn="1"></webaudio-knob></td>
      <td><webaudio-knob diameter="80" value="50" midicc="0.20" midilearn="1"></webaudio-knob></td>
      <td><webaudio-knob diameter="80" value="50" midicc="0.21" midilearn="1"></webaudio-knob></td>
    </tr>
    <tr>
      <td><webaudio-slider width="50" height="300" midicc="0.0" midilearn="1"></webaudio-slider></td>
      <td><webaudio-slider width="50" height="300" midicc="0.1" midilearn="1"></webaudio-slider></td>
      <td><webaudio-slider width="50" height="300" midicc="0.2" midilearn="1"></webaudio-slider></td>
      <td><webaudio-slider width="50" height="300" midicc="0.3" midilearn="1"></webaudio-slider></td>
      <td><webaudio-slider width="50" height="300" midicc="0.4" midilearn="1"></webaudio-slider></td>
      <td><webaudio-slider width="50" height="300" midicc="0.5" midilearn="1"></webaudio-slider></td>
    </tr>
  </table>
</div>  
  

---

```html
  <webaudio-slider width="50" height="300" midicc="0.0" midilearn="1">
  </webaudio-slider>
  <webaudio-slider width="50" height="300" midicc="0.1" midilearn="1">
  </webaudio-slider>
  <webaudio-slider width="50" height="300" midicc="0.2" midilearn="1">
  </webaudio-slider>
  <webaudio-slider width="50" height="300" midicc="0.3" midilearn="1">
  </webaudio-slider>
  .
  .
  .
```
---
