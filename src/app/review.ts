export class Review {
    constructor(
        public name: string,
        public quote: string,
        public score: number
    ) {  }

    //Useful for my debugging 
    printToConsole(): void {
        console.log("Quote: " + this.quote + "\nName: " + this.name + "\nScore" + this.score);
    }
}
