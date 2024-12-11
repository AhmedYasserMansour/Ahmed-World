
let scrol = document.querySelector(".scroll")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", ()=>{
let scrollTop = document.documentElement.scrollTop
 scrol.style.width = `${(scrollTop / height) * 100}%`
})


let ourSkills = document.querySelector(".our-skills")

let spans = document.querySelectorAll(".our-skills .content span")

let stats = document.querySelector(".stats")

let counter = document.querySelectorAll(".stats h3")

let hasCounted = false;

let btn = document.querySelector(".top");
let header = document.querySelector(".header")

window.onscroll = function(){
    if(window.scrollY >= ourSkills.offsetTop){
        spans.forEach((span)=>{
            span.style.width = span.dataset.width
        })
    }
if(window.scrollY >= stats.offsetTop - 100 && !hasCounted){
    hasCounted = true;
        counter.forEach((count)=>{
            let end = count.getAttribute("end")
            let handler = setInterval(()=>{
                count.innerHTML-=-1
                if(count.innerHTML === end){
                    clearInterval(handler)
                }
            },2000 / end)
    })
}
if(this.scrollY >= 2000){
        btn.style.display = "block"
        btn.classList.add("show")
    }else{
        btn.classList.remove("show")
    }
}

btn.onclick = function(){
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    })
}
let other = document.querySelector(".other")
let megaMenu = document.querySelector(".mega-menu")

other.onclick = function(){
    megaMenu.classList.toggle("open")
    }

    document.onclick = function(event) {
        if (!megaMenu.contains(event.target) && !other.contains(event.target)) {
            megaMenu.classList.remove("open");
        }
    };

let eventDate = new Date("Dec 31 2025 23:59:59").getTime();

let cout = setInterval(()=>{
let dateNow = new Date().getTime()
let dateDiff = eventDate - dateNow 
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60))
let seconds = Math.floor(dateDiff % (1000 * 60) / (1000))
document.querySelector(".time .days").innerHTML = days < 10 ? `0${days}` : days 
document.querySelector(".time .hours").innerHTML = hours < 10 ? `0${hours}` : hours 
document.querySelector(".time .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes 
document.querySelector(".time .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds 
if (dateDiff < 0){
    clearInterval(cout)
    document.querySelector(".info .message").innerHTML = "Registration for the 2025 Technology Professor event has been completed"
}
},1000)


























