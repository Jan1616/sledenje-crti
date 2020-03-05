function sledenje(cas: number, obcutljivost: number) {
    let hitrost_obracanja = 0
    let napaka = 0
    control.timer1.reset()
    while (control.timer1.seconds() < cas) {
        motors.largeBC.setInverted(true)
        napaka = 50 - sensors.color1.light(LightIntensityMode.Reflected)
        hitrost_obracanja = obcutljivost * napaka
        motors.largeBC.steer(hitrost_obracanja, 15)
        brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
        brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 2)
        brick.showNumber(hitrost_obracanja, 3)
    }

}
brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    sledenje(5, 1.6)
    motors.stopAll()
    control.panic(5)
})


