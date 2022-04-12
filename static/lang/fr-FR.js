/* eslint-disable prettier/prettier */
export default () => {
    return new Promise(function(resolve) {
        resolve({
            "common": {
                "title": "A simple example",
                "subtitle": "It's a blank-page. Start to build your'e page from here.",
                "error_with_status": "An error occurred on server",
                "404": "Page non existante!.",
                "404_subtitle": "La page demandée n'existe pas sur note site web.",
                "back": "back to home",
                "error_without_status": "An error occurred on the server",
                "contact_title": "Besoin de l'aide?",
                "contact_subtitle": "Pour toutes vos questions, veuillez utiliser ce formulaire",
                "form_name": "Votre nom complet *",
                "form_email": "Votre e-mail *",
                "form_phone": "Votre N° de téléphone",
                "form_company": "",
                "form_message": "Votre message",
                "form_terms": "J'ai lu et j'accepte les conditions d'utilisation",
                "form_privacy": "Poliqtique de Confidentialité *",
                "form_send": "Envoyez",
                "accept": "Acceptez",
                "en": "English",
                "fr": "Français",
                "de": "Deutsch",
                "zh": "简体中文",
                "pt": "󠁥󠁮󠁧󠁿Português",
                "id": "󠁥󠁮󠁧󠁿Bahasa Indonesia",
                "ar": "󠁥󠁮󠁧󠁿العربيّة",
                "notif_msg": "Nous."
            },
            "medicalLanding": {
                "call": "Appelez",
                "header_about": "A propos",
                "header_facility": "Nos services",
                "header_ask-doctors": "Nos médecins",
                "header_clinics": "HQ",
                "header_contact": "Contactez-nous",
                "header_language": "Langage",
                "header_theme": "Thème",
                "header_dark": "Dark",
                "header_light": "Light",
                "banner_title": "Clinique Noor",
                "banner_subtitle": "Le meilleur centre de diagnostique dans la wilaya de Tiaret, à votre disposition!",
                "banner_search": "Recherche",
                "about_title": "A propos de nous",
                "about_subtitle": "Nous sommes le 1er et unique centre de diagnostique au niveau de la wilaya de Tiaret offrant des éxamens cliniques, radiologiques et biologiques. Disponible de 07h à 00h (minuit) 7 jours/7!",
                "about_doctor": "Médecins",
                "about_clinics": "Cliniques",
                "about_hours": "Heures de travail",
                "about_quote": "Toujours à votre disposition!",
                "services_title": "Nos services",
                "services_button": "Plus de détails",
                "expertise_title": "Expertises",
                "expertise_subtitle": "Nos médecins sont des experts agréés dans tout service offert par notre centre!",
                "expertise_paragraph": "Notre équipe est toujours à l'écoute et prête à offrir de l'aide à ceux qui en ont besoin!",
                "testimonial_title": "Témoignages",
                "ask_doctors": "Notre Staff",
                "footer_paragraph": "Nous sommes toujours à votre disposition!"
            },
            "doctorsData": [{
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "BENTERIA Abdelkader",
                    "title": "Propriétaire de la clinique",
                    "tel": "0556909803",
                    "exp": 4,
                    "category": "Directeur",
                    "message": "Bonjour tous le monde, je suis Dr Bentheria de Tiaret. Je suis directeur principal et fondateur de Clinique Noor."
                },
                {
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "Benhlima Amine",
                    "title": "Médecin Interniste",
                    "tel": "0550921513",
                    "exp": 4,
                    "category": "Interniste",
                    "message": "Médecin spécialiste en médecine interne Option maladies vasculaires HTA ,diabète, maladies endocriniennes, traitement des varices ( sclérotherapie) , ECG, echodoppler vasculaire, MAPA, Rhumatologie"
                },
                {
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "Laghouati Moustapha",
                    "title": "Médecin Généraliste",
                    "tel": "0551126000",
                    "exp": 4,
                    "category": "Généraliste",
                    "message": ""
                }
            ],
            "doctorsCategories": [
                "Tous",
                "Directeur",
                "Généraliste",
                "Interniste"
            ],
            "expertiseList": [
                ["SCANNER 32 COUPES", "Rapidité", "fiabilité"],
                ["Mamographie numerique", "3D", "haute résolution"],
                ["Echographie", "Génerale", "Spécialisée"]
            ],
            "services": [{
                    "id": "lab",
                    "title": "Laboratoire d'analyse",
                    "desc": "C'est ici où sont prélevés et analysés divers fluides biologiques sous la responsabilité de nos biologistes médicaux."
                },
                {
                    "id": "radio",
                    "title": "Radiologie",
                    "desc": "Le service de radiologie vous permet de passer des examens radiologiques qui aident les médecins à faire des diagnostiques plus précis!"
                },
                {
                    "id": "scanner",
                    "title": "Scanneur",
                    "desc": "Si vous avez besoin de résultats beacoup plus spécialisés et spécifiques, notre service de Scanneur est ce que vous cherchez!"
                },
                {
                    "id": "collection",
                    "title": "Salle de prélèvement",
                    "desc": "Notre salle de collecte est toujours dans les meilleures conditions pour toute session de collecte dont vous avez besoin."
                }

            ],
            "directorWord": {
                "title": "Un mot du directeur",
                "message": "Le but essentiel de la Clinique Noor est de à participer, et de contribuer aux développement et la promotion du secteur de la Santé aux niveau de la Wilaya des Rostomides; Wilaya de TIARET, et les wilayas avoisinantes.. Aussi, Nous comptons considérablement sur l'équipe Médicale ,para-médicales , et Administratives de notre Clinique pour servir nos patient dans de meilleures conditions. Merci.",
                "button": "Contactez-nous"
            },
            "clinic": {
                "contact_info": {
                    "title": "Entrez en contact"
                },
                "data": [{
                    "name": "Clinique Noor",
                    "phone": "0551126000",
                    "email": "cliniqueNoor@gmail.com",
                    "address": "La clinique est située : Ettefah, Tiaret"
                }]
            }
        })
    })
}