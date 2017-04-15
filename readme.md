# LibreInterface
**Control electronics devices** from your **browser** and create **local web interface**.    
All you need to know is how to code in **HTML/JS** and **Arduino C**.   
You just need a [code editor](https://code.visualstudio.com/download) for the interface and [arduino](https://www.arduino.cc/en/main/software) for your [microcontrollers](https://en.wikipedia.org/wiki/Microcontroller). 
## [Try it!](http://madnerd.org/interface)         
## [Download](https://github.com/madnerdorg/libreinterface/archive/master.zip)      

![Screenshot of libreinterface](https://github.com/madnerdorg/libreinterface/raw/master/doc/libre_interface_demo.jpg)

* LibreInterface doesn't need an **internet connection** or even a **connection** to works.    
![nowifi](https://github.com/madnerdorg/libreinterface/raw/master/doc/noconnect.png) 

* All changes are saved **inside your browser** using localStorage.

# Devices
![Devices](https://github.com/madnerdorg/libreinterface/raw/master/doc/devices.jpg)  

Here is the devices currently available: 

* [test](https://github.com/madnerdorg/test) : embedded led
* [leds](https://github.com/madnerdorg/leds) : neopixels leds
* [radio433](https://github.com/madnerdorg/radio433) : 433Mhz appliances
* [openlight](https://github.com/madnerdorg/openlight) : Milight bulbs
* [buzzer](https://github.com/madnerdorg/buzzer)
* [temphum](https://github.com/madnerdorg/dht11) : DHT11     

Each **devices repo** are provided with     
* Instructions in **english** and **french**
* Schematics
* List of components
* A 3D printed case
* Arduino code/libraries compatible for arduino/platformio.

These devices are meant to be **easy** and **cheap** to replicate, as for now there are just prototype.    
If you want to improve them, just fork the repo.

# Tools needed
[Tools](https://github.com/madnerdorg/libreinterface/raw/master/doc/tools.jpg)
I use as less tools as possible to build my devices and only use anything that doesn't require a workshop (for the noise or costly equipment).

* Arduino (I recommended arduino nano ch340g clone)
* Wires : 30AWG
* Soldering Iron
* 3D printer
* Removable Adhesive (blu-tack/patafix...) / hot glue.

# Interface
The interface, is **serverless**, this means you can download it and open **index.html** and it will works.        
It was made using [semantic UI](http://semantic-ui.com/) an human-friendly development platform    
All interactions with devices are made using **websockets** thanks to [libreconnect](http://github.com/madnerdorg/libreconnect)    
All settings/code are saved inside the localStorage of your browser, which means you can customize
your interface.   

# LibreConnect
Connector is a portable program, you can use it to transform an arduino to a connected devices thanks to websockets.   
No installation/settings are required.         
(https://github.com/madnerdorg/libreconnect/)

# Licences
* Markdown-js : MIT (https://github.com/evilstreak/markdown-js)
* Code Mirror: MIT (https://codemirror.net/)    
* Semantic UI: MIT (https://semantic-ui.com/)   
* Highlight-JS: BSD 3 (https://highlightjs.org/)    
* Semantic-UI-Range: MIT (https://github.com/tyleryasaka/semantic-ui-range)
* Jquery: Apache v2 (http://jquery.com/)       
