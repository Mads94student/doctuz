


export const makeTasks = () => {
    let tasksArr = []
    for (let i = 1; i <= 10; i++){
        let taskNumber = i
        let dice1 = Math.floor((Math.random()* 5)+1)
        let dice2 = Math.floor((Math.random()* 5)+1)
        let answer = dice1 + dice2
        let alternativeArr = generateAlternatives(answer)
        tasksArr.push({
            taskNumber: taskNumber,
            dice1: dice1,
            dice2: dice2,
            answer: answer,
            alternativeArr: alternativeArr
        })
    }
    return tasksArr
}

const generateAlternatives = (answer) => {
    let combinations = [
        [answer, answer+1, answer +2, answer+3, answer+4],
        [answer-1, answer, answer +1, answer+2, answer+3],
        [answer-2, answer-1, answer, answer+1, answer+2],
        [answer-3, answer-2, answer-1, answer, answer+1],
        [answer-4, answer-3, answer-2, answer-1, answer]
    ]
    if (answer < 4) {
        if (answer == 2){
            combinations = combinations.slice(2,3)
        } else {
            combinations = combinations.slice(1, 4)
        }
    }
    let randomIndex = Math.floor((Math.random()*combinations.length))
    
    return combinations[randomIndex]
}