console.log ("connected")

const start_btn = document.querySelector(".start_btn button");
const instrutions_box = document.querySelector("instrutions_box");
const exit_btn = instrutions_box.querySelector(".buttons . exit");
const continue_btn = instrutions_box.querySelector(".buttons . restart");

start_btn.onclick = ()=>{
    instrutions_box.classList.add("activeinst");
}
exit_btn.onclick = ()=>{
    instrutions_box.classList.remove("activeinst");
}

continue_btn.onclick = ()=>{
    instrutions_box.classList.remove("activeintsr");
}