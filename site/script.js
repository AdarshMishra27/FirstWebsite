// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
function sayHello() {
    var st=document.getElementById("name").value;
    var msg="<h2>Hello "+st+" !</h2>";
    // document.getElementById("content").textContent=msg;
    document.getElementById("content").innerHTML=msg;

    if(st==="stud") {
        var title=document.querySelector("#title").textContent;
        title+=" You are stud!"
        document.querySelector("#title").textContent=title;
    }
}

// document.querySelector("button").addEventListener("click",sayHello);
document.querySelector("button").onclick=sayHello;
document.querySelector("body").addEventListener("mousemove",function (event) {
    if(event.shiftKey===true) {
        console.log("x="+event.clientX);
        console.log("y="+event.clientY);
    }
});