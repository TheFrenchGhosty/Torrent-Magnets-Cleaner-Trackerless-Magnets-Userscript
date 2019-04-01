# Torrent Magnet Cleaner - Userscript

## Installation : https://gitlab.com/TheFrenchGhosty/torrent-magnet-cleaner-userscript/raw/master/torrent-magnet-cleaner.user.js

Rewrites all Torrent Magnet links so that they only contain the BitTorrent info hashes (BTIH).

IE: Change `magnet:?xt=urn:btih:9ba32060b7ad96d0a01678d1dde93298e5a934c2&dn=archlinux-2019.03.01-x86_64.iso&tr=udp://tracker.archlinux.org:6969&tr=http://tracker.archlinux.org:6969/announce` to `magnet:?xt=urn:btih:9ba32060b7ad96d0a01678d1dde93298e5a934c` (but for whatever reason it doesn't work on archlinux.org, and since I don't write JS I can't fix it)

## Difference between both scripts :

* torrent-magnet-cleaner.user.js : Complete code of https://addons.mozilla.org/en-US/firefox/addon/trackerless-magnets/ rewritten in an userscript compatible format.

Licence : GPLv3

* torrent-magnet-cleaner-short.user.js : A shorter code (by me, sourced from multiples other userscripts) that seem to work on less websites (the objective would be to fix this one). 

Licence : Public Domain


The reason I created this userscript using https://addons.mozilla.org/en-US/firefox/addon/trackerless-magnets/ is that the addons didn't work when I moved to Icecat.
