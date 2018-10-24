---
title: "Programming 4: Send Packet"
url: arduino-mkr-nb-1500/programming-4/
weight: 770
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: "Programming 4: Send Packet"
---

Implement the `sendMICUDPpacket()` function:

```cpp
unsigned long sendMICUDPpacket(IPAddress& address) {
  String p1, p2, p3, payload = "";
  float r = 0.0;
  float hum = 0.0;

  p1 = "{\"thingName\":\"00001597\",\"hum\":\"";
  hum = 24;
  r = random(0, 9);
  r = r / 10;
  hum = hum + r;
  p2 = hum;
  p3 = "\",\"auth\":\"0XXXF9E57110E91XXXXX67076EXXXX64\"}";

  payload = p1 + p2 + p3;
  Serial.println("<" + payload + ">");

  // Write UDP packet
  Udp.beginPacket(address, MICUdpPort);
  Udp.write(payload.c_str(), payload.length());
  Udp.endPacket();
}
```
