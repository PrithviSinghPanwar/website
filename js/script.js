let allQuestion=document.querySelectorAll(".heading h3")
allQuestion.forEach((Element,index)=>{

    Element.addEventListener("click",()=>{
        Element.nextElementSibling.classList.toggle("showans")
        if(Element.children[0].innerHTML=="+"){
            Element.children[0].innerHTML="-"
        }
        else{
            Element.children[0].innerHTML="+"
        }
        
        allQuestion.forEach((el,i)=>{
            if(index!=i){
                el.nextElementSibling.classList.remove("showans")

            }
        })
    })
})