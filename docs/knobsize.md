<script src="../webaudio-controls.js"></script>

# Determining Knob Size

There are several factors that determine the knob size. The following factors have higher priority from the top and are checked in order.

Note that the specification in the style sheet does not affect the size of the knob display, although the outline of the element changes.

- `width`, `height` attributes of the element
- `diameter` attribute of the element
- `knobWidth`, `knobHeight` specified by `WebAudioControlsOptions`
- `knobDiameter` specified by `WebAudioControlsOptions`
- Image size specified by `src`
- Default size (64px x 64px)



