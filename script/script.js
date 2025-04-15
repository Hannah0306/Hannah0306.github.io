function showMessage() {
   let name = "Hannah";
   let age = 19;
   let bonus = age + 5;
   let school = "Southern Alberta Institute of Technology";
   let message = "Hey " + name + ", your age is " + age + ", you are a student at " + school + ". You have got a bonus of " + bonus + ".";
   alert(message);
}

console.log("Hello World!");

function checkAge() {
   let age = 17;
   if (age >= 18) {
       alert("Hi, you can enter this page. You are old enough!");
   } else {
       alert("Sorry, you are too young!");
   }
}

function showMany() {
   for (let i = 1; i <= 4; i = i + 1) {
       alert("Don't close me! You clicked me " + i + " times");
   }
}
function changeColor () 
{
   document.getElementById("main").style.backgroundColor = "#E0BBE4";
}
function changeImage1() {
   document.getElementById("Image").src = "https://i.pinimg.com/736x/c2/a1/dd/c2a1dddeade25a9aa70565dc092e104a.jpg";
}

function changeImage2() {
   document.getElementById("Image").src = "https://i.pinimg.com/736x/67/29/cf/6729cf6c373aa4c5869ac089b25b6f30.jpg";
}
document.getElementById("hoverButton").onmouseover = function() {
   this.style.backgroundColor = "#d1c4e9"; // pastel purple
};

document.getElementById("hoverButton").onmouseleave = function() {
   this.style.backgroundColor = "white";
};
let count = 0;

document.getElementById('buttonCounter').onclick = function() {
    count = count + 1;
    let message = "You have clicked " + count + " times.";
    document.getElementById('counter').innerHTML = message;

    if (count % 2 === 0) {
        // Số chẵn
        document.getElementById('counter').style.color = "blue";
    } else {
        // Số lẻ
        document.getElementById('counter').style.color = "hotpink";
    }
};
function showMessages() {
   for (let i = 1; i <= 5; i++) {
       let msg = document.createElement("p"); 
       msg.textContent = "This is message number " + i; 
       document.getElementById("container").appendChild(msg); 
   }
}




