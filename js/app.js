var pages=["home", "about"];

function createNav(){
    var nav=document.createElement("nav");
    createButton(pages[0])
    createButton(pages[1])

    document.body.appendChild(nav);

    function createButton(pg){
        var butt=document.createElement("button");
        butt.innerHTML=pg;
        butt.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg){
    if(pg==="home"){
        homePage()
    }else{
        aboutPage()
    }
}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    var score=0;
    
    header.innerHTML="Hello World";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header=document.createElement("h1");
    header.innerHTML="About Me";
    wrapper.appendChild(header);
}

createNav();
createWrapper();
navigate("home");
//navigate("home") makes the home page pop up if page is reset.


