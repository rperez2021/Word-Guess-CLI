let [node, file, ...userguess] = process.argv
let correct_letter = ''

var f_letter = function Letter(userguess) {
    this.letter = correct_letter
    console.log(this.letter)
    this.userguess = userguess[0]
    console.log(this.userguess)
    this.correct_guess = false
    this.f_validate = function f_validate(userguess) {
        if (this.userguess === this.letter) {
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

var letterExp = new f_letter(userguess)

f_letter(userguess)
f_validate(userguess)

module.exports =  letterExp;