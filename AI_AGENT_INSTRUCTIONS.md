# AI Agent Instructions for NDM Supply

## Project Overview
NDM Supply is a brutalist-style e-commerce application built with React, TypeScript, Tailwind CSS, and Framer Motion. The design aesthetic is "Y2K Underground/Industrial", featuring raw colors, monospace fonts, and draggable window interfaces.

## Tech Stack
- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand (for Cart and Auth)

## Design System
- **Colors**: Defined in `tailwind.config.js`. Key colors include `ndm-dark` (black), `ndm-primary` (accent color), `ndm-muted` (gray text).
- **Typography**: Monospace fonts ('Courier New', '1533', 'Dubtronic').
- **Components**:
  - **ProductWindow**: A draggable modal representing a product detail view.
  - **ProductCard**: A grid item representing a product.
  - **Cart**: A slide-out cart interface.

## Coding Conventions
- **Functional Components**: Use React functional components with hooks.
- **Types**: Explicitly define interfaces for props and data structures.
- **Tailwind**: Use utility classes for styling. Avoid custom CSS unless necessary for fonts or specific animations.
- **Motion**: Use `framer-motion` for interactions (drag, enter/exit animations).

## Key Features
- **Draggable Interface**: Product details open in draggable windows.
- **Brutalist Aesthetics**: High contrast, raw borders, uppercase text.
- **Cart System**: Zustand-based cart management.

## Instructions for AI
1.  **Maintain the Aesthetic**: When adding new UI elements, ensure they match the brutalist/industrial style. Use uppercase text, monospace fonts, and sharp borders.
2.  **Performance**: Ensure animations are performant.
3.  **Responsiveness**: The layout should work on mobile and desktop, though the draggable windows are primarily a desktop metaphor.
4.  **File Structure**: Keep components in `src/components`, data in `src/data`, and store logic in `src/store`.

## Common Tasks
- **Adding Products**: Update `src/data/products.ts`.
- **Modifying Styles**: Check `tailwind.config.js` for theme colors before adding arbitrary hex values.
- **State Changes**: Use Zustand stores in `src/store` for global state.
