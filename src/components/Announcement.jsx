import React from 'react';

const announcements = [
  "Envío Gratis en compras superiores a $100.000 —",
  "3 y 6 cuotas sin interés con tarjetas de crédito —",
  "Entregas rápidas dentro de CABA eligiendo Bull-Express —",
];

const Announcement = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-20 py-2">
      <div className="flex animate-marquee">
        {announcements.map((announcement, index) => (
          <div key={index} className="mx-4 text-gray-400">
            {announcement}
          </div>
        ))}
        {announcements.map((announcement, index) => (
          <div key={index + announcements.length} className="mx-4 text-gray-400">
            {announcement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
