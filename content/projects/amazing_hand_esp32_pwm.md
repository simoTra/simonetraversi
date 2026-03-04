---
title: "Amazing Hand Pwm Controller"
description: "ESP32-based robotic hand controller driving 4 fingers via 8 servo motors on an Adafruit PCA9685 PWM board. Features serial command interface for finger control, gestures (wave, open, close), non-blocking demo mode, and persistent calibration. Built with PlatformIO using a modular state-machine architecture."
tags: ["Firmware", "Prototyping", "3D Modeling", "Electronic", "UI"]
coverImage: /images/amazingHand.jpeg
year: 2026
github: "https://github.com/simoTra/amazing_hand_esp32_pwm"
---

# ESP32-Powered Robotic Hand with PWM Servo Control

A custom firmware adaptation for the [Amazing Hand](https://github.com/pollen-robotics/amazing-hand) by Pollen Robotics — redesigned from the ground up to drive standard PWM servos via an Adafruit PCA9685 driver, controlled by an ESP32 with a built-in web interface.

![Demo](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/demo.gif)

## The Problem

The original Amazing Hand design relies on Feetech SCS0009 serial bus servos, which require a dedicated serial protocol and specific hardware to drive. Replacing them with widely available PDI-1109MG PWM servos makes the build cheaper, more accessible, and easier to source — but requires a completely different control layer.

This project replaces the servo driver stack entirely: an ESP32 talks I2C to an Adafruit PCA9685 16-channel PWM board, which in turn drives 8 servos across 4 fingers (2 servos per finger for full flexion control).

## Hardware

- **ESP32** development board
- **Adafruit PCA9685** 16-channel I2C PWM driver
- **8× PDI-1109MG** PWM servos
- **5V / 3-5A** external power supply
- Amazing Hand 3D-printed parts (original Pollen Robotics design)

> **Important:** The PCA9685 board must be powered separately from the ESP32. Driving 8 servos from the ESP32's onboard regulator will cause brownouts and unpredictable behavior.

![Open hand assembly](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/openHand.png)

![ESP32 controller setup](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/esp.png)

## Wiring

The wiring connects the ESP32 to the PCA9685 over I2C, with each servo channel mapped to a specific finger joint.

![Wiring overview](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/wiring1.png)

![Wiring detail](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/wiring2.png)

![Wiring complete](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/wiring3.png)

## Software Architecture

The firmware is built with PlatformIO and structured as a modular, non-blocking state machine. No blocking delays — everything runs cooperatively so the system stays responsive during gesture execution, calibration, or web requests.

**Key modules:**

- **ServoController** — wraps the PCA9685 library, translates angular positions to PWM pulse widths
- **FingerController** — manages each finger's two-servo pair, handles joint coordination
- **StateManager** — tracks the current system mode (idle, gesture, calibration, demo)
- **CalibrationManager** — reads/writes per-servo min/max calibration data to NVS (non-volatile storage)
- **CommandManager** — parses serial input at 115200 baud
- **WebInterface** — serves a browser UI over Wi-Fi for gesture and calibration control

## Gestures

Three pre-programmed gestures are available out of the box:

**Wave**

![Wave gesture](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/wave.gif)

**Rock & Roll**

![Rock gesture](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/rock.gif)

**Middle Finger**

![Middle finger gesture](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/middle.gif)

Gestures can be triggered via the web interface, serial commands, or cycled automatically in demo mode.

## Web Interface

The ESP32 hosts a web server accessible from any browser on the same network. It exposes three panels:

**All controls**

![Web interface overview](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/web_all.JPG)

**Gesture shortcuts**

![Gesture controls](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/web_controls.jpg)

**Per-finger sliders**

![Finger controls](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/web_fingers_control.jpg)

**Calibration panel**

Each servo's min/max pulse width can be tuned individually and saved to persistent storage — no need to reflash to adjust for mechanical tolerances.

![Calibration interface](https://raw.githubusercontent.com/simoTra/amazing_hand_esp32_pwm/refs/heads/main/docs/images/web_calibration.jpg)

## Bill of Materials

| Component | Qty |
|---|---|
| ESP32 development board | 1 |
| Adafruit PCA9685 PWM driver | 1 |
| PDI-1109MG servo | 8 |
| 5V / 3-5A power supply | 1 |
| Amazing Hand 3D-printed parts | 1 set |

## Getting Started

Clone the repo and open it in PlatformIO. Build and flash to the ESP32. On first boot, the device creates a Wi-Fi access point — connect to it and navigate to the device IP to open the web interface.

Full setup instructions and serial command reference are in the [GitHub repository](https://github.com/simoTra/amazing_hand_esp32_pwm).
