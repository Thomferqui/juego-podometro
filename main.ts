input.onButtonPressed(Button.A, function () {
    PASOS = 0
    basic.showNumber(PASOS)
})
input.onGesture(Gesture.Shake, function () {
    PASOS += 1
    basic.showNumber(PASOS)
})
let PASOS = 0
basic.showString("THOMAS ANDRES FERNANDEZ QUINTERO.")
basic.showNumber(705)
PASOS = 0
basic.showNumber(PASOS)
basic.forever(function () {
	
})
