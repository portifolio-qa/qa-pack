(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const menuLinks = document.querySelectorAll(".sidebar a");
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".menu-toggle");

  menuLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }

    link.addEventListener("click", () => {
      sidebar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  toggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
})();
