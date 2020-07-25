---
pageid: DeterminingKnobSize
---
<link rel="stylesheet" href="./docstyle.css">

<script>
  WebAudioControlsOptions={

  };
</script>

<script src="../webaudio-controls.js"></script>

{% include_relative gnavi.html %}

---

# Determining Knob Size

There are several factors that determine the knob size. The following factors have higher priority from the top and are checked in order.

Note that the `width` / `height` specification in the style sheet does not affect the size of the knob display, although the outline of the element changes.

- `width`, `height` attributes of the element
- `diameter` attribute of the element
- `knobWidth`, `knobHeight` specified by `WebAudioControlsOptions`
- `knobDiameter` specified by `WebAudioControlsOptions`
- Image size specified by `src`
- Default size (64px x 64px)

---
## Knob

<webaudio-knob id="knob1" ></webaudio-knob>
<br/>

The default size (64 x 64px) is used if there is no other size factor.
```html
<webaudio-knob></webaudio-knob>
```

---

<webaudio-knob id="knob2" diameter="32"></webaudio-knob>  
<br/>

If the `diameter` is specified, the knob will be that size
```html
<webaudio-knob diameter="32"></webaudio-knob>
```

---

<webaudio-knob id="knob3" width="200" height="50"></webaudio-knob>  
<br/>

When `width` and `height` attributes are specified individually.
```html
<webaudio-knob width="200" height="50"></webaudio-knob>
```

---


<webaudio-knob id="knob4" src="../knobs/Aqua.png"></webaudio-knob>
<br/>

If a `src` image is specified and nothing else is provided, the original size of the image is used.
At this time, `sprites` are automatically calculated assuming that one frame of the knob image is square.  
```html
<webaudio-knob src="../knobs/Aqua.png"></webaudio-knob>
```

---

<webaudio-knob id="knob5" src="../knobs/Aqua.png" diameter="32"></webaudio-knob>  
<br/>

If `src` and `diameter` is specified, the original image will be resized.
```html
<webaudio-knob src="../knobs/Aqua.png" diameter="32">
</webaudio-knob>
```

---

<webaudio-knob id="knob7" src="../knobs/Aqua.png"
   sprites="100"
   width="200" height="50">
</webaudio-knob>  
<br/>

When width height is specified individually with src.
```html
<webaudio-knob src="../knobs/Aqua.png"
  sprites="100" 
  width="200" height="50">
</webaudio-knob>
```

---

<webaudio-knob id="knob5" src="../knobs/hsw5.png" sprites="4"></webaudio-knob>  
<br/>

If one frame of the knob image is not square, the `sprites` attribute should be set to (number of frames - 1).
```html
<webaudio-knob src="../knobs/hsw5.png" sprites="4">
</webaudio-knob>
```

---

## Slider

<webaudio-slider></webaudio-slider>  
<br/>

The default size (24 x 128px) is used if there is no other size factor.
```html
<webaudio-slider></webaudio-slider>
```

---

<webaudio-slider 
  width="200" height="50">
</webaudio-slider>  
<br/>

If `width` and `height` is specified, it will be the specified size. At this time, the direction of the slider is automatically determined to the longer direction of width or height.
```html
<webaudio-slider width="200" height="50">
</webaudio-slider>
```

---

<webaudio-slider 
  src="../knobs/hsliderbody.png">
</webaudio-slider>  
<br/>

When the `src` image is specified and `width` `height` is not specified, the size of the original `src` image is used.  
```html
<webaudio-slider src="../knobs/hsliderbody.png">
</webaudio-slider>
```

---

<webaudio-slider src="../knobs/hsliderbody.png" width="300" height="40"></webaudio-slider>
<br/>

When `width` `height` is specified with the `src` image, the `src` image is resized.
```html
<webaudio-slider 
  src="../knobs/hsliderbody.png"
  width="300" height="40">
</webaudio-slider>
```

---

<webaudio-slider width="300" height="40" knobwidth="20" knobheight="60"></webaudio-slider>
<br/>

`knobwidth` and `knobheight` specify the size of thumb. If these are not specified, a square whose side is the smaller of `width` or `height` will be used.
```html
<webaudio-slider 
  width="300" height="40"
  knobwidth="20" knobheight="60">
</webaudio-slider>
```

