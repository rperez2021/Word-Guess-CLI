let [node, file, ...userguess] = process.argv
let correct_letter = 'a'
var f_letter = function Letter(userguess) {
    this.letter = correct_letter
    console.log(this.letter)
    this.userguess = userguess
    console.log(JSON.stringify(this.userguess))
    this.correct_guess = false
    this.f_validate = function f_validate(userguess) {
        if (JSON.stringify(this.userguess) === this.letter) {
            this.correct_guess = true
            console.log(this.correct_guess)
            console.log(this.letter)
            return correct_letter 
        } else {
            console.log("_")
            return "_"
        }
    }
}

f_letter(userguess)
f_validate(userguess)

module.exports = f_letter;