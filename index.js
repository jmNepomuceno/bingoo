// creating a box for every number in each letter in B I N G O
const bingo_arr = ['B' , 'I' , 'N' , 'G' , 'O']

for(let card = 1; card <= 2; card++){
    for(let i of bingo_arr){

        const col = document.getElementById('card-' + card + '-letter-' + i)

        for(let j in bingo_arr){
            const row = document.createElement('div')

            row.className = 'card-' + card + '-letter-' + i + '-rows'
            row.id = 'card-' + card + '-letter-' + i + '-row-' + (parseInt(j) + 1)
            col.appendChild(row)
        }   
    }
}

// setting numbers for each box
let b_numbers_1 = []
let i_numbers_1 = []
let n_numbers_1 = []
let g_numbers_1 = []
let o_numbers_1 = []

let b_numbers_2 = []
let i_numbers_2 = []
let n_numbers_2 = []
let g_numbers_2 = []
let o_numbers_2 = []

generateNumbers(1 ,'B', 1 , 15 , b_numbers_1)
generateNumbers(1 ,'I', 16 ,30 , i_numbers_1)
generateNumbers(1 ,'N', 31 , 45 , n_numbers_1)
generateNumbers(1 ,'G', 46 , 60 , g_numbers_1)
generateNumbers(1 ,'O', 61 , 75 , o_numbers_1)

generateNumbers(2 ,'B', 1 , 15 , b_numbers_2)
generateNumbers(2 ,'I', 16 ,30 , i_numbers_2)
generateNumbers(2 ,'N', 31 , 45 , n_numbers_2)
generateNumbers(2 ,'G', 46 , 60 , g_numbers_2)
generateNumbers(2 ,'O', 61 , 75 , o_numbers_2)


function generateNumbers(card_number , letter , start , end, letter_arr){
    for(let i = 1; i <= 5; i++){
        const card_row = document.getElementById('card-' + card_number + '-letter-' + letter + '-row-' + i)
        let randNum = Math.floor(Math.random() * (end - start + 1)) + start

        while((letter_arr.includes(randNum))){
            randNum = Math.floor(Math.random() * (end - start + 1)) + start

        }
    
        card_row.textContent = randNum
        letter_arr.push(randNum)
    }
}


const free_box_1 = document.getElementById('card-1-letter-N-row-3')
const free_box_2 = document.getElementById('card-2-letter-N-row-3')

free_box_1.textContent = "FREE"
free_box_2.textContent = "FREE"

// making the bingo body numbers boxes
let bingo_body_start_number = 1;
let bingo_body_end_number = 15;
for(let i of bingo_arr){

    const col = document.getElementById('bingo-body-letter-' + i)

    for(let j = bingo_body_start_number; j <= bingo_body_end_number; j++){
        const row = document.createElement('h2')

        row.className = 'bingo-body-letter-' + i + '-boxes'
        row.id = 'bingo-body-letter-' + i + '-boxes-' + j
        row.textContent = j
        col.appendChild(row)
    }   

    bingo_body_start_number += 15
    bingo_body_end_number += 15
}