---

<webaudio-slider width="300" height="40" knobsrc="../knobs/hsliderknob.png"></webaudio-slider>
<br/>

If the thumb size by `knobwidth` and `knobheight` are not specified but the image is served by `knobsrc`, the original size of the `knobsrc` image will be used.
```html
<webaudio-slider 
  width="300" height="40"
  knobsrc="../knobs/hsliderknob.png">
</webaudio-slider>
```

---

<webaudio-slider width="300" height="40" knobwidth="30" knobheight="100" ditchlength="150" knobsrc="../knobs/hsliderknob.png"></webaudio-slider>
<br/>

Specifying `ditchlength` can set the movement range of the thumb.
```html
<webaudio-slider 
  width="300" height="40" 
  knobwidth="30" knobheight="100" 
  ditchlength="150" 
  knobsrc="../knobs/hsliderknob.png">
</webaudio-slider>
```

---

<webaudio-slider outline="1" width="300" height="40" knobwidth="30" src="" knobheight="100" knobsrc="../knobs/hsliderknob.png"></webaudio-slider>
<br/>

Setting src to the empty string "" will stop drawing the background and draw only the thumb.
```html
<webaudio-slider 
  width="300" height="40" 
  knobwidth="30" knobheight="100" 
  src="" 
  outline="1" 
  knobsrc="../knobs/hsliderknob.png">
</webaudio-slider>
```

---

## Switch

<webaudio-switch></webaudio-switch>
<br/>

If no size is specified such as `width`, `height`, it will be displayed in the default size 32 x 32px.
```html
<webaudio-switch></webaudio-switch>
```

---
<webaudio-switch width="120" height="32">
</webaudio-switch>
<br/>

If `width` and `height` are specified, it will be displayed in the specified size.
```html
<webaudio-switch width="120" height="32">
</webaudio-switch>
```

---

<webaudio-switch diameter="120"></webaudio-switch>
<br/>

`diameter` attribute specify `width` and `height` together.
```html
<webaudio-switch diameter="120">
</webaudio-switch>
```

---

<webaudio-switch src="../knobs/redbutton128.png">
</webaudio-switch>
<br/>

If the `src` attribute specifies an `image`,  and `width`, `height`, and `diameter` are not specified, the original image size is used.
```html
<webaudio-switch src="../knobs/redbutton128.png">
</webaudio-switch>
```

---

<webaudio-switch src="../knobs/redbutton128.png" diameter="40"></webaudio-switch>
<br/>

If the `src` image and size are specified, the `src` image will be resized to the specified size.
```html
<webaudio-switch src="../knobs/redbutton128.png" diameter="40">
</webaudio-switch>
```

---

## Param

<webaudio-param></webaudio-param>  
<br/>

If no size is specified such as `width`, `height`, it will be displayed in the default 32 x 20px.
```html
<webaudio-param></webaudio-param>
```

---

<webaudio-param width="100" height="40"></webaudio-param>  
<br/>

If `width` and `height` are specified, it will be displayed in the specified size.
```html
<webaudio-param width="100" height="40">
</webaudio-param>
```

---

<webaudio-param width="100" height="40" fontsize="24"></webaudio-param>  
<br/>

The font size can be specified with the `fontsize` attribute.
```html
<webaudio-param 
  width="100" height="40"
  fontsize="24">
</webaudio-param> 
```

---

<webaudio-param src="../knobs/parambg120x32.png"></webaudio-param>  
<br/>

If the `src` image is specified but no `width` and `height` is provided, the original size of the `src` image is used.
```html
<webaudio-param
  src="../knobs/parambg120x32.png">
</webaudio-param> 
```

---

<webaudio-param src="../knobs/parambg120x32.png" width="50" height="40" fontsize="16"></webaudio-param>
<br/>

If `src` image, `width`, `height` is specified, the `src` image is resized to specified size.  
```html
<webaudio-param 
  src="../knobs/parambg120x32.png" 
  width="50" height="40"
  fontsize="16">
</webaudio-param>
```

---

<webaudio-param src="" diameter="32"></webaudio-param>  
<br/>

If `src` is empty string `""`, background is transparent.
```html
<webaudio-param src="" diameter="32">
</webaudio-param>
```

---




