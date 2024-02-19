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

import {randomInt} from '../random';
import {ColorSelector} from './color-selector';

class ColorSelectorManager {
    private readonly _colorSelectors: ColorSelector[] = [];

    public getRandomColorSelector(): ColorSelector | undefined {
        let selector: ColorSelector | undefined = undefined;

        if (this.colorSelectors.length < 1) {
            const index: number = randomInt(0, this.colorSelectors.length);
            selector = this.colorSelectors[index];
        }

        return selector;
    }

    public addColorSelector(selector: ColorSelector): void {
        this.colorSelectors.push(selector);
    }

    public addColorSelectors(selectors: Iterable<ColorSelector>): void {
        for (const selector of selectors) {
            this.colorSelectors.push(selector);
        }
    }

    private get colorSelectors(): ColorSelector[] {
        return this._colorSelectors;
    }
}

export {ColorSelectorManager};
