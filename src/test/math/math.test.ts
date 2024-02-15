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

import {getSingleDimensionIndex} from "../../main";

describe('math tests', (): void => {

    test.each([
        {row: 0, column: 0, totalRows: 1, totalColumns: 1, expected: 0},
        {row: 0, column: 0, totalRows: 0, totalColumns: 1, expected: undefined},
        {row: 0, column: 0, totalRows: 1, totalColumns: 0, expected: undefined},
        {row: 1, column: 2, totalRows: 4, totalColumns: 3, expected: 5},
        {row: -3, column: 2, totalRows: 4, totalColumns: 3, expected: undefined},
        {row: 1, column: -4, totalRows: 4, totalColumns: 3, expected: undefined},
        {row: 1, column: 2, totalRows: -5, totalColumns: 3, expected: undefined},
        {row: 1, column: 2, totalRows: 4, totalColumns: -10, expected: undefined},
        {row: 1, column: 2, totalRows: 1, totalColumns: 3, expected: undefined},
        {row: 1, column: 5, totalRows: 4, totalColumns: 3, expected: undefined},
        {row: 5, column: 5, totalRows: 4, totalColumns: 3, expected: undefined},
        {row: 3, column: 2, totalRows: 4, totalColumns: 3, expected: 11}
    ])('$# getSingleDimensionIndex($row, $column, $totalRows, $totalColumns)',
        ({row,
             column,
             totalRows,
             totalColumns,
             expected}): void => {
        expect(getSingleDimensionIndex(row, column, totalRows, totalColumns)).toBe(expected);
    })
});
