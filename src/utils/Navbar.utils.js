export const navbarOpen = () => {
  const navlist = document.querySelector('.navbar');
  const body = document.body;
  body.classList.toggle('modal-open');
  navlist.classList.toggle('responsive-navbar');
};
