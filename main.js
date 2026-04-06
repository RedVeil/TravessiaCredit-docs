(() => {
  const page = document.body.dataset.page;
  if (!page) return;

  const current = document.querySelector(`[data-nav="${page}"]`);
  if (current) current.setAttribute("aria-current", "page");
})();
