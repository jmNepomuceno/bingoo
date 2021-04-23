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
let b_numbers = []
let i_numbers = []
let n_numbers = []
let g_numbers = []
let o_numbers = []

for(let i = 1; i <= 15; i++){
    b_numbers.push(i)
}
for(let i = 16; i <= 30; i++){
    i_numbers.push(i)
}
for(let i = 31; i <= 45; i++){
    n_numbers.push(i)
}
for(let i = 46; i <= 60; i++){
    g_numbers.push(i)
}
for(let i = 61; i <= 75; i++){
    o_numbers.push(i)
}

for(let i = 1; i <= 5; i++){
    const card_1_letter_B_row_box = document.getElementById('card-1-letter-B-row-' + i)
    let randNum = Math.floor(Math.random() * b_numbers.length) + 1
    card_1_letter_B_row_box.textContent = randNum

    for(let j = 0; j < 15; j++){
        if(b_numbers[j] == randNum){
            var randNum_index = j
            break
        }
    }

    console.log(randNum_index)

    b_numbers.splice(randNum_index, 1)
    console.log(b_numbers)
}

const card_1_letter_I_row_box = document.getElementById('card-1-letter-I-row-1')
card_1_letter_I_row_box.textContent = "kyla"