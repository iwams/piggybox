function music2 () {
    music.play(music.stringPlayable("G A B B B A G - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G A B A G A - - ", 120), music.PlaybackMode.UntilDone)
}
music2()
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
let dummy = 0
basic.forever(function () {
    while (dummy == 0) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0) {
            basic.showIcon(IconNames.Happy)
            music2()
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
