hummingbird.startHummingbird()
basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 20) {
        hummingbird.setPositionServo(FourPort.One, 90)
        hummingbird.setPositionServo(FourPort.Two, 90)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        hummingbird.setPositionServo(FourPort.One, 0)
        hummingbird.setPositionServo(FourPort.Two, 6)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
