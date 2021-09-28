const images = document.querySelectorAll('.p-gallery__image'), iconClose = document.getElementById('closeModal');

let contenedorModal

let currentImage = 0

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        printModal(images[i].src, images[i].alt);
    })
}

const printModal = (source, alt) => {
    contenedorModal = document.createElement('div');
    contenedorModal.setAttribute('class', 'js-contenedor-modal');
    contenedorModal.innerHTML = `
					<span id='prev' class='arrow left'>Prev</span>
					<img src='${source}' alt='${alt}' class='modal__image' /> 
					<div class="js-icono-cerrar" id="closeModal"></div>
					<span class='arrow right' id='next'>Next</span>
					`
    document.body.appendChild(contenedorModal)

    document.addEventListener('click', (e) => {
        if (e.target === prev) {
            if (currentImage <= 0) {

                currentImage = images.length - 1;
                contenedorModal.innerHTML = `
					<span id='prev' class='arrow left'>Prev</span>
					<img src='${images[currentImage].src}' alt='${alt}' class='modal__image' /> 
					<div class="js-icono-cerrar" id="closeModal"></div>
					<span class='arrow right' id='next'>Next</span>
					`
                console.log(`Prev: Entró al if ${currentImage}`)
            }
            else {
                currentImage--
                console.log(`Prev: Entró al else ${currentImage}`)
                contenedorModal.innerHTML = `
					<span id='prev' class='arrow left'>Prev</span>
					<img src='${images[currentImage].src}' alt='${alt}' class='modal__image' /> 
					<div class="js-icono-cerrar" id="closeModal"></div>
					<span class='arrow right' id='next'>Next</span>
					`

            }
        }
        else if (e.target === next) {
            if (currentImage < images.length - 1) {
                contenedorModal.innerHTML = `
					<span id='prev' class='arrow left'>Prev</span>
					<img src='${images[currentImage + 1].src}' alt='${alt}' class='modal__image' /> 
					<div class="js-icono-cerrar" id="closeModal"></div>
					<span class='arrow right' id='next'>Next</span>
					`
                currentImage++
                console.log(`Next: if ${currentImage}`)
            }
            else {
                contenedorModal.innerHTML = `
					<span id='prev' class='arrow left'>Prev</span>
					<img src='${images[0].src}' alt='${alt}' class='modal__image' /> 
					<div class="js-icono-cerrar" id="closeModal"></div>
					<span class='arrow right' id='next'>Next</span>
					`
                currentImage = 0
            }
        }
    }

    )
}


const removeModal = () => contenedorModal.remove()


document.addEventListener('click', (e) => {
    if (e.target === closeModal) {
        removeModal()
    }
    else {
        if (e.target.className === 'js-contenedor-modal') {
            removeModal()
        }

    }
})

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        removeModal()
    }
})