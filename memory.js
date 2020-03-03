
const cartes = document.querySelectorAll(".carte");
const clicked = false;
cartes.forEach(function(carte){

    let posAleatoire = Math.floor(Math.random()*4);//nombre aleatoire entre 0 et 3

    //on melange les carte grace a la proprie css order qui s'applique 
    //sur les enfant d'une div qui a pour relge en css un  display : flex
    
    carte.style.order = posAleatoire;
    carte.addEventListener("click",function(){
        carte.classList.add("tourne");

        setTimeout(function(){
            carte.classList.remove("tourne");
        },500)
    })

})