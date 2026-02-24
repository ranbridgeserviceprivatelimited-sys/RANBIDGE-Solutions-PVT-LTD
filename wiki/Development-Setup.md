# Development Setup

This guide provides comprehensive instructions for setting up the development environment for the Ranbridge Solutions project.

## 🛠️ Prerequisites

### Required Software
- **Node.js** 18.0 or higher
- **npm** 8.0 or higher (or yarn 1.22+)
- **Git** 2.30 or higher
- **VS Code** (recommended) with extensions

### Recommended VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

## 🚀 Quick Start

### 1. Clone Repository
```bash
# Clone the repository
git clone https://github.com/ranbridgeserviceprivatelimited-sys/RANBIDGE-Solutions-PVT-LTD.git

# Navigate to project directory
cd RANBIDGE-Solutions-PVT-LTD/Project
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn install

# Verify installation
npm run check-types    # Check TypeScript types
```

### 3. Environment Setup
```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
# Add your API keys and configuration
```

### 4. Start Development Server
```bash
# Start development server
npm run dev

# Application will be available at:
# http://localhost:3000
```

## 📁 Project Structure

### Development Directory Layout
```
Project/
├── components/              # React components
│   ├── Header.tsx         # Navigation header
│   ├── Home.tsx           # Homepage hero & services
│   ├── About.tsx          # About page content
│   ├── Services.tsx        # Services listing
│   ├── Domains.tsx         # Technical domains
│   ├── Internship.tsx      # Internship programs
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Site footer
├── src/                    # Source files
├── public/                  # Static assets
│   ├── company-info.json    # SEO data
│   ├── opensearch.xml      # Browser search
│   ├── manifest.json        # PWA manifest
│   └── organization.json    # Schema.org data
├── App.tsx                 # Main app component
├── index.html              # HTML template
├── index.css               # Global styles
├── vite.config.ts          # Build configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies & scripts
```

## 🔧 Available Scripts

### Development Scripts
```bash
npm run dev              # Start development server with hot reload
npm run build            # Build for production
npm run preview          # Preview production build locally
npm run check-types       # Check TypeScript compilation
npm run lint             # Run ESLint checks
```

### Build Scripts
```bash
npm run build            # Creates optimized production build
npm run preview          # Serves production build for testing
```

## 🎨 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes
# ... develop your feature ...

# Commit with conventional message
git add .
git commit -m "feat: add new component with functionality"

# Push to remote
git push origin feature/new-component

# Create pull request for review
```

### 2. Code Style Guidelines

#### TypeScript Standards
- Use interfaces for props and state
- Prefer explicit return types
- Use generics where appropriate
- Avoid `any` type when possible

#### React Standards
- Use functional components with hooks
- Implement proper error boundaries
- Use memo for performance optimization
- Follow React 18+ patterns

#### CSS Standards (Tailwind)
- Use utility classes over custom CSS
- Follow mobile-first responsive design
- Implement consistent spacing and color system
- Use semantic HTML elements

### 3. Testing Strategy
```bash
# Run type checking
npm run check-types

# Run linting
npm run lint

# Test build process
npm run build
npm run preview
```

## 🔍 Debugging

### Common Issues & Solutions

#### Port Already in Use
```bash
# Check what's using port 3000
netstat -an | grep :3000

# Kill process if needed
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

#### Build Errors
```bash
# Clear build cache
rm -rf dist node_modules

# Reinstall dependencies
npm install

# Check Node.js version compatibility
node --version  # Should be 18+
```

#### TypeScript Issues
```bash
# Rebuild type definitions
npm run build

# Check for type errors
npx tsc --noEmit
```

## 🌐 Environment Variables

### Development Variables
Create `.env.local` file in project root:

```env
# Development configuration
VITE_APP_TITLE=Ranbridge Solutions (Development)
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_MOCK_API=true

# Feature flags
VITE_ENABLE_VOICE_ASSISTANT=true
VITE_ENABLE_ANALYTICS=false
```

### Production Variables
Set in deployment platform (Render/Vercel/Netlify):

```env
# Production configuration
NODE_ENV=production
VITE_APP_TITLE=Ranbridge Solutions Private Limited
VITE_API_BASE_URL=https://api.ranbidge.com
GEMINI_API_KEY=your_production_key_here
```

## 📱 Mobile Development

### Responsive Testing
```bash
# Use Chrome DevTools device emulation
# Test at various breakpoints:
# - Mobile: 375x667, 414x896
# - Tablet: 768x1024, 1024x768  
# - Desktop: 1920x1080

# Use browser's device mode
# Chrome: Settings > Devices > Mobile
# Firefox: Responsive Design Mode
```

### Touch Optimization
- Minimum touch target: 44px
- Spacing between interactive elements: 8px+
- Avoid hover states on touch devices
- Test on actual devices when possible

## 🔧 IDE Configuration

### VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.tsx": "typescriptreact",
    "*.ts": "typescriptreact"
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🚀 Performance Optimization

### Development Performance
```bash
# Enable fast refresh
VITE_FAST_REFRESH=true

# Optimize bundle size
npm run build --analyze

# Check bundle size
npx vite-bundle-analyzer dist/stats.html
```

### Code Splitting
The project uses dynamic imports for optimal loading:

```typescript
// Example of code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Route-based splitting
const routes = [
  {
    path: '/heavy-page',
    component: React.lazy(() => import('./HeavyPage'))
  }
];
```

## 📞 Getting Help

### Common Issues
1. **Installation Problems**: Check Node.js version and clear npm cache
2. **Build Failures**: Verify TypeScript configuration and dependencies
3. **Style Issues**: Check Tailwind CSS imports and class names
4. **Routing Problems**: Verify React Router configuration

### Support Channels
- **Documentation**: Check this wiki and README files
- **Issues**: Create GitHub issue with detailed description
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact development team at dev@ranbidge.com

---

*For deployment instructions, see [Deployment](./Deployment) wiki page.*
