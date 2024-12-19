const aboutUsBtn = document.querySelector('.about-us-btn');
const contactUsBtn = document.querySelector('.contact-us-btn');
const leftMenu = document.querySelector(".left-menu");
const aboutUsSubmenu = document.querySelector('.about-us-submenu');
const aboutUsSubmenus = document.querySelectorAll('.about-us-submenu li');
const contactUsSubmenu = document.querySelector('ul.contact-us-submenu');
const contactUsSubmenus = document.querySelectorAll('ul.contact-us-submenu li');
const lastLi = document.querySelector('.last-li-hidden')
const explorepage = document.querySelector('.button-explore-page')

let arr = [
    `<p>"We are Harmony Palace, a premier destination for hosting life's most memorable ceremonies, including weddings, engagements, birthdays, and henna nights. Our team is dedicated to making every celebration truly extraordinary by combining elegant venues, personalized service, and attention to detail."</p>`,
    `<p>Vision:</p><p>"To become the leading venue for creating unforgettable celebrations, where every event reflects elegance, joy, and cherished memories."</p><br><p>Mission:</p><p>"Our mission is to provide exceptional spaces, outstanding services, and innovative solutions to make your dreams come to life. We aim to ensure every guest leaves with a smile and memories they’ll treasure forever."</p>`,
    `<p>Stunning Venues: We offer beautifully designed spaces that can be tailored to your preferences.</p><p>Expert Team: Our experienced staff works closely with you to plan and execute every detail seamlessly.</p><p>Customizable Services: From catering to decorations, we provide bespoke solutions to match your style and needs.</p><p>Affordability Without Compromise: We deliver premium services at competitive prices, ensuring value for your investment.</p><p>Happy Clients: A proven track record of hosting successful events backed by glowing testimonials.</p>`,
    `<p>"Our wedding at Harmony Palace was magical. The team made everything so easy, and the venue was stunning!" – Sarah & Ali</p><p>"I hosted my daughter’s birthday party here, and the staff went above and beyond to make it perfect." – Farah</p><p>"The decorations, food, and attention to detail were top-notch. Our engagement ceremony was unforgettable." – Zeynab & Tural</p><p>"I can’t recommend Harmony Palace enough. The entire experience was stress-free and delightful." – Amina</p>`,
     `<p><b>Phone:</b> +994 55 676 87 98 & +012 67 987 90 23</p><p><b>Email:</b> harmony18181@gmail.com</p><p><b>Address:</b> 123 Main Street, City</p>`
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
    li.addEventListener("click", (e) => {
        e.stopPropagation();
        contactUsSubmenus.forEach((otherLi) => {
            if (otherLi !== li) {
                const otherSubmenu = otherLi.querySelector('ul');
                if (otherSubmenu) otherSubmenu.classList.remove('contact-us-submenu-ul-show');
            }
        });
        const submenu = li.querySelector('ul');
        if (submenu) submenu.classList.toggle('contact-us-submenu-ul-show');
    });
});
aboutUsBtn.addEventListener('click', () => {
    leftMenu.classList.remove("active");
    aboutUsBtn.classList.toggle('btn-clicked');
    aboutUsSubmenu.classList.toggle('show-about-us');
    contactUsSubmenu.classList.remove('show-contact-us');
    checkAndUpdateArr()
});

contactUsBtn.addEventListener('click', () => {
    leftMenu.classList.remove("active");
    contactUsBtn.classList.toggle('btn-clicked');
    aboutUsSubmenu.classList.remove('show-about-us');
    contactUsSubmenu.classList.toggle('show-contact-us');
});
document.addEventListener('click', (e) => {
    if (!leftMenu.contains(e.target) && !aboutUsSubmenu.contains(e.target) && !contactUsSubmenu.contains(e.target) && !aboutUsBtn.contains(e.target) && !contactUsBtn.contains(e.target)) {
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
