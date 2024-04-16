let btn=document.querySelector("#btn");
let list=document.querySelector("#list-Item");
let input=document.querySelector("#input-text");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let text=input.value;
    if(text!=""){
        let el=document.createElement("li");
        el.innerText=text;
        list.append(el);
        let span=document.createElement("span");
        span.innerHTML = `&times;`;
        el.appendChild(span);
        input.value="";
    }
    else{
        alert("Write a valid task");
    }
    saveFunction();

});

list.addEventListener("click",(e)=>{
    if (e.target.tagName== "LI") {
        e.target.classList.toggle("checked");
        saveFunction();
    }
    if(e.target.tagName=="SPAN"){
        let parent=e.target.parentElement;
        parent.remove();
        saveFunction();
    }
});

const showFunction=()=>{
    list.innerHTML=localStorage.getItem("item");
}

const saveFunction=()=>{
    localStorage.setItem("item",list.innerHTML);
}

showFunction();