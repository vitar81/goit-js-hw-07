import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

function getGallery() {
  const galleryItemsMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img 
      class="gallery__image"
      src="${preview}"
      alt="${description}" />
    </a>
</li>`
    )
    .join("");

  galleryList.innerHTML = galleryItemsMarkup;
}

getGallery();

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionsDelay: 250,
  captions: true,
});

console.log(galleryItems);
