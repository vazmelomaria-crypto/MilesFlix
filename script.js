const movies = [
  {
    id: 1,
    title: 'Cyberpunk: Edgerunners',
    genre: 'Animação / Sci-Fi',
    year: 2022,
    rating: 8.9,
    category: 'series',
    image: 'Images/Cyberpunk_mercenarios.jpg',
    description:
      'Um garoto de rua tentando sobreviver em uma cidade do futuro obcecada por tecnologia e modificações corporais. Tendo tudo a perder, ele escolhe permanecer vivo tornando-se um Edgerunner.',
    featured: true
  },
  {
    id: 2,
    title: 'The Batman',
    genre: 'Ação / Crime',
    year: 2022,
    rating: 8.1,
    category: 'movie',
    image: 'Images/TheBatman.png',
    description:
      'Quando um serial killer ataca Gotham City, Batman precisa investigar um mistério sombrio que conecta a cidade ao seu passado e ao futuro da família Wayne.'
  },
  {
    id: 3,
    title: 'Stranger Things',
    genre: 'Suspense / Ficção',
    year: 2024,
    rating: 9.2,
    category: 'series',
    image: 'Images/images (1).jfif',
    description:
      'Em uma cidade pacata, um grupo de amigos enfrenta forças sobrenaturais e um mistério que cresce cada vez mais perigoso e assustador.'
  },
  {
    id: 4,
    title: 'Dune: Parte II',
    genre: 'Aventura / Sci-Fi',
    year: 2024,
    rating: 9.0,
    category: 'movie',
    image: 'Images/duna2.jpg',
    description:
      'Paul Atreides une forças com os Fremen para proteger o planeta Arrakis enquanto o império galáctico se prepara para o confronto final.'
  },
  {
    id: 5,
    title: 'The Last of Us',
    genre: 'Drama / Ação',
    year: 2023,
    rating: 8.8,
    category: 'series',
    image: 'Images/tlou.1.png',
    description:
      'Em um mundo devastado por uma infecção, um sobrevivente endurecido precisa proteger a única esperança de humanidade em meio ao caos.'
  },
  {
    id: 6,
    title: 'Avatar: O Caminho da Água',
    genre: 'Aventura / Fantasia',
    year: 2022,
    rating: 8.5,
    category: 'movie',
    image: 'Images/Avatar_The_Way_of_Water_poster.jpg',
    description:
      'Jake Sully e Neytiri enfrentam novos desafios enquanto exploram os mistérios de Pandora e protegem sua família.'
  },
  {
    id: 7,
    title: 'Dark',
    genre: 'Mistério / Thriller',
    year: 2020,
    rating: 8.7,
    category: 'series',
    image: 'Images/dark (2).jfif',
    description:
      'Uma família em uma cidade alemã se descobre envolvida em um ciclo de eventos causados por uma estranha conspiração temporal.'
  },
  {
    id: 8,
    title: 'Oppenheimer',
    genre: 'Drama / História',
    year: 2023,
    rating: 8.6,
    category: 'movie',
    image: 'Images/oppenheimer.jpg',
    description:
      'A história de J. Robert Oppenheimer e o desenvolvimento da bomba atômica, com consequências que mudaram o mundo.'
  },
  {
    id: 9,
    title: 'Descendentes 1',
    genre: 'Musical / Família',
    year: 2015,
    rating: 7.8,
    category: 'movie',
    image: 'Images/descendentes1.jpg',
    description:
      'Uma filha do rei do mal tenta se rebelar contra o destino e se aventura em uma jornada de autodescoberta dentro do mundo mágico da família real.'
  },
  {
    id: 11,
    title: 'Descendentes 2',
    genre: 'Musical / Família',
    year: 2017,
    rating: 7.9,
    category: 'movie',
    image: 'Images/descendentes2.png',
    description:
      'Mais uma vez, a família de Vilgax e os filhos de Mal enfrentam mistérios, música e escolhas que testam a lealdade de todos.'
  },
  {
    id: 12,
    title: 'Descendentes 3',
    genre: 'Musical / Família',
    year: 2019,
    rating: 8.1,
    category: 'movie',
    image: 'Images/descendentes3.png',
    description:
      'Quando o grande evento da coroação chega, os heróis e vilões precisam decidir se o passado vai definir o futuro ou se a escolha pessoal fará o rumo da história.'
  },
  {
    id: 13,
    title: 'Descendentes: A Ascenção De Copas',
    genre: 'Musical / Família',
    year: 2024,
    rating: 8.4,
    category: 'movie',
    image: 'Images/descen.4.png',
    description:
      'A nova geração de personagens entra em cena com desafios, conflitos emocionais e uma jornada musical repleta de ação e identidade.'
  },
  {
    id: 14,
    title: 'Descendentes: O País Das Maravilhas Malvado',
    genre: 'Musical / Família',
    year: 2025,
    rating: 8.6,
    category: 'movie',
    image: 'Images/descendentes5.jpg',
    description:
      'A saga final reúne os destinos mais esperados em um espetáculo cheio de música, coragem e escolhas que redefinem todos os laços da família.'
  },
  {
    id: 10,
    title: 'Rick and Morty',
    genre: 'Animação / Comédia',
    year: 2024,
    rating: 9.1,
    category: 'series',
    image: 'Images/RickAndMorty.jpg',
    description:
      'Rick, um cientista excêntrico, leva seu neto Morty em aventuras intergalácticas repletas de caos, humor absurdo e reflexões sobre a vida.'
  },
  {
    id: 15,
    title: 'Vingadores',
    genre: 'Ação / Ficção',
    year: 2012,
    rating: 8.0,
    category: 'movie',
    image: 'Images/Vingadores1.png',
    description:
      'Quando um inimigo poderoso ameaça a Terra, um grupo de heróis com habilidades extraordinárias precisa se unir para salvar o mundo.'
  },
  {
    id: 16,
    title: 'Vingadores: A Era de Ultron',
    genre: 'Ação / Ficção',
    year: 2015,
    rating: 7.3,
    category: 'movie',
    image: 'Images/Vingadores2.png',
    description:
      'Os heróis mais poderosos do planeta enfrentam um novo adversário tecnológico que coloca toda a humanidade em risco.'
  },
  {
    id: 17,
    title: 'Vingadores: Guerra Infinita',
    genre: 'Ação / Ficção',
    year: 2018,
    rating: 8.4,
    category: 'movie',
    image: 'Images/Vingadores3.png',
    description:
      'Uma batalha épica pelo universo começa quando Thanos reúne as Joias do Infinito e tenta destruir metade da vida na galáxia.'
  },
  {
    id: 18,
    title: 'Vingadores: Ultimato',
    genre: 'Ação / Ficção',
    year: 2019,
    rating: 8.4,
    category: 'movie',
    image: 'Images/Vingadores4.png',
    description:
      'Os heróis sobreviventes se unem em uma missão final para reverter as perdas causadas por Thanos e salvar o universo.'
  }
];

