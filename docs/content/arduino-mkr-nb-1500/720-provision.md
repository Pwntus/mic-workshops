---
title: Provision a Device
url: arduino-mkr-nb-1500/provision/
weight: 720
menu:
  device:
    parent: "Arduino MKR NB 1500"
    identifier: Provision
---

We'll start by provision a device, called a `Thing` in MIC, which will represent our device in the physical world.

## Create a new Thing Type

To do so, login to the App Board and click on the `NEW THING TYPE` button in the top left corner:

![Create a new Thing Type](/images/arduino-mkr-nb-1500-00-new-thing-type.png "Create a new Thing Type")

Give your Thing Type a **Label**, **Description** and a **Domain** and click **SAVE**.

## Create a new Thing

Click on your new Thing Type that has appeared in the list. You will now see the Thing Type dashboard.

To create a new Thing, click on the `THINGS` button in the top right corner.

![Create a new Thing](/images/arduino-mkr-nb-1500-01-new-thing.png "Create a new Thing")

Give the Thing a **Name** and a **Domain** and click **CREATE**.

## View Thing Dashboard

The next step is to list all Things in our current Thing Type. Click on the **LIST** tab on the Thing Type dashboard.

![List Things](/images/arduino-mkr-nb-1500-02-list-things.png "List Things")

Here you'll see a list of all Things belonging to our current Thing Type.

If you click on the Thing name you'll see the dashboard for that Thing:

![Thing List](/images/arduino-mkr-nb-1500-03-thing-list.png "Thing List")

## Download Thing Certificate

In the Thing list, select your newly created Thing and open the options menu in the top right corner. Click the `Download certificate` option.

![Download Certificates](/images/arduino-mkr-nb-1500-04-download-certificate.png "Download Certificates")

A ZIP-file containing public/private [X.509 certificates](https://docs.aws.amazon.com/iot/latest/developerguide/managing-device-certs.html) for that Thing will be downloaded, which we'll use in our Arduino MKR NB 1500 code to authenticate requests.

The ZIP-file has the name `xxxxxxxx-cert.zip` where `xxxxxxxx` is your `Thing ID`. Make a note of that for later.
