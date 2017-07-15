/// <reference path="lib\jquery.d.ts" />
var test;
(function (test) {
    var TestTypeScript = (function () {
        function TestTypeScript(theName) {
            this.name = theName;
        }
        TestTypeScript.prototype.doMethod = function () {
            alert('test');
        };
        return TestTypeScript;
    }());
    test.TestTypeScript = TestTypeScript;
})(test || (test = {}));
