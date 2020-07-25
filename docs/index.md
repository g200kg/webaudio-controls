---
pageid: Overview
---

<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={
    useMidi:1,
  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# Overview

**webaudio-controls** is a Javascript library to display the GUI components used in Web Music Applications.
webaudio-controls consists of knobs, sliders, switches, parameter displays and keyboards.
By loading `webaudio-controls.js` to your page, custom tags for component display will be added using WebComponents.  
You can configure the GUI screen just by writing custom tags in HTML.  

**webaudio-controls** is consist of following components.  

Component         | Description
------------------|------------
webaudio-knob     | Rotating or some other frame-by-frame animation knobs. 
webaudio-slider   | Vertical or Horizontal slidesrs.
webaudio-switch   | Toggle / Kick / Radio switches.
webaudio-param    | Editable value display field that can auto-link to knobs or sliders.
webaudio-keyboard | Mouse / Touch playable keyboard. multi-touch support.

Chrome / Firefox / Edge compatible
iOS and Android touch devices compatible

This is an example of a typical GUI screen created using webaudio-controls. Knobs, sliders, switches etc. can be manipulated with a mouse or touch device. It is also possible to operate from a connected MIDI controller.  

Each component fires an event when manipulated and can be handled by a javascript program.

<div>
    <div style="position:relative;background-image: url('../img/bg.png');width:512px;height:240px;margin:30px auto;padding:0px;">
        <webaudio-knob id="knob1" midilearn="1" midicc="1.1" style="position:absolute;left:48px;top:76px" src="../knobs/LittlePhatty.png" value="50" step="1" diameter="64" tooltip="Knob1 tooltip %d"></webaudio-knob>
        <webaudio-knob midilearn="1" midicc="8.7" style="position:absolute;left:128px;top:76px" src="../knobs/LittlePhatty.png" value="1" min="0" max="3" step="0.01" diameter="64" sprites="100" tooltip="Knob2 tooltip <br/> %.2f Hz" conv="(x)=>{return Math.pow(10,x)*20}"></webaudio-knob>
        <webaudio-knob midilearn="1" midicc="1.22" id="knob3" style="position:absolute;left:232px;top:48px" src="../knobs/vernier.png" value="30" max="100" step="1" diameter="128" sprites="50" valuetip="0" tooltip="Knob3"></webaudio-knob>
        <webaudio-param style="position:absolute;left:328px;top:162px" link="knob3"></webaudio-param>
        <webaudio-slider midilearn="1" midicc="1.23" style="position:absolute;left:368px;top:24px" src="../img/vsliderbody.png" knobsrc="../img/vsliderknob.png" value="0" min="0" max="100" step="1" basewidth="24" baseheight="128" knobwidth="24" knobheight="24" ditchLength="100" tooltip="Slider-L"></webaudio-slider>
        <webaudio-slider midilearn="1"  midicc="1.24" style="position:absolute;left:400px;top:24px" src="../img/vsliderbody.png" knobsrc="../img/vsliderknob.png" value="0" min="0" max="100" step="1" basewidth="24" baseheight="128" knobwidth="24" knobheight="24" ditchLength="100" units="%" tooltip="Slider-R"></webaudio-slider>
        <webaudio-switch midilearn="1" style="position:absolute;left:440px;top:38px" src="../knobs/switch_toggle.png" value="0" height="56" width="56" tooltip="Switch-A Tooltip text test"></webaudio-switch>
        <webaudio-switch midilearn="1" style="position:absolute;left:440px;top:102px" src="../knobs/switch_toggle.png" value="0" height="56" width="56" tooltip="Switch-B"></webaudio-switch>
	</div>
</div>

## Source Code is Available At

GitHub Repository :  [https://github.com/g200kg/webaudio-controls](https://github.com/g200kg/webaudio-controls)  

<br/>

## To Operate

Following user actions are supported.

Operation | Component | Description
---|---|---
**Click** | Switch<br/>Other | Switch : Toggle / activate the switch.<br/>Other : Focus the component.
**Drag** | Knob<br/>Slider | Up/Right to increase value<br/>Down/Left to decrease value.
**Shift+Drag** | Knob<br/>Slider | Fine control. Increase or decrease by the value specified in the `step`.
**Ctrl+Click <br/> Command+Click(Mac)** | Knob<br/>Slider<br/>Switch | Set to default value.
**Keyboard** | Knob<br/>Slider<br/>Param<br/>Keyboard | To manipulate with the keyboard, it is necessary to get the focus by clicking each component once.<br/><br/>Knob/Slider : ArrowUp/ArrowDown to increase or decrease by the value specified in the `step`.<br/>Param : Edit the param value directly.<br/>Keyboard : [ZSXDCV...for lowest visible 'C' octave] and [Q2W3E... one octave higher] as a music keyboard.
**MouseWheel** | Knob<br/>Slider | Rotate upward to increase value, downward to decrease value.
**Shift+MouseWheel** | Knob<br/>Slider | Fine control. Increase or decrease by the value specified in the `step`.
**Mouse Button Press <br/> Touch** | Keyboard | Play keyboard. multi-touch is supported.
**R-Click**     |Knob<br/>Slider<br/>Switch | Open MIDI learn menu.

<br/>

## License
webaudio-controls is based on:
- <a href="https://github.com/agektmr/webaudio-knob" target="_blank">WebAudio-Knob</a> by <a href="http://google.com/+agektmr" target="_blank">Eiji Kitamura</a>
- <a href="https://github.com/ryoyakawai/webaudio-slider" target="_blank">WebAudio-Slider</a> by <a href="https://plus.google.com/108242669191458983485/posts" target="_blank">Ryoya Kawai</a>
- <a href="http://aikelab.net/switch/" target="_blank">WebAudio-Switch</a> by <a href="http://d.hatena.ne.jp/aike/" target="_blank">Keisuke Ai</a>
- Integrated and enhanced by <a href="http://www.g200kg.com/" target="_blank">g200kg</a>

Copyright (c) 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg / @micbuffa / @CellouBalde
Licensed under the Apache License, Version 2.0 

---

Knob/Switch images are from <a href="http://www.g200kg.com/en/webknobman/gallery.php" target="_blank">Knob Gallery</a><br/>
<a href="http://www.g200kg.com/en/webknobman/gallery.php?m=p&p=58" target="_blank">switch_toggle.knob</a> by <a href="http://bji.yukihotaru.com/" target="_blank">az</a> Copyright (c) 2011 <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC-BY</a>

---

<script>
webAudioControlsWidgetManager.addMidiListener(function(event) {
    var data = event.data;
    var channel = data[0] & 0xf;
    var controlNumber = data[1];

    console.log("Midi event hook: data:[" + data + "] channel:" + channel + " cc:"+controlNumber);
});
</script>
