const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex=0;

//Ajout des event listener//

arrowLeft.addEventListener('click', () => {
	console.log("Vous avez cliqué sur la flèche gauche")
});

arrowRight.addEventListener('click', () => {
	console.log("Vous avez cliqué sur la flèche droite")
});


//Ajout et création des dots//
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez de la classe pour le premier point
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les trois autres points afin de mettre en évidence le point correspondant à l'image présente
        }
    });
}

// Fonction pour mettre à jour les bullets points, l'image et le texte
function updateCarousel(index, direction) {
	//Défilement des images 
	if (currentIndex === -1 && direction === 'left') {
	  currentIndex = slides.length - 1;
  } else if (currentIndex === slides.length && direction === 'right') {
	  currentIndex = 0;
  }

  // Actualisation de l'image
  const imagePath = `img/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imagePath;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // Actualisation du texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector('p').innerHTML = tagLine;

  console.log(`Clic sur la flèche ${direction}`);
}

// Event Listener pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1);
  updateCarousel(currentIndex, 'left');
  updateDots(currentIndex); // Actualisation des points indicateurs
});

// Event Listener pour le clic sur la flèche droite
arrowRight.addEventListener('click',  () => {
  currentIndex = (currentIndex + 1) ;
  updateCarousel(currentIndex, 'right');
  updateDots(currentIndex); // Actualisation des points indicateurs
});


