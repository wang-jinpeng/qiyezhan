{
    let box1=document.querySelectorAll('.slides li');
    console.log(box1);
    let box2=document.querySelectorAll(".dian li");
    console.log(box2);
    let box=document.querySelector(".banner");
    box2.forEach(function (ele,index) {
        ele.onclick=function () {
            for(let i=0;i<box2.length;i++){
                box2[i].classList.remove("active");
                box1[i].classList.remove("active")
            }
            this.classList.add("active");
            box1[index].classList.add("active");
        }
    });
    let n=0;
    function bannerfn(dir="r") {
        if(dir==="r"){
            n++;
        }else if (dir==="l"){
            n--;
        }
        if(n===box1.length){
            n=0;
        }
        if(n===-1){
            n=box1.length-1;
        }
        for(let i=0;i<box2.length;i++){
            box2[i].classList.remove("active");
            box1[i].classList.remove("active");
        }
        box2[n].classList.add("active");
        box1[n].classList.add("active");
    }
    let st=setInterval(bannerfn,5000);
    box.onmouseover=function () {
        clearInterval(st);
    };
    box.onmouseout=function () {
        st=setInterval(bannerfn,5000)
    };
}
{
    let totop=document.querySelector(".footer-jt");
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        console.log(st)
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30)
    };
}
