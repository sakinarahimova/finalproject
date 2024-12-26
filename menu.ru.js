const BtnTranslate = document.querySelector('.btn-translate')
const ListTranslate = document.querySelector(".ul-translate")
BtnTranslate.addEventListener("click" ,() => {
    console.log("h");    
    ListTranslate.classList.toggle("ul-translate-active")
})
const items = [
  { title: "Фанта", src: "./menuimages/1/fanta.jpg" },
  { title: "Кока-Кола", src: "./menuimages/1/cola.jpg" },
  { title: "Салат Пайтахт", src: "./menuimages/1/paytaxtsalad.jpg" },
  { title: "Салат Мимоза" , src: "./menuimages/1/mimosa.jpg"},
  { title: "Салат с огурцом и помидорами", src: "./menuimages/1/tomatocucumbersalad.jpg" },
  { title: "Самса", src: "./menuimages/1/samsa.jpg" },
  { title: "Леблеби", src: "./menuimages/1/leblebi.jpg" },
  { title: "Колбасная тарелка", src: "./menuimages/1/kolbasaplatter.jpg" },
  { title: "Соус", src: "./menuimages/1/beefstew.jpg" },
  { title: "Простой плов (Плов)", src: "./menuimages/1/plainpilaf.jpg" },
  { title: "Шашлычки из курицы (Шашлык)", src: "./menuimages/1/chickenskewers.jpg" },
  { title: "Соки", src: "./menuimages/1/juice.jpg" },
  { title: "Пахлава", src: "./menuimages/1/pakhlava.jpg" },
  { title: "Шашлычки из баранины (Шашлык)", src: "./menuimages/1/lambskewers.jpg" },
  { title: "Ассорти кабабов", src: "./menuimages/1/kababassortment.jpg" },
  { title: "Ассорти фруктов" , src: "./menuimages/1/fruitplatter.jpg"},
  { title: "Колбасная и сырная тарелка", src: "./menuimages/1/kolbasacheeseplatter.jpg" },
  { title: "Печенье", src: "./menuimages/1/cookies.jpg" },
  { title: "Вода (негазированная и газированная)", src: "./menuimages/1/stillandsparkling.jpg" },
  { title: "Фанта / Кока-Кола / Спрайт", src: "./menuimages/1/fantacolasprite.jpg" },
  { title: "Традиционный плов (Плов)", src: "./menuimages/1/traditionalpilaf.jpg" },
  { title: "Шах-плов (Плов)", src: "./menuimages/1/shahpilaf.jpg" },
  { title: "Фаршированные виноградные листья (Долма)", src: "./menuimages/1/grapedolma.jpg" },
  { title: "Шампанское", src: "./menuimages/1/champagne.jpg" },
  { title: "Изысканные вина", src: "./menuimages/1/finewine.jpg" },
  { title: "Греческий салат", src: "./menuimages/1/greeksalad.jpg" },
  { title: "Цезарь", src: "./menuimages/1/caesarsalad.jpg" },
  { title: "Салат с авокадо и гранатом", src: "./menuimages/1/avocadograpesalad.jpg" },
  { title: "Мороженое", src: "./menuimages/1/icecream.jpg" },
  { title: "Канапе с икрой", src: "./menuimages/1/caviar.jpg" },
  { title: "Премиальные безалкогольные напитки", src: "./menuimages/1/premiumsoftdrinks.jpg" },
  { title: "Шекербура", src: "./menuimages/1/shekerbura.jpg" },
  { title: "Минеральная вода", src: "./menuimages/1/mineralwater.jpg" },
  { title: "Свежевыжатые соки", src: "./menuimages/1/freshlysqueezed.jpg" },
  { title: "Колбасная и сырная премиум тарелка", src: "./menuimages/1/kolbasacheesepremiumplatter.jpg" },
  { title: "Жареная форель", src: "./menuimages/1/trout.jpg" },
  { title: "Жареный лосось", src: "./menuimages/1/salmon.jpg" },
  { title: "Фаршированная куропатка (Былдырдчын)", src: "./menuimages/1/bildircin.jpg" },
  { title: "Деликатесное ассорти кабабов", src: "./menuimages/1/kababdeluxe.jpg" }
];

function updateImage(li, sectionId) {
  const liContent = li.textContent.trim();
  const matchedItem = items.find((item) => item.title === liContent);

  const section = document.querySelector(`#${sectionId}`);
  const img = section.querySelector(".menu-img");
  const imgTitle = section.querySelector("h4");

  img.src = matchedItem.src;
  img.alt = matchedItem.title;
  imgTitle.textContent = matchedItem.title;
}

document.querySelectorAll("section").forEach((section) => {
  const liElements = section.querySelectorAll("ul.menu-inner-list li");

  liElements.forEach((li) => {
    li.addEventListener("click", () => updateImage(li, section.id));
  });
});
