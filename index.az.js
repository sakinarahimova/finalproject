const aboutUsBtn = document.querySelector('.about-us-btn');
const contactUsBtn = document.querySelector('.contact-us-btn');
const leftMenu = document.querySelector(".left-menu");
const aboutUsSubmenu = document.querySelector('.about-us-submenu');
const aboutUsSubmenus = document.querySelectorAll('.about-us-submenu li');
const contactUsSubmenu = document.querySelector('ul.contact-us-submenu');
const contactUsSubmenus = document.querySelectorAll('ul.contact-us-submenu li');
const lastLi = document.querySelector('.last-li-hidden')
const explorepage = document.querySelector('.button-explore-page')
const BtnTranslate = document.querySelector('.btn-translate')
const ListTranslate = document.querySelector(".ul-translate")
BtnTranslate.addEventListener("click" ,() => {
    console.log("h");    
    ListTranslate.classList.toggle("ul-translate-active")
    contactUsSubmenu.classList.remove('show-contact-us');
    aboutUsSubmenu.classList.remove('show-about-us');
    leftMenu.classList.remove("active");
})

let arr = [
    `<p>"Biz Harmony Palace, həyatın ən yadda qalan mərasimlərini təşkil etmək üçün mükəmməl bir məkan, o cümlədən toylara, nişanlara, doğum günlərinə və xına gecələrinə ev sahibliyi edirik. Komandamız hər bir qeyd etməni, zərif məkanlar, şəxsi xidmətlər və ən kiçik detallara diqqət yetirərək, həqiqətən unudulmaz etmək üçün özünə həsr olunmuşdur."</p>`,
    `<p>Görüş:</p><p>"Unudulmaz qeyd etmələr yaratmaq üçün lider məkan olmaq, hər bir tədbirin zəriflik, sevinc və dəyərli xatirələri əks etdirməsini təmin etmək."</p><br><p>Missiya:</p><p>"Missiyamız, unikal məkanlar, mükəmməl xidmətlər və innovativ həllər təqdim edərək arzularınızı həyata keçirməkdir. Hər bir qonağın üzündə bir təbəssüm və həyat boyu dəyərli xatirələrlə ayrılmasını təmin etməkdir."</p>`,
    `<p>Fərqli Məkanlar: Sizin tələblərinizə uyğun olaraq dizayn edilmiş mükəmməl məkanlar təqdim edirik.</p><p>Peşəkar Komanda: Təcrübəli heyətimiz sizinlə yaxından işləyərək hər bir detallı problemsiz şəkildə planlaşdırır və icra edir.</p><p>Fərdiləşdirilə Bilən Xidmətlər: Yemək xidməti və bəzəkdən tutmuş, tərzinizə və ehtiyaclarınıza uyğun fərdi həllər təqdim edirik.</p><p>Əlverişli Qiymətlər: Premium xidmətləri rəqabətədavamlı qiymətlərlə təqdim edərək sərmayənizdən maksimum fayda təmin edirik.</p><p>Məmnun Müştərilər: Uğurlu tədbirlər keçirməkdə sübut olunmuş təcrübə və parlaq rəylərlə.</p>`,
    `<p>"Bizim toyumuz Harmony Palace-də möcüzəvi idi. Komanda hər şeyi çox asan etdi və məkan inanılmaz dərəcədə gözəl idi!" – Sarah & Ali</p><p>"Mən qızımın doğum günü şənliyini burada keçirdim və heyət hər şeyi mükəmməl etmək üçün əlimizdən gələni etdi." – Farah</p><p>"Bəzəklər, yeməklər və detallara diqqət inanılmaz dərəcədə yüksək səviyyədə idi. Nişan mərasimimiz unudulmaz oldu." – Zeynab & Tural</p><p>"Harmony Palace-i tövsiyə etməkdən heç vaxt çəkinmirəm. Bütün təcrübə stressiz və xoş idi." – Amina</p>`,
    `<p><b>Telefon:</b> +994 55 676 87 98 <br><span style="visibility:hidden"><b>Telefon: </b></span> +012 67 987 90 23</p><p><b>Email:</b> harmony18181@gmail.com</p><p><b>Ünvan:</b> 123 Main Street, Şəhər</p>`
];
const checkAndUpdateArr = () => {
    const marginTop = getComputedStyle(leftMenu).marginTop
    
    if (marginTop === '10px') {
        console.log("ll");
        lastLi.classList.add('last-li-show')
    } 
     else if(marginTop !== '10px'){
        lastLi.classList.remove('last-li-show')
    }
};


const updateLeftMenuContent = (menuText, content) => {
    leftMenu.innerHTML = `
        <div>
            <h1>${menuText}</h1>
            <div>${content}</div>
        </div>
    `;
};
aboutUsSubmenus.forEach((li, i) => {
    li.addEventListener('mouseover', () => {
        leftMenu.classList.add("active");
        updateLeftMenuContent(li.textContent, arr[i]);
    });
});

contactUsSubmenus.forEach((li) => {
    li.addEventListener("mouseover", () => {
        contactUsSubmenus.forEach((otherLi) => {
            if (otherLi !== li) {
                const otherSubmenu = otherLi.querySelector('ul');
                if (otherSubmenu) otherSubmenu.classList.remove('contact-us-submenu-ul-show');
            }
        });
        const submenu = li.querySelector('ul');
        if (submenu) submenu.classList.add('contact-us-submenu-ul-show');
    });
    li.addEventListener("mouseout", () => {
        const submenu = li.querySelector('ul');
        if (submenu) submenu.classList.remove('contact-us-submenu-ul-show');
    });
});

aboutUsBtn.addEventListener('click', () => {
    leftMenu.classList.remove("active");
    aboutUsBtn.classList.toggle('btn-clicked');
    aboutUsSubmenu.classList.toggle('show-about-us');
    contactUsSubmenu.classList.remove('show-contact-us');
    ListTranslate.classList.remove("ul-translate-active")
    checkAndUpdateArr()
});

contactUsBtn.addEventListener('click', () => {
    leftMenu.classList.remove("active");
    contactUsBtn.classList.toggle('btn-clicked');
    aboutUsSubmenu.classList.remove('show-about-us');
    contactUsSubmenu.classList.toggle('show-contact-us');
    ListTranslate.classList.remove("ul-translate-active")
});
document.addEventListener('click', (e) => {
    if (!leftMenu.contains(e.target)&& !aboutUsSubmenu.contains(e.target) && !contactUsSubmenu.contains(e.target) && !aboutUsBtn.contains(e.target) && !contactUsBtn.contains(e.target)) {
        leftMenu.classList.remove("active");
        aboutUsSubmenu.classList.remove('show-about-us');
        contactUsSubmenu.classList.remove('show-contact-us');
    }
    contactUsSubmenus.forEach((li) => {
        const submenu = li.querySelector('ul');
        if (submenu && !li.contains(e.target)) {
            submenu.classList.remove('contact-us-submenu-ul-show');
        }
    });
});
