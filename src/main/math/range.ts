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

class Range {
    public constructor(private _min: number, private _max: number) {
        if (_max < _min) {
            const temp: number = _max;
            this._max = _min;
            this._min = temp;
        }
    }

    public get max(): number {
        return this._max;
    }

    public set max(max: number) {
        if (max < this._min) {
            console.warn(`max (${max}) is less than current min (${this._min}). object fields will be set so that min is less than max.`);
            this._max = this._min;
            this._min = max;
        } else {
            this._max = max;
        }
    }

    public get min(): number {
        return this._min;
    }

    public set min(min: number) {
        if (min > this._max) {
            console.warn(`min (${min}) is greater than current max (${this._max}). object fields will be set so that min is less than max.`);
            this._min = this._max;
            this._max = min;
        } else {
            this._min = min;
        }
    }
}

export {Range};
