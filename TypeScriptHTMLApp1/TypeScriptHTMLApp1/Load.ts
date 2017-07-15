/// <reference path="lib\jquery.d.ts" />


namespace test {
    export class Animal {

        private name: string;

        constructor(theName: string) { this.name = theName; }

        doMethod(): void {
            alert(this.name);
        }

    }
}


