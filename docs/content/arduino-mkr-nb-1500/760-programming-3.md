---
title: "Programming 3: Receive Packet"
url: arduino-mkr-nb-1500/programming-3/
weight: 760
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: "Programming 3: Receive Packet"
---

Implement the `receiveMICUDPpacket()` function:

```cpp
int receiveMICUDPpacket() {
  int size = Udp.parsePacket();
 
  // Check if size is larger than 0, if yes we have received something
  if (size > 0) {
    // Read the packet into the buffer
    Udp.read(packetBuffer, size);
  }
  
  return(size);
}
```
