import React from 'react';
import { Card } from 'react-bootstrap';

const Map = () => {
  return (
    <Card className="border-0 w-100">
      <Card.Body className="p-0">
        <div className="ratio ratio-16x9 w-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24330.315051295114!2d-80.10441747744738!3d25.93914628596691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2z2LXZhtmKINii2YrZhNiyINio2YrYqti02Iwg2YHZhNmI2LHZitiv2KcgMzMxNjDYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e1!3m2!1sar!2s!4v1710399775564!5m2!1sar!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
            style={{ border: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Map;
