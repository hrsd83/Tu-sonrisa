import { FaWhatsapp } from 'react-icons/fa';


const WhatsAppButton = () => {
  const phoneNumber = '+5491143998712'; // Reemplaza con el número de teléfono

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 right-10 animate-bounce">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-full flex items-center"
      >
        <FaWhatsapp className="text-4xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton;