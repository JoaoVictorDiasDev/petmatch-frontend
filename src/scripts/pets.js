function show_modal(nome, descricao, imagemSrc) {
    // Função para abrir o modal e exibir as informações do pet
    // Dúvida de como vamos passar esses parâmetros de forma dinâmica, talvez adicionar
    // um onclick no html
    let modal = document.getElementById("pet-modal")
    let pet_info = modal.querySelector(".pet-description")
    let pet_img = modal.querySelector("#pet-imagem")
    let overlay = document.getElementById("overlay")

    pet_info.querySelector("h3").textContent = nome
    pet_info.querySelector("p").textContent = descricao
    pet_img.src = imagemSrc

    modal.style.display = "flex"
    overlay.style.display = "block"
}

function close_modal() {
    // Função para fechar o modal (onclick no html por só ter um elemento)
    let modal = document.getElementById("pet-modal")
    let overlay = document.getElementById("overlay")

    modal.style.display = "none"
    overlay.style.display = "none"
}

// Adicionar ouvintes de eventos às imagens dos pets
let pet_images = document.querySelectorAll(".pets-row img")
pet_images.forEach(function(img) {
    img.addEventListener("click", function() {
        console.log(img.src)
        // receber do back essas informações
        show_modal('Costelinha',
            'Macho Sem raça definida Cerca de 5 anos, adulto Pelo curto e dourado Brincalhão e carinhoso Gosta muito de crianças Castrado', 
            img.src)
    })
})


