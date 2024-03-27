const response = await fetch("api/reservation-content.json");
const contentArr = await response.json();

function renderContent(contentArr) {
  let contentDomString = "";
  for (const card of contentArr) {
    contentDomString += `
        <li class="book__li">
            <div class="book__li-img">
                <img src="${card.image}" alt="${card.alt}" />
            </div>
            <div class="book_li-content">
                <p class="book__li-content-header">${card.title}</p>
                <p class="book__text">${card.description}</p>
            </div>
        </li>`;
  }
  const contentContainer = document.querySelector(".book__ul");
  contentContainer.innerHTML = contentDomString;
//   console.log(contentDomString);
}

renderContent(contentArr);
