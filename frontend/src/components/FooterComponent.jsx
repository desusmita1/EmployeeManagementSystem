import React from 'react';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer text-center mt-5">
        <span>@Copyright - All rights reserved {currentYear}</span>
      </footer>
    </div>
  );
};

export default FooterComponent;
