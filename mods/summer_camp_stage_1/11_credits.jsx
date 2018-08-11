#BEGIN_PROPERTIES#
{
    "version": "1.2.1",
    "music": "Brazil"
}
#END_PROPERTIES#

function startLevel(map) {
#START_OF_START_LEVEL#
    var credits = [
        [15, 4, "CONGRATULATIONS !"],
        [17, 6, "STAGE 1 CLEAR"],
        [8, 12, "f"],
        [9, 12, "l"],
        [10, 12, "a"],
        [11, 12, "g"],
        [12, 12, ":"],
        [13, 12, "c"],
        [14, 12, "n"],
        [15, 12, "s"],
        [16, 12, "s"],
        [17, 12, "{"],
        [18, 12, "J4Va5cRp1t_1s_4ma7in9}"]
    ];

    function drawCredits(i) {
        if (i >= credits.length) {
            return;
        }

        // redraw lines bottom to top to avoid cutting off letters
        for (var j = i; j >= 0; j--) {
            var line = credits[j];
            map._display.drawText(line[0], line[1], line[2]);
        }

        map.timeout(function () {drawCredits(i+1);}, 2000)
    }

    map.timeout(function () {drawCredits(0);}, 4000);

    map.placePlayer(7, 5);


#END_OF_START_LEVEL#
}