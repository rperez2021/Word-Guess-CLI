var f_letter = require('./letter.js')
let [node, file, ...userguess] = process.argv
array = ['rocinante', 'holden', 'naomi', 'mcrn', 'kamal', 'opa']
var f_word = function Word(array) {
    // An array of `new` Letter objects representing the letters of the underlying word
    this.blanks_array = [];
    //A function that returns a string representing the word. This should call the function 
    //on each letter object (the first function defined in `Letter.js`) that displays the character 
    //or an underscore and concatenate those together.
    this.callerfunc = function (array) {
        var selectedword = array[Math.floor(Math.random() * 6)]
        selectedword = selectedword.split("")
        console.log(selectedword)
        selectedword.forEach(function(letter, index, farray){
            var letter = letter
            console.log(typeof userguess[0])
            console.log(index)
            console.log(farray)
            console.log(letter)
            var newarray = []
        newarray.push(f_letter.f_validate(userguess[0], letter))
        console.log(newarray)
        })
        // console.log(this.blanks_array)
        // this.blanks_array = this.blanks_array.push(f_letter.f_validate(userguess))
        // console.log(f_letter.f_validate(selectedword))
        // console.log(Object.values(this.blanks_array))
    }

    // A function that takes a character as an argument and calls the guess function on each 
    //letter object (the second function defined in `Letter.js`)
}
var x = new f_word(array)
x.callerfunc(array)