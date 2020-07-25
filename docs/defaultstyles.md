---
pageid: DefaultStyles
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# Default Style of Controls  

This is a sample using the default styles of 
'knob', 'param', 'slider', 'switch' and 'keyboard' without external image files.  

```html
<webaudio-knob></webaudio-knob>
<webaudio-param></webaudio-param>
<webaudio-slider></webaudio-slider>
<webaudio-switch></webaudio-switch>
<webaudio-keyboard></webaudio-keyboard>
```

As each element is manipulated, events such as 'input' or 'change' are issued,
so that the handlers can catch them.
The captured events are displayed on the Events window on the right.  

<div id="base" style="color:#224;width:600px;height:650px;position:relative;background:linear-gradient(#444 0%,#aaa 3%,#888 97%,#444 100%);">
  <webaudio-knob id="knob1" style="position:absolute;left:50px;top:60px"></webaudio-knob>
  <webaudio-knob id="knob2" style="position:absolute;left:130px;top:60px"></webaudio-knob>
  <webaudio-param link="knob1" style="position:absolute;left:65px;top:130px"></webaudio-param>
  <webaudio-param link="knob2" style="position:absolute;left:145px;top:130px"></webaudio-param>
  <webaudio-slider id="slider1" direction="vert" style="position:absolute;left:240px;top:50px"></webaudio-slider>
  <webaudio-slider id="slider2" direction="horz" style="position:absolute;left:280px;top:50px"></webaudio-slider>
  <webaudio-switch id="switch1" style="position:absolute;left:430px;top:50px"></webaudio-switch>
  <webaudio-switch id="switch2" type="kick" style="position:absolute;left:430px;top:90px"></webaudio-switch>
  <webaudio-switch id="switch2a" type="radio" group="r" value="1" style="position:absolute;left:370px;top:130px"></webaudio-switch>
  <webaudio-switch id="switch2b" type="radio" group="r" style="position:absolute;left:400px;top:130px"></webaudio-switch>
  <webaudio-switch id="switch2c" type="radio" group="r" style="position:absolute;left:430px;top:130px"></webaudio-switch>
  <webaudio-keyboard id="keyboard" style="position:absolute;left:48px;top:240px"></webaudio-keyboard>
  <webaudio-keyboard id="key2" width="160" height="20" keys="61" enable="0" colors="#000;#ccf;;#000;;#0fc;;#0fc" style="position:absolute;left:48px;top:380px">
  </webaudio-keyboard>
  <span style="position:absolute;left:60px;top:20px">&lt;webaudio-knob&gt;</span>
  <span style="position:absolute;left:60px;top:160px">&lt;webaudio-param&gt;</span>
  <span style="position:absolute;left:240px;top:20px">&lt;webaudio-slider&gt;</span>
  <span style="position:absolute;left:370px;top:160px">&lt;webaudio-switch&gt;</span>
  <span style="position:absolute;left:320px;top:210px">&lt;webaudio-keyboard&gt;</span>
  <span style="position:absolute;left:465px;top:50px">toggle(default)</span>
  <span style="position:absolute;left:465px;top:90px">kick</span>
  <span style="position:absolute;left:465px;top:130px">radio</span>
  <div style="position:absolute;left:48px;top:420px">
  <div id="events" style="background:rgba(128,128,255,0.5);padding:10px;color:#fff;text-align:left;width:400px;height:150px;overflow:scroll"></div>
  </div>
</div>

---

<script>
var message="";
var log=[];
var knobs = document.getElementsByTagName('webaudio-knob');
for(var i = 0; i < knobs.length; i++){
  knobs[i].addEventListener("input",Dump,false);
  knobs[i].addEventListener("change",Dump,false);
  knobs[i].addEventListener("click",Dump,false);
}
var sliders = document.getElementsByTagName('webaudio-slider');
for(var i = 0; i < sliders.length; i++){
  sliders[i].addEventListener("input",Dump,false);
  sliders[i].addEventListener("change",Dump,false);
  sliders[i].addEventListener("click",Dump,false);
}
var switches = document.getElementsByTagName('webaudio-switch');
for(var i = 0; i < switches.length; i++) {
    switches[i].addEventListener("input",Dump,false);
    switches[i].addEventListener("change",Dump,false);
    switches[i].addEventListener("click",Dump,false);
}
var key=document.getElementById("keyboard");
key.addEventListener('input',Dump,false);
key.addEventListener('change',Dump,false);
key.addEventListener('click',Dump,false);
key.addEventListener('note',Dump,false);
var key2=document.getElementById("key2");

function Dump(e) {
    var str="";
    if(e.note) {
        key2.setNote(e.note[0],e.note[1]);
        str=e.type + " : " + e.target.id + " e.note = [" + e.note + "] ";
    }
    else
        str=e.type + " : " + e.target.id + ".value = " + e.target.value + " ";
    console.log(str);
    log.unshift(str);
    log.length=20;
    str="";
    for(var i=19;i>=0;--i) {
        if(log[i])
            str+=log[i]+"<br/>";
    }
    var evview=document.getElementById("events");
    evview.innerHTML=str;
    evview.scrollTop=evview.scrollHeight;
}
</script>
