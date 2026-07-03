export const products = [
  // ---------------- ENGINE ----------------
  { id: 1, name: "Turbo Boost Kit", category: "Engine", price: 450, rating: 4.8, description: "High-performance turbo kit for maximum power output.", createdAt: "2026-01-10" },
  { id: 2, name: "Cold Air Intake System", category: "Engine", price: 210, rating: 4.6, description: "Increases airflow for better throttle response and horsepower.", createdAt: "2026-01-12" },
  { id: 3, name: "ECU Performance Chip", category: "Engine", price: 180, rating: 4.4, description: "Remaps engine parameters for optimized fuel and power delivery.", createdAt: "2026-01-14" },
  { id: 4, name: "Supercharger Pulley Kit", category: "Engine", price: 620, rating: 4.7, description: "Boosts supercharger RPM for increased horsepower gains.", createdAt: "2026-01-16" },
  { id: 5, name: "High-Flow Fuel Injectors", category: "Engine", price: 340, rating: 4.5, description: "Precision injectors for consistent high-performance fueling.", createdAt: "2026-01-18" },
  { id: 6, name: "Performance Radiator", category: "Engine", price: 275, rating: 4.6, description: "Aluminum radiator with improved cooling capacity for track use.", createdAt: "2026-01-20" },
  { id: 7, name: "Racing Spark Plug Set", category: "Engine", price: 65, rating: 4.3, description: "Iridium spark plugs for cleaner, more efficient combustion.", createdAt: "2026-01-22" },

  // ---------------- EXHAUST ----------------
  { id: 8, name: "Sport Exhaust System", category: "Exhaust", price: 320, rating: 4.5, description: "Deep roar exhaust system with stainless steel finish.", createdAt: "2026-01-24" },
  { id: 9, name: "Cat-Back Exhaust Kit", category: "Exhaust", price: 480, rating: 4.7, description: "Full cat-back setup for improved flow and aggressive tone.", createdAt: "2026-01-26" },
  { id: 10, name: "Titanium Muffler", category: "Exhaust", price: 390, rating: 4.8, description: "Lightweight titanium muffler with deep resonant sound.", createdAt: "2026-01-28" },
  { id: 11, name: "Dual Exhaust Tips", category: "Exhaust", price: 85, rating: 4.2, description: "Chrome dual-tip finish for a sportier rear profile.", createdAt: "2026-01-30" },
  { id: 12, name: "Headers & Manifold Kit", category: "Exhaust", price: 410, rating: 4.6, description: "Equal-length headers for improved exhaust scavenging.", createdAt: "2026-02-01" },
  { id: 13, name: "Exhaust Valve Controller", category: "Exhaust", price: 150, rating: 4.4, description: "Electronic valve control for switchable quiet/loud modes.", createdAt: "2026-02-02" },

  // ---------------- LIGHTING ----------------
  { id: 14, name: "LED Headlight Kit", category: "Lighting", price: 180, rating: 4.7, description: "Ultra-bright LED headlights with easy plug-and-play install.", createdAt: "2026-02-03" },
  { id: 15, name: "Underglow LED Kit", category: "Lighting", price: 95, rating: 4.3, description: "App-controlled RGB underglow lighting for night styling.", createdAt: "2026-02-04" },
  { id: 16, name: "Sequential Tail Lights", category: "Lighting", price: 220, rating: 4.6, description: "Smooth sequential turn signal tail light assembly.", createdAt: "2026-02-05" },
  { id: 17, name: "Fog Light Upgrade Kit", category: "Lighting", price: 110, rating: 4.4, description: "High-visibility fog lights for improved low-light driving.", createdAt: "2026-02-06" },
  { id: 18, name: "Interior Ambient Lighting", category: "Lighting", price: 60, rating: 4.2, description: "Customizable multi-color interior ambient light strips.", createdAt: "2026-02-07" },
  { id: 19, name: "HID Xenon Conversion Kit", category: "Lighting", price: 140, rating: 4.5, description: "Bright xenon output with a clean daylight-white color temperature.", createdAt: "2026-02-08" },

  // ---------------- BODY ----------------
  { id: 20, name: "Carbon Fiber Hood", category: "Body", price: 750, rating: 4.6, description: "Lightweight carbon fiber hood reduces weight and adds style.", createdAt: "2026-02-09" },
  { id: 21, name: "Front Splitter Kit", category: "Body", price: 260, rating: 4.5, description: "Aggressive front splitter improves aero and street presence.", createdAt: "2026-02-10" },
  { id: 22, name: "Rear Spoiler Wing", category: "Body", price: 310, rating: 4.7, description: "High-downforce rear wing for improved stability at speed.", createdAt: "2026-02-11" },
  { id: 23, name: "Side Skirt Extensions", category: "Body", price: 190, rating: 4.3, description: "Sleek side skirts that lower visual stance and improve airflow.", createdAt: "2026-02-12" },
  { id: 24, name: "Widebody Fender Flares", category: "Body", price: 420, rating: 4.6, description: "Bolt-on flares for a wider, more aggressive track-ready stance.", createdAt: "2026-02-13" },
  { id: 25, name: "Custom Grille Insert", category: "Body", price: 130, rating: 4.2, description: "Mesh grille insert that gives a sportier front-end look.", createdAt: "2026-02-14" },

  // ---------------- BRAKES ----------------
  { id: 26, name: "Racing Brake Pads", category: "Brakes", price: 95, rating: 4.9, description: "High-heat racing brake pads for superior stopping power.", createdAt: "2026-02-15" },
  { id: 27, name: "Slotted Brake Rotors", category: "Brakes", price: 220, rating: 4.7, description: "Slotted rotors improve heat dissipation and pad bite.", createdAt: "2026-02-16" },
  { id: 28, name: "Big Brake Caliper Kit", category: "Brakes", price: 890, rating: 4.8, description: "6-piston caliper upgrade for serious track-day stopping power.", createdAt: "2026-02-17" },
  { id: 29, name: "Stainless Brake Lines", category: "Brakes", price: 75, rating: 4.4, description: "Braided steel lines for firmer, more responsive pedal feel.", createdAt: "2026-02-18" },
  { id: 30, name: "Performance Brake Fluid", category: "Brakes", price: 35, rating: 4.3, description: "High boiling-point fluid for consistent braking under stress.", createdAt: "2026-02-19" },

  // ---------------- SUSPENSION ----------------
  { id: 31, name: "Coilover Suspension Kit", category: "Suspension", price: 680, rating: 4.8, description: "Fully adjustable coilovers for precise ride height and stiffness.", createdAt: "2026-02-20" },
  { id: 32, name: "Sport Lowering Springs", category: "Suspension", price: 240, rating: 4.5, description: "Lowers center of gravity for sharper handling and stance.", createdAt: "2026-02-21" },
  { id: 33, name: "Adjustable Sway Bar Kit", category: "Suspension", price: 195, rating: 4.4, description: "Reduces body roll for more confident cornering.", createdAt: "2026-02-22" },
  { id: 34, name: "Strut Tower Brace", category: "Suspension", price: 130, rating: 4.3, description: "Adds chassis rigidity for improved steering precision.", createdAt: "2026-02-23" },
  { id: 35, name: "Performance Bushings Set", category: "Suspension", price: 85, rating: 4.2, description: "Polyurethane bushings that tighten up suspension response.", createdAt: "2026-02-24" }
];
