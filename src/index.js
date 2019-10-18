module.exports = function solveSudoku(matrix) {
    for (let h = 0; h < 9; h++) {
        for (let v = 0; v < 9; v++) {
            if (matrix[h][v] == 0) {
                for (let e = 1; e < 10; e++) {
                    if (isValid(matrix, h, v, e)) {
                        matrix[h][v] = e;
                        if (solveSudoku(matrix)) {
                            return matrix;
                        } else {
                            matrix[h][v] = 0;
                        }    
                    }
                }
                return false;
            }    
        }
    }
    return matrix;
}

function isValid(matrix, h, v, e) {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let sectionColumn = [Math.floor(v / 3) * 3, Math.floor(v / 3) * 3 + 1, Math.floor(v / 3) * 3 + 2];
    let sectionRow = [Math.floor(h / 3) * 3, Math.floor(h / 3) * 3 + 1, Math.floor(h / 3) * 3 + 2];
    let rowOk = arr.every(i => {
        return matrix[h][i] != e;
    });
    let columnOk = arr.every(i => {
        return matrix[i][v] != e;
    }); 

    let sectionOk = sectionRow.every(i => {
        return sectionColumn.every(j => {
            return e != matrix[i][j];
        });
    });

    if (rowOk) {
        if (columnOk) {
            if (sectionOk) {
                return true;
            }
        }
    }
    else {
        return false;
    }
}