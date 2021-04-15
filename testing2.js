const nums = [35, 5, 7, 11]
const x = 7

const answer = []
let temporary = []

for(let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        let divide = nums[i] / nums[j] != x
        if(divide) {
            temporary.push(nums[i])
        }
    }
    if(temporary.length == nums.length) {
        answer.push(temporary[0])
    }
    temporary = []
}
console.log(answer)

//================= ||| ==================//