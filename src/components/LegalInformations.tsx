import React from "react";
import { Divider } from "antd";
import "../css/LegalInformations.css";

import {
  SecurityScanOutlined,
  ScissorOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

/**
 * This component represents the legal informations page of the application.
 * It displays the legal informations of the application.
 */
const LegalInformations: React.FC = () => {
  return (
    <div className="legal-informations">
      <div className="legal-informations-footer">
        <div className="legal-informations-footer-link">
          <EnvironmentOutlined className="legal-informations-icons" />
          <p>LIVRAISON INTERNATIONALE</p>
        </div>
        <div className="legal-informations-footer-link">
          <SecurityScanOutlined className="legal-informations-icons" />
          <p>PAIEMENTS SÛRS ET SÉCURISÉS</p>
        </div>
        <div className="legal-informations-footer-link">
          <ScissorOutlined className="legal-informations-icons" />
          <p>ARTISANAT ET SAVOIR-FAIRE</p>
        </div>
      </div>

      <div className="legal-informations-content">
        <Divider orientation="center"> Informations légales </Divider>
        <p>
          Ce site est édité par la société FAH, SAS au capital de 10 000 €,
          immatriculée au RCS de Paris sous le numéro 123456789, dont le siège
          social est situé 1 rue de Rivoli, 75001 Paris.
        </p>
        <p>Directeur de la publication : John Doe</p>
        <p>Contact :</p>
        <ul>
          <li>
            Adresse e-mail :
            <a href="mailto:" className="email-link">
              hey
            </a>
          </li>
          <li>Numéro de téléphone : 01 23 45 67 89</li>
        </ul>
        <p>Hébergeur du site : OVH, 2 rue Kellermann, 59100 Roubaix</p>
        <p>Ce site a été réalisé par l'équipe FAH.</p>
      </div>
    </div>
  );
};

export default LegalInformations;
