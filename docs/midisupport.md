---
pageid: MidiSupport
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={
    useMidi:1,
    preserveMidiLearn:1,
  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# MIDI Support

**knobs, sliders and switches have midilearn/midicc support built-in**  

<div>
    <div style="position:relative;background-image: url('../img/bg.png');width:512px;height:240px;margin:30px auto;padding:0px;">
        <webaudio-knob id="knob1" midilearn="1" midicc="1.1" style="position:absolute;left:48px;top:76px" src="../knobs/LittlePhatty.png" value="50" step="1" diameter="64" tooltip="Knob1 tooltip %d"></webaudio-knob>
        <webaudio-knob id="knob2" midilearn="1" midicc="8.7" style="position:absolute;left:128px;top:76px" src="../knobs/LittlePhatty.png" value="1" min="0" max="3" step="0.01" diameter="64" sprites="100" tooltip="Knob2 tooltip <br/> %.2f Hz" conv="(x)=>{return Math.pow(10,x)*20}"></webaudio-knob>
        <webaudio-knob id="knob3" midilearn="1" midicc="1.22" style="position:absolute;left:232px;top:48px" src="../knobs/vernier.png" value="30" max="100" step="1" diameter="128" sprites="50" valuetip="0" tooltip="Knob3"></webaudio-knob>
        <webaudio-param style="position:absolute;left:328px;top:162px" link="knob3"></webaudio-param>
        <webaudio-slider id="sli1" midilearn="1" midicc="1.23" style="position:absolute;left:368px;top:24px" src="../img/vsliderbody.png" knobsrc="../img/vsliderknob.png" value="0" min="0" max="100" step="1" basewidth="24" baseheight="128" knobwidth="24" knobheight="24" ditchLength="100" tooltip="Slider-L"></webaudio-slider>
        <webaudio-slider id="sli2" midilearn="1"  midicc="1.24" style="position:absolute;left:400px;top:24px" src="../img/vsliderbody.png" knobsrc="../img/vsliderknob.png" value="0" min="0" max="100" step="1" basewidth="24" baseheight="128" knobwidth="24" knobheight="24" ditchLength="100" units="%" tooltip="Slider-R"></webaudio-slider>
        <webaudio-switch id="sw1" midilearn="1" style="position:absolute;left:440px;top:38px" src="../knobs/switch_toggle.png" value="0" height="56" width="56" tooltip="Switch-A Tooltip text test"></webaudio-switch>
        <webaudio-switch id="sw2" midilearn="1" style="position:absolute;left:440px;top:102px" src="../knobs/switch_toggle.png" value="0" height="56" width="56" tooltip="Switch-B"></webaudio-switch>
	</div>
</div>

To enable MIDI related functions, specify `useMidi:1` in `WebAudioControlsOptions` before loading `webaudio-controls.js`. 
In addition, define `preserveMidiLearn:1` to retain the result of MIDI learn on next access. If you do not define this, the results of MIDI learn will be discarded when reloaded.  

Technically speaking, the results of MIDI learn are kept in WebAudioControlsMidiLearn in localStorage. If you want to force discard the result of MIDI learn, remove it from your Javascript program.

```html
<script>WebAudioControlsOptions = {
  useMidi:1,
  preserveMidiLearn:1,
}</script>
<script src="webaudio-controls.js"></script>
```

**Midilearn right click menu** :  
 Add a `midilearn=1` attribute to the `<webaudio-knob>`,  `<webaudio-slider>` and  `<webaudio-switch>` elements. Then right click on the element in the GUI, a midi learn menu should appear. Then, operate one of your midi controller and it should start actionning the webaudio-controls widget in the HTML page. You can hot plug/unplug midi devices, they will be detected.

![Midi Learn Menu](../img/midilearn.png)

**Declarative association between a midi controller and a GUI webaudio-controls** :  
 There is also an HTML `midicc="channel.cc#"` attribute that works like this:  
 `midicc="3.2"` means "listen to a CC event on channel 3, CC number 2". If you don't know the channel/CC number of your controller:  
  1) add a `midilearn=1` attribute so that a right click on the GUI widget will display the midilearn menu,  
  2) select "learn" in the menu,  
  3) operate your knob/slider/switch, normally the midi controller and the GUI object are in sync.  
  4) look at the devtool console, there is a message indicating the channel and CC number, for example "channel 0, cc 28". Then if you add the attribute `midicc="0.28"` to the HTML of your knob/slider/switch, the midi mapping between your GUI webaudio-controls and your midi controller will be automatic. Follow the links at the end of this section and look at the HTML source code to see some examples.

Example: associate a knob with a controller on channel 7, cc number 7:

```html
<webaudio-knob midilearn=true midicc="7.7"></webaudio-knob>
```

**External midi event listener (hook)** :  
 You can also declare in your HTML file your own midi event listener (for example for listening to program changes events): use the `webAudioControlsWidgetManager` object (Formerly known as `webAudioControlsMidiManager`, it is also available under this name), that comes with an `addMidiListener` method. Like that you will benefit from the MIDI code included in the webaudio-controls. Here is an example (also, look at the source code of this page, and open the devtool console to see midi messages received by the hook at the end of the HTML file).

```html
<script>
// add this to your html page that uses webaudiocontrols
webAudioControlsWidgetManager.addMidiListener(function(event) {
    var data = event.data;
    var channel = data[0] & 0xf;
    var controlNumber = data[1];

    console.log(
      "Midi event hook: data:[" + data + "] channel:" 
      + channel + " cc:"+controlNumber);

    // do whatever you want with the event
    // ...
});
</script>
```

Demo at:  
 [https://wasabi.i3s.unice.fr/AmpSimFA/](https://wasabi.i3s.unice.fr/AmpSimFA/)  
  and at [https://wasabi.i3s.unice.fr/AmpSimFA/sample1.html](https://wasabi.i3s.unice.fr/AmpSimFA/sample1.html)


---

<script>
webAudioControlsWidgetManager.addMidiListener(function(event) {
    var data = event.data;
    var channel = data[0] & 0xf;
    var controlNumber = data[1];

    console.log("Midi event hook: data:[" + data + "] channel:" + channel + " cc:"+controlNumber);
});
</script>