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
    `<p>"Мы - Harmony Palace, идеальное место для проведения самых запоминающихся мероприятий, включая свадьбы, помолвки, дни рождения и девичники. Наша команда стремится сделать каждое празднование по-настоящему незабываемым благодаря изысканной обстановке, персонализированному обслуживанию и вниманию к мельчайшим деталям."</p>`,
    `<p>Видение:</p><p>"Быть ведущим местом для создания незабываемых мероприятий, гарантируя, что каждое событие олицетворяет элегантность, радость и ценные воспоминания."</p><br><p>Миссия:</p><p>"Наша миссия - воплощать ваши мечты в жизнь, предлагая уникальные пространства, первоклассное обслуживание и инновационные решения. Мы гарантируем, что каждый гость уходит с улыбкой и ценными воспоминаниями на всю жизнь."</p>`,
    `<p>Изысканные пространства: Мы предлагаем идеально продуманные места, соответствующие вашим требованиям.</p><p>Профессиональная команда: Наши опытные специалисты тесно сотрудничают с вами, чтобы безупречно спланировать и воплотить в жизнь каждую деталь.</p><p>Персонализированные услуги: От кейтеринга до декора мы предлагаем решения, адаптированные к вашему стилю и потребностям.</p><p>Доступные цены: Мы предоставляем премиальные услуги по конкурентным ценам, обеспечивая максимальную отдачу от ваших инвестиций.</p><p>Довольные клиенты: Наша репутация основана на успешном проведении мероприятий и отличных отзывах.</p>`,
    `<p>"Наша свадьба в Harmony Palace была волшебной. Команда сделала все невероятно простым, а место было невероятно красивым!" – Сара и Али</p><p>"Я праздновала день рождения моей дочери здесь, и персонал сделал все, чтобы мероприятие прошло идеально." – Фара</p><p>"Украшения, еда и внимание к деталям были на высшем уровне. Наша помолвка стала незабываемой." – Зейнаб и Турал</p><p>"Я всегда рекомендую Harmony Palace. Весь процесс был без стресса и приятным." – Амина</p>`,
    `<p><b>Телефон:</b> +994 55 676 87 98 <br><span style="visibility:hidden"><b>Телефон: </b></span> +012 67 987 90 23</p><p><b>Email:</b> harmony18181@gmail.com</p><p><b>Адрес:</b> 123 Main Street, Город</p>`
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
