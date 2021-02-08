let h1 = document.createElement("h1");
h1.innerText = "0";
h1.style.color = "rgba(200, 100, 0, .5)";
h1.style.fontSize = "30"
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
    example1.style.color = "tomato";
    // h1.style.color = "rgba(200, 100, 0, .5)";
//     function get_random_color() 
// {
//     var color = "";
//     for(var i = 0; i < 3; i++) {
//         var sub = Math.floor(Math.random() * 256).toString(16);
//         color += (sub.length == 1 ? "0" + sub : sub);
//     }
//     return "#" + color;
// }


// function get_rand_color()
// {
//     var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
//     while(color.length < 6) {
//         color = "0" + color;
//     }
//     return "#" + color;
// }
})

example2.addEventListener("click", function(){
    let example2 = document.querySelector("h1");
    example2.style.fontSize = "70px";

})

example3.addEventListener("click", function(){
    let example3 = document.querySelector("h1");
    h1.style.fontSize = "20px";

})

example4.addEventListener("click", function(){
    let example4 = document.querySelector("h1");
    h1.innerText++;
})