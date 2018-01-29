<!--
/* *
 *
 *  WebAudio-Controls is based on
 *    webaudio-knob by Eiji Kitamura http://google.com/+agektmr
 *    webaudio-slider by RYoya Kawai https://plus.google.com/108242669191458983485/posts
 *    webaudio-switch by Keisuke Ai http://d.hatena.ne.jp/aike/
 *  Integrated and enhanced by g200kg http://www.g200kg.com/
 *
 *	Copyright 2013 Eiji Kitamura / Ryoya KAWAI / Keisuke Ai / g200kg(Tatsuya Shinyagaito)
 *
 *	 Licensed under the Apache License, Version 2.0 (the "License");
 *	 you may not use this file except in compliance with the License.
 *	 You may obtain a copy of the License at
 *
 *	 http://www.apache.org/licenses/LICENSE-2.0
 *
 *	 Unless required by applicable law or agreed to in writing, software
 *	 distributed under the License is distributed on an "AS IS" BASIS,
 *	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	 See the License for the specific language governing permissions and
 *	 limitations under the License.
 *
 * */
-->
if(window.customElements){
  let styles=document.createElement("style");
  styles.innerHTML=
`#webaudioctrl-context-menu {
  display: none;
  position: absolute;
  z-index: 10;
  padding: 0;
  width: 100px;
  color:#eee;
  background-color: #268;
  border: solid 1px #888;
  box-shadow: 1px 1px 2px #888;
  font-family: sans-serif;
  font-size: 11px;
  line-height:1.7em;
  text-align:center;
  cursor:pointer;
  color:#fff;
  list-style: none;
}
#webaudioctrl-context-menu.active {
  display: block;
}
.webaudioctrl-context-menu__item {
  display: block;
  margin: 0;
  padding: 0;
  color: #000;
  background-color:#eee;
  text-decoration: none;
}
.webaudioctrl-context-menu__title{
  font-weight:bold;
}
.webaudioctrl-context-menu__item:last-child {
  margin-bottom: 0;
}
.webaudioctrl-context-menu__item:hover {
  background-color: #b8b8b8;
}
#webaudioctrl-tooltip{
  display:inline-block;
  z-index: 10;
  background:#eee;
  border:1px solid #666;
  border-radius:4px;
  position:absolute;
  padding:5px 10px;
  text-align:center;
  left:0; top:0;
  font-size:11px;
  opacity:0;
  transition:opacity 1s ease 1s;
}
#webaudioctrl-tooltip:before{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -8px;
	border: 8px solid transparent;
	border-top: 8px solid #666;
}
#webaudioctrl-tooltip:after{
  content: "";
	position: absolute;
	top: 100%;
	left: 50%;
 	margin-left: -6px;
	border: 6px solid transparent;
	border-top: 6px solid #eee;
}`;
  document.head.appendChild(styles);
  let midimenu=document.createElement("ul");
  midimenu.id="webaudioctrl-context-menu";
  midimenu.innerHTML=
`<li class="webaudioctrl-context-menu__title">MIDI Learn</li>
<li class="webaudioctrl-context-menu__item" id="webaudioctrl-context-menu-learn" onclick="webAudioControlsMidiManager.contextMenuLearn()">Learn</li>
<li class="webaudioctrl-context-menu__item" onclick="webAudioControlsMidiManager.contextMenuClear()">Clear</li>
<li class="webaudioctrl-context-menu__item" onclick="webAudioControlsMidiManager.contextMenuClose()">Close</li>
`;
  let tooltip=document.createElement("div");
  tooltip.id="webaudioctrl-tooltip";

  class WebAudioControlsWidget extends HTMLElement{
    constructor(){
      super();
      this.addEventListener("keydown",this.keydown,false);
      this.addEventListener("mousedown",this.pointerdown,false);
      this.addEventListener("touchstart",this.pointerdown,false);
      this.addEventListener("wheel",this.wheel,false);
      this.addEventListener("mouseover",this.pointerover,false);
      this.addEventListener("mouseout",this.pointerout,false);
      this.addEventListener("contextmenu",this.contextMenu,false);
    }
    sendEvent(ev){
      let event;
      event=document.createEvent("HTMLEvents");
      event.initEvent(ev,false,true);
      this.dispatchEvent(event);
    }
    showtip(f,e){
      this.ttframe=document.getElementById("webaudioctrl-tooltip");
      if(!this.ttframe)
        return;
      if(f=="drag")
        this.ttframe.knobDrag=e;
      let op=0,el=0;
      if(this.ttframe){
        el=this.ttframe.knobDrag||this.ttframe.knobHover;
        if(el==this){
          let s=this.tooltip;
          if(this.valuetip){
            let v=this.value.toFixed(this.digits);
            if(s) s+=" : "+v;
            else s=""+v;
          }
          if(s){
            this.ttframe.innerHTML=s.replace("${value}",el.value);
            let rc=el.getBoundingClientRect(),rc2=this.ttframe.getBoundingClientRect();
            this.ttframe.style.left=Math.max(0,(rc.left+rc.right)*0.5+window.pageXOffset-(rc2.right-rc2.left)*0.5)+"px";
            this.ttframe.style.top=(rc.top+window.pageYOffset-(rc2.bottom-rc2.top)-8)+"px";
            if((el.valuetip && this.ttframe.knobDrag)||el.tooltip&&this.ttframe.knobHover)
              op=1;
          }
        }
      }
      if(op){
        if(el==this.ttframe.knobDrag)
          this.ttframe.style.transition="opacity 0.1s ease 0s";
        else
          this.ttframe.style.transition="opacity 0.5s ease 0.5s";
        this.ttframe.style.opacity=op;
      }
      else{
        this.ttframe.style.transition="opacity 0s ease 0s";
        this.ttframe.style.opacity=op;
        this.ttframe.style.top="-1000px";
      }
    }
    pointerover(e) {
      let ttframe=document.getElementById("webaudioctrl-tooltip");
      if(ttframe){
        ttframe.knobHover=this;
        this.showtip();
      }
    }
    pointerout(e) {
      let ttframe=document.getElementById("webaudioctrl-tooltip");
      if(ttframe){
        ttframe.knobHover=null;
        this.showtip();
      }
    }
    contextMenu(e){
      if(window.webAudioControlsMidiManager && this.midilearn)
        webAudioControlsMidiManager.contextMenuOpen(e,this);
      e.preventDefault();
      e.stopPropagation();
    }
    setMidiController(channel, cc) {
      if (this.listeningToThisMidiController(channel, cc)) return;
      this.midiController={ 'channel': channel, 'cc': cc};
      console.log("Added mapping for channel=" + channel + " cc=" + cc + " tooltip=" + this.tooltip);
    }
    listeningToThisMidiController(channel, cc) {
      const c = this.midiController;
      if((c.channel === channel || c.channel < 0) && c.cc === cc)
        return true;
      return false;
    }
    processMidiEvent(event){
      const channel = event.data[0] & 0xf;
      const controlNumber = event.data[1];
      if(this.midiMode == 'learn') {
          this.setMidiController(channel, controlNumber);
          webAudioControlsMidiManager.contextMenuClose();
          this.midiMode = 'normal';
      }
      if(this.listeningToThisMidiController(channel, controlNumber)) {
          const val = this.min+(this.max-this.min)*event.data[2]/127;
          this.setValue(val, true);
      }
    }
  }

  customElements.define("webaudio-knob", class WebAudioKnob extends WebAudioControlsWidget {
    constructor(){
      super();
    }
    connectedCallback(){
      let root;
//      if(this.attachShadow)
//        root=this.attachShadow({mode: 'open'});
//      else
        root=this;
      root.innerHTML=
`<style>
webaudio-knob{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-knob-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class='webaudio-knob-body' tabindex='1' touch-action='none'></div>
`;
      this.elem=root.childNodes[2];

      this._src=this.getAttribute("src"); Object.defineProperty(this,"src",{get:()=>{return this._src},set:(v)=>{this._src=v;this.setupImage()}});
      this._value=+this.getAttribute("value")||0; Object.defineProperty(this,"value",{get:()=>{return this._value},set:(v)=>{this._value=v;this.redraw()}});
      this.defvalue=+this.getAttribute("defvalue")||0;
      this._min=+this.getAttribute("min"); Object.defineProperty(this,"min",{get:()=>{return this._min},set:(v)=>{this._min=+v;this.redraw()}});
      this._max=+this.getAttribute("max")||100; Object.defineProperty(this,"max",{get:()=>{return this._max},set:(v)=>{this._max=+v;this.redraw()}});
      this._step=+this.getAttribute("step")||1; Object.defineProperty(this,"step",{get:()=>{return this._step},set:(v)=>{this._step=+v;this.redraw()}});
      this._sprites=+this.getAttribute("sprites"); Object.defineProperty(this,"sprites",{get:()=>{return this._sprites},set:(v)=>{this._sprites=v;this.setupImage()}});
      this._width=+this.getAttribute("width"); Object.defineProperty(this,"width",{get:()=>{return this._width},set:(v)=>{this._width=v;this.setupImage()}});
      this._height=+this.getAttribute("height"); Object.defineProperty(this,"height",{get:()=>{return this._height},set:(v)=>{this._height=v;this.setupImage()}});
      this._diameter=+this.getAttribute("diameter"); Object.defineProperty(this,"diameter",{get:()=>{return this._diameter},set:(v)=>{this._diameter=v;this.setupImage()}});
      this._colors=this.getAttribute("colors")||"#e00;#000;#000"; Object.defineProperty(this,"colors",{get:()=>{return this._colors},set:(v)=>{this._colors=v;this.setupImage()}});
      this.enable=+this.getAttribute("enable")||1;
      this.sensitivity=+this.getAttribute("sensitivity")||1;
      this.valuetip=+this.getAttribute("valuetip");
      this.tooltip=this.getAttribute("tooltip");
      this.midilearn=+this.getAttribute("midilearn");
      this.midicc=this.getAttribute("midicc");

      this.midiController={};
      this.midiMode="normal";
      if(this.midicc) {
          let ch = parseInt(this.midicc.substring(0, this.midicc.lastIndexOf("."))) - 1;
          let cc = parseInt(this.midicc.substring(this.midicc.lastIndexOf(".") + 1));
          this.setMidiController(ch, cc);
      }
      this.setupImage();
      this.digits=0;
      this.coltab=["#e00","#000","#000"];
      if(window.webAudioControlsMidiManager)
        window.webAudioControlsMidiManager.updateWidgets();
    }
    disconnectedCallback(){}
    setupImage(){
      if(!this.src){
        if(this.colors)
          this.coltab = this.colors.split(";");
        if(!this.coltab)
          this.coltab=["#e00","#000","#000"];
        let svg=
`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="6464" preserveAspectRatio="none">
<radialGradient id="gr" cx="30%" cy="30%"><stop offset="0%" stop-color="${this.coltab[2]}"/><stop offset="100%" stop-color="${this.coltab[1]}"/></radialGradient>
<defs><circle id="B" cx="32" cy="32" r="30" fill="url(#gr)"/></defs>
<defs><line id="K" x1="32" y1="28" x2="32" y2="7" stroke-linecap="round" stroke-width="6" stroke="${this.coltab[0]}"/></defs>`;
        for(let i=0;i<101;++i){
          svg += `<use xlink:href="#B" y="${64*i}"/>`;
          svg += `<use xlink:href="#K" y="${64*i}" transform="rotate(${(-135+270*i/101).toFixed(2)},32,${64*i+32})"/>`;
        }
        svg += "</svg>";
        this.elem.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svg)+")";
        this.elem.style.backgroundSize = "100% 10100%";
      }
      else{
        this.elem.style.backgroundImage = "url("+(this.src)+")";
        if(!this.sprites)
          this.elem.style.backgroundSize = "100% 100%";
        else
          this.elem.style.backgroundSize = `100% ${(this.sprites+1)*100}%`;
      }
      this._width=this.width||this.diameter||64;
      this._height=this.height||this.diameter||64;
      this.elem.style.width=this._width+"px";
      this.elem.style.height=this._height+"px";
      this.redraw();
    }
    redraw() {
      this.digits=0;
      if(this.step && this.step < 1) {
        for(let n = this.step ; n < 1; n *= 10)
          ++this.digits;
      }
      if(this.value<this.min){
        this.value=this.min;
        return;
      }
      if(this.value>this.max){
        this.value=this.max;
        return;
      }
      let range = this.max - this.min;
      let style = this.elem.style;
      let sp = this.src?this.sprites:100;
      if(sp>=1){
        let offset = ((sp * (this.value - this.min) / range) | 0);
        style.backgroundPosition = "0px -" + (offset*this.height) + "px";
        style.transform = 'rotate(0deg)';
      } else {
        let deg = 270 * ((this.value - this.min) / range - 0.5);
        style.backgroundPosition="0px 0px";
        style.transform = 'rotate(' + deg + 'deg)';
      }
    }
    _setValue(v){
      if(this.step)
        v=(Math.round((v-this.min)/this.step))*this.step+this.min;
      this.value=Math.min(this.max,Math.max(this.min,v));
      if(this.value!=this.oldvalue){
        this.redraw();
        this.showtip();
        this.oldvalue=this.value;
        return 1;
      }
      return 0;
    }
    setValue(v,f){
      if(this._setValue(v) && f)
        this.sendEvent("input"),this.sendEvent("change");
    }
    wheel(e) {
      let delta=(this.max-this.min)*0.01;
      delta=e.deltaY>0?-delta:delta;
      if(!e.shiftKey)
        delta*=5;
      if(Math.abs(delta) < this.step)
        delta = (delta > 0) ? +this.step : -this.step;
      this.setValue(+this.value+delta,true);
      this.showtip();
      this.redraw();
      e.preventDefault();
      e.stopPropagation();
    }
    pointerdown(e){
      if(!this.enable)
        return;
      if(e.touches)
          e = e.touches[0];
      else {
        if(e.buttons!=1 && e.button!=0)
          return;
      }
      this.elem.focus();
      this.showtip("drag",this);
      let pointermove=(e)=>{
        if(e.touches)
            e = e.touches[0];
        if(this.lastShift !== e.shiftKey) {
          this.lastShift = e.shiftKey;
          this.startPosX = e.pageX;
          this.startPosY = e.pageY;
          this.startVal = this.value;
        }
        let offset = (this.startPosY - e.pageY - this.startPosX + e.pageX) * this.sensitivity;
        this._setValue(this.min + ((((this.startVal + (this.max - this.min) * offset / ((e.shiftKey ? 4 : 1) * 128)) - this.min) / this.step) | 0) * this.step);
        this.sendEvent("input");
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      let pointerup=(e)=>{
        this.showtip("drag",null);
        this.startPosX = this.startPosY = null;
        window.removeEventListener('mousemove', pointermove, true);
        window.removeEventListener('touchmove', pointermove, true);
        window.removeEventListener('mouseup', pointerup, true);
        window.removeEventListener('touchend', pointerup, true);
        window.removeEventListener('touchcancel', pointerup, true);
        document.body.removeEventListener('touchstart', preventScroll, false);
        this.sendEvent("change");
      }
      let preventScroll=(e)=>{
        e.preventDefault();
      }
      if(e.ctrlKey || e.metaKey)
        this.setValue(this.defvalue,true);
      else {
        this.startPosX = e.pageX;
        this.startPosY = e.pageY;
        this.startVal = this.value;
        window.addEventListener('mousemove', pointermove, true);
        window.addEventListener('touchmove', pointermove, true);
      }
      window.addEventListener('mouseup', pointerup, true);
      window.addEventListener('touchend', pointerup, true);
      window.addEventListener('touchcancel', pointerup, true);
      document.body.addEventListener('touchstart', preventScroll);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  customElements.define("webaudio-slider", class WebAudioSlider extends WebAudioControlsWidget {
    constructor(){
      super();
    }
    connectedCallback(){
      let root;
//      if(this.attachShadow)
//        root=this.attachShadow({mode: 'open'});
//      else
        root=this;
      root.innerHTML=
`<style>
webaudio-slider{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-slider-body{
  display:inline-block;
  position:relative;
  margin:0;
  padding:0;
}
.webaudio-slider-knob{
  display:inline-block;
  position:absolute;
  margin:0;
  padding:0;
}
</style>
<div class='webaudio-slider-body' tabindex='1' touch-action='none'><div class='webaudio-slider-knob' touch-action='none'></div></div>
`;
      this.elem=root.childNodes[2];
      this.knob=this.elem.childNodes[0];

      this.enable=this.getAttribute("enable")||1;
      this._src=this.getAttribute("src"); Object.defineProperty(this,"src",{get:()=>{return this._src},set:(v)=>{this._src=v;this.setupImage()}});
      this._knobsrc=this.getAttribute("knobsrc"); Object.defineProperty(this,"knobsrc",{get:()=>{return this._knobsrc},set:(v)=>{this._knobsrc=v;this.setupImage()}});
      this._value=+this.getAttribute("value"); Object.defineProperty(this,"value",{get:()=>{return this._value},set:(v)=>{this._value=v;this.redraw()}});
      this.defvalue=+this.getAttribute("defvalue");
      this._min=+this.getAttribute("min"); Object.defineProperty(this,"min",{get:()=>{return this._min},set:(v)=>{this._min=v;this.redraw()}});
      this._max=+this.getAttribute("max")||100; Object.defineProperty(this,"max",{get:()=>{return this._max},set:(v)=>{this._max=v;this.redraw()}});
      this._step=+this.getAttribute("step")||1; Object.defineProperty(this,"step",{get:()=>{return this._step},set:(v)=>{this._step=v;this.redraw()}});
      this._sprites=+this.getAttribute("sprites"); Object.defineProperty(this,"sprites",{get:()=>{return this._sprites},set:(v)=>{this._sprites=v;this.setupImage()}});
      this._width=+this.getAttribute("width"); Object.defineProperty(this,"width",{get:()=>{return this._width},set:(v)=>{this._width=v;this.setupImage()}});
      this._height=+this.getAttribute("height"); Object.defineProperty(this,"height",{get:()=>{return this._height},set:(v)=>{this._height=v;this.setupImage()}});
      this._knobwidth=+this.getAttribute("knobwidth"); Object.defineProperty(this,"knobwidth",{get:()=>{return this._knobwidth},set:(v)=>{this._knobwidth=v;this.setupImage()}});
      this._knobheight=+this.getAttribute("knbheight"); Object.defineProperty(this,"knobheight",{get:()=>{return this._knobheight},set:(v)=>{this._knobheight=v;this.setupImage()}});
      this._ditchlength=+this.getAttribute("ditchlength"); Object.defineProperty(this,"ditchlength",{get:()=>{return this._ditchlength},set:(v)=>{this._ditchlength=v;this.setupImage()}});
      this._direction=this.getAttribute("direction"); Object.defineProperty(this,"direction",{get:()=>{return this._direction},set:(v)=>{this._direction=v;this.setupImage()}});
      this._colors=this.getAttribute("colors")||"#e00;#000;#fcc"; Object.defineProperty(this,"colors",{get:()=>{return this._colors},set:(v)=>{this._colors=v;this.setupImage()}});
      this.sensitivity=+this.getAttribute("sensitivity")||1;
      this.valuetip=+this.getAttribute("valuetip");
      this.tooltip=this.getAttribute("tooltip");
      this.midilearn=+this.getAttribute("midilearn");
      this.midicc=this.getAttribute("midicc");
      this.midiController={};
      this.midiMode="normal";
      if(this.midicc) {
          let ch = parseInt(this.midicc.substring(0, this.midicc.lastIndexOf("."))) - 1;
          let cc = parseInt(this.midicc.substring(this.midicc.lastIndexOf(".") + 1));
          this.setMidiController(ch, cc);
      }
      this.setupImage();
      this.digits=0;
      if(window.webAudioControlsMidiManager)
        window.webAudioControlsMidiManager.updateWidgets();
      this.elem.onclick=(e)=>{e.stopPropagation()};
    }
    disconnectedCallback(){}
    setupImage(){
      this.coltab = this.colors.split(";");
      this.dr=this.direction;
      this.dlen=this.ditchlength;
      if(!this.width){
        if(this.dr=="horz")
          this.width=128;
        else
          this.width=24;
      }
      if(!this.height){
        if(this.dr=="horz")
          this.height=24;
        else
          this.height=128;
      }
      if(!this.dr)
        this.dr=(this.width<=this.height)?"vert":"horz";
      if(this.dr=="vert"){
        if(!this.dlen)
          this.dlen=this.height-this.width;
      }
      else{
        if(!this.dlen)
          this.dlen=this.width-this.height;
      }
      this.knob.style.backgroundSize = "100% 100%";
      this.elem.style.backgroundSize = "100% 100%";
      this.elem.style.width=this.width+"px";
      this.elem.style.height=this.height+"px";
      this.kwidth=this.knobwidth||(this.dr=="horz"?this.height:this.width);
      this.kheight=this.knobheight||(this.dr=="horz"?this.height:this.width);
      this.knob.style.width = this.kwidth+"px";
      this.knob.style.height = this.kheight+"px";
      if(!this.src){
        let r=Math.min(this.width,this.height)*0.5;
        let svgbody=
`<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" preserveAspectRatio="none">
<rect x="1" y="1" rx="${r}" ry="${r}" width="${this.width-2}" height="${this.height-2}" fill="${this.coltab[1]}"/></svg>`;
        this.elem.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svgbody)+")";
      }
      else{
        this.elem.style.backgroundImage = "url("+(this.src)+")";
      }
      if(!this.knobsrc){
        let svgthumb=
`<svg xmlns="http://www.w3.org/2000/svg" width="${this.kwidth}" height="${this.kheight}" preserveAspectRatio="none">
<radialGradient id="gr" cx="30%" cy="30%"><stop offset="0%" stop-color="${this.coltab[2]}"/><stop offset="100%" stop-color="${this.coltab[0]}"/></radialGradient>
<rect x="2" y="2" width="${this.kwidth-4}" height="${this.kheight-4}" rx="${this.kwidth*0.5}" ry="${this.kheight*0.5}" fill="url(#gr)"/></svg>`;
        this.knob.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svgthumb)+")";
      }
      else{
        this.knob.style.backgroundImage = "url("+(this.knobsrc)+")";
      }
      this.redraw();
    }
    redraw() {
      this.digits=0;
      if(this.step && this.step < 1) {
        for(let n = this.step ; n < 1; n *= 10)
          ++this.digits;
      }
      if(this.value<this.min){
        this.value=this.min;
        return;
      }
      if(this.value>this.max){
        this.value=this.max;
        return;
      }
      let range = this.max - this.min;
      let style = this.knob.style;
      if(this.dr=="vert"){
        style.left=(this.width-this.kwidth)*0.5+"px";
        style.top=(1-(this.value-this.min)/range)*this.dlen+"px";
        this.sensex=0; this.sensey=1;
      }
      else{
        style.top=(this.height-this.kheight)*0.5+"px";
        style.left=(this.value-this.min)/range*this.dlen+"px";
        this.sensex=1; this.sensey=0;
      }
    }
    _setValue(v){
      v=(Math.round((v-this.min)/this.step))*this.step+this.min;
      this.value=Math.min(this.max,Math.max(this.min,v));
      if(this.value!=this.oldvalue){
        this.redraw();
        this.showtip();
        this.oldvalue=this.value;
        return 1;
      }
      return 0;
    }
    setValue(v,f){
      if(this._setValue(v)&&f)
        this.sendEvent("input"),this.sendEvent("change");
    }
    wheel(e) {
      let delta=(this.max-this.min)*0.01;
      delta=e.deltaY>0?-delta:delta;
      if(!e.shiftKey)
        delta*=5;
      if(Math.abs(delta) < this.step)
        delta = (delta > 0) ? +this.step : -this.step;
      this.setValue(+this.value+delta,true);
      this.showtip();
      e.preventDefault();
      e.stopPropagation();
      this.redraw();
    }
    pointerdown(e){
      if(!this.enable)
        return;
      if(e.touches)
          e = e.touches[0];
      else {
        if(e.buttons!=1 && e.button!=0)
          return;
      }
      this.elem.focus();
      this.showtip("drag",this);
      let pointermove=(e)=>{
        if(e.touches)
            e = e.touches[0];
        if(this.lastShift !== e.shiftKey) {
          this.lastShift = e.shiftKey;
          this.startPosX = e.pageX;
          this.startPosY = e.pageY;
          this.startVal = this.value;
        }
        let offset = ((this.startPosY - e.pageY)*this.sensey - (this.startPosX - e.pageX)*this.sensex) * this.sensitivity;
        this._setValue(this.min + ((((this.startVal + (this.max - this.min) * offset / ((e.shiftKey ? 4 : 1) * this.dlen)) - this.min) / this.step) | 0) * this.step);
        this.sendEvent("input");
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      let pointerup=(e)=>{
        this.showtip("drag",null);
        this.startPosX = this.startPosY = null;
        window.removeEventListener('mousemove', pointermove, true);
        window.removeEventListener('touchmove', pointermove, true);
        window.removeEventListener('mouseup', pointerup, true);
        window.removeEventListener('touchend', pointerup, true);
        window.removeEventListener('touchcancel', pointerup, true);
        document.body.removeEventListener('touchstart', preventScroll, false);
        this.sendEvent("change");
      }
      let preventScroll=(e)=>{
        e.preventDefault();
      }
      if(e.touches)
        e = e.touches[0];
      if(e.ctrlKey || e.metaKey)
        this.setValue(this.defvalue,true);
      else {
        this.startPosX = e.pageX;
        this.startPosY = e.pageY;
        this.startVal = this.value;
        window.addEventListener('mousemove', pointermove, true);
        window.addEventListener('touchmove', pointermove, true);
      }
      window.addEventListener('mouseup', pointerup, true);
      window.addEventListener('touchend', pointerup, true);
      window.addEventListener('touchcancel', pointerup, true);
      document.body.addEventListener('touchstart', preventScroll);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  customElements.define("webaudio-switch", class WebAudioSwitch extends WebAudioControlsWidget {
    constructor(){
      super();
    }
    connectedCallback(){
      let root;
//      if(this.attachShadow)
//        root=this.attachShadow({mode: 'open'});
//      else
        root=this;
      root.innerHTML=
`<style>
webaudio-switch{
  display:inline-block;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 11px;
}
.webaudio-switch-body{
  display:inline-block;
  margin:0;
  padding:0;
}
</style>
<div class='webaudio-switch-body' tabindex='1' touch-action='none'></div>
`;
      this.elem=root.childNodes[2];

      this.enable=+this.getAttribute("enable")||1;
      this._src=this.getAttribute("src"); Object.defineProperty(this,"src",{get:()=>{return this._src},set:(v)=>{this._src=v;this.setupImage()}});
      this._value=+this.getAttribute("value"); Object.defineProperty(this,"value",{get:()=>{return this._value},set:(v)=>{this._value=v;this.redraw()}});
      this.defvalue=+this.getAttribute("defvalue");
      this.type=this.getAttribute("type")||"toggle";
      this.group=this.getAttribute("group");
      this._width=+this.getAttribute("width"); Object.defineProperty(this,"width",{get:()=>{return this._width},set:(v)=>{this._width=v;this.setupImage()}});
      this._height=+this.getAttribute("height"); Object.defineProperty(this,"height",{get:()=>{return this._height},set:(v)=>{this._height=v;this.setupImage()}});
      this._diameter=+this.getAttribute("diameter"); Object.defineProperty(this,"diameter",{get:()=>{return this._diameter},set:(v)=>{this._diameter=v;this.setupImage()}});
      this.invert=+this.getAttribute("invert");
      this._colors=this.getAttribute("colors")||"#e00;#000;#fcc"; Object.defineProperty(this,"colors",{get:()=>{return this._colors},set:(v)=>{this._colors=v;this.setupImage()}});
      this.valuetip=+this.getAttribute("valuetip");
      this.tooltip=this.getAttribute("tooltip");
      this.midilearn=+this.getAttribute("midilearn");
      this.midicc=this.getAttribute("midicc");
      this.midiController={};
      this.midiMode="normal";
      if(this.midicc) {
          let ch = parseInt(this.midicc.substring(0, this.midicc.lastIndexOf("."))) - 1;
          let cc = parseInt(this.midicc.substring(this.midicc.lastIndexOf(".") + 1));
          this.setMidiController(ch, cc);
      }
      this.setupImage();
      this.digits=0;
      if(window.webAudioControlsMidiManager)
        window.webAudioControlsMidiManager.updateWidgets();
      this.elem.onclick=(e)=>{e.stopPropagation()};
    }
    disconnectedCallback(){}
    setupImage(){
      if(!this.src){
        this.coltab = this.colors.split(";");
        let svg=
`<svg xmlns="http://www.w3.org/2000/svg" width="64" height="128" preserveAspectRatio="none">
<radialGradient id="gr" cx="30%" cy="30%"><stop offset="0%" stop-color="${this.coltab[2]}"/><stop offset="100%" stop-color="${this.coltab[0]}"/></radialGradient>
<rect x="3" y="3" width="58" height="58" rx="14" ry="14" fill="${this.coltab[1]}"/>
<rect x="3" y="67" width="58" height="58" rx="14" ry="14" fill="${this.coltab[1]}"/>
<circle cx="32" cy="32" r="18" stroke="${this.coltab[0]}" stroke-width="3"/>
<circle cx="32" cy="96" r="18" stroke="${this.coltab[0]}" stroke-width="3" fill="url(#gr)"/></svg>`;
        this.elem.style.backgroundImage = "url(data:image/svg+xml;base64,"+btoa(svg)+")";
        this.elem.style.backgroundSize = "100% 200%";
      }
      else{
        this.elem.style.backgroundImage = "url("+(this.src)+")";
        if(!this.sprites)
          this.elem.style.backgroundSize = "100% 200%";
        else
          this.elem.style.backgroundSize = `100% ${(this.sprites+1)*100}%`;
      }
      let w=this.width||this.diameter||24;
      let h=this.height||this.diameter||24;
      this.elem.style.width=w+"px";
      this.elem.style.height=h+"px";
      this.redraw();
    }
    redraw() {
      let style = this.elem.style;
      if(this.value^this.invert)
        style.backgroundPosition = "0px -100%";
      else
        style.backgroundPosition = "0px 0px";
    }
    setValue(v,f){
      this.value=v;
      this.checked=(!!v);
      if(this.value!=this.oldvalue){
        this.redraw();
        this.showtip();
        if(f){
          this.sendEvent("input");
          this.sendEvent("change");
        }
        this.oldvalue=this.value;
      }
    }
    pointerdown(e){
      if(!this.enable)
        return;
      if(e.touches)
          e = e.touches[0];
      else {
        if(e.buttons!=1 && e.button!=0)
          return;
      }
      this.elem.focus();
      this.showtip("drag",this);
      let pointermove=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      let pointerup=(e)=>{
        this.showtip("dragh",null);
        window.removeEventListener('mousemove', pointermove, true);
        window.removeEventListener('touchmove', pointermove, true);
        window.removeEventListener('mouseup', pointerup, true);
        window.removeEventListener('touchend', pointerup, true);
        window.removeEventListener('touchcancel', pointerup, true);
        document.body.removeEventListener('touchstart', preventScroll, false);
        if(this.type=="kick"){
          this.value=0;
          this.checked=false;
          this.redraw();
          this.sendEvent("change");
        }
        this.sendEvent("click");
        e.preventDefault();
        e.stopPropagation();
      }
      let preventScroll=(e)=>{
        e.preventDefault();
      }
/*      if(e.ctrlKey || e.metaKey)
        this.setValue(this.defvalue,true);
      else
        this.setValue(!this.value,true);
*/
      switch(this.type){
      case "kick":
        this.setValue(1);
        this.sendEvent("change");
        break;
      case "toggle":
        if(e.ctrlKey || e.metaKey)
          this.value=defvalue;
        else
          this.value=1-this.value;
        this.checked=!!this.value;
        this.sendEvent("change");
        break;
      case "radio":
        let els=document.querySelectorAll("webaudio-switch[type='radio'][group="+this.group+"]");
        for(let i=0;i<els.length;++i){
          if(els[i]==this)
            els[i].setValue(1);
          else
            els[i].setValue(0);
        }
        this.sendEvent("change");
        break;
      }

      window.addEventListener('mouseup', pointerup, true);
      window.addEventListener('touchend', pointerup, true);
      window.addEventListener('touchcancel', pointerup, true);
      document.body.addEventListener('touchstart', preventScroll);
      this.redraw();
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  customElements.define("webaudio-param", class WebAudioParam extends WebAudioControlsWidget {
    constructor(){
      super();
      this.addEventListener("keydown",this.keydown,false);
      this.addEventListener("mousedown",this.pointerdown,false);
      this.addEventListener("touchstart",this.pointerdown,false);
      this.addEventListener("wheel",this.wheel,false);
      this.addEventListener("mouseover",this.pointerover,false);
      this.addEventListener("mouseout",this.pointerout,false);
      this.addEventListener("contextmenu",this.contextMenu,false);
    }
    connectedCallback(){
      let root;
//      if(this.attachShadow)
//        root=this.attachShadow({mode: 'open'});
//      else
        root=this;
      root.innerHTML=
`<style>
webaudio-param{
  display:inline-block;
  user-select:none;
  margin:0;
  padding:0;
  font-family: sans-serif;
  font-size: 8px;
}
.webaudio-param-body{
  display:inline-block;
  cursor:pointer;
  text-align:center;
  vertical-align:middle;
  position:relative;
  border:1px solid #888;
  background:none;
  border-radius:4px;
  margin:0;
  padding:0;
  font-family:sans-serif;
  font-size:11px;
}
</style>
<input class='webaudio-param-body' value='0' tabindex='1' touch-action='none'/>
`;
      this.elem=root.childNodes[2];

      this.enable=+this.getAttribute("enable");
      this._value=+this.getAttribute("value"); Object.defineProperty(this,"value",{get:()=>{return this._value},set:(v)=>{this._value=v;this.redraw()}});
      this.defvalue=+this.getAttribute("defvalue");
      this.fontsize=+this.getAttribute("fontsize")||9;
      this._src=this.getAttribute("src"); Object.defineProperty(this,"src",{get:()=>{return this._src},set:(v)=>{this._src=v;this.setupImage()}});
      this.link=this.getAttribute("link");
      this._width=+this.getAttribute("width")||32; Object.defineProperty(this,"width",{get:()=>{return this._width},set:(v)=>{this._width=v;this.setupImage()}});
      this._height=+this.getAttribute("height")||16; Object.defineProperty(this,"height",{get:()=>{return this._height},set:(v)=>{this._height=v;this.setupImage()}});
      this._colors=this.getAttribute("colors")||"#fff;#000"; Object.defineProperty(this,"colors",{get:()=>{return this._colors},set:(v)=>{this._colors=v;this.setupImage()}});
      this.midiController={};
      this.midiMode="normal";
      if(this.midicc) {
        let ch = parseInt(this.midicc.substring(0, this.midicc.lastIndexOf("."))) - 1;
        let cc = parseInt(this.midicc.substring(this.midicc.lastIndexOf(".") + 1));
        this.setMidiController(ch, cc);
      }
      this.setupImage();
      if(window.webAudioControlsMidiManager)
        window.webAudioControlsMidiManager.updateWidgets();
      this.fromLink=((e)=>{
        this.setValue(e.target.value.toFixed(e.target.digits));
      }).bind(this);
    }
    disconnectedCallback(){}
    setupImage(){
      this.coltab = this.colors.split(";");
      this.elem.style.color=this.coltab[0];
      if(!this.src){
        this.elem.style.backgroundColor=this.coltab[1];
      }
      else{
        this.elem.style.backgroundImage = "url("+(this.src)+")";
        this.elem.style.backgroundSize = "100% 100%";
      }
      this.elem.style.width=this.width+"px";
      this.elem.style.height=this.height+"px";
      let l=document.getElementById(this.link);
      if(l){
        l.addEventListener("input",(e)=>{this.setValue(l.value.toFixed(l.digits))})
      }
      this.redraw();
    }
    redraw() {
      this.elem.value=this.value;
    }
    setValue(v,f){
      this.value=v;
      if(this.value!=this.oldvalue){
        this.redraw();
        this.showtip();
        if(f){
          let event=document.createEvent("HTMLEvents");
          event.initEvent("change",false,true);
          this.dispatchEvent(event);
        }
        this.oldvalue=this.value;
      }
    }
    pointerdown(e){
      if(!this.enable)
        return;
      if(e.touches)
          e = e.touches[0];
      else {
        if(e.buttons!=1 && e.button!=0)
          return;
      }
      this.elem.focus();
      this.showtip("drag",this);
      let pointermove=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      let pointerup=(e)=>{
        this.showtip("drag",null);
        window.removeEventListener('mouseup', pointerup, true);
        window.removeEventListener('touchend', pointerup, true);
        window.removeEventListener('touchcancel', pointerup, true);
        document.body.removeEventListener('touchstart', preventScroll, false);
      }
      let preventScroll=(e)=>{
        e.preventDefault();
      }
      window.addEventListener('mouseup', pointerup, true);
      window.addEventListener('touchend', pointerup, true);
      window.addEventListener('touchcancel', pointerup, true);
      document.body.addEventListener('touchstart', preventScroll);
      this.redraw();
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // FOR MIDI LEARN
  class WebAudioControlsMidiManager {
    constructor(){
      this.midiAccess = null;
      this.listOfExternalMidiListeners = [];
      this.updateWidgets();
      this.initWebAudioControls();
    }
    updateWidgets(){
      this.listOfWidgets = document.querySelectorAll("webaudio-knob,webaudio-slider,webaudio-switch");
    }
    initWebAudioControls() {
      if(navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(
          (ma)=>{this.midiAccess = ma,this.enableInputs()},
          (err)=>{ console.log("MIDI not initialized - error encountered:" + err.code)}
        );
      }
    }
    enableInputs() {
      let inputs = this.midiAccess.inputs.values();
      console.log("Found " + this.midiAccess.inputs.size + " MIDI input(s)");
      for(let input = inputs.next(); input && !input.done; input = inputs.next()) {
        console.log("Connected input: " + input.value.name);
        input.value.onmidimessage = this.handleMIDIMessage.bind(this);
      }
    }
    midiConnectionStateChange(e) {
      console.log("connection: " + e.port.name + " " + e.port.connection + " " + e.port.state);
      enableInputs();
    }

    onMIDIStarted(midi) {
      this.midiAccess = midi;
      midi.onstatechange = this.midiConnectionStateChange;
      enableInputs(midi);
    }
    // Add hooks for external midi listeners support
    addMidiListener(callback) {
      listOfExternalMidiListeners.push(callback);
    }
    getCurrentConfigAsJSON() {
      return currentConfig.stringify();
    }
    handleMIDIMessage(event) {
      this.listOfExternalMidiListeners.forEach(function (externalListener) {
        externalListener(event);
      });
      if(((event.data[0] & 0xf0) == 0xf0) || ((event.data[0] & 0xf0) == 0xb0 && event.data[1] >= 120))
        return;
      for(let w of this.listOfWidgets) {
        if(w.processMidiEvent)
          w.processMidiEvent(event);
      }
    }
    contextMenuOpen(e,knob){
      if(!this.midiAccess)
        return;
      let menu=document.getElementById("webaudioctrl-context-menu");
      menu.style.left=e.pageX+"px";
      menu.style.top=e.pageY+"px";
      menu.knob=knob;
      menu.classList.add("active");
    }
    contextMenuClose(){
      let menu=document.getElementById("webaudioctrl-context-menu");
      menu.classList.remove("active");
      let menuItemLearn=document.getElementById("webaudioctrl-context-menu-learn");
      menuItemLearn.innerHTML = 'Learn';
      menu.knob.midiMode = 'normal';
    }
    contextMenuLearn(){
      let menu=document.getElementById("webaudioctrl-context-menu");
      let menuItemLearn=document.getElementById("webaudioctrl-context-menu-learn");
      menuItemLearn.innerHTML = 'Listening...';
      menu.knob.midiMode = 'learn';
    }
    contextMenuClear(e){
      let menu=document.getElementById("webaudioctrl-context-menu");
      menu.knob.midiController={};
      this.contextMenuClose();
    }
  }
  window.addEventListener("load",()=>{
    document.body.appendChild(midimenu);
    document.body.appendChild(tooltip);
    if(window.UseWebAudioControlsMidi)
      window.webAudioControlsMidiManager = new WebAudioControlsMidiManager();
  });
}
