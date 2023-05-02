const scrollindicator = document.querySelector('.scrollindicator');
const content = document.querySelector('.content');

const observer = new IntersectionObserver(handleIntersect).observe(content);


function handleIntersect(entries){
    const el = entries[0];
    if(el.isIntersecting){
        window.addEventListener("scroll", indicatorAnimationo)
    }else if(el.isIntersecting){
        window.removeEventListener("scroll", indicatorAnimationo)
    }
}


function indicatorAnimationo(){
    if(window.scrollY > content.offsetTop){
        const percentage = ((window.scrollY - content.offsetTop)/ content.scrollHeight *100).toFixed(2);
        scrollindicator.style.transform = `scaleX(${percentage / 100})`
    }
    else{
        scrollindicator.style.transform = `scaleX(0)`
    }
}