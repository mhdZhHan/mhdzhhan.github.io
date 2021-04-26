window.addEventListener("load",()=>{
    let showhideMenu = ()=>{
        document.querySelector("header nav.right").classList.toggle("is-active");
        document.querySelector("header").classList.toggle("header-active");
    };
    document.querySelector("#menu-icon").addEventListener("click",()=>{
        showhideMenu();
    });
});