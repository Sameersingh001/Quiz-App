const Data = [

  // Easy Level
  {
    level: "easy",
    question: "1. Which month has 28 or 29 days?",
    options: ["January", "February", "April", "June"],
    answer: "February"
  },
  {
    level: "easy",
    question: "2. Which is the tallest animal?",
    options: ["Kangaroo", "Elephant", "Giraffe", "Horse"],
    answer: "Giraffe"
  },
  {
    level: "easy",
    question: "3. What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    level: "easy",
    question: "4. Which animal is known as the 'King of the Jungle'?",
    options: ["Tiger", "Elephant", "Lion", "Leopard"],
    answer: "Lion"
  },
  {
    level: "easy",
    question: "5. Which planet is known as the 'Red Planet'?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    level: "easy",
    question: "6. Which bird is the national bird of India?",
    options: ["Sparrow", "Peacock", "Parrot", "Crow"],
    answer: "Peacock"
  },
  {
    level: "easy",
    question: "7. How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    level: "easy",
    question: "8. Which is the largest animal in the world?",
    options: ["Elephant", "Giraffe", "Blue Whale", "Shark"],
    answer: "Blue Whale"
  },
  {
    level: "easy",
    question: "9. Which fruit is known as the 'King of Fruits'?",
    options: ["Apple", "Banana", "Mango", "Orange"],
    answer: "Mango"
  },
  {
    level: "easy",
    question: "10. How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },

  // Medium Level
  {
    level: "medium",
    question: "11. Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Nitrogen"
  },
  {
    level: "medium",
    question: "12. What is H2O commonly known as?",
    options: ["Salt", "Water", "Hydrogen Peroxide", "Oxygen"],
    answer: "Water"
  },
  {
    level: "medium",
    question: "13. Who invented the light bulb?",
    options: ["Nikola Tesla", "Isaac Newton", "Thomas Edison", "Albert Einstein"],
    answer: "Thomas Edison"
  },
  {
    level: "medium",
    question: "14. Which continent is the Sahara Desert located on?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Africa"
  },
  {
    level: "medium",
    question: "15. How many players are there in a cricket team?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    level: "medium",
    question: "16. What is the boiling point of water in Celsius?",
    options: ["90°C", "95°C", "100°C", "105°C"],
    answer: "100°C"
  },
  {
    level: "medium",
    question: "17. Which is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    level: "medium",
    question: "18. Which country is known as the Land of the Rising Sun?",
    options: ["India", "China", "Japan", "Thailand"],
    answer: "Japan"
  },
  {
    level: "medium",
    question: "19. Who is the author of 'Harry Potter' series?",
    options: ["J.K. Rowling", "J.R.R. Tolkien", "C.S. Lewis", "Dan Brown"],
    answer: "J.K. Rowling"
  },
  {
    level: "medium",
    question: "20. Which part of the plant conducts photosynthesis?",
    options: ["Root", "Stem", "Leaf", "Flower"],
    answer: "Leaf"
  },

  // Hard Level
  {
    level: "hard",
    question: "21. What is the chemical formula for table salt?",
    options: ["NaCl", "KCl", "CaCO3", "Na2CO3"],
    answer: "NaCl"
  },
  {
    level: "hard",
    question: "22. Who wrote the play 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    level: "hard",
    question: "23. Which blood group is known as the universal donor?",
    options: ["A+", "O+", "AB-", "O-"],
    answer: "O-"
  },
  {
    level: "hard",
    question: "24. Which is the largest internal organ in the human body?",
    options: ["Heart", "Liver", "Lung", "Kidney"],
    answer: "Liver"
  },
  {
    level: "hard",
    question: "25. In which year did World War II end?",
    options: ["1942", "1945", "1947", "1950"],
    answer: "1945"
  },
  {
    level: "hard",
    question: "26. What is the SI unit of force?",
    options: ["Watt", "Pascal", "Joule", "Newton"],
    answer: "Newton"
  },
  {
    level: "hard",
    question: "27. Which scientist proposed the three laws of motion?",
    options: ["Einstein", "Galileo", "Newton", "Tesla"],
    answer: "Newton"
  },
  {
    level: "hard",
    question: "28. What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    level: "hard",
    question: "29. Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Mars"],
    answer: "Saturn"
  },
  {
    level: "hard",
    question: "30. Which Indian scientist won the Nobel Prize in Physics in 1930?",
    options: ["Homi Bhabha", "C.V. Raman", "APJ Abdul Kalam", "Satyendra Nath Bose"],
    answer: "C.V. Raman"
  }
];




const Box = document.querySelector('.quiz-container')
const questionBox = document.querySelector('.questionBox')
const questions = document.querySelector('.question')
const optionList = document.querySelector('.list-container')
const btn = document.querySelector('.next')
const Qscore = document.querySelector('.score')
const hidden = document.querySelector('.hide')
const pera = document.querySelector('.peraDiv')
const inputName = document.querySelector('.inputbox')
const submitbtn= document.querySelector('.submit')
const username= document.querySelector('.Name')
const Namediv = document.querySelector('.username')
const Starting = document.querySelector('.Starting')
const appname = document.querySelector('.Quizapp')
const submit = document.querySelector('.submitbtn')
const playAgain = document.querySelector('.again')




const user = inputName
  submitbtn.addEventListener('click', () =>{


    if(user.value == ""){
      alert("Please Enter your name")
    }

    else{
      username.innerText = `Hello 👋 ${user.value}`
      Namediv.appendChild(username)
      Starting.style.display = "none"
      inputName.style.display = "none"
      submitbtn.style.display = "none"
      Box.style.display = "block"
    }


   setTimeout(() => {
        btn.click();
  }, 15000);

  })


let question = 0
let scoreboard = 0
let clicked = false

function display() {


  const qna = Data[question]
  
  optionList.innerHTML = " "
  
  qna.options.map((Option) => {
    questions.innerText = qna.question
    let singallist = document.createElement("li")
    singallist.innerText = Option
    optionList.appendChild(singallist)
    singallist.addEventListener('click', () => afterclick(singallist, Option))
  })
}





function afterclick(selectedlist, selectedoption) {



  let allList = optionList.querySelectorAll('li')
  allList.forEach((selectedone) => {

    selectedone.classList.remove('selected')

  })
  selectedlist.className = 'selected'


  if (selectedoption == Data[question].answer) {
    clicked = true
  }
  else {
    clicked = false
  }



}





btn.addEventListener('click', () => {


   let peragraph = document.createElement('p')
    peragraph.innerText = "Question Submites"
    pera.appendChild(peragraph)


  let timer = setTimeout(() => {
      pera.removeChild(peragraph)
  }, 1500);


  if (clicked) {
    scoreboard++
  }
  
  const selectedDone = optionList.querySelector('.selected')
   
  if(!selectedDone) {
    peragraph.innerText = "Please Select An Option"
    peragraph.style.backgroundColor = "red"
    pera.appendChild(peragraph)
    return
  }

  else{
    question++
    display()
    Qscore.innerHTML = scoreboard
    hidden.style.display = 'block'
    hidden.appendChild(Qscore)
  }


})



submit.addEventListener('click', ()=>{

  questionBox.style.display ="none"
  optionList.style.display="none"
  btn.style.display="none"
  appname.style.display="none"
  submit.style.display="none"
  hidden.innerHTML = `Your Score is : ${scoreboard} `
  playAgain.style.display = "block"


})




display()
