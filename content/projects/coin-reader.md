---
title: "Coin Reader Firmware-App"
description: "ESP32 firmware for the Makrshakr coin reader — migrated from WiFi/HTTP to Bluetooth Serial on the WT32-ETH01 board. Currently running in production."
tags: ["Firmware", "ESP32", "Bluetooth", "C++", "Flutter", "PlatformIO", "FreeRtos"]
coverImage: "/images/coinreader.jpeg"
year: 2025
github: ""
---

A full firmware rewrite for the coin acceptor hardware used in [Makrshakr](https://makrshakr.com) cocktail machines, targeting the **WT32-ETH01** ESP32 board.

## Context

Makrshakr machines integrate a coin reader to gate drink dispensing. The original firmware communicated over **WiFi/HTTP**. The goal of this project was to replace that communication layer entirely with **Bluetooth Serial**, making the device more robust, faster to pair, and independent of local network infrastructure.

The rewritten firmware is currently **running in production**, paired with a custom **Flutter kiosk app** (also built for this project) that handles the customer-facing UI, communicates with the coin reader over Bluetooth, and sends drink orders to the Makrshakr robotic system.

## What Changed

The core coin detection logic was preserved: hardware interrupts on GPIO 4 count pulses within a 300 ms window to determine coin value, with GPIO 32 controlling a power relay for the coin acceptor.

The communication layer was rebuilt from scratch:

- **Removed:** WiFi provisioning (WiFiManager), HTTP API endpoints
- **Added:** Bluetooth Serial server (`MSBluetoothServer`) with a clean command interface

The BT device advertises as `CoinReader-XXYY` and responds to some actions.


## Architecture

`CoinReader` uses `static` class members (`precTime`, `coinValue`, `isNewCoin`) so the free-function ISR can access them without a pointer — a pattern that keeps interrupt handlers compatible with the ESP-IDF/Arduino framework constraints.

`Application` maintains two coin counters: `pendingCoin` (consumed on `getCoin`, resets to 0) and `coinPulses` (unbounded history, never cleared), giving the host system flexibility in how it tracks credits.

## Hardware Debugging

Firmware development involved hands-on **hardware debugging**: oscilloscope analysis of coin pulse signals to validate interrupt timing, relay switching behavior, and edge cases in the 300 ms pulse-counting window. This was essential to ensure reliable coin detection across different coin acceptor models and power conditions.

## System Integration

```
WT32-ETH01 (coin reader)
        │  coin credit events
        │  Bluetooth Serial
        ▼
Flutter Kiosk App (tablet)
        │
        ▼
Makrshakr Robotic System
```

The Flutter app was purpose-built to complement this firmware: it manages the Bluetooth connection, tracks coin credits, and translates them into drink orders dispatched to the robotic bartender.

## Stack

- **Platform:** ESP32 (WT32-ETH01)
- **Toolchain:** PlatformIO / Arduino framework
- **Firmware language:** C++
- **Kiosk app:** Flutter
- **Communication:** Bluetooth Serial (replaces WiFi/HTTP)
- **Debug tools:** Oscilloscope, serial monitor
