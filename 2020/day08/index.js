/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇
const myDots = document.querySelectorAll(".dot");
const dice = document.querySelector(".dice");
const numberShown = document.querySelector("#number");

dice.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 6 + 1);
  myDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  switch (number) {
    case 1:
      myDots[0].classList.add("active");
      break;
    case 2:
      myDots[0].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 3:
      myDots[0].classList.add("active");
      myDots[4].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 4:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 5:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[4].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    case 6:
      myDots[0].classList.add("active");
      myDots[2].classList.add("active");
      myDots[3].classList.add("active");
      myDots[5].classList.add("active");
      myDots[6].classList.add("active");
      myDots[8].classList.add("active");
      break;
    default:
      console.log("Number not found");
  }
  numberShown.innerText = ` ${number}!`;
});

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
