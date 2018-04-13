let [node, file, ...userguess] = process.argv
var letter
var f_letter = function Letter(userguess, letter) {
    this.letter = letter
    this.userguess = userguess[0]
    this.correct_guess = false
    this.f_validate = function f_validate(userguess, letter) {
        if (this.userguess === this.letter) {
            this.correct_guess = true
            console.log('woo!')
            return this.letter
            
        } else {
            console.log('else')
            return "_"
            
        }
    }
}

var letterExp = new f_letter(userguess, letter)

letterExp.f_validate(userguess, letter)

module.exports =  letterExp;