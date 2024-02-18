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
 * @param row - current row number. rows are zero-indexed; the first row is row 0.
 * @param column - current column number. columns are zero-indexed; the first column is column 0.
 * @param totalRows - total number of rows
 * @param totalColumns - total number of columns
 */
function getSingleDimensionIndex(row: number,
                                 column: number,
                                 totalRows: number,
                                 totalColumns: number): number | undefined {
    let index: number | undefined = undefined;

    if (row >= 0 && column >= 0
        && row < totalRows
        && column < totalColumns) {
        index = (row * totalColumns) + column;
    }

    return index;
}

export {getSingleDimensionIndex};
