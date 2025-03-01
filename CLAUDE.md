# CLAUDE.md - Staub IT Website Project Guidelines

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview built site locally

## Project Structure
- React + TypeScript + Vite
- TailwindCSS for styling
- Radix UI components with shadcn
- React Router for navigation
- Framer Motion for animations

## Code Style Guidelines
- Use TypeScript for type safety (though project allows implicit any)
- Follow React functional component pattern with arrow functions
- Import paths should use `@/` alias for src directory
- Component files should use PascalCase, utility files use camelCase
- Use consistent import ordering: React/framework, components, utilities
- Prefer destructuring for props
- Use Tailwind classes for styling
- For complex animations, use Framer Motion
- Follow existing component folder organization