import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
controlpin = 8
GPIO.setup(controlpin, GPIO.OUT, initial = 0)
time.sleep(1)
GPIO.output(controlpin, GPIO.HIGH)
time.sleep(1)
GPIO.output(controlpin, GPIO.HIGH)
