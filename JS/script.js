    //  LIGHTBOX START
    let button=document.querySelector(".btn")
    let lightboxdiv=document.querySelector(".lighbox")
    let closebtn=document.querySelector(".lightbox-img span")
    button.addEventListener("click",function(){
        lightboxdiv.classList.add('showmodal')
    })
    closebtn.addEventListener("click",function(){
        lightboxdiv.classList.remove('showmodal')
    })
     //  LIGHTBOX START
    //  Rsponisve menu start
    let nav=document.querySelector(".menu-content")
    let micon=document.querySelector(".responsive i")
    micon.addEventListener("click",()=>{
        nav.classList.toggle('showmenu')
        micon.classList.toggle('fa-bars')
        micon.classList.toggle('fa-xmark')
    })
      // Rsponisve menu End
    //  gallery section start
    let gallerydiv=document.querySelector(".gallery")
    let galleryoverlay=document.querySelector(".galleryoverlay")
    let gallerymodal=document.querySelector(".gallerymodal")

    let currentimg=document.querySelector(".gallerymodal img")
        gallerydiv.addEventListener("click",(e)=>{
            if(e.target.src!==undefined){

                 galleryoverlay.classList.add("showoverlay")
                 gallerymodal.classList.add("gallerymodalshow")
                 currentimg.src=e.target.src
            }
    })
    galleryoverlay.addEventListener("click",()=>{
        galleryoverlay.classList.remove("showoverlay")
        gallerymodal.classList.remove("gallerymodalshow")
        currentimg.src=e.target.src
    })
    // galler section end

    // Amenities Tab js start
    let alltabs=document.querySelectorAll(".ameneties-tab ul li")
    let allcontent=document.querySelectorAll(".contentItems")
    alltabs.forEach((Element,index)=>{
        Element.addEventListener("click",()=>{
            Element.classList.add("activetab")
            allcontent[index].classList.add('activetabcontent')
            alltabs.forEach((el,i)=>{
                if(i!=index){
                    el.classList.remove("activetab")
                    allcontent[i].classList.remove('activetabcontent')
                }
            })
        })
    })

      // Amenities Tab js end
