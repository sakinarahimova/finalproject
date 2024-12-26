const BtnTranslate = document.querySelector('.btn-translate')
const ListTranslate = document.querySelector(".ul-translate")
BtnTranslate.addEventListener("click" ,() => {
    console.log("h");    
    ListTranslate.classList.toggle("ul-translate-active")
})
const items = [
  { title: "Fanta", src: "./menuimages/1/fanta.jpg" },
  { title: "Cola", src: "./menuimages/1/cola.jpg" },
  { title: "Paytaxt Salad", src: "./menuimages/1/paytaxtsalad.jpg" },
  { title: "Cucumber and Tomato Salad", src: "./menuimages/1/tomatocucumbersalad.jpg" },
  { title: "Samsa", src: "./menuimages/1/samsa.jpg" },
  { title: "Leblebi", src: "./menuimages/1/leblebi.jpg" },
  { title: "Kolbasa Platter", src: "./menuimages/1/kolbasaplatter.jpg" },
  { title: "Sous", src: "./menuimages/1/beefstew.jpg" },
  { title: "Plain Pilaf (Plov)", src: "./menuimages/1/plainpilaf.jpg" },
  { title: "Mimosa Salad", src: "./menuimages/1/mimosa.jpg" },
  { title: "Juices", src: "./menuimages/1/juice.jpg" },
  { title: "Pakhlava", src: "./menuimages/1/pakhlava.jpg" },
  { title: "Grilled Lamb Skewers (Shashlik)", src: "./menuimages/1/lambskewers.jpg" },
  { title: "Grilled Chicken Skewers (Shashlik)", src: "./menuimages/1/chickenskewers.jpg" },
  { title: "Assorted Fruit Plate", src: "./menuimages/1/fruitplatter.jpg" },
  { title: "Kolbasa and Cheese Platter", src: "./menuimages/1/kolbasacheeseplatter.jpg" },
  { title: "Cookies", src: "./menuimages/1/cookies.jpg" },
  { title: "Still and Sparkling Water", src: "./menuimages/1/stillandsparkling.jpg" },
  { title: "Fanta / Cola / Sprite", src: "./menuimages/1/fantacolasprite.jpg" },
  { title: "Traditional Pilaf (Plov)", src: "./menuimages/1/traditionalpilaf.jpg" },
  { title: "Kabab Assortment", src: "./menuimages/1/kababassortment.jpg" },
  { title: "Shah Pilaf (Plov)", src: "./menuimages/1/shahpilaf.jpg" },
  { title: "Stuffed Grape Leaves (Dolma)", src: "./menuimages/1/grapedolma.jpg" },
  { title: "Champagne", src: "./menuimages/1/champagne.jpg" },
  { title: "Fine Wines", src: "./menuimages/1/finewine.jpg" },
  { title: "Greek Salad", src: "./menuimages/1/greeksalad.jpg" },
  { title: "Caesar Salad", src: "./menuimages/1/caesarsalad.jpg" },
  { title: "Avocado and Pomegranate Salad", src: "./menuimages/1/avocadograpesalad.jpg" },
  { title: "Ice Cream", src: "./menuimages/1/icecream.jpg" },
  { title: "Caviar Canapés", src: "./menuimages/1/caviar.jpg" },
  { title: "Premium Soft Drinks", src: "./menuimages/1/premiumsoftdrinks.jpg" },
  { title: "Shekerbura", src: "./menuimages/1/shekerbura.jpg" },
  { title: "Mineral Water", src: "./menuimages/1/mineralwater.jpg" },
  { title: "Freshly Squeezed Juices", src: "./menuimages/1/freshlysqueezed.jpg" },
  { title: "Kolbasa and Cheese Premium Platter", src: "./menuimages/1/kolbasacheesepremiumplatter.jpg" },
  { title: "Grilled Trout", src: "./menuimages/1/trout.jpg" },
  { title: "Grilled Salmon", src: "./menuimages/1/salmon.jpg" },
  { title: "Stuffed Quail (Bıldırcın)", src: "./menuimages/1/bildircin.jpg" },
  { title: "Kabab Deluxe Assortment", src: "./menuimages/1/kababdeluxe.jpg" }
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
    li.addEventListener("click", () => {
      liElements.forEach((el) => el.classList.remove("selected-meal"));
      li.classList.add("selected-meal");
      updateImage(li, section.id);
    });
  });
});
