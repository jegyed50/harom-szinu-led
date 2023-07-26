let szorzo = 100
let kozepesfenyesseg = 20
let sotet = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, kozepesfenyesseg)
    pins.analogWritePin(AnalogPin.P1, kozepesfenyesseg)
    pins.analogWritePin(AnalogPin.P2, kozepesfenyesseg)
    basic.pause(500)
    for (let index = 0; index <= 19; index++) {
        pins.analogSetPeriod(AnalogPin.P0, index * szorzo)
        basic.pause(100)
    }
    for (let index = 0; index <= 19; index++) {
        pins.analogSetPeriod(AnalogPin.P1, index * szorzo)
        basic.pause(100)
    }
    for (let index = 0; index <= 19; index++) {
        pins.analogSetPeriod(AnalogPin.P2, index * szorzo)
        basic.pause(100)
    }
    pins.analogWritePin(AnalogPin.P0, sotet)
    pins.analogWritePin(AnalogPin.P1, sotet)
    pins.analogWritePin(AnalogPin.P2, sotet)
})
