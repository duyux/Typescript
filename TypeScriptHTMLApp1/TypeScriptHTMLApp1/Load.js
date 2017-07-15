/// <reference path="lib\jquery.d.ts" />
var test;
(function (test) {
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.doMethod = function () {
            alert(this.name);
        };
        return Animal;
    }());
    test.Animal = Animal;
})(test || (test = {}));
