/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/

const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const maxLength = 140;
let leftCharacters = 140;

function count() {
  leftCharacters = maxLength - textarea.value.length;
  counter.innerText = `${leftCharacters}/${maxLength}`;
  if (leftCharacters <= 20) {
    counter.classList.add("danger");
  } else {
    counter.classList.remove("danger");
  }
  if (leftCharacters < 0) {
    button.classList.add("buttonDisabled");
  } else {
    button.classList.remove("buttonDisabled");
  }
}

function submit() {
  if (leftCharacters < 0) {
    alert("You have to shorten your message, because it's actually too long!");
  } else {
    window.open(
      `https://twitter.com/intent/tweet?text=${textarea.value}`,
      "_blank"
    );
  }
}

function tweeting() {
  counter.innerText = `${maxLength}/${maxLength}`;
  textarea.addEventListener("input", count);
  button.addEventListener("click", submit);
}

tweeting();