const state = {
  category: 'all',
  search: '',
  favorites: new Set()
};

const grid = document.getElementById('movieGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalGenre = document.getElementById('modalGenre');
const modalDesc = document.getElementById('modalDesc');
const closeButton = document.querySelector('.close-btn');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

function getFilteredMovies() {
  return movies.filter((movie) => {
    const matchesCategory =
      state.category === 'all'
        ? true
        : state.category === 'favs'
          ? state.favorites.has(movie.id)
          : movie.category === state.category;

    const matchesSearch =
      !state.search ||
      `${movie.title} ${movie.genre}`.toLowerCase().includes(state.search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

function renderMovies() {
  const filteredMovies = getFilteredMovies();

  if (!filteredMovies.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Nenhum resultado encontrado.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredMovies
    .map(
      (movie) => `
        <article class="movie-card" data-id="${movie.id}" tabindex="0" aria-label="Abrir detalhes de ${movie.title}">
          <button
            class="fav-btn ${state.favorites.has(movie.id) ? 'active' : ''}"
            type="button"
            data-fav="${movie.id}"
            aria-label="Favoritar ${movie.title}"
            aria-pressed="${state.favorites.has(movie.id)}"
          >
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="poster-container">
            <img src="${movie.image}" alt="${movie.title}">
          </div>
          <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-details">
              <span>${movie.genre}</span>
              <span>${movie.year}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

grid.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('.fav-btn');

  if (favoriteButton) {
    event.preventDefault();
    event.stopPropagation();
    toggleFavorite(Number(favoriteButton.dataset.fav));
    return;
  }

  const card = event.target.closest('.movie-card');
  if (card) {
    openModal(Number(card.dataset.id));
  }
});

grid.addEventListener('keydown', (event) => {
  const card = event.target.closest('.movie-card');

  if (!card) return;

  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openModal(Number(card.dataset.id));
  }
});

function toggleFavorite(movieId) {
  if (state.favorites.has(movieId)) {
    state.favorites.delete(movieId);
  } else {
    state.favorites.add(movieId);
  }

  renderMovies();
}

function openModal(movieId) {
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) return;

  modalTitle.textContent = movie.title;
  modalGenre.textContent = `${movie.genre} • ${movie.year} • ${movie.rating}★`;
  modalDesc.textContent = movie.description;
  modalOverlay.classList.add('active');
}

function closeModal() {
  modalOverlay.classList.remove('active');
}

function filterCategory(category) {
  state.category = category;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === category;
    button.classList.toggle('active', isActive);
  });

  renderMovies();
}

function handleSearch() {
  state.search = searchInput.value.trim();
  renderMovies();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => filterCategory(button.dataset.filter));
});

closeButton.addEventListener('click', closeModal);
searchInput.addEventListener('input', handleSearch);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

renderMovies();
