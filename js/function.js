function infoHandler(){
    let name = document.getElementById("exampleFormControlInput1").value;
    console.log(name);
    let cardInfo = document.getElementById("exampleFormControlTextarea1").value;
    console.log(cardInfo);
    
   

    let christmasCard = document.createElement("div")

    christmasCard.innerHTML = (`<div class="card text-white bg-dark justify-content-center align-items-center">
                                    <img src="https://images.unsplash.com/photo-1481481525014-91e77115eace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80" style="max-width: 40rem; class="card-img-top" alt="Imagen de Papá Noel">
                                    <div class="card-body">
                                      <h5 class="card-title">${name}, Papá Noel recibirá tu carta pronto</h5>
                                      <p class="card-text">La carta dice: ${cardInfo}</p>
                                      <p class="card-text">En breve él llegará con tus regalos</p>
                                    </div>
                                </div>`);
            document.body.appendChild(christmasCard);

    alert(name+ "," +  " la carta ha sido enviada... Compruebe su contenido al final de la página.");
}

function bntSend(){
    let btnSend = document.getElementById("btn-send");

    btnSend.addEventListener("click", infoHandler);
}