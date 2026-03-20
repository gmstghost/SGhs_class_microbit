radio.set_group(15)     # radio 채널설정

def on_button_pressed_a():
    radio.send_number(0)

def on_button_pressed_b():
    radio.send_number(1)

def on_button_pressed_logo():
    radio.send_number(2)

def on_received_number(receivedNumber):     # 라디오 int수신시 콜백
        if receivedNumber == 0:     # tx A버튼
            basic.show_icon(IconNames.HEART)
        if receivedNumber == 1:     # tx B버튼
            basic.show_icon(IconNames.SMALL_HEART)
        if receivedNumber == 2:     # tx logo
            music.play(music.tone_playable(Note.C, music.beat(BeatFraction.WHOLE)), music.PlaybackMode.UNTIL_DONE)

def on_forever():
    input.on_button_pressed(Button.A, on_button_pressed_a)      # A버튼 콜백
    input.on_button_pressed(Button.B, on_button_pressed_b)      # B버튼 콜백
    input.logo_is_pressed()         # 로고 콜백
    radio.on_received_number(on_received_number)
    
basic.forever(on_forever)       # 실행