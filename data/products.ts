export type Product = {
    id: number;
    name: string;
    price: number;
    options: string[];
}

export const MESSAGE = {
    NO_PRODUCTS_FOUND: "No products found, please try again",
    SEARCH_PLACEHOLDER: "Search products..."
  };

export const productsOptions = ["Plastic", "Metal", "Wood", "Titanium", "Single Vision", "Bifocal", "Progressive", "Photochromic", "Classic", "Modern", "Retro", "Sporty"];

export const products: Product[] = [
  { id: 1, name: "Nerd-o-Vision", price: 19.99, options: ["Plastic", "Single Vision", "Classic"] },
  { id: 2, name: "Smarty Pants Spectacles", price: 24.99, options: ["Metal", "Bifocal", "Modern"] },
  { id: 3, name: "Four-Eyes Fashion", price: 29.99, options: ["Wood", "Progressive", "Retro"] },
  { id: 4, name: "Geek Chic Glasses", price: 34.99, options: ["Titanium", "Photochromic", "Sporty"] },
  { id: 5, name: "Professor Peepers", price: 39.99, options: ["Plastic", "Progressive", "Classic"] },
  { id: 6, name: "Hipster Goggles", price: 44.99, options: ["Wood", "Single Vision", "Retro"] },
  { id: 7, name: "IntelliSpecs", price: 49.99, options: ["Metal", "Bifocal", "Sporty"] },
  { id: 8, name: "Wise Guy Wear", price: 54.99, options: ["Titanium", "Progressive", "Modern"] },
  { id: 9, name: "Brainiac Binoculars", price: 59.99, options: ["Plastic", "Photochromic", "Classic"] },
  { id: 10, name: "Genius Glasses", price: 64.99, options: ["Wood", "Single Vision", "Retro"] },
  { id: 11, name: "Bookworm Binoculars", price: 69.99, options: ["Metal", "Bifocal", "Modern"] },
  { id: 12, name: "Spectacular Spectacles", price: 74.99, options: ["Titanium", "Progressive", "Sporty"] },
  { id: 13, name: "Magnificent Monocles", price: 79.99, options: ["Plastic", "Photochromic", "Classic"] },
  { id: 14, name: "Spectacle Savvy", price: 84.99, options: ["Wood", "Single Vision", "Retro"] },
  { id: 15, name: "Brain Booster Bifocals", price: 89.99, options: ["Metal", "Bifocal", "Modern"] },
  { id: 16, name: "Owl Eyes Optics", price: 94.99, options: ["Titanium", "Progressive", "Sporty"] },
  { id: 17, name: "Smarty Specs", price: 99.99, options: ["Plastic", "Single Vision", "Classic"] },
  { id: 18, name: "Perceptive Peepers", price: 104.99, options: ["Wood", "Bifocal", "Retro"] },
  { id: 19, name: "Clever Contact Glasses", price: 109.99, options: ["Metal", "Photochromic", "Modern"] },
  { id: 20, name: "Erudite Eyewear", price: 114.99, options: ["Titanium", "Progressive", "Sporty"] }
];