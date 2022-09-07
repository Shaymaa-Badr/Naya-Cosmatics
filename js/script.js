// Translation object
const translation = {
    en: {
        home: 'Home',
        about: "About",
        products: "Products",
        contact: "Contact Us",
        main_title: "Home of Beauty & Care Products",
        about_title: "about us",
        about_p1: `Naya Cosmetics was found in 2022 in Dubai, United Arab Emirates (UAE). The founder & CEO, Mohammed Mumin
        is an entrepreneur with over 15 years of experience in the GCC (Golf Region) and Europe, He has extensive experience
        in the area of trade between the Netherlands and the UAE.`,
        about_p2: `His background is into business development,
        marketing, management and sales of diversified products and services ranging from consumer electronics,
        personal care products, cosmetics, investments and banking solutions.`,
        about_p3: `He holds the Master’s degree from the
        Open University in the Netherlands, specializing in management and AI (Artificial Intelligence) at work.`,
        local_title: "local & international presence",
        local_p1: `Naya Cosmetics has local & international partners, liaises with production facilities in the UAE, UK, the Netherlands, Morocco and Brazil.`,
        local_p2: `Naya Cosmetics has strategic partnerships with major wholesalers, dealers & authorized resellers, agents,
              distributors, and cosmetics retailers around the world.`,
        local_p3: `aya Cosmetics has offices in the UAE and active trade & business relationships in, Iraq, the Netherlands, UK, Morocco, Brazil and Saudi Arabia.`,
        body_title: "body care",
        makeup_title: "makeup collection",
        hair_title: "shampoos & hair care",
        mission_title: "mission & vison",
        mission_p1: "We provide care that lasts a lifetime…",
        mission_p2: `We are the first choice of cosmetics provider contributing to the world beauty and well-being…`,
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
        products: "منتجاتنا",
        contact: "اتصل بنا",
        main_title: "موطن منتجات التجميل والعناية",
        about_title: "من نحن",
        about_p1: `تأسست شركة نايا كوزميتيكس م م ح عام 2022 في دبي ، الإمارات العربية 
        المتحدة`,
        about_p2: `المؤسس والمدير التنفيذي محمد مؤمن رجل أعمال بخبرة تزيد عن 15 ً عاما في 
        الخليج و اوروبا, تحديدا في دولة الإمارات العربية المتحدة و هولندا. حاصل على درجة 
        الماجستير في العلوم الإدارية من الجامعة المفتوحة في هولندا.`,
        about_p3: `متخصص في تطوير الأعمال وتسويق منتجات وخدمات متنوعة تتراوح ما بين السلع 
        الإلكترونية الاستهلاكية, مستحضرات التجميل, خدمات المصرفية و التسويق الرقمي.
         تقدم شركة نايا كوزميتيكس مجموعة واسعة من مستحضرات التجميل:
        • العناية بالجسم
        • ميك أب
        • الشامبو والبلسم وزيوت الشعر الطبيعية
        `,
        local_title: "التواجد المحلي والدولي",
        local_p1: `لدى نايا كوزميتيكس  شركاء محليين ودوليين ، وتتعاون مع مرافق الإنتاج في الإمارات العربية المتحدة والمملكة المتحدة وهولندا والمغرب والبرازيل.`,
        local_p2: `لدى نايا كوزميتيكس شراكات إستراتيجية مع كبار تجار الجملة والتجار والموزعين المعتمدين والوكلاء ،
        الموزعين وتجار التجزئة لمستحضرات التجميل حول العالم.`,
        local_p3: ` لدى نايا كوزميتيكس مكاتب في الإمارات العربية المتحدة ولديها علاقات تجارية وتجارية نشطة في العراق وهولندا والمملكة المتحدة والمغرب والبرازيل والمملكة العربية السعودية`,
        body_title: "العناية بالجسم",
        makeup_title: "مجموعات المكياج",
        hair_title: "الشامبو والعناية بالشعر",
        mission_title: "الرؤية",
        mission_p1: " نوفر الرعاية التي تدوم مدى الحياة لعالم الجمال و النظافة...",
        mission_p2: ` الخيار الأول كمزود مستحضرات التجميل`,
        contact_title: "اتصل بنا",
        address: ` مركز الأعمال بالشارقةالمنطقة الحرة لمدينة النشر ، الشارقة ،الإمارات العربية المتحدة`,
        submit: "إرسال",
        name_input: "الاسم",
        email_input: "البريد الالكترونى",
        phone_input: "رقم الهاتف",
        company_input: "إسم الشركة",
        msg_input: "اترك رسالة",
    }
}

const langSelector = document.querySelector('select')
const langOption = document.querySelectorAll('option')
const makeupAr = '../assets/img/Naya_makup_img_ar1.png'
const bodyProductsAr = '../assets/img/Naya_body_care_ar.png';
const hairprouductsAr = '../assets/img/Naya_hair_products_img_ar.png'
const makeupEN = '../assets/img/Naya_makup_img_en.png'
const bodyProductsEn = '../assets/img/Naya_body_care_en.png';
const hairprouductsEn = '../assets/img/Naya_hair_products_img_en.png'
const topBtn = document.querySelector("#topBtn")

// Select language
langSelector.addEventListener('change', e => {
    let lang = e.target.value
    setLang(lang)
    setFonts(lang)
    setSlectedOption(lang)
    localStorage.setItem('lang', lang)
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
        emailjs.send("service_ntucrew", "template_zav0jxn", formData)
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
