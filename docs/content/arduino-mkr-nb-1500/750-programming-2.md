---
title: "Programming 2: Loop"
url: arduino-mkr-nb-1500/programming-2/
weight: 750
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: "Programming 2: Loop"
---

Continue by adding the following code inside the `loop()` section:

```cpp
void loop() {
  int size = 0;
  
  Serial.print("Send packet to MIC: ");
  sendMICUDPpacket(MICUdpIP);
  Serial.println("Check if we have received something...");
  size = receiveMICUDPpacket();
  if (size > 0) {
    Serial.println("Received packet with size: " + size);
    String bufferString = String((char *) packetBuffer);
    Serial.println("Packet data is: <" + bufferString + ">");
  } else {
    Serial.println("No data received...");
  }

  // Wait 30 seconds before sending again
  Serial.println("Wait 30s before sending again...");
  delay(30000);
}
```
