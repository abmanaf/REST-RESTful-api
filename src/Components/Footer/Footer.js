import React from "react";

const Footer = () => {
  return (
    <div className="container copyright text-center mt-4">
      <p>
        &copy; <span>Copyright</span>{" "}
        <strong className="px-1">Food site</strong>{" "}
        <span>All Rights Reserved</span>
      </p>
      <div className="credits">
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by alibaba
      </div>
    </div>
  );
};

export default Footer;
