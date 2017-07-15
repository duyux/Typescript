/// <reference path="lib\jquery.d.ts" />
namespace TS.Learn {
    export class Chapter1 extends test.Animal {
        asd: string;
        constructor(asd: string) {
            super(asd);
            this.asd = asd;
        }

        //static DisplayDate(): void {
        //    var currentDate = new Date();
        //    $("#txtDemo").text(currentDate.toUTCString());
        //}
    }
}



