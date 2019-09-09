# Torrent Magnets Cleaner - Trackerless Magnets - Userscript

Rewrites all Torrent Magnet links so that they only contain the BitTorrent info hashes (BTIH).

IE: Change :

`magnet:?xt=urn:btih:9ba32060b7ad96d0a01678d1dde93298e5a934c2&dn=archlinux-2019.03.01-x86_64.iso&tr=udp://tracker.archlinux.org:6969&tr=http://tracker.archlinux.org:6969/announce`

to :

`magnet:?xt=urn:btih:9ba32060b7ad96d0a01678d1dde93298e5a934c`

(but for whatever reason it doesn't work on archlinux.org, and since I don't write JS I can't fix it)

## Usage : 

* Install [ViolentMonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)

(Do not use TamperMonkey ([closed source](https://tampermonkey.net/privacy.php#extension)) or GreaseMonkey (Not recommended since there was [no update from August 2018 to May 2019](https://addons.mozilla.org/firefox/addon/greasemonkey/versions/) and it might happen again.)

* Open : 

* Click "Confirm Installation" at the top right of the screen.

* Profit !

## Source :

* torrent-magnet-cleaner.user.js : Complete code of https://addons.mozilla.org/en-US/firefox/addon/trackerless-magnets/ rewritten in an userscript compatible format.

## Licence : 

The original browser add-on is using GPLv3, and since GPLv3 require the use of the same license, this project had to be GPLv3.
I would like to release it in the public domain but I can't, sorry.


#### The reason I created this userscript is that the addon didn't work when I moved to Icecat.

## Note : I don't have any plan to host it on [Greasyfork](https://greasyfork.org/).
