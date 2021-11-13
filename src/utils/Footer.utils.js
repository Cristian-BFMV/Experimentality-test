export const showMore = footerDescriptionIndex => {
  const footerDescriptions = document.querySelectorAll('.footer-description-container');
  footerDescriptions[footerDescriptionIndex].classList.toggle('show-more');
};
