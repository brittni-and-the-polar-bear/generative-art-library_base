/*
 * Copyright (C) 2024 Brittni Watkins.
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

import {StringMap} from "map";

interface KeyValuePair {
    readonly key: string,
    readonly value: number
}

describe('string-map tests', (): void => {
    test('empty map', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        expect(map.size).toBe(0);
    });

    test('keys iterator', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const pairs: KeyValuePair[] = [
            {key: 'carl', value: 10},
            {key: 'bobby', value: 10},
            {key: 'harold', value: 10}
        ];

        for (const pair of pairs) {
            map.setUndefinedKey(pair.key, pair.value);
        }

        const keys: Set<string> = new Set<string>(map.keys);

        for (const pair of pairs) {
            const key: string = pair.key;
            expect(keys.has(key)).toBeTruthy();
        }
    });
});
