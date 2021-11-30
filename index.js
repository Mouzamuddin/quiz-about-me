var readlinesync = require("readline-sync");
var chalk = require("chalk")
var touppercase = require("upper-case")
var score=0
var username =readlinesync.question(chalk.yellow("What is your name: "))
console.log(chalk.red("welcome ")+chalk.blue(username)+chalk.red(" do you now mouzam"))
var questions = 
[
  {question : "where do Mouzam live ",
  answer : "hyderabad",
  },
  {question:"what is Mouzam's age (numeric answer only)" ,
  answer:"21",
  },
  {
  question : "how many cats does mouzam have ", 
  answer:"two",
  },
  {
  question : "how many siblings does Mouzam have??(numeric answe only) ",
  answer : "4",
  },
  {
  question : "is mouzam the oldest among his siblings  ",
  answer : "no",
  },
  {
  question : "what is mouzam's favourite color ",
  answer : "black",
  }
]
function quiz(question,answer)
{
  var userans = readlinesync.question(question)
  if (userans.toUpperCase() === answer.toUpperCase())
  {
    console.log(chalk.green("correct answer"))
    score++
  }
  else
  {
    console.log(chalk.red("wrong answer"))
    score--
  }
  console.log("current score " ,chalk.red(score))
}
for (i=0;i<questions.length;i++)
{
  var currentquestion = questions[i]
  quiz(currentquestion.question,currentquestion.answer)
}
console.log(chalk.bgRed("your final score is ",score))
