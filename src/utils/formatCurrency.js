import { WHATSAPP_NUMBER } from '../constants/servicesData';

export const formatRupiah = (amount) => {
    return Number(amount).toLocaleString('id-ID');
}

export const openWhatsApp = (customText) => {
    const text = customText || "Halo MasterCool, saya ingin konsultasi masalah AC di rumah.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}