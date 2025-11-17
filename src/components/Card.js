export function Card(title, desc) {
  return `
    <div class="p-6 bg-white shadow rounded-xl hover:shadow-lg">
      <h3 class="text-xl font-semibold">${title}</h3>
      <p class="text-gray-600 mt-2">${desc}</p>
    </div>
  `;
}
