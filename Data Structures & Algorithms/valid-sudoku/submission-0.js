class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

            const boardSet = new Set()

        for(let i =0 ; i<9  ; i++){

            for(let j =0 ; j<9 ; j++){
                if(board[i][j]=='.') continue

                const row = `row ${i} has number ${board[i][j]}`
                const col = `col ${j} has number ${board[i][j]}`
                const box = `box ${Math.floor(i / 3) * 3 + Math.floor(j / 3)} has number ${board[i][j]}`

                if(boardSet.has(row) || boardSet.has(col) || boardSet.has(box)){
                    return false
                }
                boardSet.add(row)
                boardSet.add(col)
                boardSet.add(box)
            }
        }


        return true




    }
}
