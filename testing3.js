const sentence = 'it is a testing sentence'
const x = 2

var words = sentence.split(" ");
const answer = []

for (let i = 0; i < words.length; i++) {
    if(words[i].length == x) {
        answer.push(words[i])
    }
}
console.log(answer)

//================= ||| ==================//