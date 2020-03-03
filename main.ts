let hitrost_obracanja = 0
let napaka = 0
let obcutljivost = 2.2
forever(function () {
    motors.largeBC.setInverted(true)
    napaka = 50 - sensors.color2.light(LightIntensityMode.Reflected)
    hitrost_obracanja = obcutljivost * napaka
    motors.largeBC.steer(hitrost_obracanja, 15)
    brick.showNumber(sensors.color1.light(LightIntensityMode.Reflected), 1)
    brick.showNumber(sensors.color2.light(LightIntensityMode.Reflected), 2)
    brick.showNumber(hitrost_obracanja, 3)
})
