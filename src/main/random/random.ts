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

import {WeightedElement} from './weighted-element';

/**
 * @param min
 * @param max
 * @returns a random floating point value greater than or equal to min and less than max.
 */
function randomFloat(min: number, max: number): number {
    if (min > max) {
        const temp: number = max;
        max = min;
        min = temp;
    }

    return (Math.random() * (max - min)) + min;
}

/**
 * @param min
 * @param max
 * @returns a random integer value greater than or equal to min and less than max.
 */
function randomInt(min: number, max: number): number {
    return Math.floor(randomFloat(min, max));
}

/**
 * @param chanceOfTrue - a floating point number between 0 and 1.
 * If provided, it represents the percent chance that this method will return true;
 * @returns a random boolean value.
 */
function randomBoolean(chanceOfTrue?: number): boolean {
    let value: boolean = true;

    if (chanceOfTrue
        && chanceOfTrue > 0
        && chanceOfTrue < 1) {
        const r: number = randomFloat(0, 1);

        if (r > chanceOfTrue) {
            value = false;
        }
    } else {
        const r: number = randomInt(0, 2);

        if (r % 2 === 0) {
            value = false;
        }
    }

    return value;
}

// TODO - complete randomElement documentation
/**
 *
 * @param list
 */
function randomElement<Type>(list: Type[]): Type | undefined {
    let element: Type | undefined = undefined;

    if (list.length > 0) {
        let size: number = list.length;
        let index: number = randomInt(0, size);

        if (index < size) {
            element = list[index];
        }
    }

    return element;
}

// TODO - complete randomElement documentation
/**
 *
 * @param list
 */
function randomWeightedElement<Type>(list: WeightedElement<Type>[]): Type | undefined {
    let element: Type | undefined = undefined;

    if (list.length > 0) {
        let weightSum: number = list.reduce((total: number, element: WeightedElement<Type>): number => {
            return total + element.weight;
        }, 0);

        if (weightSum >= 1) {
            if (weightSum > 1) {
                console.warn('Sum of element weights is greater than 1.0. This could cause some elements to never be selected from the list.');
            }

            let r: number = randomFloat(0, 1);
            let sum: number = 0;

            for (let e of list) {
                if (r < sum + e.weight) {
                    element = e.value;
                    break;
                } else {
                    sum += e.weight;
                }
            }
        }
    }

    return element;
}

export {randomBoolean, randomFloat, randomInt, randomElement, randomWeightedElement};
