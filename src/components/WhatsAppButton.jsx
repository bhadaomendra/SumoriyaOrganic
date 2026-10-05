import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const text = encodeURIComponent('Namaste! Mujhe Sumoriya Organic Cordyceps training, production setup aur buyback support ki jankari chahiye.');
    window.open(`https://wa.me/919829000000?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <button type="button" onClick={handleClick} className="whatsapp-float" title="Chat on WhatsApp" aria-label="WhatsApp Chat">
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
