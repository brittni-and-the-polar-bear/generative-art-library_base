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

import {Color} from './color';
import {Random} from '../random';

enum ColorSelectorType {
    Palette = 'palette color selector',
    RGB = 'RGB color selector'
}

abstract class ColorSelector {
    private readonly _colorChoices: Color[] = [];
    private readonly _randomOrder: boolean;
    private _currentIndex: number = 0;

    protected constructor(randomOrder?: boolean) {
        this._randomOrder = randomOrder ?? Random.randomBoolean();
    }

    public abstract getColor(): Color;

    public abstract get name(): string;

    public abstract get colorNames(): string[];

    public abstract get type(): ColorSelectorType;

    public selectColorFromChoices(): Color {
        let col: Color;

        if (this._randomOrder) {
            col =  Random.randomElement(this._colorChoices) ?? (new Color());
        } else {
            col = this._colorChoices[this._currentIndex];
            this.incrementCurrentIndex();
        }

        return col;
    }

    protected addColorChoice(color: Color): void {
        this._colorChoices.push(color);
    }

    private incrementCurrentIndex(): void {
        this._currentIndex = (this._currentIndex + 1) % this._colorChoices.length;
    }
}

export {ColorSelector, ColorSelectorType};
