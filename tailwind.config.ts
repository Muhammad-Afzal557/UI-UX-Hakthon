import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['"Great Vibes"'], // Add the font family
       
      },
      backgroundImage: {
        'hero-pattern': "url('/15aa0f490ba.png')",
        "hero-Img" : 'url("/aaaa0c0.jpeg")',
        "hero-Imgg" : 'url("/assdffe7f3.jpeg")',
        'footer-texture': "url('/images/footer-texture.png')",
      },
      
      colors: {
        customOrange: '#FF9F0D',
      },
    },
  },
  plugins: [],
} satisfies Config;
