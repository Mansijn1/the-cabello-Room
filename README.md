# The Cabello Room — React + Vite Luxury Salon Website

A high-converting, responsive React application built with **Vite**, **Tailwind CSS**, and **Lucide React**, elevating the 4-step journey of [The Cabello Room](https://www.thecabelloroom.com) into a high-end luxury digital experience.

---

## 📸 Key UI/UX Upgrades Over Previous Site (From Your Screenshots)

| Previous Website (Screenshots) | New React + Vite Experience |
| :--- | :--- |
| **Screenshot 1 (Hero & Nav)**: Low-contrast beige text on marble background, no prominent CTA button, booking buried in a small top link ("Manage My Appointments"). | **Fixed Glassmorphic Header** with scroll depth, glowing Champagne Gold "Book Appointment" CTA button, mobile slide-out drawer, 5.0★ Google Rating badge with avatars, and dual high-converting CTAs. |
| **Screenshot 2 (Step 1)**: Typo in title ("1. BE APART OF OUR MISSION"), low contrast text, static photos with little context. | **Step 01 / Mission & Atmosphere**: Typo corrected ("Be A Part Of Our Mission"), 4 luxury cards covering Artisanal Foiling, Hospitality Suite (coffee/prosecco), Sensory Basin Lounge, and the Mirror Reveal, plus a free consultation trigger. |
| **Screenshot 3 (Step 2)**: Circular photos ("Bright Blondes", "Tape Extensions", "Lived In Colour", "Haircare") with a plain button ("VIEW OUR PRICING MENU ->"). | **Step 02 / Specialties & Transparent Pricing**: Preserves the circular aesthetic but adds interactive category filter tabs, duration badges (e.g. `180 Mins`), starting prices, included rituals checklist, and direct "Book This Service" modal triggers. |
| **Screenshot 4 (Step 3)**: `@thecabelloroom` (20k Followers) with broken third-party widget embeds displaying empty gray video placeholder boxes. | **Step 03 / Instagram Goal Pics**: Clean `@thecabelloroom` live status chip with 20K followers indicator + 6 high-resolution aesthetic hair inspo cards with hover formulas, like counts, and instant "Book This Look" actions. |
| **Screenshot 5 (Step 4)**: Arched photos of stylists with small typography ("Celeste", "Analise", "Caer", "Summer", "Georgia", "Natasha") without individual booking actions. | **Step 04 / Select Your Hair's New Bestie**: Keeps the signature arched portrait silhouettes with gold borders, role badges, signature specialties, bios, and personalized "Book With [Stylist]" buttons that preselect them in the modal. |
| **Missing in Previous**: No interactive transformation tool, no embedded booking modal, no mobile action bar. | **New Additions**: Interactive Draggable Before & After Split Slider, Japanese Head Spa Spotlight, In-Salon Styling Nights feature, Verified Google Reviews, and Pinned Bottom Mobile Quick Action Bar. |

---

## ⚡ Quick Start

```bash
# 1. Navigate to the project directory
cd "C:\Users\ASUS\.gemini\antigravity\scratch\the-cabello-room-vite"

# 2. Start the local Vite development server
npm run dev

# 3. Or preview the production build
npm run preview
```

---

## 🧱 Component Architecture

```
src/
├── components/
│   ├── Navbar.jsx            # Glassmorphic header + mobile drawer + glowing CTA
│   ├── Hero.jsx              # Editorial hero + 5.0★ Google badge + trust metrics
│   ├── Step1Mission.jsx      # Step 1: Atmosphere, foiling & hospitality suite
│   ├── Step2Specialties.jsx  # Step 2: Specialties & filterable pricing menu
│   ├── BeforeAfterSlider.jsx # Draggable split Before & After comparison slider
│   ├── Step3InstaGoal.jsx    # Step 3: @thecabelloroom (20k) Goal Pic Gallery
│   ├── Step4Team.jsx         # Step 4: Celeste, Analise, Caer, Summer, Georgia, Natasha
│   ├── HeadSpaSpotlight.jsx  # Japanese Head Spa waterfall halo sanctuary
│   ├── StylingNights.jsx     # Masterclasses with prosecco & grazing boards
│   ├── Reviews.jsx           # Verified 5-star Google reviews
│   ├── LocationSection.jsx   # Penrith location, dark map, hours & VIP waitlist
│   ├── BookingModal.jsx      # 2-step booking dialog (Full Service & Consultation)
│   ├── FloatingQuickBar.jsx  # Pinned mobile quick-action conversion bar
│   ├── Footer.jsx            # Editorial dark luxury footer
│   └── SocialIcons.jsx       # Custom inline SVG icons
├── App.jsx                   # Main application orchestrator
├── index.css                 # Tailwind directives, gold gradients & custom utilities
└── main.jsx                  # React DOM entry point
```
