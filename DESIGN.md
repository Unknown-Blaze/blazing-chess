# 🎨 Blazing Chess Academy - Design Specifications

## Brand Identity

### Core Elements
- **Academy Name:** Blazing Chess Academy
- **Tagline:** Ignite your potential
- **Founder:** Unknown Blaze (Competitive Strategist)

### Color Palette

```
Primary Colors:
├─ Black:        #000000   (Main background)
├─ Amber-400:    #FBBF24   (Gradients, highlights)
├─ Amber-500:    #F59E0B   (Primary accent)
├─ Orange-500:   #F97316   (Secondary accent)
└─ Orange-600:   #EA580C   (Gradient end)

Supporting Colors:
├─ Gray-900:     #111827   (Card backgrounds)
├─ Gray-950:     #030712   (Dark card backgrounds)
├─ Gray-400:     #9CA3AF   (Secondary text)
└─ White:        #FFFFFF   (Primary text)
```

### Typography

```
Font Family: Inter (Google Fonts)

Hierarchy:
├─ Hero Heading:     text-5xl to text-8xl (48px - 96px)
├─ Section Heading:  text-4xl to text-5xl (36px - 48px)
├─ Card Title:       text-2xl (24px)
├─ Body Large:       text-lg to text-xl (18px - 20px)
└─ Body:             text-base (16px)
```

## Component Specifications

### 1. Hero Section

**Dimensions:**
- Height: 100vh (full viewport)
- Max Width: 1280px (centered)

**Elements:**
- Background: Chess pattern (opacity 5%) with gradient overlay
- Badge: Rounded pill with border glow
- Headline: 2-line responsive (5xl → 8xl)
- Subheadline: Max-width 768px, gray-400
- CTA Buttons: Large size with gradient
- Stats Grid: 3 columns, centered

**Animations:**
- Gradient background animation (3s loop)
- Bounce effect on scroll indicator

### 2. About Section

**Layout:**
- Padding: 80px vertical
- Background: Gradient from black → gray-950 → black
- Card: Border-radius 16px, gradient background

**Content Structure:**
```
┌─────────────────────────────────┐
│  Icon (80x80) + Name + Title    │
├─────────────────────────────────┤
│  Bio Paragraphs (3x)             │
├─────────────────────────────────┤
│  Credentials Grid (4 items)     │
└─────────────────────────────────┘
```

### 3. Offerings Grid

**Layout:**
- Grid: 3 columns (desktop), 1 column (mobile)
- Gap: 32px
- Cards: Equal height with flex

**Card Anatomy:**
```
┌─────────────────────────┐
│  Icon (64x64)           │
│  Title (2xl)            │
│  Description            │
│  ─────────────          │
│  ✓ Feature 1            │
│  ✓ Feature 2            │
│  ✓ Feature 3            │
│  ✓ Feature 4            │
│  ─────────────          │
│  Price Badge            │
│  [Enroll Now Button]    │
└─────────────────────────┘
```

**Hover Effects:**
- Translate Y: -8px
- Border: Glow effect (amber-500/40)
- Shadow: 2xl with amber tint
- Icon: Scale 110%
- Transition: 300ms ease

### 4. Registration Modal

**Dimensions:**
- Width: 500px (max)
- Height: Auto (max 90vh with scroll)
- Padding: 24px

**Form Layout:**
```
┌──────────────────────────────┐
│  Title (Gradient Text)       │
│  Description (Gray)          │
│  ────────────────────────    │
│  [Parent Name Input]         │
│  [Student Name Input]        │
│  [Current Elo Input]         │
│  [School Input]              │
│  [Contact Number Input]      │
│  [Message Textarea]          │
│  ────────────────────────    │
│  [Status Message]            │
│  [Submit Button]             │
└──────────────────────────────┘
```

**Input States:**
- Default: Gray-900 bg, Gray-800 border
- Focus: Amber-500 border, amber-500/20 ring
- Error: Red-500 border
- Disabled: Opacity 50%

**Button States:**
- Default: Amber-to-orange gradient
- Hover: Darker gradient + shadow glow
- Loading: Spinner + "Submitting..." text
- Disabled: Reduced opacity

## Interaction Patterns

### Buttons

