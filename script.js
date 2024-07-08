let char=[
    "QWERTYUIOPASDFGHJKLZXCVBNM",
    "qwertyuiopasdfghjklzxcvbnm",
    "1234567890",
    "!@#$%^&*()_+-=;[]{}:<>;"
]

// let n="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
// let randomindex=Math.floor(Math.random()*n.length);
// console.log(randomindex)
// let randomchar=n.charAt(randomindex)
// console.log(randomchar)

let generatebtn=document.querySelector("#genereate")
let allcheckbox=document.querySelectorAll(".setting input[type='checkbox']")
let txtlenght=document.querySelector("#Length")
let resultbox=document.querySelector("#result")
generatebtn.addEventListener("click",()=>{
    let finalchar="";
    allcheckbox.forEach((checkbox,index)=>{
        if(checkbox.checked){
            finalchar=finalchar+char[index]
        }
    })
    let finalpass=''
    for(let i=0;i<txtlenght.value;i++){
        finalpass+=finalchar.charAt(Math.floor(Math.random()*finalchar.length))
    }
    resultbox.innerHTML=finalpass
})
let clipboard=document.querySelector("#Clipboard")
clipboard.addEventListener("click",()=>{
    let result=resultbox.innerHTML;
    navigator.clipboard.writeText(result)
})