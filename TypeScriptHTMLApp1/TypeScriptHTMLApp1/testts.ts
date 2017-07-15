/// <reference path="lib\jquery.d.ts" />

module test {
    export class TestTypeScript {
        private name: string;
        constructor(theName: string) { this.name = theName; }

        doMethod(): void {

            alert('test');
           
        }

    }


}


