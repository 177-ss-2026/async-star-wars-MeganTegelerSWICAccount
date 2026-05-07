const data = await resp.json();

const html = data
  .map((item) => `<li>${item.name ? item.name : item.title}</li>`)
  .join("");

output.innerHTML = `<ul>${html}</ul>`;
