var TS;
(function (TS) {
    var Learn;
    (function (Learn) {
        var Chapter1 = (function () {
            function Chapter1() {
            }
            Chapter1.DisplayDate = function () {
                var currentDate = new Date();
                $("#txtDemo").text(currentDate.toUTCString());
            };
            return Chapter1;
        }());
        Learn.Chapter1 = Chapter1;
    })(Learn = TS.Learn || (TS.Learn = {}));
})(TS || (TS = {}));
$("#btnGo").click(TS.Learn.Chapter1.DisplayDate);
