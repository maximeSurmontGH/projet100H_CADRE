function disparaitre(){
  if (window.matchMedia("(max-width: 650px)").matches){
    document.getElementById("navigation").className="disparaitreAlerte";
  }

}



window.onload = function(){
  disparaitre();
};
