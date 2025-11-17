import "./style.css";
import { Hero } from "./components/Hero.js";
import { Card } from "./components/Card.js";

console.log("Homepage Loaded");

document.querySelector("#app").innerHTML = `
  ${Hero()}

  <section class="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
    ${Card("Fast Performance", "Optimized using Vite")}
    ${Card("Modern UI", "Styled with Tailwind Components")}
    ${Card("Easy to Customize", "Modular ES Modules")}
  </section>

  <div class="text-center py-10">
    <button class="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
      Call To Action
    </button>
  </div>
`;
