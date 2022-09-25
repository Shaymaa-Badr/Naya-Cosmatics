// Create a media condition that targets viewports at least 992px wide
const mediaQuery = window.matchMedia('(max-width: 992px)')
// Translation object
const translation = {
    en: {
        home: 'Home',
        about: "About",
        presence:"Presence",
        products: "Products",
        offering:"Our Offering",
        contact: "Contact Us",
        main_title: "Home of Beauty & Care Products",
        about_title: "about us",
        about_p1: `Naya Cosmetics was found in 2022 in Dubai, United Arab Emirates (UAE), to
        accommodate the high demand for beauty products and cosmetics in the region.`,
        about_p2: `Naya Cosmetics facilitates the trade between beauty experts, dermatology
        specialists and manufacturers, key wholesalers and distributers in different
        countries throughout Asia, Europe, and the MENA region.`,
        about_p3: `With its wide network of strategic partners, Naya Cosmetics continuously
        generates attractive revenues, creates value and provides its partners with key
        knowhow, operational and logistics support.`,
        local_title: "local & international presence",
        local_p1: `Naya Cosmetics has strong strategic alliances internationally. The
        company has active relationship with local production facilities in the
        UAE, UK, Morocco & the Netherlands.`,
        local_p2: `Naya Cosmetics has a wide network of strategic relationships with
        cosmetics wholesalers, dealers, retail resellers, agents and key
        distributors around the world.`,
        local_p3: `Naya Cosmetics has offices in the UAE and active trade & partnerships
        in other counties such as Iraq, Saudi Arabia and the Netherlands.`,
        body_title: "body care",
        makeup_title: "makeup collection",
        hair_title: "shampoos & hair care",
        mission_title: `what can we offer you?`,
        mission_p1: `Naya Cosmetics can provide you with very attractive offers compared to
        any other cosmetics provider in the market, in terms of quality, price and
        delivery time`,
        mission_p2: `Furthermore, we provide your customers (end-users) with exceptional
        care that lasts a lifetime by providing them with high quality of care
        products, customer experience and after sales value service.`,
        mission_p3: `Our aim is to become your first choice of cosmetics provider for best
        class body care, makeup and hair care products, while we support you to
        boost your business growth, sustainability and customer loyalty.`,
        contact_title: "contact us",
        address: `Business Center, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates`,
        submit: "Send",
        name_input: "Name",
        email_input: "E-mail",
        phone_input: "Phone number",
        company_input: "Company name",
        msg_input: "Leave a message",
    },
    ar: {
        home: 'الرئيسية',
        about: "من نحن",
        presence:"تواجدنا العالمى",
        products: "منتجاتنا",
        offering:"خدماتنا المميزة",
        contact: "اتصل بنا",
        main_title: "موطن منتجات التجميل والعناية",
        about_title: "من نحن",
        about_p1: `تأسست شركة نايا كوزميتيكس م م ح عام 2022 في دبي، الإمارات العربية المتحدة، لتوفير مستلزمات التجميل
        والعناية الشخصية تلاؤما مع الطلب العالي لمنتجاتنا في كافة اسواق منطقة الشرق الاوسط.`,
        about_p2: `
        نايا كوزميتيكس تعمل كوسيط تجاري و شريك اساسى مع كافة المختصين الرائدين في مجال منتجات التجميل و
        لدينا شراكة استراتيجية متميزة مع مصنعين،
        منتجين و مروجين محترفين في جميع انحاء العالم.`,
        about_p3: `
نايا كوزميتيكس تتميز في علاقاتها الاستراجية، نقدم من خلالها دعم لوجيستيكي متكامل، خدمة متواصلة و
سريعة و ارباح عالية لكل من يتعامل معنا.`,
        about_p4: `تقدم شركة نايا كوزميتيكس مجموعة واسعة من مستحضرات التجميل للعناية بالجسم، مجموعة واسعة من
الميك أب، كريمات و مرطبات الجسم واليدين و الوجه، بلسم و شامبوات بتركيبات مختلفة، زيوت الشعر
الطبيعية، و اصباغ الشعر من جميع الالوان المميزة مع جودة عالية.`,
        local_title: "التواجد المحلي والدولي",
        local_p1:`لدى نايا كوزميتيكس شركاء محليين ودوليين مع تنسيق عالمي عبر الإمارات العربية المتحدة، المملكة
        المتحدة، هولندا، المغرب، المملكة العربية السعودية و العراق.`,
        local_p2:`في نايا كوزميتيكس نتعامل مع شركاء مميزين و محترفين في مجال مستحضرات التجميل مثل
        صالونات التجميل, مراكزالأسترخاء, الفنادق والمنتجعات الفخمة. اضافة الى ذلك نتعامل مع شركاء
        استراتيجيين كتجار الجملة, موزعين ووكلاء معتمدين وتجار التجزئة لمستحضرات التجميل في كل
        انحاء العالم.`,
        local_p3: `لدى نايا كوزميتيكس مكاتب في الإمارات العربية المتحدة وتجارة نشطة وعلاقات تجارية خاصة في
        المملكة العربية السعودية، العراق و هولندا.`,
        body_title: "العناية بالجسم",
        makeup_title: "مجموعات المكياج",
        hair_title: "الشامبو والعناية بالشعر",
        mission_title: `رؤيتنا المستقبلية..`,
        mission_p1: `نايا كوزميتيكس توفر عملائها المميزين عروضًا جذابة للغاية مقارنة بأي مزود
        مستحضرات تجميل آخر في السوق، من حيث الجودة و الدعم والسعر ووقت التسليم.`,
        mission_p2: `علاوة على ذلك، نقدم لزبائنك (المستخدمين النهائيين) رعاية استثنائية تدوم مدى الحياة
        من خلال تزويدهم بجودة عالية من منتجات العناية و خدمة عملاء مميزة.`,
        mission_p3:`هدفنا الأهم هو أن نصبح خيارك الأول كمزود مستحضرات التجميل للحصول على
        أفضل منتجات العناية، بينما ندعمك لتعزيز نمو أعمالك واستدامتها و ارضاء زبائنك
        و ضمان ولاؤُهم.`,
        contact_title: "اتصل بنا",
        address: ` مركز الأعمال بالشارقة المنطقة الحرة لمدينة النشر ، الشارقة ،الإمارات العربية المتحدة`,
        submit: "إرسال",
        name_input: "الاسم",
        email_input: "البريد الالكترونى",
        phone_input: "رقم الهاتف",
        company_input: "إسم الشركة",
        msg_input: "اترك رسالة",
    }
}

