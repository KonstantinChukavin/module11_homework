
import { getPercents } from "./index.js";

describe("tests for getPercents function", () => {

    it('corner-case', () =>
        expect(getPercents(1, 100)).toBe(1));

    it('percent is number', () =>
        expect(getPercents(1, 100)).not.toBe(isNaN));

    it('диапазон', () => {
        expect(getPercents(1, 100)).toBeGreaterThan(0);
        expect(getPercents(100, 100)).toBeLessThan(101);
    });


});