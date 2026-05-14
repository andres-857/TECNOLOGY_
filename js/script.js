// Technology data
const technologies = [
    {
        id: 1,
        nombre: "inteligencia artificial",
        titulo: "Inteligencia Artificial",
        descripcion: "La inteligencia artificial (IA) es una rama de la informática que permite a máquinas y sistemas simular la inteligencia humana para realizar tareas como razonar, aprender, solucionar problemas y tomar decisiones. Utiliza algoritmos, grandes volúmenes de datos y modelos matemáticos para realizar labores que normalmente requieren intervención humana, de manera autónoma o combinada.",
        icono: "🤖",
        categoria: "ia"
    },
    {
        id: 2,
        nombre: "robotica",
        titulo: "Robótica",
        descripcion: "La robótica es una ciencia interdisciplinaria que combina ingeniería mecánica, eléctrica, electrónica, informática e inteligencia artificial para diseñar, construir y operar robots. Su objetivo es crear máquinas automatizadas capaces de realizar tareas repetitivas, peligrosas o precisas, simulando comportamientos humanos o animales.",
        icono: "🦾",
        categoria: "robotica"
    },
    {
        id: 3,
        nombre: "biotecnologia",
        titulo: "Biotecnología",
        descripcion: "La biotecnología es el uso de sistemas biológicos, organismos vivos o sus derivados para crear o modificar productos, procesos y servicios de utilidad para el ser humano. Combina disciplinas como biología, química e ingeniería para resolver problemas en salud, agricultura, industria y medio ambiente.",
        icono: "🧬",
        categoria: "biotech"
    },
    {
        id: 4,
        nombre: "armas tecnologicas",
        titulo: "Armas Tecnológicas",
        descripcion: "Las armas tecnológicas, en un contexto moderno y de defensa, son sistemas avanzados que aplican tecnologías de vanguardia —como inteligencia artificial, energía dirigida o electromagnetismo— para mejorar la precisión, capacidad destructiva o seguridad. Abarcan desde herramientas cibernéticas y drones autónomos hasta armas láser.",
        icono: "⚔️",
        categoria: "weapons"
    }
];

// DOM Elements
const cardsGrid = document.getElementById('cardsGrid');
const navButtons = document.querySelectorAll('.nav-btn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards(technologies);
    setupEventListeners();
    setupKeyboardShortcuts();
});

// Render cards
function renderCards(items) {
    cardsGrid.innerHTML = '';
    items.forEach((tech, index) => {
        const card = createCard(tech, index);
        cardsGrid.appendChild(card);
    });
}

// Create card element
function createCard(tech, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <span class="card-tag">${tech.categoria.toUpperCase()}</span>
        </div>
        <h2 class="card-title">${tech.titulo}</h2>
        <div class="card-content">
            <p>${tech.descripcion}</p>
        </div>
        <div class="card-footer">
            <span class="card-status">STATUS: ACTIVE</span>
            <span class="card-icon">${tech.icono}</span>
        </div>
    `;
    
    // Add animation delay
    card.style.animationDelay = `${index * 0.1}s`;
    
    return card;
}

// Filter functionality
function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            navButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get filter value
            const filter = btn.getAttribute('data-filter');
            
            // Filter and render
            if (filter === 'all') {
                renderCards(technologies);
            } else {
                const filtered = technologies.filter(tech => tech.nombre === filter);
                renderCards(filtered);
            }
        });
    });
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        
        // G key for glitch mode
        if (key === 'g') {
            toggleGlitchMode();
        }
        
        // Arrow keys for navigation
        if (key === 'arrowleft' || key === 'arrowright') {
            rotateFilter(key === 'arrowright');
        }
    });
}

// Glitch mode easter egg
function toggleGlitchMode() {
    document.body.classList.toggle('glitch-mode');
    
    if (document.body.classList.contains('glitch-mode')) {
        // Add glitch effect
        const style = document.createElement('style');
        style.id = 'glitch-style';
        style.innerHTML = `
            @keyframes glitch-anim {
                0% { transform: translate(0); }
                20% { transform: translate(-2px, 2px); }
                40% { transform: translate(-2px, -2px); }
                60% { transform: translate(2px, 2px); }
                80% { transform: translate(2px, -2px); }
                100% { transform: translate(0); }
            }
            
            .glitch-mode .card,
            .glitch-mode .title,
            .glitch-mode .nav-btn {
                animation: glitch-anim 0.2s infinite;
            }
        `;
        document.head.appendChild(style);
    } else {
        const glitchStyle = document.getElementById('glitch-style');
        if (glitchStyle) glitchStyle.remove();
    }
}

// Rotate filter with arrow keys
function rotateFilter(isNext) {
    const filters = ['all', 'inteligencia artificial', 'robotica', 'biotecnologia', 'armas tecnologicas'];
    const activeBtn = document.querySelector('.nav-btn.active');
    const currentFilter = activeBtn.getAttribute('data-filter');
    const currentIndex = filters.indexOf(currentFilter);
    
    let nextIndex;
    if (isNext) {
        nextIndex = (currentIndex + 1) % filters.length;
    } else {
        nextIndex = (currentIndex - 1 + filters.length) % filters.length;
    }
    
    const nextBtn = document.querySelector(`[data-filter="${filters[nextIndex]}"]`);
    nextBtn.click();
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
