
function breaktheText(){
var h1 =document.querySelector("h1")
var h1text = h1.textContent

var splittedText =h1text.split("")
var halfValue = splittedText.length/2
var clutter =""
splittedText.forEach(function(elem,ind){
    if(ind<halfValue){
        clutter += `<span class="first"> ${elem} </span>` 
    }else{
        clutter += `<span class="last"> ${elem} </span>` 
    }

})

h1.innerHTML =clutter
}
breaktheText()

gsap.from("h1 .first",{
    y:60,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .last",{
    y:60,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})