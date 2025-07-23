async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}


loadSection("header", "../html/header.html");
loadSection("about", "../html/about.html");
loadSection("portfolio", "../html/portfolio-main.html");
loadSection("thinking", "../html/content-thinking.html");

