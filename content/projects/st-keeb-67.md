---
title: "ST-Keeb-67"
description: "The alice-like keyboard you are looking at - handwired keyboard with plasma-cut inox frame and 3D printed split plate"
tags: ["Design", "Firmware", "Prototyping", "3D Modeling", "Electronic",  "Plasma Cutting"]
coverImage: /images/st_keeb.jpeg
year: 2023
github: "https://github.com/simoTra/st_keeb"
---
# Handwired Keyboard with Plasma-Cut Inox Frame and 3D Printed Split Plate

This handwired keyboard has a unique design with a plasma-cut inox frame and a 3D-printed split plate, reflecting the perfect combination of aesthetics and functionality. The keyboard boasts a sleek, modern design with a durable and aesthetically pleasing base. The sanded inox frame has a glossy finish, providing a distinct and premium look.

The 3D-printed split plate ensures precise switch positioning and eliminates any rattling during typing. Made from high-quality PETG, the plate is designed for durability. Brass inserts in the 3D-printed parts securely hold the screws in place.

## Microcontroller

The keyboard is powered by an Arduino Pro Micro microcontroller, connected to each switch using a matrix scheme.

## Switches

This keyboard uses Gateron Yellow Pro switches, known for their smooth linear feel, making them perfect for typing. Their high actuation force reduces accidental keypresses, ensuring precision.

## Bill of Materials (BOM)

-   1x Plasma-cut inox frame (also 3D printable)
-   1x 3D-printed split plate
-   1x Arduino Pro Micro (or ATMega 32u4 compatible microcontroller)
-   67x Gateron Yellow Pro switch
-   67x 1N4148 diode
-   8x M3 screw
-   8x M3x4mm brass insert

## Layout and Matrix Scheme

The matrix configuration is peculiar yet functional, designed to facilitate assembly operations.

![Keyboard Layout](https://github.com/simoTra/st_keeb/raw/main/images/layout.png)

For detailed instructions on using the LED pin as input for the matrix, refer to [this guide](https://golem.hu/guide/pro-micro-upgrade/) .

![Matrix Scheme](https://github.com/simoTra/st_keeb/raw/main/images/matrixScheme.png)

More photos and details can be found in the [official GitHub repo](https://github.com/simoTra/st_keeb) .

## Photos

Orbital Sanding

Printed Part

Final Without Base

![orbital sanding](https://github.com/simoTra/st_keeb/raw/main/images/orbitalSanding.jpg)

![printed part](https://github.com/simoTra/st_keeb/raw/main/images/printedPart.jpg)

![final without base](https://github.com/simoTra/st_keeb/raw/main/images/finalWithoutBase.jpg)

Back

Microcontroller

Matrix

![back](https://github.com/simoTra/st_keeb/raw/main/images/back.jpeg)

![microcontroller](https://github.com/simoTra/st_keeb/raw/main/images/microcontroller.jpeg)

![matrix](https://github.com/simoTra/st_keeb/raw/main/images/matrix.jpeg)

Final

![final](https://github.com/simoTra/st_keeb/raw/main/images/final.jpeg)

## Future Improvements

Hand wiring can be messy, especially with 67 keys. The next version will include a PCB, which might also replace the 3D-printed plate to reduce assembly time. Additionally, an encoder could be added to the top right, relocating the _tilde_ and _delete_ keys one row below.

## Conclusion

If you're looking for a high-quality, handwired keyboard that is both aesthetically pleasing and functional, this design is an excellent choice. With its unique design, premium materials, and exceptional switches, it offers a fantastic typing experience. The 3D-printed parts add customization options and ease of assembly, making it a rewarding DIY project.