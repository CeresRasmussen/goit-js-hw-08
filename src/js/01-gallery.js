// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.reduce(
  (prew, next) =>
    prew +
    `<ul><li><a class="gallery__item" href="${next.original}">
  <img class="gallery__image" src="${next.preview}" alt="${next.description}" />
</a></li></ul>`,
  ''
);

gallery.insertAdjacentHTML('afterbegin', galleryList);

var lightBox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});
