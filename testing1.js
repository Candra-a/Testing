const nums = [-5, -3, -10, -17]
const answer = []
let temporary = []

for(let i = 0; i < nums.length; i++) {
    for(let j = 0; j < nums.length; j++) {
        let subtract = nums[i] - nums[j] >= 0
        if(subtract) {
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