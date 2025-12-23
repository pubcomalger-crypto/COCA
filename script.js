// Utilisation de la configuration depuis config.js
const config = window.profileConfig || {
    name: "Nom Prénom",
    bio: "Ma biographie",
    profileImage: "",
    socialLinks: {
        facebook: "",
        instagram: "",
        tiktok: "",
        whatsapp: "",
        telegram: "",
        snapchat: "",
        email: "",
    }
};

let currentLink = '';

function exchangeContact() {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${config.name}
TEL:${config.socialLinks.whatsapp}
EMAIL:${config.socialLinks.email}
URL:https://facebook.com/${config.socialLinks.facebook}
NOTE:${config.bio}
END:VCARD`;

            const blob = new Blob([vCard], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = config.name.replace(/\s+/g, '_') + '.vcf';
            link.click();
        }

        function openModal(platform, link) {
            currentLink = link;
            document.getElementById('modalText').textContent = platform;
            document.getElementById('modalLink').href = link;
            document.getElementById('linkModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('linkModal').style.display = 'none';
        }

        function copyToClipboard() {
            navigator.clipboard.writeText(currentLink).then(() => {
                const btn = document.getElementById('copyBtn');
                btn.textContent = 'Copié !';
                setTimeout(() => {
                    btn.textContent = 'Copier';
                }, 2000);
            });
        }

        window.onclick = function(event) {
            const modal = document.getElementById('linkModal');
            if (event.target == modal) {
                closeModal();
            }
        }