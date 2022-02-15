window.onload = function(){
    document.querySelector(".menu img").addEventListener("click",function(){
        if(document.querySelector(".menu nav ul").style.display == "flex"){
            document.querySelector(".menu nav ul").style.display = "none"
            
        }
        else{
            document.querySelector(".menu nav ul").style.display = "flex"
        }
    })
}
let d1 = document.querySelector("#duvidas ul #d1").addEventListener("click",(()=>{
    if(document.querySelector("#duvidas ul li #p1").style.display=="block"){
        document.querySelector("#duvidas ul li #p1").style.display = "none"
    }
    else{
        document.querySelector("#duvidas ul li #p1").style.display="block"
    }
}))
let d2 = document.querySelector("#duvidas ul #d2").addEventListener("click",(()=>{
    if(document.querySelector("#duvidas ul li #p2").style.display=="block"){
        document.querySelector("#duvidas ul li #p2").style.display = "none"
    }
    else{
        document.querySelector("#duvidas ul li #p2").style.display="block"
    }
}))
let d3 = document.querySelector("#duvidas ul #d3").addEventListener("click",(()=>{
    if(document.querySelector("#duvidas ul li #p3").style.display=="block"){
        document.querySelector("#duvidas ul li #p3").style.display = "none"
    }
    else{
        document.querySelector("#duvidas ul li #p3").style.display="block"
    }
}))
let d4 = document.querySelector("#duvidas ul #d4").addEventListener("click",(()=>{
    if(document.querySelector("#duvidas ul li #p4").style.display=="block"){
        document.querySelector("#duvidas ul li #p4").style.display = "none"
    }
    else{
        document.querySelector("#duvidas ul li #p4").style.display="block"
    }
}))


let comen1 = document.querySelector("#responder").addEventListener("click",(()=>{
    if(document.querySelector("#resp1").style.display == "block"){
        document.querySelector("#resp1").style.display = "none"
    }else{
        document.querySelector("#resp1").style.display = "block"
    }
}))
let comen2 = document.querySelector("#responder2").addEventListener("click",(()=>{
    if(document.querySelector("#resp2").style.display == "block"){
        document.querySelector("#resp2").style.display = "none"
    }else{
        document.querySelector("#resp2").style.display = "block"
    }
}))
let comen3 = document.querySelector("#responder3").addEventListener("click",(()=>{
    if(document.querySelector("#resp3").style.display == "block"){
        document.querySelector("#resp3").style.display = "none"
    }else{
        document.querySelector("#resp3").style.display = "block"
    }
}))
let comen4 = document.querySelector("#responder4").addEventListener("click",(()=>{
    if(document.querySelector("#resp4").style.display == "block"){
        document.querySelector("#resp4").style.display = "none"
    }else{
        document.querySelector("#resp4").style.display = "block"
    }
}))