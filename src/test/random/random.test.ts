/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import {randomBoolean, randomFloat, randomInt} from "../../main";

describe('random tests', (): void => {
    test.each([
        {min: 0, max: 100, expectMin: 0, expectMax: 100},
        {min: -50, max: 50, expectMin: -50, expectMax: 50},
        {min: -200, max: -45, expectMin: -200, expectMax: -45},
        {min: 400, max: 600, expectMin: 400, expectMax: 600},
        {min: 7_500, max: 0, expectMin: 0, expectMax: 7_500},
        {min: 83, max: -189, expectMin: -189, expectMax: 83},
        {min: -25, max: -710, expectMin: -710, expectMax: -25},
        {min: 1_500, max: 1_000, expectMin: 1_000, expectMax: 1_500},
        {min: 0, max: 1, expectMin: 0, expectMax: 1},
        {min: 0.25, max: 0.8, expectMin: 0.25, expectMax: 0.8},
        {min: -0.9, max: 0.75, expectMin: -0.9, expectMax: 0.75}
    ])('$# random float test: randomFloat($min, $max)',
        ({min, max, expectMin, expectMax}): void => {
            for (let i: number = 0; i < 10; i++) {
                const r: number = randomFloat(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
            }
        }
    )

    test.each([
        {min: 0, max: 250, expectMin: 0, expectMax: 250},
        {min: -65, max: 65, expectMin: -65, expectMax: 65},
        {min: -270, max: -85, expectMin: -270, expectMax: -85},
        {min: 500, max: 550, expectMin: 500, expectMax: 550},
        {min: 6_000, max: 0, expectMin: 0, expectMax: 6_000},
        {min: 99, max: -90, expectMin: -90, expectMax: 99},
        {min: -30, max: -60, expectMin: -60, expectMax: -30},
        {min: 1_750, max: 800, expectMin: 800, expectMax: 1_750},
        {min: 0, max: 1, expectMin: 0, expectMax: 1},
        {min: 0, max: 2, expectMin: 0, expectMax: 2}
    ])('$# random int test: randomInt($min, $max)',
        ({min, max, expectMin, expectMax}): void => {
            for (let i: number = 0; i < 10; i++) {
                const r: number = randomInt(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
                expect(Math.floor(r)).toBe(r);
            }
        }
    )

    test('test random boolean', (): void => {
        let trueResult: boolean = false;
        let falseResult: boolean = false;

        for (let i: number = 0; i < 1_000; i++) {
            const b: boolean = randomBoolean();

            if (!trueResult && b) {
                trueResult = true;
            }

            if (!falseResult && !b) {
                falseResult = true;
            }

            if (trueResult && falseResult) {
                break;
            }
        }

        expect(trueResult).toBeTruthy();
        expect(falseResult).toBeTruthy();

        trueResult = false;
        falseResult = false;

        for (let i: number = 0; i < 1_000; i++) {
            const b: boolean = randomBoolean(0.6);

            if (!trueResult && b) {
                trueResult = true;
            }

            if (!falseResult && !b) {
                falseResult = true;
            }

            if (trueResult && falseResult) {
                break;
            }
        }

        expect(trueResult).toBeTruthy();
        expect(falseResult).toBeTruthy();
    });
});
