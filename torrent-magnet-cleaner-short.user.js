// ==UserScript==
// @name Torrent Magnet Cleaner - Userscript
// @author TheFrenchGhosty
// @source https://gitlab.com/TheFrenchGhosty/torrent-magnet-cleaner-userscript
// ==/UserScript==

$('a[href^="magnet:"]').each(function() {
    var $button = $(this);
    var href = $button.attr('href');
    if (href)
        $button.attr('href', href.replace(/&.*$/, ''));
});


