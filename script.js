// Dados de filmes para cada perfil
const profilesData = {
    Thais: {

        mostWatched: [
            { title: 'Furiosa', image: 'PerfilThais.html/Furiosa.png' },
            { title: 'A mulher rei', image: 'PerfilThais.html/MulherRei.png' },
            { title: 'Missão Impossivel o acerto final', image: 'PerfilThais.html/MissaoImpo.png' },
            { title: 'Homem aranha', image: 'PerfilThais.html/Homem_aranha.png' }
        ],
        favorites: [
            { title: 'Mulher Maravillha', image: 'PerfilThais.html/MulherMara.png' },
        ]
    },
    Lais: {
        mostWatched: [
            { title: 'Era um vez ', image: 'PerfilLais.html/EraumaVez.png' },
            { title: ' A garota da Capa Vermelha', image: 'PerfilLais.html/GarotaVermelha.png' },
            { title: 'TinkerBell', image: 'PerfilLais.html/TinkerBell.png' },
            
        ],
        favorites: [
            { title: 'Bela Adormecida', image: 'PerfilLais.html/Bela.png' },
            { title: 'Alice no pais das Maravilhas', image: 'PerfilLais.html/Alice.png' },
        ]
    },
    Marlene: {
        mostWatched: [
            { title: 'The Handmaid\'s Tale', image: 'https://via.placeholder.com/150x225?text=Handmaids+Tale' },
            { title: 'Grey\'s Anatomy', image: 'https://via.placeholder.com/150x225?text=Greys+Anatomy' },
            { title: 'YOU', image: 'https://via.placeholder.com/150x225?text=YOU' },
            { title: 'Virgin River', image: 'https://via.placeholder.com/150x225?text=Virgin+River' }
        ],
        favorites: [
            { title: 'Ozark', image: 'https://via.placeholder.com/150x225?text=Ozark' },
            { title: 'Mindhunter', image: 'https://via.placeholder.com/150x225?text=Mindhunter' },
            { title: 'The Fall', image: 'https://via.placeholder.com/150x225?text=The+Fall' },
            { title: 'Killing Eve', image: 'https://via.placeholder.com/150x225?text=Killing+Eve' }
        ]
    },
    Edevaldo: {
        mostWatched: [
            { title: 'Game of Thrones', image: 'https://via.placeholder.com/150x225?text=Game+of+Thrones' },
            { title: 'The Boys', image: 'https://via.placeholder.com/150x225?text=The+Boys' },
            { title: 'House of the Dragon', image: 'https://via.placeholder.com/150x225?text=House+Dragon' },
            { title: 'Rings of Power', image: 'https://via.placeholder.com/150x225?text=Rings+of+Power' }
        ],
        favorites: [
            { title: 'Vikings', image: 'https://via.placeholder.com/150x225?text=Vikings' },
            { title: 'The Mandalorian', image: 'https://via.placeholder.com/150x225?text=Mandalorian' },
            { title: 'Westworld', image: 'https://via.placeholder.com/150x225?text=Westworld' },
            { title: 'Arcane', image: 'https://via.placeholder.com/150x225?text=Arcane' }
        ]
    },
    Taina: {
        mostWatched: [
            { title: 'My Hero Academia', image: 'https://via.placeholder.com/150x225?text=My+Hero' },
            { title: 'Attack on Titan', image: 'https://via.placeholder.com/150x225?text=Attack+Titan' },
            { title: 'Death Note', image: 'https://via.placeholder.com/150x225?text=Death+Note' },
            { title: 'Demon Slayer', image: 'https://via.placeholder.com/150x225?text=Demon+Slayer' }
        ],
        favorites: [
            { title: 'Jujutsu Kaisen', image: 'https://via.placeholder.com/150x225?text=Jujutsu+Kaisen' },
            { title: 'Chainsaw Man', image: 'https://via.placeholder.com/150x225?text=Chainsaw+Man' },
            { title: 'Tokyo Revengers', image: 'https://via.placeholder.com/150x225?text=Tokyo+Revengers' },
            { title: 'Steins;Gate', image: 'https://via.placeholder.com/150x225?text=Steins+Gate' }
        ]
    }
};

// Elementos do DOM
const profiles = document.querySelectorAll('.profile');
const mostWatchedSection = document.getElementById('mostWatchedSection');
const profileNameElement = document.getElementById('profileName');
const moviesGrid = document.getElementById('moviesGrid');
const backButton = document.getElementById('backButton');
const container = document.querySelector('.container');



// Adiciona event listener a cada perfil
profiles.forEach(profile => {
    profile.addEventListener('click', () => {
        const profileName = profile.querySelector('figcaption').textContent;
        showProfileMovies(profileName);
    });
});

// Função para exibir filmes do perfil
function showProfileMovies(profileName) {
    const data = profilesData[profileName];
    
    if (!data) return;

    // Esconde os perfis e mostra a seção de filmes
    container.style.display = 'none';
    mostWatchedSection.style.display = 'block';
    
    // Atualiza o nome do perfil
    profileNameElement.textContent = `Filmes de ${profileName}`;
    
    // Limpa a grid
    moviesGrid.innerHTML = '';
    
    // Adiciona seção de mais assistidos
    const mostWatchedContainer = document.createElement('div');
    mostWatchedContainer.className = 'movies-category';
    mostWatchedContainer.innerHTML = '<h3>Mais Assistidos</h3>';
    const mostWatchedGrid = document.createElement('div');
    mostWatchedGrid.className = 'movies-row';
    
    data.mostWatched.forEach(movie => {
        const movieCard = createMovieCard(movie);
        mostWatchedGrid.appendChild(movieCard);
    });
    
    mostWatchedContainer.appendChild(mostWatchedGrid);
    moviesGrid.appendChild(mostWatchedContainer);
    
    // Adiciona seção de favoritos
    const favoritesContainer = document.createElement('div');
    favoritesContainer.className = 'movies-category';
    favoritesContainer.innerHTML = '<h3>Favoritos</h3>';
    const favoritesGrid = document.createElement('div');
    favoritesGrid.className = 'movies-row';
    
    data.favorites.forEach(movie => {
        const movieCard = createMovieCard(movie);
        favoritesGrid.appendChild(movieCard);
    });
    
    favoritesContainer.appendChild(favoritesGrid);
    moviesGrid.appendChild(favoritesContainer);
}

// Função para criar card de filme
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <p>${movie.title}</p>
    `;
    return card;
}

// Event listener para botão voltar
backButton.addEventListener('click', () => {
    mostWatchedSection.style.display = 'none';
    container.style.display = 'grid';
});
