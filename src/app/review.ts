export class Review {
    constructor(
        public name: string,
        public quote: string,
        public score: number
    ) {  }

    printToConsole(): void {
        console.log("Quote: " + this.quote + "\nName: " + this.name + "\nScore" + this.score);
    }
}
