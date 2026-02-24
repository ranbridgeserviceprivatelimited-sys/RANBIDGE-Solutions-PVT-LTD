# UI/UX Guidelines

This document outlines the design principles, standards, and guidelines for the Ranbridge Solutions website.

## 🎨 Design Philosophy

### Core Principles
- **User-Centered**: Design decisions based on user needs and goals
- **Accessibility First**: WCAG 2.1 AA compliance as baseline requirement
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Performance-Driven**: Fast loading and smooth interactions
- **Brand Consistency**: Unified visual language across all touchpoints

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--color-primary-50: #eff6ff;
--color-primary-500: #3b82f6;
--color-primary-600: #2563eb;
--color-primary-700: #1d4ed8;

/* Secondary Colors */
--color-slate-50: #f8fafc;
--color-slate-900: #0f172a;
--color-slate-700: #334155;

/* Accent Colors */
--color-amber-500: #f59e0b;
--color-blue-400: #60a5fa;

/* Semantic Colors */
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
```

### Typography Scale
```css
/* Font Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */

/* Font Families */
--font-sans: 'Inter', sans-serif;
--font-brand: 'Syne', sans-serif;
--font-mono: 'Fira Code', monospace;
```

### Spacing System
```css
/* Spacing Scale */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## 📱 Responsive Design

### Breakpoint System
```css
/* Mobile First Breakpoints */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

### Mobile Guidelines

#### Touch Targets
- **Minimum tap target**: 44px × 44px
- **Recommended spacing**: 8px between interactive elements
- **Thumb-friendly**: Larger buttons and form controls
- **Gesture support**: Swipe and pinch-to-zoom where appropriate

#### Navigation
- **Hamburger menu**: For mobile navigation
- **Sticky header**: Fixed position on scroll
- **Back-to-top**: Floating button for long pages
- **Breadcrumb trail**: Clear navigation path

#### Content Adaptation
- **Progressive disclosure**: Show more content on demand
- **Card layouts**: Stack vertically on mobile
- **Simplified forms**: Reduce cognitive load
- **Large touch targets**: Phone numbers and CTAs

## 🎯 Component Standards

### Button Design
```css
/* Primary Buttons */
.btn-primary {
  @apply bg-blue-600 text-white;
  @apply px-6 py-3;
  @apply rounded-lg;
  @apply font-semibold;
  @apply transition-colors;
  @apply hover:bg-blue-700;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
}

/* Secondary Buttons */
.btn-secondary {
  @apply border border-slate-300 text-slate-700;
  @apply px-6 py-3;
  @apply rounded-lg;
  @apply font-semibold;
  @apply transition-colors;
  @apply hover:bg-slate-100;
}
```

### Form Standards
```css
/* Form Inputs */
.form-input {
  @apply w-full px-4 py-3;
  @apply border border-slate-300 rounded-lg;
  @apply bg-white;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500;
  @apply transition-colors;
}

/* Form Labels */
.form-label {
  @apply block text-sm font-medium text-slate-700 mb-2;
}
```

### Card Components
```css
/* Service Cards */
.card {
  @apply bg-slate-900/50 backdrop-blur-md;
  @apply border border-slate-700/50;
  @apply rounded-2xl;
  @apply p-8;
  @apply transition-all duration-300;
}

