---
title: "Programming 1: Initialize"
url: arduino-mkr-nb-1500/programming-1/
weight: 740
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: "Programming 1: Initialize"
---

With your Arduino IDE setup for the `Arduino MKR NB 1500`, create a new sketch.

## Initializing Code

In your new sketch, enter the following code:

```cpp
#include <MKRNB.h>
#include <Modem.h>
#include <stdio.h>

// Please enter your sensitive data in the Secret tab or arduino_secrets.h
// PIN Number
const char PINNUMBER[]     = "";
// Local port to listen for downlink UDP packets
unsigned int MICUdpPort = 8081;
// IP address to the UDP-to-MIC bridge
IPAddress MICUdpIP(54, 194, 211, 79);

// Initialize the library instance
NBClient client;
GPRS gprs;
NB nbAccess;
NBModem modemTest;

// Packet buffer for downlink packets
byte packetBuffer[512];

// A UDP instance to let us send and receive packets over UDP
NBUDP Udp;
```

## Setup

Continue by adding the following code inside the `setup()` section:

```cpp
void setup() {
  // Allocate response variable used with AT commands
  String response = "";
  response.reserve(100);

  // Init message
  Serial.println("Starting Arduino MKR NB 1500.");

  // Open serial communication
  Serial.begin(9600);
  // Wait 2s for port to open
  delay(2000);

  Serial.println("Serial port open.");

  // Check if modem is ready
  NB_NetworkStatus_t modemStatus;
  for (modemStatus = nbAccess.begin(PINNUMBER); modemStatus != NB_READY; modemStatus = nbAccess.begin(PINNUMBER)) {
    Serial.println("Modem not ready, retry in 2s...");
    delay(2000);
  }

  // Set radio technology to NB-IoT
  Serial.println("Set radio technology to NB-IoT (7 is for Cat M1 and 8 is for NB-IoT): ");
  MODEM.send("AT+URAT=8");
  MODEM.waitForResponse(100, &response);
  Serial.println(response);

  // Set APN to default APN
  Serial.println("Set APN to telenor.iot: ");
  MODEM.send("AT+CGDCONT=1,\"IP\",\"telenor.iot\"");
  MODEM.waitForResponse(100, &response);
  Serial.println(response);

  // Set operator to Telenor
  Serial.println("Set operator to Telenor: ");
  MODEM.send("AT+COPS=1,2,\"24201\"");
  MODEM.waitForResponse(100, &response);
  Serial.println(response);

  Serial.println("Try to connect...");
  boolean connected = false;
  while (!connected) {
    if (gprs.attachGPRS() == GPRS_READY) {
      Serial.println("Connected!");
      connected = true;
    } else {
      Serial.println("Not connected, retrying...");
      delay(1000);
    }
  }

  Serial.println("\nSetup socket for connection to MIC UDP bridge...");
  Udp.begin(MICUdpPort);

  // Seed random number generator with noise from pin 0
  randomSeed(analogRead(0));
}
```
