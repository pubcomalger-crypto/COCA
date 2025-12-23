// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "COCA",
    jobTitle: "Développeuse Web",
    bio: "SALAM",
    address: "Adresse complète du client",
    profileImage: "https://i.ibb.co/NgKMhgMT/cocacola.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://web.facebook.com/p/%D9%85%D8%B7%D8%A8%D8%B9%D8%AA%D9%8A-100071521915138/?_rdc=1&_rdr#",
        instagram: "daisyparkhouse",
        tiktok: "daisyparkhouse",
        whatsapp: "+213540253369",
        telegram: "daisyparkhouse",
        linkedin: "daisyparkhouse",
        snapchat: "nomdutilisateur",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://maps.app.goo.gl/example",
        phone: "+213658546209"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: true,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: true,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: true,      // Afficher Snapchat
        email: true          // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}
