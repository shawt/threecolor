let strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    strip.showRainbow(1, 90)
    basic.pause(1000)
    strip.showRainbow(90, 180)
    basic.pause(1000)
    strip.showRainbow(180, 270)
    basic.pause(1000)
    strip.showRainbow(270, 360)
    basic.pause(1000)
})
