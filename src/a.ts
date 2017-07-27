import {B} from './b';

export class A {
    bs: B[];

    printAll() {
        return this.bs.map(b => b.printFull()).join('\n');
    }
}
