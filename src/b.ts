export class B {
    first: string;
    middle?: string;
    last: string;

    printFull() {
        return `${this.first}${this.middle ? ` ${this.middle} ` : ' '}${this.last}`;
    }
}
