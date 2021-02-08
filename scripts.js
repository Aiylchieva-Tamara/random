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
document.body.append(ul)