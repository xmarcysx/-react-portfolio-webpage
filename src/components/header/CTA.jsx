import React from "react";
import CV from "../../assets/Marcin_Chowaniec_CV_1.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Pobierz CV
      </a>
      <a href="#portfolio" className="btn btn-primary">
        Moje projekty
      </a>
    </div>
  );
};

export default CTA;
