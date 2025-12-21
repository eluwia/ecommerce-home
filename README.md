# Frontend UI Implementation Case

**Nuxt 3 · Vue 3 · Figma-based**

## Overview

This project is a frontend UI implementation built with **Nuxt 3** and **Vue 3**, based on a provided **Figma design**.
The implementation focuses on converting the design into a **responsive, component-based web and mobile interface**, limited strictly to UI concerns.

The project covers layout composition, styling, responsive behavior, and UI-level interactions.

### Deployment

Deployed on **Vercel** using the default Nuxt 3 setup.

![Vercel Mobile QR Code](/vercel-qr_png)

---

## Tech Stack

* **Nuxt 3**
* **Vue 3 (Composition API)**
* **CSS (custom properties / design tokens)**

---

## Project Structure

The project follows Nuxt’s file-based routing and a **component-driven architecture**.

```
pages/
  index.vue
  checkout.vue

components/
  Header.vue
  MobileMenu.vue
  Hero.vue
  Featured.vue
  Banner.vue
  ProductCard.vue
  Categories.vue
  CategoriesCard.vue
  Footer.vue
  checkout/
    CheckoutShipping.vue
    CheckoutPayment.vue
    CheckoutSummary.vue
  ui/
    Button.vue
    Input.vue

assets/css/
  tokens.css
  global.css
```

### Structural Principles

* **Pages** are responsible only for section composition
* **Components** own layout, structure, and styling
* **UI components** provide reusable visual primitives

---

## Pages

### `pages/index.vue`

The homepage contains **no state, no styling rules, and no business logic**.

Its only responsibility is composing UI sections in the correct order:

* Header
* Hero
* Featured Products
* Banner
* Categories
* Footer

All layout behavior and interactions are handled inside components.

---

### `pages/checkout.vue`

The checkout page defines a **complex UI layout** without implementing checkout or payment logic.

It includes:

* Multi-column layout using CSS Grid
* Sticky order summary section
* Shipping and payment form areas
* UI-level validation and input formatting

No cart state, backend validation, or payment processing is implemented.

---

## Component Breakdown

### Header.vue

The header is structured into visual layers matching the Figma layout:

* `.header`
* `.header-top`
* `.header-main`
* `.header-nav`

Desktop navigation uses **CSS-based hover interactions**.
Mobile navigation is handled separately through the mobile menu component.

---

### MobileMenu.vue

Mobile navigation is implemented as an isolated overlay component and rendered using `Teleport`.

Key characteristics:

* Full-screen overlay without z-index conflicts
* Shared state via a simple composable (`useMobileMenu`)
* No global state management

Core classes:

* `.mobile-menu`
* `.mobile-menu__overlay`
* `.mobile-menu__content`

---

### Hero.vue

The Hero section is a presentational component.

It includes headline text, call-to-action elements, decorative visuals, and static slider indicators.
No slider or animation logic is implemented.

---

### Featured.vue

This component renders a limited set of products.

* Product data is fetched using `useFetch`
* Data is used only to populate UI elements
* No pagination, filtering, caching, or error handling is implemented

The component exists to support realistic UI rendering.

---

### ProductCard.vue

Product cards define **device-specific interaction behavior**:

* Desktop: hover-based action overlays
* Mobile: inline actions with no hover behavior

Hover behavior is gated using:

```css
@media (hover: hover)
```

Key classes:

* `.product-card`
* `.product-card__image`
* `.product-card__content`
* `.product-card__actions`

All interaction differences are handled via CSS.

---

### Banner.vue

The Banner component defines a visually dense promotional section.

Characteristics:

* Absolute positioning and layered layout
* Gradient overlays and background imagery
* Section-specific layout values

Styles and layout are scoped to this component.

---

### Categories.vue & CategoriesCard.vue

Categories are implemented using two components.

Responsibilities:

* `Categories.vue` defines the section layout and grid
* `CategoriesCard.vue` defines individual category cards

Each card includes background imagery, text content, and hover states implemented with CSS.

---

### Footer.vue

The footer adapts its layout based on screen size:

* Mobile: accordion-style sections
* Desktop: fully expanded sections

Accordion state is controlled via the `.is-open` class.
Markup is shared across breakpoints.

---

## Checkout Components

### CheckoutShipping.vue

Defines shipping form layout and input grouping.
Includes visual validation states only.

---

### CheckoutPayment.vue

Defines payment form layout and input formatting:

* Card number formatting
* Expiry date formatting
* Visual validation feedback

No payment logic is implemented.

---

### CheckoutSummary.vue

Displays order summary information:

* Product list
* Pricing breakdown
* Sticky positioning on desktop

All data is mock-based and used for UI representation.

---

## UI Components

### Button.vue

Reusable button component with variant support:

* `.btn`
* `.btn--primary`
* `.btn--secondary`

Variants are controlled via props and CSS modifier classes.
The component is fully token-based.

---

### Input.vue

Reusable input component that standardizes:

* Spacing
* Font size
* Focus styles
* Error states

Used selectively due to layout constraints in some sections.

---

## Styling & CSS Tokens

Design tokens are defined in `assets/css/tokens.css`.

Token usage includes:

* Colors
* Spacing
* Typography
* Border radius
* Shadows

### Token Strategy

* Semantic tokens are used for shared values
* Layout-specific values remain hardcoded

---

## JavaScript Usage

JavaScript is used only for UI interactions:

* Mobile menu toggling
* Dropdown open/close behavior
* Input formatting

---
