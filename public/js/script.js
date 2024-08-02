let title=document.querySelectorAll(".tt");
let arr=["carou-title1","carou-title2","carou-title3","carou-title4"];
let n=4;
for(let i=0;i<3;i++){
    let x=Math.floor((Math.random()*10)%n);
    title[i].classList.add(arr[x]);
    arr.splice(x,1);
    n--;
}

let im=document.querySelector(".fir");
  if(window.innerWidth>=768){
    im.src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516891/19_mmpcwe.jpg"
  }
  else{
    im.src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg"

  }

  document.addEventListener("DOMContentLoaded",()=>{
    const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("in-view");
                return;
            }
        });
    });
    const allAnimatedElements1=document.querySelectorAll(".animate");
    allAnimatedElements1.forEach((element)=>observer.observe(element));
  });

