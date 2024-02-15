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

import {StringMap} from "../../main";

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
            expect(keys).toContain(pair.key);
        }
    });

    test('values iterator', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const pairs: KeyValuePair[] = [
            {key: 'carl', value: 10},
            {key: 'bobby', value: 20},
            {key: 'harold', value: 20}
        ];

        for (const pair of pairs) {
            map.setUndefinedKey(pair.key, pair.value);
        }

        const values: number[] = Array.from(map.values);

        expect(values.length).toBe(pairs.length);

        for (const pair of pairs) {
            expect(values).toContain(pair.value);
        }
    });

    test('set undefined key', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const logSpy = jest.spyOn(global.console, 'warn');

        const key1: string = 'red';
        let result: boolean = map.setUndefinedKey(key1, 50);
        expect(result).toBeTruthy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setUndefinedKey(key1, 50);
        expect(result).toBeFalsy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setUndefinedKey(key1, 100);
        expect(result).toBeFalsy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        const key2: string = 'blue';
        const errorMessage: string = 'key already in map';
        result = map.setUndefinedKey(key2, 50, errorMessage);
        expect(result).toBeTruthy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setUndefinedKey(key2, 50, 'key already in map');
        expect(result).toBeFalsy();
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith(errorMessage);
        logSpy.mockClear();

        result = map.setUndefinedKey(key2, 100, 'key already in map');
        expect(result).toBeFalsy();
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith(errorMessage);
        logSpy.mockClear();

        expect(map.size).toBe(2);
        logSpy.mockRestore();
    });
});
