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
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");

  galleryList.innerHTML = galleryItemsMarkup;
}

getGallery();

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  const lightbox = basicLightbox.create(
    `<img src="${largeImageURL}" alt="${event.target.alt}" />`
  );

  lightbox.show();
});

console.log(galleryItems);
