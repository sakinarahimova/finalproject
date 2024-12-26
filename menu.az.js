const BtnTranslate = document.querySelector('.btn-translate')
const ListTranslate = document.querySelector(".ul-translate")
BtnTranslate.addEventListener("click" ,() => {
    console.log("h");    
    ListTranslate.classList.toggle("ul-translate-active")
})
const items = [
    { title: "Fanta", src: "./menuimages/1/fanta.jpg" },
    { title: "Cola", src: "./menuimages/1/cola.jpg" },
    { title: "Paytaxt Salatı", src: "./menuimages/1/paytaxtsalad.jpg" },
    { title: "Çoban Salatı", src: "./menuimages/1/tomatocucumbersalad.jpg" },
    { title: "Samsa", src: "./menuimages/1/samsa.jpg" },
    { title: "Ləblebi", src: "./menuimages/1/leblebi.jpg" },
    { title: "Kolbasa Tabağı", src: "./menuimages/1/kolbasaplatter.jpg" },
    { title: "Sous", src: "./menuimages/1/sous.jpg" },
    { title: "Sadə Plov", src: "./menuimages/1/plainpilaf.jpg" },
    { title: "Mimosa Salatı", src: "./menuimages/1/mimosa.jpg" },
    { title: "Şirələr", src: "./menuimages/1/juice.jpg" },
    { title: "Paxlava", src: "./menuimages/1/pakhlava.jpg" },
    { title: "Qril Kuzu Şişləri (Şaşlıq)", src: "./menuimages/1/lambskewers.jpg" },
    { title: "Qril Toyuq Şişləri (Şaşlıq)", src: "./menuimages/1/chickenskewers.jpg" },
    { title: "Meyvə Tabağı", src: "./menuimages/1/fruitplatter.jpg" },
    { title: "Kolbasa və Pendir Tabağı", src: "./menuimages/1/kolbasacheeseplatter.jpg" },
    { title: "Peçenye", src: "./menuimages/1/cookies.jpg" },
    { title: "Su (Qazlı və Qazsız)", src: "./menuimages/1/stillandsparkling.jpg" },
    { title: "Fanta / Cola / Sprite", src: "./menuimages/1/fantacolasprite.jpg" },
    { title: "Ənənəvi Plov", src: "./menuimages/1/traditionalpilaf.jpg" },
    { title: "Kabab Növləri", src: "./menuimages/1/kababassortment.jpg" },
    { title: "Şah Plovu", src: "./menuimages/1/shahpilaf.jpg" },
    { title: "Dolma", src: "./menuimages/1/grapedolma.jpg" },
    { title: "Şampan", src: "./menuimages/1/champagne.jpg" },
    { title: "Premium Şərablar", src: "./menuimages/1/finewine.jpg" },
    { title: "Yunan Salatı", src: "./menuimages/1/greeksalad.jpg" },
    { title: "Sezar Salatı", src: "./menuimages/1/caesarsalad.jpg" },
    { title: "Avokado və Nar Salatı", src: "./menuimages/1/avocadograpesalad.jpg" },
    { title: "Dondurma", src: "./menuimages/1/icecream.jpg" },
    { title: "Kürü Kanapeleri", src: "./menuimages/1/caviar.jpg" },
    { title: "Premium Soft İçkilər", src: "./menuimages/1/premiumsoftdrinks.jpg" },
    { title: "Şəkərbura", src: "./menuimages/1/shekerbura.jpg" },
    { title: "Mineral Su", src: "./menuimages/1/mineralwater.jpg" },
    { title: "Premium Şirələr", src: "./menuimages/1/freshlysqueezed.jpg" },
    { title: "Kolbasa və Pendir Premium Tabağı", src: "./menuimages/1/kolbasacheesepremiumplatter.jpg" },
    { title: "Balıq Kababı", src: "./menuimages/1/trout.jpg" },
    { title: "Qrildə Qızıl Balıq", src: "./menuimages/1/salmon.jpg" },
    { title: "Bildircin ləvəngi", src: "./menuimages/1/bildircin.jpg" },
    { title: "Kabab Deluxe Növləri", src: "./menuimages/1/kababdeluxe.jpg" }
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
  