let h1 = document.createElement("h1");
h1.innerText = "0";
h1.style.color = "rgba(200, 100, 0, .5)";
let px = 32;
document.body.append(h1);

let ul = document.createElement("ul");
for(let i = 1; i <= 5; i++){
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "Example" + i;
    // let name = [
    //     {name:"Random color"},
    //     {name:"Smaller"},
    //     {name:"Bigger"},
           //{name:"+"},
           //{name:"-"},
    // ]
    
    // for (const fruit of name) {
    //     let button = document.createElement("button");
    //     button.innerText = fruit.name ;
    // }
    button.id = "example" + i;
    li.append(button);
    ul.append(li)
}
document.body.append(ul);

example1.addEventListener("click", function(){
    let example1 = document.querySelector("h1");

    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    let example1 = `rgb (${r.toFixed(0)}, ${g.toFixed(0) }, ${b.toFixed(0)})`;
})

example2.addEventListener("click", function(){
    let example2 = document.querySelector("h1");
    px++;
    example2.style.fontSize = px + "px";

})

example3.addEventListener("click", function(){
    let example3 = document.querySelector("h1");
    px--;
    h1.style.fontSize = px +  "px";

})

example4.addEventListener("click", function(){
    let example4 = document.querySelector("h1");
    h1.innerText++;
})

example5.addEventListener("click", function(){
    let example5 = document.querySelector("h1");
    h1.innerText--;
})