let click=document.querySelector(".container")
let showLike=document.querySelector("i")
click.addEventListener("click" , function(e)
{
    
    showLike.style.transform="scale(2)"
    showLike.style.opacity="0.8"
    setTimeout(function()
    {
        showLike.style.transform="scale(0)"
        showLike.style.opacity="0"
    },500)
 
})