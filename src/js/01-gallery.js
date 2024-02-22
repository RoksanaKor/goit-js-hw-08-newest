import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');
const galleryHelp = galleryItems
  .map(
    value =>
      `<a href="${value.original}" class="gallery__item">
        <img
          class="gallery__image"
          src="${value.preview}"
          alt="${value.description}"
        ></img>
      </a>`
  )
  .join('');

gallery.innerHTML = galleryHelp;

const lightBox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
