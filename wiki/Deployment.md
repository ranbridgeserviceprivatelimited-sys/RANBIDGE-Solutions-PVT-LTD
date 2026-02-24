# Deployment

This guide provides comprehensive deployment instructions for the Ranbridge Solutions website across different environments and platforms.

## 🚀 Quick Deployment Options

### 1. **Render (Recommended)**
- **Platform**: [Render](https://render.com)
- **Type**: Static Site Hosting
- **CI/CD**: Automatic deployment from Git
- **Custom Domain**: Supported

### 2. **Docker Container**
- **Platform**: Any cloud provider (AWS, GCP, Azure)
- **Type**: Containerized deployment
- **Portability**: Consistent environment

### 3. **Manual Deployment**
- **Platform**: VPS, dedicated server
- **Type**: Traditional web server
- **Control**: Full server management

## 🌐 Render Deployment

### Prerequisites
- **GitHub Account**: With repository access
- **Render Account**: Free tier available
- **Custom Domain** (optional): For branded URLs

### Step-by-Step Setup

#### 1. Connect Repository
1. **Login to Render**: [dashboard.render.com](https://dashboard.render.com)
2. **Click "New +"**: Select "Static Site"
3. **Connect GitHub**: Authorize repository access
4. **Select Repository**: Choose `RANBIDGE-Solutions-PVT-LTD`
5. **Select Branch**: Use `main` branch

#### 2. Configure Build Settings
```yaml
# render.yaml configuration
services:
  - type: web
    name: ranbidge-solutions-website
    env: static
    buildCommand: chmod +x render-build.sh && ./render-build.sh
    publishDir: Project/dist
    headers:
      - path: /*
        name: X-Frame-Options
        value: DENY
      - path: /*
        name: X-Content-Type-Options
        value: nosniff
      - path: /*
        name: X-XSS-Protection
        value: 1; mode=block
```

#### 3. Environment Variables
Set these in Render dashboard:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Production mode |
| `GEMINI_API_KEY` | Your API key | AI features |

#### 4. Custom Domain (Optional)
1. **Add Custom Domain**: In Render dashboard
2. **Update DNS**: Point domain to Render's provided IP
3. **SSL Certificate**: Automatically provided by Render

#### 5. Deploy
- **Automatic**: Deploys on every push to `main` branch
- **Build Process**: Uses `render-build.sh` script
- **Live URL**: Provided by Render (or custom domain)

### Render Features
- **Automatic HTTPS**: Free SSL certificate
- **Global CDN**: Fast content delivery
- **Automatic Deployments**: Git-based CI/CD
- **Preview Branches**: Test deployments before production
- **Environment Management**: Separate staging/production
- **Analytics**: Built-in performance monitoring

## 🐳 Docker Deployment

### Local Docker Setup
```bash
# Build Docker image
docker build -t ranbidge-solutions .

# Run container
docker run -p 3000:80 ranbidge-solutions
```

### Docker Compose Setup
```bash
# Start with Docker Compose
docker-compose up --build

# Access application
# http://localhost:3000
```

### Production Docker Deployment
```bash
# Build and push to registry
docker build -t your-registry/ranbidge-solutions .
docker push your-registry/ranbidge-solutions

# Production run command
docker run -d -p 80:3000 --name ranbidge-solutions your-registry/ranbidge-solutions
```

### Docker Configuration Files

#### Dockerfile
```dockerfile
# Multi-stage build for optimization
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 🖥️ Manual Server Deployment

### Server Requirements
- **Node.js**: 18.0 or higher
- **Nginx**: 1.18 or higher (recommended)
- **PM2**: Process manager (recommended)
- **SSL Certificate**: Let's Encrypt or commercial

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/Project/dist;
    index index.html;

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Static assets caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### PM2 Configuration
```json
{
  "apps": [{
    "name": "ranbidge-solutions",
    "script": "npm start",
    "instances": 1,
    "exec_mode": "cluster_mode",
    "env": {
      "NODE_ENV": "production",
      "PORT": 3000
    }
  }]
}
```

## 🔍 Environment Configuration

### Development Environment
```bash
# .env.local
VITE_APP_TITLE=Ranbridge Solutions (Dev)
VITE_API_BASE_URL=http://localhost:3001
VITE_ENABLE_MOCK_API=true
VITE_ENABLE_ANALYTICS=false
```

### Production Environment
```bash
# .env.production
NODE_ENV=production
VITE_APP_TITLE=Ranbridge Solutions Private Limited
VITE_API_BASE_URL=https://api.ranbidge.com
GEMINI_API_KEY=your_production_key
```

## 🚀 Build Process

### Development Build
```bash
# Development server with hot reload
npm run dev

# Build for testing
npm run build
npm run preview
```

### Production Build
```bash
# Optimized production build
npm run build

# Output in dist/ directory
# Ready for deployment
```

### Build Optimization
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Dead code elimination
- **Minification**: JavaScript and CSS compression
- **Asset Optimization**: Image optimization and lazy loading

## 🔐 Security Configuration

### SSL/HTTPS Setup
- **Render**: Automatic free SSL
- **Custom Domain**: Use Let's Encrypt
- **Manual**: Configure certificates in Nginx

### Security Headers
```nginx
# Recommended security headers
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
```

### Environment Variables Security
- **Never commit**: API keys and secrets to Git
- **Use platform secrets**: Render environment variables
- **Rotate keys regularly**: Update API keys periodically

## 📊 Monitoring & Analytics

### Render Analytics
- **Built-in monitoring**: Response times, error rates
- **Custom metrics**: Business KPIs
- **Alert integration**: Slack/email notifications

### External Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Render Analytics -->
<script src="https://cdn.render.com/js/analytics.js"></script>
```

### Performance Monitoring
```javascript
// Core Web Vitals monitoring
import { getCLS, getFID, getFCP, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
```

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Render
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to Render
        uses: johnbeynon/render-action@v0.0.1
        with:
          service-id: ${{ secrets.RENDER_SERVICE_ID }}
          api-key: ${{ secrets.RENDER_API_KEY }}
```

## 🚨 Troubleshooting

### Common Deployment Issues

#### Build Failures
```bash
# Clear build cache
rm -rf dist node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Check disk space
df -h
```

#### Runtime Errors
```bash
# Check application logs
docker logs ranbidge-solutions

# Check Nginx logs
sudo nginx -t

# Check PM2 status
pm2 status
```

#### Performance Issues
```bash
# Bundle analysis
npm run build --analyze

# Lighthouse audit
npx lighthouse http://localhost:3000

# Check Core Web Vitals
npx vite-bundle-analyzer dist/stats.html
```

## 📞 Support & Maintenance

### Monitoring Checklist
- [ ] **Uptime monitoring**: 99.9% uptime target
- [ ] **Error tracking**: Comprehensive error logging
- [ ] **Performance monitoring**: Core Web Vitals
- [ ] **Security scanning**: Regular vulnerability checks
- [ ] **Backup strategy**: Regular data backups

### Maintenance Tasks
- **Weekly updates**: Dependencies and security patches
- **Monthly reviews**: Performance and security audits
- **Quarterly cleanup**: Unused resources and old logs
- **Annual planning**: Architecture and infrastructure review

---

*For specific platform instructions, check the detailed sections above.*
