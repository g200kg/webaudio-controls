---
pageid: WebAudioControlsOptions
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

## WebAudioControlsOptions

By setting the global object, `WebAudioControlsOptions`, you can specify default values such as the knob size or colors etc when attribute setting on each tag is omitted.
This declaration should be prior to the `webaduio-controls.js` loading.

```html
<script>
WebAudioControlsOptions={
  useMidi:1,
  knobDiameter:80,
  switchWidth:40,
  switchHeight:20,
};
</script>
<script src="webaudio-controls.js"></script>
```
The items that can be set are as follows

name        | default | description
------------|---------|----------------
useMidi     |0        | If `1`, enable control from midi devices.
midilearn   |0        | If `1`, enable midilearn function for each knobs/sliders/switches.
preserveMidiLearn|0   | If `1`, save the MIDI learn result in localStorage and maintain when the next access.
outline     |0        | Outline style when focused. Specify detail like `"1px solid #ff8888"` or `"1"` for default `"1px solid #ccc"` style.
valuetip    |0        | valuetip display
knobWidth   |null     | width for knobs
knobHeight  |null     | height for knobs
knobDiameter|64       | diameter for knobs
knobSrc     |null     | knob image source
knobSprites |null     | knob image number of frames
knobColors  |`"#e00;#000;#fff"`| color setting for knobs
sliderWidth |24       | width for sliders
sliderHeight|128      | height for sliders
sliderSrc   |null     | background image of sliders
sliderKnobWidth|0     | width of the slider thumb
sliderKnobHeight|0    | height of the slider thumb
sliderKnobSrc|null    | image of the slider thumb
sliderColors|`"#e00;#333;#fcc"`| color setting for sliders
switchWidth |0        | width for switches
switchHeight|0        | height for switches
switchDiameter|24     | diameter for switches
switchColors|`"#e00;#000;#fcc"`| color setting for switches
paramWidth  |32       | width for param
paramHeight |20       | height for param
paramSrc    |null     | param background image source
paramColors |`"#fff;#000"`| color setting for param

---
