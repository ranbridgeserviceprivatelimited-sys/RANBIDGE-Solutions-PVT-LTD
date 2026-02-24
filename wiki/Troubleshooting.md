# Troubleshooting

This guide provides solutions to common issues encountered while developing, deploying, or maintaining the Ranbridge Solutions website.

## 🚨 Quick Fixes

### Most Common Issues

#### Port Already in Use
```bash
# Check what's using port 3000
netstat -an | grep :3000

# Kill process using port
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001

# For Windows users
netstat -ano | findstr :3000
taskkill /F /IM node.exe /FI "PID eq $PID"
```

#### Build Failures
```bash
# Clear build cache and reinstall
rm -rf dist node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Clear npm cache
npm cache clean --force
```

#### TypeScript Errors
```bash
# Rebuild type definitions
npm run build

# Check for type errors
npx tsc --noEmit

# Update dependencies
npm update typescript @latest
```

#### Dependency Issues
```bash
# Check for vulnerabilities
npm audit

# Fix security issues
npm audit fix

# Update specific package
npm install package-name@latest
```

## 🔧 Development Issues

### Environment Setup

#### Node.js Version Mismatch
```bash
# Check current version
node --version

# Install correct version using nvm
nvm install 18
nvm use 18
```

#### Environment Variables Not Loading
```bash
# Check .env file location
ls -la .env*

# Verify variable names
cat .env.local

# Restart development server
npm run dev
```

#### Hot Reloading Not Working
```bash
# Check Vite configuration
cat vite.config.ts

# Ensure fast refresh is enabled
# Add to vite.config.ts:
server: {
  hmr: {
    overlay: true
  }
}
```

### CSS/Styling Issues

#### Tailwind CSS Not Working
```bash
# Check Tailwind configuration
cat tailwind.config.js

# Rebuild CSS
npm run build

# Check PostCSS configuration
cat postcss.config.js
```

#### Styles Not Updating
```bash
# Clear browser cache
# Hard refresh: Ctrl+Shift+R

# Clear CSS cache
rm -rf .vite
npm run dev
```

### Component Issues

#### React Component Not Rendering
```typescript
// Check for import errors
import { ComponentName } from './components/ComponentName';

// Verify component export
export default ComponentName;

// Check for TypeScript errors
interface Props {
  name: string;
}
```

#### State Management Issues
```typescript
// Check useState usage
const [state, setState] = useState<Type>(initialValue);

// Verify state updates
setState(newValue);
console.log(state); // Should show updated value
```

## 🌐 Deployment Issues

### Render Deployment

#### Build Failures on Render
```bash
# Check build logs in Render dashboard
# Look for specific error messages

# Common issues:
# - Node.js version incompatibility
# - Missing dependencies
# - Build timeout
# - Memory limit exceeded

# Fix: Update package.json engines field
"engines": {
  "node": ">=18.0.0"
}
```

#### Environment Variables Not Working
```bash
# Check Render environment variables
# In Render dashboard > Environment tab

# Ensure variables are correctly named
NODE_ENV=production
GEMINI_API_KEY=your_key_here

# Test locally
npm run build
```

#### Site Not Loading
```bash
# Check build output
ls -la dist/

# Verify index.html exists
cat dist/index.html

# Check console for errors
# Open deployed site and check browser console
```

#### Custom Domain Issues
```bash
# Check DNS configuration
nslookup your-domain.com

# Verify SSL certificate
openssl s_client -connect your-domain.com:443

# Check Render domain settings
# In Render dashboard > Custom Domains
```

### Docker Issues

#### Container Won't Start
```bash
# Check Docker logs
docker logs ranbidge-solutions

# Check container status
docker ps -a

# Rebuild image
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

#### Port Mapping Issues
```bash
# Check docker-compose.yml ports
ports:
  - "3000:80"  # Host:Container

# Access correct port
# http://localhost:3000 (not http://localhost:80)
```

## 📱 Mobile Issues

### Responsive Design Problems

#### Layout Breaking on Mobile
```css
/* Check media queries */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Common fixes */
.mobile-menu {
  display: block;
}

.desktop-only {
  display: none;
}
```

#### Touch Issues
```css
/* Ensure touch targets are large enough */
.touch-target {
  min-width: 44px;
  min-height: 44px;
  padding: 8px;
}

