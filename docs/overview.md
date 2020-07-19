
<script>
WebAudioControlsOptions={
  useMidi:1,
};
</script>
<script src="../webaudio-controls.js"></script>

<style>
.item{
  background:#444;
  margin:4px;
  padding:0px 3px;
}
</style>
<div style="display:flex;width:100%;flex-wrap:wrap">
<div class="item">Overview</div>
<div class="item"><a href="./defstyle.html">Default Style of Controls</a></div>
<div class="item"><a href="./attrubutes.html">Examples of Various Attributes</a></div>
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

# Overview

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

## Available At
<b><a href="https://github.com/g200kg/webaudio-controls">https://github.com/g200kg/webaudio-controls</a></b>

<br/>

## To Operate

Operation               | Component        | Description
------------------------|------------------|------------------
Click                   |Switch/Param      |toggle / activate the switch or focus the param
Drag                    |Knob/Slider       |up/right to increase value / down/left to decrease value
Shift+Drag              |Knob/Slider       |fine control
Ctrl+Click/Command+Click|Knob/Slider/Switch|set to default value
Edit with Keyboard      |Param             |edit the value directly
MouseWheel              |Knob/Slider       |rotate upward to increase value / downward to decrease value
Shift+MouseWheel        |Knob/Slider       |fine control
RClick                  |Knob/Slider/Switch|MIDI learn menu

<br/>

## License
webaudio-controls is based on:
- <a href="https://github.com/agektmr/webaudio-knob" target="_blank">WebAudio-Knob</a> by <a href="http://google.com/+agektmr" target="_blank">Eiji Kitamura</a>
- <a href="https://github.com/ryoyakawai/webaudio-slider" target="_blank">WebAudio-Slider</a> by <a href="https://plus.google.com/108242669191458983485/posts" target="_blank">Ryoya Kawai</a>
- <a href="http://aikelab.net/switch/" target="_blank">WebAudio-Switch</a> by <a href="http://d.hatena.ne.jp/aike/" target="_blank">Keisuke Ai</a>
- Integrated and enhanced by <a href="http://www.g200kg.com/" target="_blank">g200kg</a>

**webaudio-controls** is licensed under the Apache License, Version 2.0  
Copyright (c) 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg (Tatsuya Shinyagaito)  

---

Knob/Switch images are from <a href="http://www.g200kg.com/en/webknobman/gallery.php" target="_blank">Knob Gallery</a><br/>
<a href="http://www.g200kg.com/en/webknobman/gallery.php?m=p&p=58" target="_blank">switch_toggle.knob</a> by <a href="http://bji.yukihotaru.com/" target="_blank">az</a> Copyright (c) 2011 <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank">CC-BY</a>

<script>
webAudioControlsMidiManager.addMidiListener(function(event) {
    var data = event.data;
    var channel = data[0] & 0xf;
    var controlNumber = data[1];

    console.log("Midi event hook: data:[" + data + "] channel:" + channel + " cc:"+controlNumber);
});
</script>
