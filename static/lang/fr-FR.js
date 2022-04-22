/* eslint-disable prettier/prettier */
export default () => {
    return new Promise(function(resolve) {
        resolve({
            "common": {
                "error_with_status": "Erreur!",
                "error_without_status": "Erreur",
                "404": "Page inexistante!",
                "404_subtitle": "La page demandée n'existe pas sur note site web.",
                "back": "Retour",
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
                "fr": "Français",
                "ar": "󠁥󠁮󠁧󠁿العربيّة",
                "notif_msg": ""
            },
            "about": {
                "proff": "Accueil professionnel : le patient au centre de la prise en charge",
                "RIS": "RIS : circuit de prise en charge informatisé et simplifié",
                "PACKS": "PACKS : données des patients archivés pour le suivi"
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
                "banner_subtitle": "La clinique NOOR est engagée dans une démarche continue d’amélioration de  la qualité des soins et des prestations offertes",
                "banner_search": "Recherche",
                "about_title": "A propos de nous",
                "about_subtitle": "Nous sommes le 1er et unique centre de diagnostique au niveau de la wilaya de Tiaret offrant des éxamens cliniques, radiologiques et biologiques. Disponible de 07h à 00h (minuit) 7 jours/7! Qualité médicale, sécurité du patient et facilité de prise en charge sont notre principal objectif.",
                "expertise": "Expertise",
                "quality": "Qualité",
                "about_hours": "Heures de travail",
                "about_quote": "Toujours à votre disposition!",
                "services_title": "Nos services",
                "services_button": "Plus de détails",
                "expertise_title": "Expertises",
                "expertise_subtitle": "Nos médecins sont des experts agréés dans tout service offert par notre centre! Tous les moyens existants en termes de dépistage et de diagnostic médical complet sont mis à leur disposition.",
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
                    "name": "Pr L. Stof",
                    "title": "Professeur en radiologie",
                    "tel": "N/D",
                    "exp": 4,
                    "category": "Radiologie",
                    "message": ""
                },
                {
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "Dr I. CHORFI ",
                    "title": "Médecin spécialisé dans l'imagerie médicale",
                    "tel": "N/D",
                    "exp": 4,
                    "category": "Imagerie Médicale",
                    "message": ""
                },
                {
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "Dr H.R BELKHITER ",
                    "title": "Médecin spécialisé dans l'imagerie médicale",
                    "tel": "N/D",
                    "exp": 4,
                    "category": "Imagerie Médicale",
                    "message": ""
                },
                {
                    "avatar": "/images/avatars/doctor_01.jpg",
                    "name": "Dr. AIT ABDELKRIM ",
                    "title": "Médecin GÉNÉRALISTE",
                    "tel": "N/D",
                    "exp": 4,
                    "category": "Médecin Généraliste",
                    "message": ""
                }
            ],
            "doctorsCategories": [
                "Tous",
                "Directeur",
                "Généraliste",
                "Interniste",
                "Radiologie",
                "Imagerie Médicale",
                "Médecin Généraliste"
            ],
            "expertiseList": [
                ["IRM", "1.5 T", "DERNIERE GENERATION"],
                ["SCANNER ", "32 COUPES", "-70% de rayon X AIDR3D"],
                ["MAMMOGRAPHIE ", "3D nouvelle génération", "Haute Résolution"],
                ["PANORAMIQUE DENTAIRE ", "Numérique", "Haute Résolution"],
            ],
            "services": [{
                    "id": "irm",
                    "title": "IRM",
                    "desc": "IRM 1.5 T BioMatrix dernière génération"
                },
                {
                    "id": "scanner",
                    "title": "Scanner",
                    "desc": "Scanner 32 coupes dernière génération!"
                },
                {
                    "id": "mamo",
                    "title": "Mammographie  numérique",
                    "desc": "Mammographie  numérique"
                },
                {
                    "id": "echo",
                    "title": "Echographie numérique",
                    "desc": "Echographie numérique"
                },
                {
                    "id": "teeth",
                    "title": "Panoramique dentaire numérique",
                    "desc": "Panoramique dentaire numérique"
                },

                {
                    "id": "radio",
                    "title": "Radiologie",
                    "desc": "La Radiologie conventionnelle de radiologie vous permet de passer des examens radiologiques qui aident les médecins à faire des diagnostiques plus précis!"
                },
                {
                    "id": "lab",
                    "title": "Laboratoire d'analyse",
                    "desc": "C'est ici où sont prélevés et analysés divers fluides biologiques sous la responsabilité de nos biologistes médicaux."
                },
                {
                    "id": "pre",
                    "title": "Salle de prélèvement",
                    "desc": "Notre salle de collecte est toujours dans les meilleures conditions pour toute session de collecte dont vous avez besoin."
                }

            ],
            "directorWord": {
                "title": "Un mot du directeur",
                "message": "Le but essentiel de la Clinique Noor est de participer, et de contribuer aux développement et la promotion du secteur de la Santé au niveau de la Wilaya des Rostomides; Wilaya de TIARET, et les wilayas avoisinantes. Aussi, Nous comptons considérablement sur les équipes médicale, paramédicale, et administrative de notre Clinique pour servir nos patients dans de meilleures conditions. Merci.",
                "button": "Contactez-nous"
            },
            "clinic": {
                "contact_info": {
                    "title": "Entrez en contact"
                },
                "label": {
                    "phone": "Mobile",
                    "urgent": " Appel d'Urgence",
                },
                "data": {
                    "name": "Clinique Noor",
                    "phone": "0551126000",
                    "urgent": " 046253333",
                    "email": "cliniqueNoor@gmail.com",
                    "address": "392 TEFFAH I, en face les bâtiments Titanic, Tiaret"
                }
            }
        })
    })
}