/* Remove hover effects on touch devices */
@media (hover: none) and (pointer: coarse) {
  .no-touch-hover {
    /* Remove hover effects */
  }
}
```

### Performance Issues

#### Slow Loading on Mobile
```javascript
// Check bundle size
npm run build --analyze

// Implement lazy loading
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// Optimize images
<img src="image.webp" loading="lazy" alt="Description">
```

## 🔍 SEO Issues

### Pages Not Indexed
```html
<!-- Check meta tags -->
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://your-domain.com/page">

<!-- Submit sitemap to Google -->
https://search.google.com/search-console/sitemap
```

### Search Ranking Issues
```bash
# Check for duplicate content
# Use canonical URLs

# Improve page load speed
# Test with Google PageSpeed Insights

# Check mobile usability
# Use Google Mobile-Friendly Test
```

## 🐛 Browser Compatibility

### Common Browser Issues

#### CSS Not Loading in Safari
```css
/* Use autoprefixer for vendor prefixes */
.display-flex {
  display: -webkit-flex;
  display: flex;
}

/* Safari specific fixes */
@supports not (display: grid) {
  .safari-grid {
    display: block;
  }
}
```

#### JavaScript Errors in IE
```javascript
// Check for unsupported features
if (typeof fetch !== 'undefined') {
  // Use fetch
} else {
  // Fallback for older browsers
}

// Polyfill necessary features
import 'core-js/stable';
```

## 🔧 Debugging Tools

### Browser Developer Tools
```javascript
// Console logging
console.log('Debug point 1:', data);

// Network tab monitoring
fetch('/api/debug')
  .then(response => response.json())
  .then(data => console.table(data));

// Performance profiling
console.time('Component render');
// ... component renders ...
console.timeEnd('Component render');
```

### VS Code Debugging
```json
// .vscode/launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug Ranbridge App",
  "program": "${workspaceFolder}/Project/index.tsx",
  "env": {
    "NODE_ENV": "development"
  },
  "console": "integratedTerminal"
}
```

### React Developer Tools
```bash
# Install React DevTools
npm install --save-dev react-devtools

# Use Redux DevTools (if using Redux)
npm install --save-dev @redux-devtools-extension
```

## 📞 Getting Help

### When to Ask for Help

#### GitHub Issues
- **Bug reports**: [Create issue](https://github.com/ranbridgeserviceprivatelimited-sys/RANBIDGE-Solutions-PVT-LTD/issues/new)
- **Feature requests**: [Start discussion](https://github.com/ranbridgeserviceprivatelimited-sys/RANBIDGE-Solutions-PVT-LTD/discussions)
- **Security concerns**: [Private message](mailto:security@ranbidge.com)

#### Community Support
- **Stack Overflow**: Tag with `ranbidge-solutions`
- **Discord**: [Community server](https://discord.gg/ranbidge)
- **Documentation**: Check this wiki and README

#### Professional Support
- **Technical issues**: dev@ranbidge.com
- **Deployment problems**: support@ranbidge.com

### Diagnostic Information to Include

When reporting issues, please include:

1. **Environment**: Development/production
2. **Browser**: Name, version, OS
3. **Device**: Desktop/mobile, screen resolution
4. **Error messages**: Full error text and stack traces
5. **Steps to reproduce**: Detailed reproduction steps
6. **Expected vs actual**: What should happen vs what happens
7. **Screenshots**: Visual documentation of issues
8. **Console logs**: Browser console output

## 🔄 Maintenance

### Regular Maintenance Tasks

#### Weekly
- [ ] **Check dependencies**: `npm audit` for security updates
- [ ] **Monitor performance**: Check Core Web Vitals
- [ ] **Review analytics**: Monitor traffic and user behavior
- [ ] **Backup database**: Regular automated backups
- [ ] **Check SSL certificates**: Ensure they're up to date

#### Monthly
- [ ] **Update dependencies**: `npm update` for latest versions
- [ ] **Security scan**: Run vulnerability assessment
- [ ] **Performance audit**: Lighthouse testing
- [ ] **Log analysis**: Review error logs and patterns
- [ ] **Storage cleanup**: Remove unnecessary files and data

#### Quarterly
- [ ] **Architecture review**: Assess system design and scalability
- [ ] **Dependency review**: Evaluate and update packages
- [ ] **Security audit**: Comprehensive security assessment
- [ ] **Performance optimization**: Bundle size and loading speed
- [ ] **Documentation update**: Review and update all documentation

---

*If you encounter issues not covered here, please create a GitHub issue or contact our development team.*
