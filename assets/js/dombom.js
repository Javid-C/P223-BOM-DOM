// window.navigator.geolocation.getCurrentPosition((geolocation) => {
//     alert("check the console")
//     console.log(geolocation);
// }, () => {
//     alert("you didnt let the browser access your location please try again")
// })


// setTimeout(() => {
//     console.log("this title is wrote after 0.7 seconds");
// }, 700);

// setInterval(() => {
//     console.log("Hello world");
// }, 1000);


// let h1 = document.querySelector(".container .title")


let headings = Array.from(document.querySelectorAll(".container .title"));


headings.forEach((h1) => {
    h1.classList.add("jamal")
})

headings[0].className = "this is the classname"



console.log(headings);


// headings.forEach(h1 => {
//         h1.style.backgroundColor = "red"

//     })
// console.log(headings);


// let h1 = document.getElementById("first");

// let headings = Array.from(document.getElementsByClassName("title"))

// headings.forEach(h1 => {
//     console.log(h1);
// })

// let headings = document.getElementsByTagName("h1")

// let container = document.querySelector(".container");

// let span = document.createElement("span");
// let p = document.createElement("p");

// p.innerText = "this is the p element"

// span.innerHTML = "<b>Hello World</b>"

// span.className = "article span"
// span.className = ""

// span.classList.add("red")

// span.classList.add("span")

// span.classList.remove("red")
// span.innerText = ""

// container.append(span);

// headings.forEach((value, index, array) => {
//     if (index == 1) {
//         value.prepend(span);

//     }
// })

// container.append(span, p, "this is the string without element")

// container.appendChild(span, p, "<div>This is not element</div>")

// let append = container.append(span);

// let appendChild = container.appendChild(span)

// console.log(append);
// console.log(appendChild);

// let input = document.querySelector("input[type=text]")

// let btn = document.querySelector(".myBtn")

// let error = document.querySelector(".errorMsg")



// input.classList.add("form-control")
// input.classList.add("mt-5")


// btn.onclick = function() {
//     // if (input.value == "") {
//     //     error.classList.remove("d-none")
//     // } else {
//     //     error.classList.add("d-none")
//     //     window.location.reload();
//     // }

//     error.classList.toggle("d-none")
// }

// input.value = "Javid"

// console.log(input.value);



// console.log(headings);