**Primary CTA:**
```css
bg: linear-gradient(to right, #F59E0B, #EA580C)
hover: linear-gradient(to right, #D97706, #C2410C)
shadow: 0 10px 40px rgba(251, 191, 36, 0.5)
transition: all 300ms
```

**Secondary CTA:**
```css
border: 1px solid #F59E0B
color: #FBBF24
hover-bg: rgba(251, 191, 36, 0.1)
```

### Cards

**Default State:**
```css
background: linear-gradient(to bottom right, #111827, #030712)
border: 1px solid rgba(245, 158, 11, 0.2)
```

**Hover State:**
```css
border: 1px solid rgba(245, 158, 11, 0.4)
transform: translateY(-8px)
box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.1)
```

### Forms

**Input Focus:**
```css
border-color: #F59E0B
box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2)
outline: none
```

**Validation:**
- Success: Green-400 border + message
- Error: Red-400 border + message below
- Real-time validation on blur

## Responsive Breakpoints

```
sm:  640px  (Mobile Large)
md:  768px  (Tablet)
lg:  1024px (Desktop)
xl:  1280px (Desktop Large)
2xl: 1536px (Desktop XL)
```

### Responsive Behavior

**Hero Section:**
- Mobile: Single column, text-5xl, smaller stats
- Tablet: Maintain single column, text-6xl
- Desktop: Full layout, text-8xl

**Offerings Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Navigation (Future):**
- Mobile: Hamburger menu
- Desktop: Horizontal nav bar

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast:**
- White on Black: 21:1 (AAA)
- Amber-400 on Black: 10.5:1 (AAA)
- Gray-400 on Black: 7.2:1 (AA)

**Focus Indicators:**
- All interactive elements have visible focus
- Focus ring: 2px solid amber-500
- Focus offset: 2px

**Keyboard Navigation:**
- Tab order: Logical flow
- Enter/Space: Activate buttons
- Escape: Close modal

**Screen Readers:**
- Semantic HTML (header, main, section, footer)
- ARIA labels on icons
- Alt text on images (when added)
- Form labels properly associated

## Animation Specifications

### Gradient Animation (Hero)
```css
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
animation: gradient 3s ease infinite;
```

### Card Hover
```css
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Modal Entry
```css
opacity: 0 → 1 (200ms)
scale: 0.95 → 1 (200ms)
```

### Loading Spinner
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
animation: spin 1s linear infinite;
```

## Chess Pattern Background

**Implementation:**
```css
background-image: 
  repeating-conic-gradient(
    #ffffff 0deg 90deg,
    #000000 90deg 180deg
  ),
  repeating-conic-gradient(
    #000000 0deg 90deg,
    #ffffff 90deg 180deg
  );
background-size: 120px 120px;
background-position: 0 0, 60px 60px;
opacity: 0.05;
```

**Usage:**
- Hero section background
- Optional section dividers
- Card subtle backgrounds (very low opacity)

## Icon System

**Current Icons:**
- 🏫 School CCA Coaching
- 👤 Private Mentorship
- ⚡ Online Blitz Tournaments
- ♚ About Section (Founder)

**Future Icons (Recommended):**
- Use Lucide React for consistency
- Size: 24px (default), 64px (cards)
- Color: Inherit from parent

## Loading States

**Form Submission:**
1. Button disabled (opacity 50%)
2. Show spinner icon
3. Change text to "Submitting..."
4. Success: Show checkmark + message (2s)
5. Auto-close modal

**Page Load (Future):**
- Skeleton screens for cards
- Fade-in animation for content
- Stagger children animations

## Error States

**Form Errors:**
- Red-400 text below field
- Red-500 border on input
- Icon (optional): ⚠️

**API Errors:**
- Toast notification (top-right)
- Red background with border
- Auto-dismiss after 5s

## Success States

**Registration Success:**
- Green-400 text in modal
- Checkmark icon
- Auto-close after 2s
- Optional: Confetti animation

---

## Design System Summary

✅ **Implemented:**
- Complete color system
- Typography scale
- Component library foundation
- Dark-mode first design
- Responsive layouts
- Accessibility basics

🔲 **To Implement:**
- Navigation header
- Footer
- Additional pages
- Admin dashboard
- Loading states
- Toast notifications
- More micro-interactions

---

**Last Updated:** Project Initialization
**Design Version:** 1.0
**Framework:** Next.js 14 + Tailwind CSS + Shadcn/UI
