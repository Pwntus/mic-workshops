---
title: Setup Arduino IDE
url: arduino-mkr-nb-1500/arduino-ide/
weight: 730
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: Setup Arduino IDE
---

Next we'll setup the Arduino IDE to work with the Arduino MKR NB 1500 board.

Download the latest [Arduino IDE](https://www.arduino.cc/en/Main/Software) version for your platform and install.

## Add Board Support

* Open Arduino IDE and go to **Tools ⟶ Board ⟶ Boards Manager**.
* Search for and install `Arduino SAMD (32-bits ARM Cortex-M0+) Boards`.
* Close the IDE.

![Add Board Support](/images/arduino-mkr-nb-1500-05-board-manager.png "Add Board Support")

## Install Pre-Release Core

In order to install the pre-release core, you need to decompress the supplied `ArduinoCore-samd-newboards.zip` in the hardware section of your sketchbook folder.

{{< note title="Sketchbook Folder Location" >}}
* **Windows:** This PC\Documents\Arduino
* **Mac:** $HOME/Documents/Arduino
* **GNU/Linux:** $HOME/Arduino
{{< /note >}}

* Create a new folder `hardware/arduino-new` in your sketchbook folder. If neither the `hardware` nor `arduino-new` folder exists, create them.
* Uncompress the contents of `ArduinoCore-samd-newboards.zip` in the previously created folder.
* Rename the uncompressed folder `samd`.

![SAMD Folder](/images/arduino-mkr-nb-1500-06-samd-folder.png "SAMD Folder")

* Open the Arduino IDE and go to `Boards Manager` to reload the index.
* Select board `Arduino MKR NB 1500` by going to **Tools ⟶ Board ⟶ Arduino MKR NB 1500**
* Verify that you've selected the correct board by looking in the bottom right corner of the IDE.

![Verify Board](/images/arduino-mkr-nb-1500-06-verify-board.png "Verify Board")

## Include MKR NB IoT Library

* Open Arduino IDE and go to **Sketch ⟶ Include Library ⟶ Add .ZIP Library...**
* Search for and select the `MKRNBIoT-library.zip`

You now have everything you need to program the `Arduino MKR NB 1500` board!