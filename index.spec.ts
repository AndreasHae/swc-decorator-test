function addMore(x: number) {
    return (target: any) => {
        const obj = new target();
        obj.add = (...args) => obj.add(...args) + x;
        // return target[propertyKey]() + x;
    }
}

@addMore(3)
export class Adder {
    add(a: number, b: number): number {
        return a + b;
    }
}

describe('index', () => {
    it('should add two numbers', () => {
        const a = 2;
        const b = 3;

        const adder = new Adder();
        const result = adder.add(a, b);

        expect(result).toBe(5)
    });
});