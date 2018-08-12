#BEGIN_PROPERTIES#
{
    "version": "1.2.1",
    "music": "Yuzu"
}
#END_PROPERTIES#
/**************
 * fin.js *
 *************
 *
 * Congratulations!
 *
 * you have cleared all the stages.
 *
 * and welcome to JavaScript !
 *
 * ZmxhZzpjbnNze3VfY2FudF9jaGFuZ2VfbXlfbWluZH0=
 *
 *             -- CNSS DEV
 */

function startLevel(map) {
#START_OF_START_LEVEL#
    var credits = [
        [15, 4, "CONGRATULATIONS !"],
        [19, 6, "ALL CLEAR"],
        [8, 12, "your flag can be downloaded at"],
        [8, 14, "http://t.cn/RzBcYcS"]
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
#END_OF_START_LEVEL#
}
