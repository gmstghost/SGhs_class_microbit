radio.setGroup(15)
//  radio 채널설정
function on_button_pressed_logo() {
    radio.sendNumber(2)
}

basic.forever(function on_forever() {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        radio.sendNumber(0)
    })
    input.onButtonPressed(Button.B, function on_button_pressed_b() {
        radio.sendNumber(1)
    })
    input.logoIsPressed()
    radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
        //  라디오 int수신시 콜백
        if (receivedNumber == 0) {
            //  tx A버튼
            basic.showIcon(IconNames.Heart)
        }
        
        if (receivedNumber == 1) {
            //  tx B버튼
            basic.showIcon(IconNames.SmallHeart)
        }
        
        if (receivedNumber == 2) {
            //  tx logo
            music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        
    })
})
