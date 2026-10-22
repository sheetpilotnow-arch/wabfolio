const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");
const projectCount = document.getElementById("projectCount");
const dialog = document.getElementById("projectDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogDescription = document.getElementById("dialogDescription");
const dialogKind = document.getElementById("dialogKind");
const dialogArt = document.getElementById("dialogArt");
const dialogClose = document.getElementById("dialogClose");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

function updateCount() {
  const visible = [...projectCards].filter(card => !card.hidden).length;
  projectCount.textContent = String(visible).padStart(2, "0");
}
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.toggle("active", item === button));
    const filter = button.dataset.filter;
    projectCards.forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
    updateCount();
  });
});

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    dialogTitle.textContent = card.dataset.title;
    dialogDescription.textContent = card.dataset.description;
    dialogKind.textContent = card.dataset.kind;
    const art = card.querySelector(".project-art");
    dialogArt.className = "dialog-art " + [...art.classList].filter(name => name !== "project-art").join(" ");
    dialogArt.innerHTML = art.innerHTML;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else alert(card.dataset.title + "\\n\\n" + card.dataset.description);
  });
});
dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "ปิดเมนู" : "เปิดเมนู");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
updateCount();
