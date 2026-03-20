def on_forever():
    if input.compass_heading() >= 0 and input.compass_heading() <= 45 or input.compass_heading() > 285 and input.compass_heading() <= 360:
        basic.show_string("N")
        basic.clear_screen()
    if input.compass_heading() > 45 and input.compass_heading() <= 135:
        basic.show_string("E")
        basic.clear_screen()
    if input.compass_heading() > 135 and input.compass_heading() <= 225:
        basic.show_string("S")
        basic.clear_screen()
    if input.compass_heading() > 225 and input.compass_heading() <= 285:
        basic.show_string("W")
        basic.clear_screen()
        
basic.forever(on_forever)