// HYPERFOCUS ZONE - CONSTELLATION MAP WITH PROPER DOM HANDLING

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌌 DOM loaded, initializing Hyperfocus Zone...');
    
    // Verify critical elements exist
    const viewport = document.getElementById('constellationViewport');
    const canvas = document.getElementById('backgroundCanvas');
    
    if (!viewport) {
        console.error('❌ ERROR: constellationViewport element not found!');
        document.body.innerHTML = '<div style="color: red; padding: 50px; text-align: center;"><h2>❌ Missing Element</h2><p>The constellationViewport element is missing from HTML</p></div>';
        return;
    }
    
    if (!canvas) {
        console.error('❌ ERROR: backgroundCanvas element not found!');
        return;
    }
    
    console.log('✅ All required elements found, starting constellation...');
    
    // Initialize constellation map
    try {
        const constellation = new ConstellationMap();
        window.constellation = constellation; // For debugging
        console.log('🎉 Constellation successfully initialized!');
    } catch (error) {
        console.error('💥 ERROR initializing constellation:', error);
        viewport.innerHTML = `
            <div style="color: red; text-align: center; padding: 50px;">
                <h2>❌ JavaScript Error</h2>
                <p>Error: ${error.message}</p>
                <p>Check browser console for details.</p>
            </div>
        `;
    }
});
class ConstellationMap {
    constructor() {
        // Complete Repository Ecosystem - ALL 24 STARS
        this.repositories = [
            // ⭐ CORE EMPIRE INFRASTRUCTURE
            {
                "name": "HYPERFOCUSzone-starting-code-",
                "category": "Core Empire",
                "description": "HYPERFOCUS Mega Fusion Ecosystem - The beating heart of the empire with Orchestra conductor, Memory Crystals, Dopamine Guardian",
                "features": ["Orchestra Conductor", "Memory Crystals", "Dopamine Guardian", "BROski♾️ Agent", "Python Modules"],
                "status": "Active",
                "connections": ["HYPERFOCUS-UNIFIED-EMPIRE", "BROski-Hyperspace-template", "HYPERFOCUSzone-Community"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUSzone-starting-code-",
                "x": 400, "y": 300, "size": "large"
            },
            {
                "name": "HYPERFOCUS-UNIFIED-EMPIRE",
                "category": "Core Empire",
                "description": "Unified AI HyperFocus Ecosystem - Empire-level coordination hub managing the entire constellation",
                "features": ["System Coordination", "Agent Management", "Resource Allocation", "Empire Architecture"],
                "status": "Active",
                "connections": ["HYPERFOCUSzone-starting-code-", "HYPERFOCUS-ZONE-Omega-Vault-", "hl-model-api"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-UNIFIED-EMPIRE",
                "x": 400, "y": 150, "size": "large"
            },
            {
                "name": "HYPERFOCUS-ZONE-Omega-Vault-",
                "category": "Core Empire",
                "description": "The Omega Vault - Legendary archive of artifacts, constructs, and relics forged in pure focus. Sci-fi x Marvel-tech energy preservation system",
                "features": ["Artifact Storage", "Version History", "Lore Documentation", "Legacy Preservation", "Sci-fi Tech"],
                "status": "Active", 
                "connections": ["HYPERFOCUS-UNIFIED-EMPIRE", "tHe-HYPER-dOoK-STorY"],
                "githubUrl": "https://github.com/welshDog/-HYPERFOCUS-ZONE-Omega-Vault-",
                "x": 200, "y": 100, "size": "medium"
            },

            // 🎨 CREATIVE & MULTIMEDIA CONSTELLATION
            {
                "name": "Hyper-vibe-engine",
                "category": "Creative Multimedia",
                "description": "Turn images into soundtracks. Turn stories into portals. Audio-visual transformation magic",
                "features": ["Image to Audio", "Story Generation", "Portal Creation", "Vibe Analysis", "Multimedia Magic"],
                "status": "Active",
                "connections": ["hyper-vibe-studio", "BROski-Hyperspace-template"],
                "githubUrl": "https://github.com/welshDog/Hyper-vibe-engine", 
                "x": 650, "y": 200, "size": "medium"
            },
            {
                "name": "hyper-vibe-studio",
                "category": "Creative Multimedia",
                "description": "🚀 Ultimate VS Code Workspace Configuration - Automation Revolution v3.0 for creative workflows",
                "features": ["VS Code Automation", "Creative Pipelines", "Workflow Optimization", "Artist Tools", "Revolution v3.0"],
                "status": "Active", 
                "connections": ["Hyper-vibe-engine", "BROski-Hyperspace-template"],
                "githubUrl": "https://github.com/welshDog/hyper-vibe-studio",
                "x": 650, "y": 350, "size": "medium"
            },

            // 🛠️ DEVELOPMENT TOOLS & ENVIRONMENTS
            {
                "name": "BROski-Hyperspace-template", 
                "category": "Dev Tools",
                "description": "BROski-Hyperspace-template a cool place to vibe code - ADHD-friendly development environment with vibe engine",
                "features": ["VS Code Integration", "Vibe Engine", "ADHD Workflows", "Template System", "Hyperfocus Mode"],
                "status": "Active", 
                "connections": ["HYPERFOCUSzone-starting-code-", "HyperSpace", "hyper-vibe-studio"],
                "githubUrl": "https://github.com/welshDog/BROski-Hyperspace-template",
                "x": 200, "y": 250, "size": "medium"
            },
            {
                "name": "HyperSpace",
                "category": "Dev Tools",
                "description": "TypeScript-powered hyperspace for rapid development and prototyping with modular architecture",
                "features": ["TypeScript Integration", "Rapid Prototyping", "Modular Architecture", "ADHD Workflows", "Hyperspace Navigation"],
                "status": "Active",
                "connections": ["BROski-Hyperspace-template", "github-ai-mangaer-helper"],
                "githubUrl": "https://github.com/welshDog/HyperSpace",
                "x": 100, "y": 300, "size": "small"
            },
            {
                "name": "github-ai-mangaer-helper",
                "category": "Dev Tools",
                "description": "🚀 Advanced GitHub repository security scanner with AI assistance - keeping the empire safe",
                "features": ["Security Scanning", "AI Assistance", "Repository Management", "Threat Detection", "Empire Protection"],
                "status": "Active",
                "connections": ["HyperSpace", "HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM"],
                "githubUrl": "https://github.com/welshDog/github-ai-mangaer-helper",
                "x": 150, "y": 450, "size": "small"
            },

            // 🤖 AI & MACHINE LEARNING
            {
                "name": "hl-model-api",
                "category": "AI & ML",
                "description": "test on a easy AI build on week ass laptop - proving AI can work on any hardware",
                "features": ["Lightweight AI", "Resource Optimization", "Model Testing", "Hardware Adaptation", "Accessibility"],
                "status": "Active", 
                "connections": ["HYPERFOCUS-UNIFIED-EMPIRE", "genai-stack"],
                "githubUrl": "https://github.com/welshDog/hl-model-api",
                "x": 500, "y": 100, "size": "small"
            },
            {
                "name": "genai-stack",
                "category": "AI & ML",
                "description": "Langchain + Docker + Neo4j + Ollama - Advanced generative AI stack forked and customized",
                "features": ["Langchain Integration", "Docker Containers", "Neo4j Database", "Ollama Models", "Generative AI"],
                "status": "Active",
                "connections": ["hl-model-api", "HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM"],
                "githubUrl": "https://github.com/welshDog/genai-stack",
                "x": 550, "y": 50, "size": "small"
            },

            // 🤝 SOCIAL NETWORK & COMMUNICATION
            {
                "name": "HYPERFOCUS-ZONE-NEURO-SOCIAL-DREAMER-",
                "category": "Social Network",
                "description": "Hyperfocus Social: Reimagining Social Media for Neurodivergent Creators - the future of inclusive social platforms",
                "features": ["ADHD-Friendly UI", "Context Preservation", "Dopamine Optimization", "Social Anxiety Tools", "Neurodivergent Design"],
                "status": "Development",
                "connections": ["My-Social-COMs-Buddy", "HYPERFOCUSzone-Community"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-ZONE-NEURO-SOCIAL-DREAMER-",
                "x": 600, "y": 450, "size": "medium"
            },
            {
                "name": "My-Social-COMs-Buddy", 
                "category": "Social Network",
                "description": "AI to help me communicate with others with my Dyslexia - breaking down communication barriers",
                "features": ["Message Assistance", "Tone Analysis", "Clarity Enhancement", "Social Cues", "Dyslexia Support"],
                "status": "Active",
                "connections": ["HYPERFOCUS-ZONE-NEURO-SOCIAL-DREAMER-", "hyperfocus-neurodivergent-HYPER-tool"],
                "githubUrl": "https://github.com/welshDog/My-Social-COMs-Buddy",
                "x": 450, "y": 500, "size": "medium"
            },

            // 🧠 NEURODIVERGENT TOOLS & ACCESSIBILITY
            {
                "name": "hyperfocus-neurodivergent-HYPER-tool",
                "category": "Neurodivergent Tools",
                "description": "Specialized JavaScript tool designed for neurodivergent minds - accessibility and productivity combined",
                "features": ["Neurodivergent Design", "Accessibility Features", "Focus Enhancement", "ADHD Support", "Custom Workflows"],
                "status": "Active",
                "connections": ["My-Social-COMs-Buddy", "BROski-Hyperspace-template"],
                "githubUrl": "https://github.com/welshDog/hyperfocus-neurodivergent-HYPER-tool",
                "x": 300, "y": 550, "size": "medium"
            },

            // 🏘️ COMMUNITY & SHOWCASES
            {
                "name": "HYPERFOCUSzone-Community",
                "category": "Community",
                "description": "HYPERFOCUS Mega Fusion Ecosystem - Community Showcase for onboarding and collaboration",
                "features": ["Onboarding Flows", "Contributor Showcase", "Community Tools", "Public Gallery", "Collaboration Hub"],
                "status": "Active",
                "connections": ["HYPERFOCUSzone-starting-code-", "HYPERFOCUSzone-DEV-Community", "Lyndz-Wish-for-Help-to-build-HyperfocusZone"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUSzone-Community",
                "x": 700, "y": 300, "size": "medium"
            },
            {
                "name": "HYPERFOCUSzone-DEV-Community",
                "category": "Community", 
                "description": "HYPERFOCUS Mega Fusion Ecosystem - For Dev Community Showcase - developer-focused collaboration space",
                "features": ["Developer Showcase", "Code Collaboration", "Tech Community", "Open Source", "Dev Onboarding"],
                "status": "Active",
                "connections": ["HYPERFOCUSzone-Community", "github-ai-mangaer-helper"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUSzone-DEV-Community",
                "x": 750, "y": 400, "size": "small"
            },
            {
                "name": "Lyndz-Wish-for-Help-to-build-HyperfocusZone",
                "category": "Community",
                "description": "Sponsorship report + creative ADHD project - the heart that keeps the entire ecosystem alive",
                "features": ["Sponsorship Info", "Help Requests", "Collaboration Board", "Support Links", "Empire Funding"],
                "status": "Active",
                "connections": ["HYPERFOCUSzone-Community", "hyperfocus-constellation"],
                "githubUrl": "https://github.com/welshDog/Lyndz-Wish-for-Help-to-build-HyperfocusZone", 
                "x": 750, "y": 200, "size": "medium"
            },

            // 🛰️ HARDWARE & SYSTEMS
            {
                "name": "RAZ-PI-EYE",
                "category": "Hardware Systems",
                "description": "Way to see inside a raspberry pi CPU with wifi or bluetooth - hardware meets hyperfocus",
                "features": ["Raspberry Pi Integration", "CPU Monitoring", "WiFi Control", "Bluetooth Connectivity", "Hardware Hacking"],
                "status": "Active",
                "connections": ["HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM", "hl-model-api"],
                "githubUrl": "https://github.com/welshDog/RAZ-PI-EYE",
                "x": 100, "y": 150, "size": "small"
            },

            // 📚 DOCUMENTATION & STORIES  
            {
                "name": "tHe-HYPER-dOoK-STorY",
                "category": "Documentation",
                "description": "OUR HYPER dOoK of life - the living story and documentation of the hyperfocus journey",
                "features": ["Life Documentation", "Journey Stories", "Personal Archive", "Memory Preservation", "Hyperfocus History"],
                "status": "Active",
                "connections": ["HYPERFOCUS-ZONE-Omega-Vault-", "HyperLinks"],
                "githubUrl": "https://github.com/welshDog/tHe-HYPER-dOoK-STorY",
                "x": 50, "y": 200, "size": "small"
            },
            {
                "name": "HyperLinks",
                "category": "Documentation",
                "description": "My links page idea - connecting all the constellation pieces for easy navigation",
                "features": ["Link Organization", "Navigation Hub", "Quick Access", "Resource Directory", "Constellation Map"],
                "status": "Active",
                "connections": ["tHe-HYPER-dOoK-STorY", "hyperfocus-constellation"],
                "githubUrl": "https://github.com/welshDog/HyperLinks",
                "x": 50, "y": 350, "size": "small"
            },

            // 🧪 TESTING & DEVELOPMENT
            {
                "name": "HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM",
                "category": "Testing Systems",
                "description": "HYPERFOCUS ZONE TEST INFO SYSTEM - the testing ground where humans and AI become the ultimate team",
                "features": ["System Testing", "AI-Human Collaboration", "Information Systems", "Quality Assurance", "Ultimate Teamwork"],
                "status": "Active",
                "connections": ["genai-stack", "RAZ-PI-EYE", "github-ai-mangaer-helper"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM",
                "x": 350, "y": 50, "size": "small"
            },

            // 🎮 SPECIAL PROJECTS & EXPERIMENTS
            {
                "name": "https-github.com-welshDog-HYPERfocusZone-Gemmi-build",
                "category": "Special Projects",
                "description": "Home of legendary neurodivergent builders, creative rebels, & the world's first AI Agent Army🎮 together Dream it. Build it. HyperFocus ZONE.",
                "features": ["AI Agent Army", "Creative Rebels", "Neurodivergent Builders", "Dream Building", "Legendary Projects"],
                "status": "Development",
                "connections": ["HYPERFOCUSzone-starting-code-", "HYPERFOCUS-UNIFIED-EMPIRE"],
                "githubUrl": "https://github.com/welshDog/https-github.com-welshDog-HYPERfocusZone-Gemmi-build",
                "x": 500, "y": 200, "size": "medium"
            },
            {
                "name": "hyperfocus-constellation",
                "category": "Special Projects",
                "description": "Hyperfocus constellation just a fun idea 😊🤣 - the interactive map of the entire galaxy you're exploring right now!",
                "features": ["Interactive Visualization", "Galaxy Mapping", "Constellation Navigation", "Fun Interface", "Ecosystem Overview"],
                "status": "Active",
                "connections": ["Lyndz-Wish-for-Help-to-build-HyperfocusZone", "HyperLinks"],
                "githubUrl": "https://github.com/welshDog/hyperfocus-constellation",
                "x": 800, "y": 300, "size": "medium"
            },

            // 🔧 ENTERPRISE TOOLS (Forked & Customized)
            {
                "name": "vscode-java",
                "category": "Enterprise Tools",
                "description": "Java Language Support for Visual Studio Code - forked and customized for the empire's needs",
                "features": ["Java Development", "VS Code Extension", "Language Support", "Enterprise Ready", "Customized"],
                "status": "Maintenance",
                "connections": ["BROski-Hyperspace-template"],
                "githubUrl": "https://github.com/welshDog/vscode-java",
                "x": 150, "y": 550, "size": "small"
            },
            {
                "name": "grafana-by-example",
                "category": "Enterprise Tools",
                "description": "Grafana Configuration Examples - forked monitoring and visualization system for empire metrics",
                "features": ["Monitoring", "Visualization", "Configuration Examples", "Metrics Tracking", "Enterprise Monitoring"],
                "status": "Maintenance",
                "connections": ["RAZ-PI-EYE", "HYPERFOCUS-ZONE-TEST-INFO-SYSYTEM"],
                "githubUrl": "https://github.com/welshDog/grafana-by-example",
                "x": 50, "y": 450, "size": "small"
            }
        ];

        // Enhanced categories with colors and descriptions
        this.categories = {
            "Core Empire": { color: "#9333ea", description: "The foundational systems that power everything" },
            "Creative Multimedia": { color: "#32b8c6", description: "Audio-visual transformation and creative tools" },
            "Dev Tools": { color: "#3b82f6", description: "Development environments and productivity tools" },
            "AI & ML": { color: "#10b981", description: "Artificial intelligence and machine learning systems" },
            "Social Network": { color: "#ec4899", description: "Communication and social platforms" },
            "Neurodivergent Tools": { color: "#f59e0b", description: "Accessibility and neurodivergent-focused solutions" },
            "Community": { color: "#8b5cf6", description: "Collaboration, showcases, and community building" },
            "Hardware Systems": { color: "#ef4444", description: "Physical hardware integration and monitoring" },
            "Documentation": { color: "#6b7280", description: "Stories, archives, and knowledge preservation" },
            "Testing Systems": { color: "#14b8a6", description: "Quality assurance and testing frameworks" },
            "Special Projects": { color: "#f97316", description: "Experimental and showcase projects" },
            "Enterprise Tools": { color: "#84cc16", description: "Forked and customized enterprise solutions" }
        };

        // UI state
        this.selectedRepo = null;
        this.currentFilter = 'all';
        this.portalMode = false;
        this.zoom = 0.8; // Start zoomed out to see full galaxy
        this.panX = 0;
        this.panY = 0;
        this.isDragging = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;

        // Initialize
        this.init();
    }

    init() {
        this.createBackgroundStars();
        this.createSVG();
        this.bindEvents();
        this.render();
        this.showWelcomeMessage();
        
        // Hide loading screen
        setTimeout(() => {
            const loading = document.querySelector('.loading-overlay');
            if (loading) {
                loading.classList.add('hidden');
            }
        }, 1500);
    }

    showWelcomeMessage() {
        // Create welcome overlay
        const welcome = document.createElement('div');
        welcome.className = 'welcome-overlay';
        welcome.innerHTML = `
            <div class="welcome-content">
                <h1>🌌 Welcome to the Complete Hyperfocus Zone Galaxy</h1>
                <p><strong>24 repositories. 12 categories. 1 legendary ecosystem.</strong></p>
                <p>Each star represents a project built by neurodivergent innovation.<br>
                Click any star to explore. Use filters to navigate by category.</p>
                <p><em>This is what happens when ADHD hyperfocus meets unlimited creativity.</em></p>
                <button class="btn btn--primary" onclick="this.parentElement.parentElement.remove()">
                    🚀 Explore the Galaxy
                </button>
            </div>
        `;
        welcome.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.9); backdrop-filter: blur(10px);
            display: flex; align-items: center; justify-content: center;
            z-index: 200; color: white; text-align: center;
        `;
        welcome.querySelector('.welcome-content').style.cssText = `
            max-width: 600px; padding: 2rem; 
            background: rgba(255,255,255,0.1); border-radius: 15px;
            border: 1px solid rgba(255,255,255,0.2);
        `;
        
        document.body.appendChild(welcome);

        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (welcome.parentElement) {
                welcome.remove();
            }
        }, 10000);
    }

    createBackgroundStars() {
        const canvas = document.getElementById('backgroundCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Create more background stars for the expanded galaxy
        for (let i = 0; i < 300; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 2;
            const opacity = Math.random() * 0.8 + 0.2;

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fill();
        }

        // Add nebula effects
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
            gradient.addColorStop(0, 'rgba(147, 51, 234, 0.1)');
            gradient.addColorStop(0.5, 'rgba(50, 184, 198, 0.05)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(x - 200, y - 200, 400, 400);
        }

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.createBackgroundStars();
        });
    }

    createSVG() {
        const viewport = document.getElementById('constellationViewport');
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.svg.setAttribute('class', 'constellation-svg');
        this.svg.setAttribute('viewBox', '0 0 1000 700'); // Expanded viewBox
        this.svg.innerHTML = `
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <filter id="strongGlow">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g id="constellationGroup"></g>
        `;
        viewport.appendChild(this.svg);
        this.group = this.svg.querySelector('#constellationGroup');
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Enhanced filter buttons for all categories
        this.updateFilterButtons();
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                this.applyFilters();
            });
        });

        // Portal mode
        const portalBtn = document.getElementById('portalModeBtn');
        portalBtn.addEventListener('click', () => {
            this.portalMode = !this.portalMode;
            this.svg.classList.toggle('portal-mode', this.portalMode);
            portalBtn.textContent = this.portalMode ? '🌌 Exit Portal' : '🌀 Portal Mode';
        });

        // Pan and zoom (enhanced for larger galaxy)
        this.svg.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.lastMouseX = e.clientX;
            this.lastMouseY = e.clientY;
            this.svg.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const deltaX = e.clientX - this.lastMouseX;
                const deltaY = e.clientY - this.lastMouseY;
                this.panX += deltaX;
                this.panY += deltaY;
                this.updateTransform();
                this.lastMouseX = e.clientX;
                this.lastMouseY = e.clientY;
            }
        });

        document.addEventListener('mouseup', () => {
            this.isDragging = false;
            this.svg.style.cursor = 'grab';
        });

        // Close info panel
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close-btn')) {
                this.closeInfoPanel();
            }
        });

        // Enhanced zoom for large galaxy
        this.svg.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
            this.zoom *= zoomFactor;
            this.zoom = Math.max(0.1, Math.min(5, this.zoom));
            this.updateTransform();
        });
    }

    updateFilterButtons() {
        const filterContainer = document.querySelector('.filter-buttons');
        if (!filterContainer) return;

        // Create buttons for all categories
        const categories = Object.keys(this.categories);
        filterContainer.innerHTML = `
            <button class="btn btn--sm filter-btn active" data-category="all">All (24)</button>
        ` + categories.map(category => {
            const count = this.repositories.filter(r => r.category === category).length;
            return `<button class="btn btn--sm filter-btn category-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}" data-category="${category}">${category} (${count})</button>`;
        }).join('');
    }

    updateTransform() {
        this.group.setAttribute('transform', `translate(${this.panX}, ${this.panY}) scale(${this.zoom})`);
    }

    render() {
        this.group.innerHTML = '';
        this.drawConnections();
        this.drawRepositories();
        this.addGalaxyStats();
    }

    addGalaxyStats() {
        // Add galaxy statistics
        const stats = document.createElement('div');
        stats.className = 'galaxy-stats';
        stats.innerHTML = `
            <div class="stats-content">
                <h3>🌌 Galaxy Statistics</h3>
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-number">${this.repositories.length}</span>
                        <span class="stat-label">Total Repositories</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${Object.keys(this.categories).length}</span>
                        <span class="stat-label">Categories</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${this.repositories.filter(r => r.status === 'Active').length}</span>
                        <span class="stat-label">Active Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">18,000+</span>
                        <span class="stat-label">Python Modules</span>
                    </div>
                </div>
            </div>
        `;
        stats.style.cssText = `
            position: fixed; top: 80px; left: 20px; 
            background: rgba(0,0,0,0.6); backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
            padding: 1rem; color: white; z-index: 15; max-width: 250px;
        `;
        
        if (!document.querySelector('.galaxy-stats')) {
            document.body.appendChild(stats);
        }
    }

    drawConnections() {
        this.repositories.forEach(repo => {
            repo.connections.forEach(connName => {
                const target = this.repositories.find(r => r.name === connName);
                if (target) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', repo.x);
                    line.setAttribute('y1', repo.y);
                    line.setAttribute('x2', target.x);
                    line.setAttribute('y2', target.y);
                    line.setAttribute('class', 'connection-line pulsing');
                    line.setAttribute('stroke', this.categories[repo.category]?.color || '#666');
                    this.group.appendChild(line);
                }
            });
        });
    }

    drawRepositories() {
        this.repositories.forEach(repo => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', repo.x);
            circle.setAttribute('cy', repo.y);
            circle.setAttribute('r', this.getSizeValue(repo.size));
            circle.setAttribute('fill', this.categories[repo.category]?.color || '#666');
            circle.setAttribute('class', `star-node star-${repo.size}`);
            
            // Add click handler
            circle.addEventListener('click', () => {
                this.showRepoInfo(repo);
            });

            // Add hover tooltip
            circle.addEventListener('mouseenter', (e) => {
                this.showTooltip(e, repo);
            });

            circle.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });

            this.group.appendChild(circle);

            // Add label with category info
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', repo.x);
            text.setAttribute('y', repo.y + this.getSizeValue(repo.size) + 20);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('class', 'star-label');
            text.style.fill = 'rgba(255, 255, 255, 0.8)';
            text.style.fontSize = '10px';
            text.style.pointerEvents = 'none';
            
            const shortName = repo.name.replace(/-/g, ' ').substring(0, 15) + (repo.name.length > 15 ? '...' : '');
            text.textContent = shortName;
            this.group.appendChild(text);
        });
    }

    getSizeValue(size) {
        switch (size) {
            case 'large': return 18;
            case 'medium': return 14;
            case 'small': return 10;
            default: return 14;
        }
    }

    showRepoInfo(repo) {
        this.selectedRepo = repo;
        
        const panel = document.querySelector('.info-panel') || this.createInfoPanel();
        
        // Update content with enhanced information
        panel.querySelector('.info-title').textContent = repo.name;
        
        const categoryClass = repo.category.toLowerCase().replace(/[^a-z0-9]/g, '-');
        const categoryEl = panel.querySelector('.repo-category');
        categoryEl.textContent = repo.category;
        categoryEl.className = `repo-category ${categoryClass}`;
        categoryEl.style.background = this.categories[repo.category]?.color + '33';
        categoryEl.style.color = this.categories[repo.category]?.color;
        
        panel.querySelector('.repo-status').textContent = repo.status;
        panel.querySelector('.repo-status').className = `repo-status ${repo.status.toLowerCase()}`;
        
        panel.querySelector('.repo-description').textContent = repo.description;
        
        // Features list
        const featuresList = panel.querySelector('.features-list');
        featuresList.innerHTML = repo.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Connections with category colors
        const connectionsList = panel.querySelector('.connections-list');
        connectionsList.innerHTML = repo.connections.map(conn => {
            const connectedRepo = this.repositories.find(r => r.name === conn);
            const color = connectedRepo ? this.categories[connectedRepo.category]?.color : '#666';
            return `<span class="connection-tag" data-repo="${conn}" style="border-color: ${color}">${conn}</span>`;
        }).join('');
        
        // GitHub link
        panel.querySelector('.github-link').href = repo.githubUrl;
        
        // Show panel
        panel.classList.remove('hidden');

        // Add connection tag click handlers
        panel.querySelectorAll('.connection-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                const targetRepo = this.repositories.find(r => r.name === tag.dataset.repo);
                if (targetRepo) {
                    this.showRepoInfo(targetRepo);
                }
            });
        });
    }

    createInfoPanel() {
        const panel = document.createElement('div');
        panel.className = 'info-panel hidden';
        panel.innerHTML = `
            <div class="info-panel-header">
                <h3 class="info-title"></h3>
                <button class="close-btn">✕</button>
            </div>
            <div class="info-panel-body">
                <div class="repo-category"></div>
                <div class="repo-status"></div>
                <p class="repo-description"></p>
                
                <div class="features-section">
                    <h4>Key Features:</h4>
                    <ul class="features-list"></ul>
                </div>
                
                <div class="connections-section">
                    <h4>Connected To:</h4>
                    <div class="connections-list"></div>
                </div>
                
                <div class="panel-actions">
                    <a href="#" target="_blank" class="btn btn--primary github-link">🌟 Explore on GitHub</a>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
        return panel;
    }

    closeInfoPanel() {
        const panel = document.querySelector('.info-panel');
        if (panel) {
            panel.classList.add('hidden');
        }
        this.selectedRepo = null;
    }

    showTooltip(e, repo) {
        let tooltip = document.querySelector('.tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }

        tooltip.innerHTML = `
            <strong>${repo.name}</strong><br>
            <span style="color: ${this.categories[repo.category]?.color}">${repo.category}</span> • ${repo.status}<br>
            <small>${repo.description.substring(0, 60)}...</small>
        `;

        tooltip.style.left = e.pageX + 10 + 'px';
        tooltip.style.top = e.pageY - 10 + 'px';
        tooltip.classList.add('visible');
    }

    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.classList.remove('visible');
        }
    }

    handleSearch(query) {
        const filtered = this.repositories.filter(repo => 
            repo.name.toLowerCase().includes(query.toLowerCase()) ||
            repo.description.toLowerCase().includes(query.toLowerCase()) ||
            repo.category.toLowerCase().includes(query.toLowerCase()) ||
            repo.features.some(f => f.toLowerCase().includes(query.toLowerCase()))
        );

        // Highlight matching repositories
        document.querySelectorAll('.star-node').forEach((node, index) => {
            const repo = this.repositories[index];
            if (query === '' || filtered.includes(repo)) {
                node.classList.remove('filtered');
            } else {
                node.classList.add('filtered');
            }
        });

        // Update search results count
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.style.borderColor = filtered.length > 0 || query === '' ? '' : '#ef4444';
        }
    }

    applyFilters() {
        document.querySelectorAll('.star-node').forEach((node, index) => {
            const repo = this.repositories[index];
            if (this.currentFilter === 'all' || repo.category === this.currentFilter) {
                node.classList.remove('filtered');
            } else {
                node.classList.add('filtered');
            }
        });
    }

    createParticles() {
        setInterval(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 25000);
        }, 3000);
    }
}

// Initialize the complete constellation map
document.addEventListener('DOMContentLoaded', () => {
    const map = new ConstellationMap();
    map.createParticles();
});

// Handle viewport resize
window.addEventListener('resize', () => {
    const svg = document.querySelector('.constellation-svg');
    if (svg) {
        svg.style.width = '100%';
        svg.style.height = '100%';
    }
});
