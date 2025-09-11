// Constellation Map Application
class ConstellationMap {
    constructor() {
        // Repository data
        this.repositories = [
            {
                "name": "HYPERFOCUSzone-starting-code-",
                "category": "Core",
                "description": "Core orchestrator ecosystem with agents, dopamine guardian, and memory crystals",
                "features": ["Orchestra Conductor", "Memory Crystals", "Dopamine Guardian", "BROski♾️ Agent"],
                "status": "Active",
                "connections": ["BROski-Hyperspace-template", "UNIFIED-EMPIRE", "Community"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUSzone-starting-code-",
                "x": 400, "y": 300, "size": "large"
            },
            {
                "name": "BROski-Hyperspace-template", 
                "category": "Dev Tools",
                "description": "VS Code workspace template with vibe engine and ADHD-friendly development environment",
                "features": ["VS Code Integration", "Vibe Engine", "ADHD Workflows", "Template System"],
                "status": "Active", 
                "connections": ["HYPERFOCUSzone-starting-code-", "HyperSpace"],
                "githubUrl": "https://github.com/welshDog/BROski-Hyperspace-template",
                "x": 200, "y": 200, "size": "medium"
            },
            {
                "name": "Hyper-vibe-engine",
                "category": "Creative", 
                "description": "Transform images into soundtracks and stories into immersive portals",
                "features": ["Image to Audio", "Story Generation", "Portal Creation", "Vibe Analysis"],
                "status": "Active",
                "connections": ["Hyper-vibe-studio"],
                "githubUrl": "https://github.com/welshDog/Hyper-vibe-engine", 
                "x": 600, "y": 150, "size": "medium"
            },
            {
                "name": "NEURO-SOCIAL-DREAMER",
                "category": "Social",
                "description": "Reimagining social media platforms for neurodivergent minds",
                "features": ["ADHD-Friendly UI", "Context Preservation", "Dopamine Optimization", "Social Anxiety Tools"],
                "status": "Development",
                "connections": ["My-Social-COMs-Buddy", "Community"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-ZONE-NEURO-SOCIAL-DREAMER-",
                "x": 500, "y": 450, "size": "medium"
            },
            {
                "name": "My-Social-COMs-Buddy", 
                "category": "Social",
                "description": "AI communications assistant designed for dyslexic and ADHD users",
                "features": ["Message Assistance", "Tone Analysis", "Clarity Enhancement", "Social Cues"],
                "status": "Active",
                "connections": ["NEURO-SOCIAL-DREAMER"],
                "githubUrl": "https://github.com/welshDog/My-Social-COMs-Buddy",
                "x": 300, "y": 450, "size": "small"
            },
            {
                "name": "HyperSpace",
                "category": "Dev Tools", 
                "description": "TypeScript-powered hyperspace for rapid development and prototyping",
                "features": ["TypeScript Integration", "Rapid Prototyping", "Modular Architecture", "ADHD Workflows"],
                "status": "Active",
                "connections": ["BROski-Hyperspace-template", "Hyper-vibe-studio"],
                "githubUrl": "https://github.com/welshDog/HyperSpace",
                "x": 150, "y": 350, "size": "small"
            },
            {
                "name": "Hyper-vibe-studio",
                "category": "Creative",
                "description": "VS Code automation revolution for creative workflows",
                "features": ["VS Code Automation", "Creative Pipelines", "Workflow Optimization", "Artist Tools"],
                "status": "Development", 
                "connections": ["Hyper-vibe-engine", "HyperSpace"],
                "githubUrl": "https://github.com/welshDog/Hyper-vibe-studio",
                "x": 600, "y": 350, "size": "small"
            },
            {
                "name": "UNIFIED-EMPIRE",
                "category": "Core",
                "description": "Empire-level coordination hub for the entire Hyperfocus Zone ecosystem", 
                "features": ["System Coordination", "Agent Management", "Resource Allocation", "Empire Architecture"],
                "status": "Development",
                "connections": ["HYPERFOCUSzone-starting-code-", "Omega-Vault"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-UNIFIED-EMPIRE",
                "x": 400, "y": 100, "size": "large"
            },
            {
                "name": "Community",
                "category": "Social", 
                "description": "Showcase and onboarding hub for new contributors",
                "features": ["Onboarding Flows", "Contributor Showcase", "Community Tools", "Public Gallery"],
                "status": "Active",
                "connections": ["HYPERFOCUSzone-starting-code-", "NEURO-SOCIAL-DREAMER"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUSzone-Community",
                "x": 700, "y": 250, "size": "medium"
            },
            {
                "name": "Omega-Vault",
                "category": "Core",
                "description": "Legendary archive containing HFZ artifacts, lore, and historical data",
                "features": ["Artifact Storage", "Version History", "Lore Documentation", "Legacy Preservation"],
                "status": "Maintenance", 
                "connections": ["UNIFIED-EMPIRE"],
                "githubUrl": "https://github.com/welshDog/HYPERFOCUS-ZONE-Omega-Vault-",
                "x": 250, "y": 50, "size": "small"
            },
            {
                "name": "Wish-for-Help",
                "category": "Social",
                "description": "Sponsorship and collaboration hub seeking allies and contributors",
                "features": ["Sponsorship Info", "Help Requests", "Collaboration Board", "Support Links"],
                "status": "Active",
                "connections": ["Community"],
                "githubUrl": "https://github.com/welshDog/Lyndz-Wish-for-Help-to-build-HyperfocusZone", 
                "x": 650, "y": 400, "size": "small"
            }
        ];

        // State management
        this.currentFilter = 'all';
        this.searchTerm = '';
        this.portalMode = false;
        this.isPanning = false;
        this.transform = { x: 0, y: 0, scale: 1 };
        this.selectedRepo = null;
        this.starElements = new Map();
        this.tooltip = null;

        // Initialize application
        this.init();
    }

    init() {
        console.log('Initializing Constellation Map...');
        this.setupElements();
        this.setupEventListeners();
        this.createBackgroundStars();
        this.renderConstellation();
        this.createParticles();
        this.startAnimationLoop();
        console.log('Constellation Map initialized successfully');
    }

    setupElements() {
        this.svg = document.getElementById('constellationSvg');
        this.viewport = document.getElementById('constellationViewport');
        this.infoPanel = document.getElementById('infoPanel');
        this.searchInput = document.getElementById('searchInput');
        this.backgroundCanvas = document.getElementById('backgroundCanvas');
        this.miniMap = document.getElementById('miniMapViewport');
        
        // Create tooltip element
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        this.tooltip.id = 'constellation-tooltip';
        document.body.appendChild(this.tooltip);
        
        // Set canvas size
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    setupEventListeners() {
        // Search functionality with immediate feedback
        this.searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase().trim();
            console.log('Search term:', this.searchTerm);
            this.updateVisualization();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                console.log('Filter changed to:', this.currentFilter);
                this.updateVisualization();
            });
        });

        // Portal mode toggle
        document.getElementById('portalModeBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.togglePortalMode();
        });

        // Info panel close
        document.getElementById('closePanelBtn').addEventListener('click', (e) => {
            e.preventDefault();
            this.closeInfoPanel();
        });

        // Pan and zoom functionality
        let isMouseDown = false;
        
        this.viewport.addEventListener('mousedown', (e) => {
            if (e.target === this.svg || e.target === this.viewport) {
                isMouseDown = true;
                this.startPanning(e);
            }
        });
        
        this.viewport.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                this.panMove(e);
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isMouseDown) {
                isMouseDown = false;
                this.stopPanning();
            }
        });

        this.viewport.addEventListener('wheel', (e) => this.handleZoom(e), { passive: false });

        // Touch support
        this.viewport.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.startPanning(e.touches[0]);
            }
        });
        
        this.viewport.addEventListener('touchmove', (e) => {
            e.preventDefault();
            if (e.touches.length === 1) {
                this.panMove(e.touches[0]);
            }
        }, { passive: false });
        
        this.viewport.addEventListener('touchend', () => {
            this.stopPanning();
        });
    }

    resizeCanvas() {
        const canvas = this.backgroundCanvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    createBackgroundStars() {
        const canvas = this.backgroundCanvas;
        
        // Create static stars
        this.backgroundStars = [];
        for (let i = 0; i < 200; i++) {
            this.backgroundStars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                brightness: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.005
            });
        }
    }

    animateBackground() {
        const canvas = this.backgroundCanvas;
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw twinkling stars
        this.backgroundStars.forEach(star => {
            const twinkle = Math.sin(Date.now() * star.twinkleSpeed) * 0.5 + 0.5;
            const alpha = star.brightness * twinkle * 0.8;
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
            
            // Add glow effect for larger stars
            if (star.size > 1.5) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 200, 255, ${alpha * 0.2})`;
                ctx.fill();
            }
        });
        
        // Add subtle nebula effect
        const gradient = ctx.createRadialGradient(
            canvas.width * 0.3, canvas.height * 0.4, 0,
            canvas.width * 0.3, canvas.height * 0.4, canvas.width * 0.6
        );
        gradient.addColorStop(0, 'rgba(50, 184, 198, 0.05)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    renderConstellation() {
        console.log('Rendering constellation with', this.repositories.length, 'repositories');
        
        // Clear existing content except defs
        const defsContent = this.svg.querySelector('defs');
        this.svg.innerHTML = '';
        if (defsContent) {
            this.svg.appendChild(defsContent);
        }
        
        this.starElements.clear();
        
        // Create connections first (so they appear behind stars)
        this.createConnections();
        
        // Create repository nodes
        this.repositories.forEach((repo, index) => {
            console.log(`Creating star for: ${repo.name}`);
            this.createStarNode(repo, index);
        });

        this.updateMiniMap();
        console.log('Constellation rendering complete');
    }

    createConnections() {
        this.repositories.forEach(repo => {
            repo.connections.forEach(connectionName => {
                const targetRepo = this.repositories.find(r => r.name === connectionName);
                if (targetRepo) {
                    this.createConnectionLine(repo, targetRepo);
                }
            });
        });
    }

    createConnectionLine(source, target) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', source.x);
        line.setAttribute('y1', source.y);
        line.setAttribute('x2', target.x);
        line.setAttribute('y2', target.y);
        line.classList.add('connection-line', 'pulsing');
        this.svg.appendChild(line);
    }

    createStarNode(repo, index) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('star-node');
        group.classList.add(`star-${repo.category.toLowerCase().replace(/\s+/g, '-')}`);
        group.classList.add(`star-${repo.size}`);
        group.dataset.repoName = repo.name;
        group.dataset.repoIndex = index;

        // Create star circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', repo.x);
        circle.setAttribute('cy', repo.y);
        circle.setAttribute('r', this.getStarRadius(repo.size));
        circle.classList.add(`star-${repo.category.toLowerCase().replace(/\s+/g, '-')}`);
        
        // Add label
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', repo.x);
        text.setAttribute('y', repo.y + this.getStarRadius(repo.size) + 15);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#ffffff');
        text.setAttribute('font-size', '10');
        text.setAttribute('font-family', 'var(--font-family-base)');
        text.textContent = this.truncateText(repo.name, 15);

        group.appendChild(circle);
        group.appendChild(text);

        // Store reference
        this.starElements.set(repo.name, group);

        // Add event listeners with proper event handling
        const clickHandler = (e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log(`Star clicked: ${repo.name}`);
            this.showRepoInfo(repo);
        };

        const mouseEnterHandler = (e) => {
            console.log(`Mouse enter: ${repo.name}`);
            this.showTooltip(e, repo);
        };

        const mouseLeaveHandler = () => {
            console.log(`Mouse leave: ${repo.name}`);
            this.hideTooltip();
        };

        const mouseMoveHandler = (e) => {
            if (this.tooltip.classList.contains('visible')) {
                this.updateTooltipPosition(e);
            }
        };

        group.addEventListener('click', clickHandler);
        group.addEventListener('mouseenter', mouseEnterHandler);
        group.addEventListener('mouseleave', mouseLeaveHandler);
        group.addEventListener('mousemove', mouseMoveHandler);

        // Style the group
        group.style.cursor = 'pointer';
        group.style.userSelect = 'none';

        this.svg.appendChild(group);
        console.log(`Star created for: ${repo.name}`);
    }

    getStarRadius(size) {
        switch(size) {
            case 'large': return 20;
            case 'medium': return 15;
            case 'small': return 12;
            default: return 15;
        }
    }

    truncateText(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }

    showTooltip(event, repo) {
        console.log('Showing tooltip for:', repo.name);
        
        this.tooltip.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 4px;">${repo.name}</div>
            <div style="color: #9ca3af; font-size: 11px; margin-bottom: 6px;">${repo.category} • ${repo.status}</div>
            <div style="font-size: 12px; line-height: 1.3;">${repo.description.length > 120 ? repo.description.substring(0, 120) + '...' : repo.description}</div>
        `;

        this.updateTooltipPosition(event);
        this.tooltip.classList.add('visible');
    }

    updateTooltipPosition(event) {
        const margin = 10;
        let left = event.clientX + margin;
        let top = event.clientY - margin;
        
        // Get tooltip dimensions after content is set
        const tooltipRect = this.tooltip.getBoundingClientRect();
        
        // Adjust if tooltip would go off-screen
        if (left + tooltipRect.width > window.innerWidth) {
            left = event.clientX - tooltipRect.width - margin;
        }
        if (top - tooltipRect.height < 0) {
            top = event.clientY + margin;
        }
        
        this.tooltip.style.left = left + 'px';
        this.tooltip.style.top = top + 'px';
    }

    hideTooltip() {
        console.log('Hiding tooltip');
        this.tooltip.classList.remove('visible');
    }

    showRepoInfo(repo) {
        console.log('Showing repo info for:', repo.name);
        this.selectedRepo = repo;
        
        // Populate info panel
        document.getElementById('infoTitle').textContent = repo.name;
        
        const categoryEl = document.getElementById('repoCategory');
        categoryEl.textContent = repo.category;
        categoryEl.className = `repo-category ${repo.category.toLowerCase().replace(/\s+/g, '-')}`;
        
        const statusEl = document.getElementById('repoStatus');
        statusEl.textContent = repo.status;
        statusEl.className = `repo-status ${repo.status.toLowerCase()}`;
        
        document.getElementById('repoDescription').textContent = repo.description;
        
        // Features
        const featuresList = document.getElementById('featuresList');
        featuresList.innerHTML = '';
        repo.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Connections
        const connectionsList = document.getElementById('connectionsList');
        const connectionsSection = document.getElementById('connectionsSection');
        
        if (repo.connections && repo.connections.length > 0) {
            connectionsSection.style.display = 'block';
            connectionsList.innerHTML = '';
            repo.connections.forEach(connName => {
                const span = document.createElement('span');
                span.className = 'connection-tag';
                span.textContent = connName;
                span.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetRepo = this.repositories.find(r => r.name === connName);
                    if (targetRepo) {
                        this.showRepoInfo(targetRepo);
                    }
                });
                connectionsList.appendChild(span);
            });
        } else {
            connectionsSection.style.display = 'none';
        }
        
        // GitHub link
        const githubLink = document.getElementById('githubLink');
        githubLink.href = repo.githubUrl;
        githubLink.onclick = () => {
            window.open(repo.githubUrl, '_blank');
            return false;
        };
        
        // Show panel with animation
        this.infoPanel.classList.remove('hidden');
        
        // Highlight connections
        this.highlightRepoConnections(repo);
        
        console.log('Info panel shown for:', repo.name);
    }

    highlightRepoConnections(repo) {
        // Reset all connections and stars
        document.querySelectorAll('.connection-line').forEach(line => {
            line.classList.remove('highlighted');
        });
        
        document.querySelectorAll('.star-node').forEach(star => {
            star.style.filter = '';
        });
        
        // Highlight selected star
        const selectedStar = this.starElements.get(repo.name);
        if (selectedStar) {
            selectedStar.style.filter = 'url(#strongGlow) brightness(1.5)';
        }
        
        // Highlight relevant connections
        document.querySelectorAll('.connection-line').forEach(line => {
            const x1 = parseFloat(line.getAttribute('x1'));
            const y1 = parseFloat(line.getAttribute('y1'));
            const x2 = parseFloat(line.getAttribute('x2'));
            const y2 = parseFloat(line.getAttribute('y2'));
            
            if ((x1 === repo.x && y1 === repo.y) || (x2 === repo.x && y2 === repo.y)) {
                line.classList.add('highlighted');
                
                // Highlight connected stars
                const connectedX = (x1 === repo.x && y1 === repo.y) ? x2 : x1;
                const connectedY = (x1 === repo.x && y1 === repo.y) ? y2 : y1;
                const connectedRepo = this.repositories.find(r => r.x === connectedX && r.y === connectedY);
                
                if (connectedRepo) {
                    const connectedStar = this.starElements.get(connectedRepo.name);
                    if (connectedStar) {
                        connectedStar.style.filter = 'url(#strongGlow) brightness(1.2)';
                    }
                }
            }
        });
    }

    closeInfoPanel() {
        console.log('Closing info panel');
        this.infoPanel.classList.add('hidden');
        this.selectedRepo = null;
        
        // Reset all visual highlights
        document.querySelectorAll('.connection-line').forEach(line => {
            line.classList.remove('highlighted');
        });
        
        document.querySelectorAll('.star-node').forEach(star => {
            star.style.filter = '';
        });
    }

    updateVisualization() {
        console.log(`Updating visualization - Filter: ${this.currentFilter}, Search: "${this.searchTerm}"`);
        
        let visibleCount = 0;
        
        this.repositories.forEach(repo => {
            const starElement = this.starElements.get(repo.name);
            if (starElement) {
                let shouldShow = true;
                
                // Filter by category
                if (this.currentFilter !== 'all' && repo.category !== this.currentFilter) {
                    shouldShow = false;
                }
                
                // Filter by search term
                if (this.searchTerm && shouldShow) {
                    const searchable = [
                        repo.name,
                        repo.description,
                        repo.category,
                        ...repo.features
                    ].join(' ').toLowerCase();
                    
                    if (!searchable.includes(this.searchTerm)) {
                        shouldShow = false;
                    }
                }
                
                starElement.classList.toggle('filtered', !shouldShow);
                if (shouldShow) visibleCount++;
            }
        });
        
        console.log(`${visibleCount} repositories visible`);
        
        // Update connections visibility
        this.updateConnectionsVisibility();
        this.updateMiniMap();
    }

    updateConnectionsVisibility() {
        document.querySelectorAll('.connection-line').forEach(line => {
            const x1 = parseFloat(line.getAttribute('x1'));
            const y1 = parseFloat(line.getAttribute('y1'));
            const x2 = parseFloat(line.getAttribute('x2'));
            const y2 = parseFloat(line.getAttribute('y2'));
            
            const sourceRepo = this.repositories.find(r => r.x === x1 && r.y === y1);
            const targetRepo = this.repositories.find(r => r.x === x2 && r.y === y2);
            
            if (sourceRepo && targetRepo) {
                const sourceVisible = this.isRepoVisible(sourceRepo);
                const targetVisible = this.isRepoVisible(targetRepo);
                
                line.style.opacity = (sourceVisible && targetVisible) ? '0.6' : '0.1';
            }
        });
    }

    isRepoVisible(repo) {
        if (this.currentFilter !== 'all' && repo.category !== this.currentFilter) {
            return false;
        }
        
        if (this.searchTerm) {
            const searchable = [
                repo.name,
                repo.description,
                repo.category,
                ...repo.features
            ].join(' ').toLowerCase();
            
            if (!searchable.includes(this.searchTerm)) {
                return false;
            }
        }
        
        return true;
    }

    togglePortalMode() {
        this.portalMode = !this.portalMode;
        const btn = document.getElementById('portalModeBtn');
        
        if (this.portalMode) {
            document.body.classList.add('portal-mode');
            btn.textContent = '🌀 Exit Portal';
            btn.style.background = 'rgba(147, 51, 234, 0.4)';
        } else {
            document.body.classList.remove('portal-mode');
            btn.textContent = '🌀 Portal Mode';
            btn.style.background = 'rgba(147, 51, 234, 0.2)';
        }
    }

    // Pan and zoom functionality
    startPanning(event) {
        this.isPanning = true;
        this.lastPanPoint = { x: event.clientX, y: event.clientY };
        this.viewport.classList.add('grabbing');
    }

    panMove(event) {
        if (!this.isPanning) return;
        
        const deltaX = event.clientX - this.lastPanPoint.x;
        const deltaY = event.clientY - this.lastPanPoint.y;
        
        this.transform.x += deltaX;
        this.transform.y += deltaY;
        
        this.updateTransform();
        this.lastPanPoint = { x: event.clientX, y: event.clientY };
    }

    stopPanning() {
        this.isPanning = false;
        this.viewport.classList.remove('grabbing');
    }

    handleZoom(event) {
        event.preventDefault();
        
        const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.max(0.5, Math.min(3, this.transform.scale * zoomFactor));
        
        if (newScale !== this.transform.scale) {
            const rect = this.viewport.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            this.transform.x -= (mouseX - this.transform.x) * (newScale / this.transform.scale - 1);
            this.transform.y -= (mouseY - this.transform.y) * (newScale / this.transform.scale - 1);
            this.transform.scale = newScale;
            
            this.updateTransform();
        }
    }

    updateTransform() {
        this.svg.style.transform = `translate(${this.transform.x}px, ${this.transform.y}px) scale(${this.transform.scale})`;
        this.updateMiniMap();
    }

    updateMiniMap() {
        const miniMap = this.miniMap;
        miniMap.innerHTML = '';
        
        const scale = 0.15;
        const offsetX = 20;
        const offsetY = 10;
        
        this.repositories.forEach(repo => {
            if (this.isRepoVisible(repo)) {
                const dot = document.createElement('div');
                dot.style.position = 'absolute';
                dot.style.left = (repo.x * scale + offsetX) + 'px';
                dot.style.top = (repo.y * scale + offsetY) + 'px';
                dot.style.width = '4px';
                dot.style.height = '4px';
                dot.style.borderRadius = '50%';
                dot.style.background = this.getCategoryColor(repo.category);
                dot.title = repo.name;
                
                if (this.selectedRepo && this.selectedRepo.name === repo.name) {
                    dot.style.boxShadow = `0 0 6px ${this.getCategoryColor(repo.category)}`;
                    dot.style.transform = 'scale(1.5)';
                }
                
                miniMap.appendChild(dot);
            }
        });
    }

    getCategoryColor(category) {
        switch(category) {
            case 'Core': return '#9333ea';
            case 'Creative': return '#32b8c6';
            case 'Social': return '#ec4899';
            case 'Dev Tools': return '#3b82f6';
            default: return '#ffffff';
        }
    }

    createParticles() {
        setInterval(() => {
            if (document.querySelectorAll('.particle').length < 10) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 25000);
            }
        }, 3000);
    }

    startAnimationLoop() {
        const animate = () => {
            this.animateBackground();
            requestAnimationFrame(animate);
        };
        animate();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing Constellation Map...');
    window.constellationMap = new ConstellationMap();
});