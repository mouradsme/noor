/* eslint-disable prettier/prettier */
export default () => {
    return new Promise(function(resolve) {
        resolve({
            "common": {
                "title": "A simple example",
                "subtitle": "It's a blank page. Start to build your'e page from here.",
                "error_with_status": "An error occurred on server",
                "404": "Page not existing!.",
                "404_subtitle": "The page requested does not exist on a web site note.",
                "back": "Back to home",
                "error_without_status": "An error occurred on the server",
                "contact_title": "Need help?",
                "contact_subtitle": "For all your questions, please use this form",
                "form_name": "Your full name *",
                "form_email": "Your e-mail *",
                "form_phone": "Your Phone #",
                "form_company": "",
                "form_message": "Your message",
                "form_terms": "I have read and I accept the terms of use",
                "form_privacy": "Privacy Policy *",
                "form_send": "Send",
                "accept": "Accept",
                "en": "English",
                "fr": "Français",
                "ar": "󠁥󠁮󠁧󠁿العربية",
                "notif_msg": ""
            },
            "medicalLanding": { "call": "Call", "header_about": "About", "header_facility": "Our Services", "header_ask-doctors": "Our Doctors", "header_clinics": "HQ", "header_contact": "Contact Us", "header_language": "Language", "header_theme": "Theme", "header_dark": "Dark", "header_light": "Light", "banner_title": "Noor Clinic", "banner_subtitle": "The best diagnostic centre in the wilaya of Tiaret, at your disposal!", "banner_search": "Research", "about_title": "About Us", "about_subtitle": "We are the 1st and only diagnostic centre at the level of Tiaret wilaya offering clinical, radiological and biological examens. Available from 07:00 to 00:00 (midnight) 7 days\/7!", "about_doctor": "Doctors", "about_clinics": "Clinics", "about_hours": "Hours of Work", "about_quote": "Always at your disposal!", "services_title": "Our Services", "services_button": "More details", "expertise_title": "Expertises", "expertise_subtitle": "Our doctors are certified experts in any service offered by our centre!", "expertise_paragraph": "Our team is always listening and ready to offer help to those who need it!", "testimonial_title": "Testimony", "ask_doctors": "Our Staff", "footer_paragraph": "We are always at your disposal!" },
            "doctorsData": [{ "avatar": "\/images\/avatars\/doctor_01.jpg", "name": "BENTERIA Abdelkader", "title": "Clinic Owner", "tel": "0556909803", "exp": 4, "category": "Director", "message": "Hello everyone, I am Dr. Bentheria de Tiaret. I am principal and founder of Clinique Noor." }, { "avatar": "\/images\/avatars\/doctor_01.jpg", "name": "Benhlima Amine", "title": "International Medical Officer", "tel": "0550921513", "exp": 4, "category": "Internist", "message": "Medical specialist in internal medicine Option Vascular diseases HTA, diabetes, endocrine diseases, treatment of varicose veins (sclerotherapy), ECG, vascular echodoppler, MAPA, Rhumatology" }, { "avatar": "\/images\/avatars\/doctor_01.jpg", "name": "Laghouati Moustapha", "title": "Medical Practitioner", "tel": "0551126000", "exp": 4, "category": "Generalist", "message": "" }],
            "doctorsCategories": ["All", "Director", "Generalist", "Internist"],
            "expertiseList": [
                ["32 CUPS SCANNER", "Timeliness", "Reliability"],
                ["Numeric Mamography", "3D", "High resolution"],
                ["Echography", "Energy", "Specialised"]
            ],
            "services": [{ "id": "lab", "title": "Analysis Laboratory", "desc": "This is where various biological fluids are collected and analyzed under the responsibility of our medical biologists." }, { "id": "radio", "title": "Radiology", "desc": "The radiology department allows you to pass radiology tests that help physicians make more accurate diagnosing!" }, { "id": "scanner", "title": "Scanner", "desc": "If you need more specialized and specific results, our Scanneur service is what you are looking for!" }, { "id": "collection", "title": "Collection Room", "desc": "Our collection room is always in the best conditions for any collection session you need." }],
            "directorWord": { "title": "A Word from the Director", "message": "The essential goal of the Noor Clinic is to participate, and to contribute to the development and promotion of the health sector at the level of the Wilaya Rostomids; Wilaya de TIARET, and the surrounding wilayas. Also, we rely heavily on the medical, para-medical and administrative team of our clinic to serve our patients in better conditions. Thank you.", "button": "Contact Us" },
            "clinic": { "contact_info": { "title": "Enter Contact" }, "data": [{ "name": "Noor Clinic", "phone": "0551126000", "email": "cliniqueNoor@gmail.com", "address": "The clinic is located: Ettefah, Tiaret" }] }
        })
    })
}