/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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

/**
 * @public
 */
class StringMap<ValueType> {
    private readonly _map: Map<string, ValueType>;

    public constructor() {
        this._map = new Map<string, ValueType>();
    }

    public get keys(): IterableIterator<string> {
        return this.map.keys();
    }

    public get values(): IterableIterator<ValueType> {
        return this.map.values();
    }

    public get size(): number {
        return this.map.size;
    }

    /**
     * Associate the given `key` with the given `value` in the map
     * only if the key has not been set in the map.
     *
     * @param key -
     * @param value -
     * @param errorMessage - optional. message to log if the key already has a value.
     * @returns `true` if the operation is successful, `false` if it is not.
     * @public
     */
    public setUndefinedKey(key: string, value: ValueType, errorMessage?: string): boolean {
        let isSet: boolean;

        if (this.map.has(key)) {
            if (errorMessage) {
                console.warn(errorMessage);
            }

            isSet = false;
        } else {
            this.map.set(key, value);
            isSet = true;
        }

        return isSet;
    }

    private get map(): Map<string, ValueType> {
        return this._map;
    }
}

export {StringMap};
