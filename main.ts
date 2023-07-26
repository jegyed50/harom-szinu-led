let szorzo = 10
let kozepesfenyesseg = 0
let sotet = 0
let i = 100
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, kozepesfenyesseg)
    pins.analogWritePin(AnalogPin.P1, kozepesfenyesseg)
    pins.analogWritePin(AnalogPin.P2, kozepesfenyesseg)
    basic.showString("P")
    basic.pause(200)
    for (let index = 0; index <= i; index++) {
        pins.analogWritePin(AnalogPin.P0, index * szorzo)
        basic.pause(50)
    }
    pins.analogWritePin(AnalogPin.P0, sotet)
    basic.showString("Z")
    basic.pause(200)
    for (let index = 0; index <= i; index++) {
        pins.analogWritePin(AnalogPin.P2, index * szorzo)
        basic.pause(50)
    }
    pins.analogWritePin(AnalogPin.P2, sotet)
    basic.showString("K")
    basic.pause(200)
    for (let index = 0; index <= i; index++) {
        pins.analogWritePin(AnalogPin.P1, index * szorzo)
        basic.pause(50)
    }
    pins.analogWritePin(AnalogPin.P1, sotet)
})
