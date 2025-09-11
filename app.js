// HYPERFOCUS ZONE - CONSTELLATION MAP (SYNTAX ERROR FREE)

console.log('🚀 Loading Hyperfocus Zone Constellation...');

// Simple repository data for testing
const testRepositories = [
    {
        name: "HYPERFOCUSzone-starting-code-",
        category: "Core Empire",
        description: "The beating heart with Orchestra conductor, Memory Crystals, Dopamine Guardian",
        githubUrl: "https://github.com/welshDog/HYPERFOCUSzone-starting-code-",
        x: 400, y: 300, size: "large"
    },
    {
        name: "HYPERFOCUS-UNIFIED-EMPIRE",
        category: "Core Empire",
        description: "Empire-level coordination hub managing the entire constellation",
        githubUrl: "https://github.com/welshDog/HYPERFOCUS-UNIFIED-EMPIRE",
        x: 300, y: 200, size: "large"
    },
    {
        name: "Hyper-vibe-engine",
        category: "Creative",
        description: "Turn images into soundtracks. Turn stories into portals",
        githubUrl: "https://github.com/welshDog/Hyper-vibe-engine",
        x: 500, y: 200, size: "medium"
    },
    {
        name: "My-Social-COMs-Buddy",
        category: "Social",
        description: "AI to help communicate with dyslexia",
        githubUrl: "https://github.com/welshDog/My-Social-COMs-Buddy",
        x: 400, y: 400, size: "medium"
    }
];

class ConstellationMap {
    constructor() {
        console.log('🌌 ConstellationMap initializing...');
        this.repositories = testRepositories;
        this.selectedRepo = null;
        this.init();
    }

    init() {
        console.log('🔧 Starting constellation initialization...');
        
        // Verify DOM elements exist
        const viewport = document.getElementById('constellationViewport');
        if (!viewport) {
            console.error('❌ constellationViewport not found!');
            return;
        }

        this.createSVG();
        this.drawRepositories();
        this.bindEvents();
        
        console.log('✅ Constellation initialized successfully!');
    }

    createSVG() {
        console.log('🎨 Creating SVG...');
        
        const viewport = document.getElementById('constellationViewport');
        
        // Clear viewport
        viewport.innerHTML = '';

        // Create SVG - SYNTAX ERROR FREE VERSION
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('width', '100%');
        this.svg.setAttribute('height', '100%');
        this.svg.setAttribute('viewBox', '0 0 800 600');
        
        // Create group for stars
        this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        this.svg.appendChild(this.group);
        
        // Append to viewport
        viewport.appendChild(this.svg);
        
        console.log('✅ SVG created without syntax errors');
    }

    drawRepositories() {
        console.log('⭐ Drawing repositories...');
        
        const colors = {
            "Core Empire": "#9333ea",
            "Creative": "#32b8c6",
            "Social": "#ec4899",
            "Dev Tools": "#3b82f6"
        };

        // SYNTAX ERROR FREE forEach - proper arrow function
        this.repositories.forEach((repo) => {  // ✅ Proper syntax
            console.log(`Drawing: ${repo.name}`);
            
            // Create circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', repo.x);
            circle.setAttribute('cy', repo.y);
            circle.setAttribute('r', repo.size === 'large' ? 18 : 14);
            circle.setAttribute('fill', colors[repo.category] || '#666');
            circle.setAttribute('stroke', '#fff');
            circle.setAttribute('stroke-width', '2');
            circle.style.cursor = 'pointer';
            
            // SYNTAX ERROR FREE event handlers
            circle.addEventListener('mouseenter', () => {  // ✅ Proper syntax
                circle.setAttribute('r', repo.size === 'large' ? 22 : 18);
            });
            
            circle.addEventListener('mouseleave', () => {  // ✅ Proper syntax
                circle.setAttribute('r', repo.size === 'large' ? 18 : 14);
            });
            
            circle.addEventListener('click', () => {  // ✅ Proper syntax
                window.open(repo.githubUrl, '_blank');
            });
            
            this.group.appendChild(circle);
            
            // Add label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', repo.x);
            text.setAttribute('y', repo.y + 25);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.setAttribute('font-size', '12');
            text.style.pointerEvents = 'none';
            text.textContent = repo.name.length > 15 ? 
                repo.name.substring(0, 15) + '...' : repo.name;
            
            this.group.appendChild(text);
        });
        
        console.log(`✅ Drew ${this.repositories.length} repositories`);
    }

    bindEvents() {
        // Basic search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {  // ✅ Proper syntax
                console.log('Search:', e.target.value);
                // Add search logic here
            });
        }
    }
}

// SYNTAX ERROR FREE initialization
document.addEventListener('DOMContentLoaded', () => {  // ✅ Proper syntax
    console.log('🌌 DOM loaded, initializing constellation...');
    
    try {
        const constellation = new ConstellationMap();
        window.constellation = constellation; // For debugging
    } catch (error) {
        console.error('💥 Error initializing:', error);
    }
});

console.log('📁 App.js loaded successfully');
