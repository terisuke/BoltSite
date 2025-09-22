# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Recent Improvements (2025-09-22)

- Fixed all TypeScript type checking errors across the codebase
- Refactored components for better type safety and maintainability
- Resolved prop interface mismatches in Card components and SectionTitle usage
- Improved i18n utility function type definitions
- Removed unused imports and variables for cleaner code
- Enhanced LanguageSwitcher component with proper script handling

## Previous Improvements (2025-09-21)

- Fixed filename typo: `priceDats.json` → `priceData.json`
- Removed unused props from component usage
- Enhanced documentation with comprehensive command descriptions
- Improved type safety throughout the codebase

## Project Overview

BoltSite is a high-performance website creation service built with Astro, designed for Japanese SMEs. It emphasizes ultra-fast loading (0.3s), SEO optimization (PageSpeed 95+), and cost-effectiveness.

## Development Commands

### Essential Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:4321
npm run build        # Type-check and build for production
npm run preview      # Preview production build

# Code Quality (run before committing)
npm run format       # Format with Prettier
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript checking
npm run check        # Astro type checking

# Maintenance
npm run clean        # Remove dist and cache
```

## Architecture

### Technology Stack

- **Framework**: Astro 5.0.9 with SSR via Vercel adapter
- **Styling**: Tailwind CSS 3.4.3 (mobile-first, utility classes)
- **Language**: TypeScript 5.4.5 (strict mode)
- **Components**: `.astro` files with scoped styles

### Project Structure

```
src/
├── components/
│   ├── ui/          # Reusable UI (Button, Card, Navbar)
│   ├── sections/    # Page sections (Hero, Pricing, etc.)
│   └── seo/         # SEO components
├── pages/           # Routes (file-based routing)
├── layouts/         # Page layouts
├── data/           # JSON data files
├── utils/          # Helper functions
└── types/          # TypeScript definitions
```

### Key Architectural Patterns

1. **Component Structure**: Astro components follow this pattern:

   ```astro
   ---
   // TypeScript logic
   interface Props { ... }
   const { prop } = Astro.props;
   ---
   <div class="tailwind-classes">...</div>
   ```

2. **Data Management**: Static data in JSON files under `src/data/`
   - `siteData.json`: Site configuration
   - `priceData.json`: Pricing information
   - `clientData.json`: Client testimonials

3. **Styling**: Tailwind utilities preferred over custom CSS
   - Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)
   - Colors: Primary (blue), Secondary (green), Accent (purple)

4. **Path Aliases**: `@/*` maps to `src/*` in imports

## Performance Requirements

- **Load Time**: Maintain 0.3s target
- **Lighthouse**: Keep scores above 95
- **Images**: Use OptimizedImage component
- **JavaScript**: Minimize client-side JS

## Japanese Content

All user-facing content is in Japanese. Maintain proper business language and honorifics consistency.

## Pre-commit Checklist

Always run in this order:

1. `npm run format` - Format code with Prettier
2. `npm run lint:fix` - Fix ESLint issues
3. `npm run type-check` - Check TypeScript types
4. `npm run build` - Verify production build

Never commit if any of these commands fail.

## Code Quality Standards

- **Type Safety**: Use strict TypeScript typing, avoid `any`
- **Performance**: Keep Lighthouse scores above 95
- **Component Reusability**: Create modular, reusable components
- **Documentation**: Update README.md for significant changes
- **Testing**: Verify changes don't break existing functionality
