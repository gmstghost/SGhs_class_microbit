basic.forever(function on_forever() {
    if (input.compassHeading() >= 0 && input.compassHeading() <= 45 || input.compassHeading() > 285 && input.compassHeading() <= 360) {
        basic.showString("N")
        basic.clearScreen()
    }
    
    if (input.compassHeading() > 45 && input.compassHeading() <= 135) {
        basic.showString("E")
        basic.clearScreen()
    }
    
    if (input.compassHeading() > 135 && input.compassHeading() <= 225) {
        basic.showString("S")
        basic.clearScreen()
    }
    
    if (input.compassHeading() > 225 && input.compassHeading() <= 285) {
        basic.showString("W")
        basic.clearScreen()
    }
    
})
