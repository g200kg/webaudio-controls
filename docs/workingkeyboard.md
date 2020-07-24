---
pageid: WorkingKeyboard
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

<script src='https://g200kg.github.io/webaudio-tinysynth/webaudio-tinysynth.js'></script>

<script>
var midioutputs=[null];
var midiout=null;
var kbd=null;
var synth;
async function Init() {
  if(navigator.requestMIDIAccess)
    navigator.requestMIDIAccess({sysex:false}).then(scb,ecb);
  kbd = document.getElementById("keyboard");
  document.getElementById("midiout").addEventListener("change",function(e) {
    midiout=midioutputs[document.getElementById("midiout").selectedIndex];
  });
  kbd.addEventListener("change",function(e) {
    Send([0x90,e.note[1],e.note[0]?100:0]);
  });
  document.getElementById("prog").addEventListener("input", (e)=>{
    DisplayTimbreName(e.target.value);
    Send([0xc0,e.target.value]);
  });
  document.getElementById("volume").addEventListener("change",function(e) {
    Send([0xb0,7,e.target.value]);
  });
  synth = document.getElementById("synth");
  await synth.ready();
  DisplayTimbreName(0);
}
function ecb(e) { console.log(e); }
function scb(midiaccess) {
  var i=0;
  var outputs=midiaccess.outputs.values();
  for (var outit=outputs.next(); !outit.done; outit=outputs.next()) {
    document.getElementById("midiout").options[i++]=new Option(outit.value.name);
    midioutputs.push(outit.value);
  }
  midiout=midioutputs[0];
}
function DisplayTimbreName(val){
  const name=synth.getTimbreName(0,val);
  document.getElementById("timbrename").innerText = name;
}
function Send(mess){
  if(midiout)
    midiout.send(mess);
  else
    synth.send(mess);
}
window.onload=Init;
</script>

# Working Keyboard Demo

This demo plays either a software-synth built into a web page 
or an external synth connected via the Web MIDI API
from a GUI consisted with **webaduio-controls**.  

The synth built into this page is Web Audio API based 
"<a href="https://github.com/g200kg/webaudio-tinysynth" target="_blank">webaudio-tinysynth</a>".  

**Note : Confirm that the connection is via "HTTPS". Due to privacy policy, this demo can't make any sound over http connection.**

---

<webaudio-tinysynth id="synth"></webaudio-tinysynth>  
  

MidiOut : <select id="midiout"><option>WebAudioTinySynth</option></select>  
  

Program Change: <webaudio-slider id="prog" min="0" max="127" width="256" direction="horz" valuetip="0"></webaudio-slider>  <webaudio-param link="prog"></webaudio-param> : <span id="timbrename"></span>  
  
  
Volume : <webaudio-knob id="volume" min="0" max="127" value="100" diameter="64"></webaudio-knob>  
  

<webaudio-keyboard id="keyboard" min="36" keys="37" width="800" height="150"></webaudio-keyboard>  
  
<br/>

After clicking keyboard once and `webaudio-keyboard` gets the focus, you can play with `[z][x][c][v]....` on your PC keyboard.  
This demo uses the `outline` attribute to indicate that the element has focus.  

---