let navMenu = document.querySelector('#navbarNavDropdown')
const langSelector = document.querySelector('select')
const langOption = document.querySelectorAll('option')
const topBtn = document.querySelector("#topBtn")
const loader = document.querySelector('.loader-overlay');
const makeupAr = './assets/img/Naya_makup_img_ar1.png'
const bodyProductsAr = './assets/img/Naya_body_care_ar.png';
const hairprouductsAr = './assets/img/Naya_hair_products_img_ar.png'
const makeupEN = './assets/img/Naya_makup_img_en.png'
const bodyProductsEn = './assets/img/Naya_body_care_en.png';
const hairprouductsEn = './assets/img/Naya_hair_products_img_en.png'

//Set loader overlay
function loading() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
    }, 10000);
}
loading()


// Collapse navbar
const navBtnToggle = () => {
    myCollapse = new bootstrap.Collapse(navMenu);
    myCollapse.hide()
}
// Check if the media query is true
if (mediaQuery.matches) {
    navMenu.addEventListener('click', function (e) {
        e.target.classList.contains('nav-link') ? navBtnToggle() : null
    })
} else {
    null
}

// Select language
langSelector.addEventListener('change', e => {
    let lang = e.target.value
    setLang(lang)
    setFonts(lang)
    setSlectedOption(lang)
    localStorage.setItem('lang', lang)
    mediaQuery.matches ? navBtnToggle() : null
})

// Get language from LS
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang')
    setLang(lang)
    setFonts(lang)
    setSlectedOption(lang)
})

// Set app language
const setLang = (lang) => {
    const elements = document.querySelectorAll("[data-i18n]")
    elements.forEach(element => {
        const dataKey = element.getAttribute('data-i18n')
        element.classList.contains('form-control') ? element.setAttribute('placeholder', (translation[lang][dataKey])) : element.textContent = translation[lang][dataKey]

    });
    // Set document direction
    // document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
        document.querySelectorAll('.set_dir').forEach(x => {
            x.dir = "rtl";
        })
        document.querySelector('.img_1').src = bodyProductsAr
        document.querySelector('.img_2').src = makeupAr
        document.querySelector('.img_3').src = hairprouductsAr

    } else {
        document.querySelectorAll('.set_dir').forEach(x => {
            x.dir = 'ltr';
        })
        document.querySelector('.img_1').src = bodyProductsEn
        document.querySelector('.img_2').src = makeupEN
        document.querySelector('.img_3').src = hairprouductsEn
    }
}

// Set selected language
const setSlectedOption = (lang) => {
    langOption.forEach(element => {
        element.value === lang ? element.setAttribute('selected', 'selected') : element.removeAttribute('selected')
    })

}
// Set fonts 
const setFonts = (lang) => {
    // Set header fonts family
    document.querySelectorAll('.header').forEach(element => {
        if (lang === 'ar') {
            element.classList.remove('header_en_font')
            element.classList.add('header_ar_font');
        } else {
            element.classList.remove('header_ar_font')
            element.classList.add('header_en_font');
        }
    })
    // Set text fonts family
    document.querySelectorAll('.text').forEach(element => {
        if (lang === 'ar') {
            element.classList.remove('text_en_font')
            element.classList.add('text_ar_font');
        } else {
            element.classList.remove('text_ar_font')
            element.classList.add('text_en_font');
        }
    })
}

// Form submittion
const submitForm = (e) => {
    e.preventDefault()
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }
    if (formData.name != '' && formData.email != '' && formData.company != '' && formData.phone != '' && formData.message != '') {
        // Send emil using Emailsjs
        emailjs.send("service_ebf80cb", "template_a9dle4s", formData)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.querySelector("#error").classList.add('d-none')
        document.querySelector("#success").classList.remove('d-none')
        document.querySelector('#contact_form').reset()
    } else {
        document.querySelector("#error").classList.remove('d-none')

    }

}

document.querySelector('#contact_form').addEventListener("submit", submitForm)


//  Scroll top
const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
topBtn.addEventListener('click', scrollTop)
// Show top button
window.onscroll = () => window.scrollY > 700 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0