.card:hover {
  @apply transform scale-105;
  @apply border-blue-500/50;
}
```

## ♿ Accessibility Guidelines

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Text contrast**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **Interactive elements**: Enhanced contrast indicators

#### Keyboard Navigation
- **Tab order**: Logical and sequential
- **Skip links**: Bypass navigation for screen readers
- **Focus indicators**: Visible focus states
- **Keyboard shortcuts**: Standard navigation patterns

#### Screen Reader Support
- **Alt text**: Descriptive images and icons
- **ARIA labels**: Proper form and control labeling
- **Semantic HTML**: Use appropriate HTML5 elements
- **Heading structure**: H1-H6 hierarchy

### Animation Guidelines
```css
/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Accessible Animations */
.accessible-animation {
  @apply transition-transform duration-300;
  @apply ease-out;
}
```

## 🎨 Visual Hierarchy

### Typography Scale
```css
/* Content Hierarchy */
.heading-1 { @apply text-4xl font-bold; }     /* Main titles */
.heading-2 { @apply text-3xl font-bold; }     /* Section titles */
.heading-3 { @apply text-2xl font-bold; }     /* Card titles */
.heading-4 { @apply text-xl font-bold; }      /* Sub-section titles */
.body-text { @apply text-base; }             /* Paragraph text */
.caption-text { @apply text-sm; }             /* Small text */
```

### Spacing Hierarchy
```css
/* Section Spacing */
.section-spacing { @apply py-20; }        /* Large sections */
.card-spacing { @apply gap-8; }          /* Card grids */
.element-spacing { @apply space-y-4; }     /* Related elements */
```

## 🖼️ Icon Usage

### Icon Library
- **Primary**: Lucide React icons
- **Consistency**: Use same size and style patterns
- **Semantic**: Icons should match their function

### Icon Standards
```css
/* Icon Sizes */
.icon-xs { @apply w-4 h-4; }   /* 16px */
.icon-sm { @apply w-5 h-5; }   /* 20px */
.icon-md { @apply w-6 h-6; }   /* 24px */
.icon-lg { @apply w-8 h-8; }   /* 32px */
.icon-xl { @apply w-12 h-12; } /* 48px */

/* Icon Colors */
.icon-primary { @apply text-blue-500; }
.icon-secondary { @apply text-slate-400; }
.icon-accent { @apply text-amber-500; }
```

## 🎭 Animation Principles

### GSAP Guidelines
```javascript
// Animation Timing
const TIMING = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5
};

// Animation Easing
const EASING = {
  smooth: 'power3.out',
  bouncy: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)'
};

// Performance Considerations
- Use transform instead of changing layout properties
- Animate opacity and transform separately
- Use will-change for GPU acceleration
- Avoid layout thrashing animations
```

### Animation Types
- **Entrance**: Fade in, slide up, scale in
- **Exit**: Fade out, slide down, scale out
- **Hover**: Scale, color change, underline
- **Loading**: Spin, pulse, skeleton
- **State**: Smooth transitions between states

## 🔍 Content Guidelines

### Writing Style
- **Clear and concise**: Use simple, direct language
- **Action-oriented**: Start with verbs, focus on benefits
- **Scannable**: Use headings, lists, and short paragraphs
- **Consistent terminology**: Use same terms throughout site

### Content Structure
```html
<!-- Page Structure -->
<header>Navigation</header>
<main>
  <section>Hero/Content</section>
  <section>Features/Services</section>
  <section>Call-to-Action</section>
</main>
<footer>Contact/Legal</footer>
```

## 📊 Performance Guidelines

### Loading Performance
- **First Contentful Paint**: < 2.5s
- **Largest Contentful Paint**: < 4.0s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1

### Asset Optimization
- **Images**: WebP format, lazy loading
- **Fonts**: Preload critical fonts
- **JavaScript**: Code splitting, tree shaking
- **CSS**: Critical CSS inlined, non-critical CSS loaded async

## 🧪 Testing Guidelines

### Cross-Browser Testing
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest version
- **Mobile**: iOS Safari, Chrome Mobile

### Device Testing
- **Real devices**: When possible
- **Browser emulation**: Chrome DevTools device mode
- **Responsive testing**: Multiple viewport sizes
- **Touch testing**: Actual touch interactions

## 📞 Quality Assurance

### Review Checklist
- [ ] **Design consistency**: All components follow design system
- [ ] **Accessibility**: WCAG 2.1 AA compliance verified
- [ ] **Performance**: Core Web Vitals meet targets
- [ ] **Cross-browser**: Works on all target browsers
- [ ] **Mobile**: Touch interactions work correctly
- [ ] **Content**: All text is error-free and clear

### Approval Process
1. **Design Review**: Visual design and UX review
2. **Code Review**: Technical implementation review
3. **Testing**: Functional and cross-browser testing
4. **Accessibility**: Screen reader and keyboard navigation test
5. **Performance**: Load time and optimization verification

---

*This document should be updated as the design system evolves and new patterns are established.*
