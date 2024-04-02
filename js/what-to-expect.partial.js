const items = [
    {
        "id": "1",
        "title": "Exceptional Quality of Food",
        "image": "img/what-to-expect/exeptional-qualitty-of-food-picture.webp",
        "description": "We take pride in offering our guests the highest quality of ingredients sourced from local farms and markets."
    },
    {
        "id": "2",
        "title": "Varied Menu Selection",
        "image": "img/what-to-expect/varied-menu-selection-picture.webp",
        "description": "Our menu features a wide selection of dishes to suit every taste and preference. We have something for everyone."
    },
    {
        "id": "3",
        "title": "Impeccable Service",
        "image": "img/what-to-expect/impeccable-service-picture.webp",
        "description": "Our staff is trained to provide attentive and personalized service to each and every guest, ensuring a memorable dining experience."
    },
];

function renderItems(items) {
  let productsDomString = '';
  for (const item of items) {
    itemsDomString += `
    <div class="what-to-expect__unit">
          <img src="${item.image}" alt="${item.title}">
          <p class="what-to-expect__item">${item.title}</p>
          <hr class="what-to-expect__horisontal-dicorator" />
          <p class="what-to-expect__item-description">${item.description}
          </p>
    </div>`;
  }
  const itemsContainer = document.querySelector('.what-to-expect__units');
  itemsContainer.innerHTML = itemsDomString;
}
renderItems(items);