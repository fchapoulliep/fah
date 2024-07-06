/**
 * Importing React and CSS
 */
import React from "react";
import "../css/LegalInformations.css";

/**
 * Importing Ant Design components
 */
import { Divider, Input, Form } from "antd";
import {
  SecurityScanOutlined,
  ScissorOutlined,
  EnvironmentOutlined,
  InstagramFilled,
  TwitterOutlined,
  FacebookFilled,
  ArrowRightOutlined,
  TikTokFilled,
} from "@ant-design/icons";

/**
 * This component represents the legal informations page of the application.
 * It displays the legal informations of the application.
 */
const LegalInformations: React.FC = () => {
  return (
    <div className="legal-informations">
      <div className="legal-informations-footer">
        <FooterLink
          icon={<EnvironmentOutlined className="legal-informations-icons" />}
          text="LIVRAISON INTERNATIONALE"
        />
        <FooterLink
          icon={<SecurityScanOutlined className="legal-informations-icons" />}
          text="PAIEMENTS SÛRS ET SÉCURISÉS"
        />
        <FooterLink
          icon={<ScissorOutlined className="legal-informations-icons" />}
          text="ARTISANAT ET SAVOIR-FAIRE"
        />
      </div>

      <Divider orientation="center">Informations légales</Divider>

      <div className="legal-informations-content">
        <div className="legal-informations-together">
          <InformationSection
            title="SERVICES CLIENTS"
            links={[
              "Suivi de commande",
              "Politique de retour et remboursement",
            ]}
          />
          <InformationSection
            title="MENTIONS LÉGALES"
            links={[
              "Mentions légales",
              "Conditions générales de vente",
              "Conditions générales d'utilisation",
            ]}
          />
          <InformationSection title="NOUS SUIVRE SUR">
            <SocialMediaIcons />
          </InformationSection>
          <InformationSection title="S’ABONNER À NOTRE NEWSLETTER">
            <NewsletterForm />
          </InformationSection>
        </div>

        <div className="legal-informations-together second">
          <InformationSection
            title="NUMÉRIQUE"
            links={["Réseaux sociaux", "Accessibilité"]}
          />
          <InformationSection
            title="POLITIQUE DE CONFIDENTIALITÉ ET DES COOKIES"
            links={[
              "Politique de confidentialité",
              "Politique de cookies",
              "Paramètres relatifs aux cookies",
            ]}
          />
          <InformationSection title="" />
          <InformationSection title="" />
        </div>
        <InformationSection
          title="À PROPOS DE FAH"
          links={[
            "Notre histoire",
            "Matières, Activisme, Émissions, Approvisionnement & Heritage",
          ]}
        />
      </div>

      <div className="legal-informations-copyright">
        <p> <b>© 2024 FAH. Tous droits réservés.</b></p>
      </div>

    </div>
  );
};

const FooterLink: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="legal-informations-footer-link">
    {icon}
    <p>{text}</p>
  </div>
);

const InformationSection: React.FC<{
  title: string;
  links?: string[];
  children?: React.ReactNode;
}> = ({ title, links, children }) => (
  <div className="legal-informations-content-part">
    <p>{title}</p>
    {links?.map((link) => (
      <a href="/" key={link}>
        {link}
      </a>
    ))}
    {children}
  </div>
);

const SocialMediaIcons: React.FC = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <InstagramFilled />
    <FacebookFilled />
    <TwitterOutlined />
    <TikTokFilled />
  </div>
);

const NewsletterForm: React.FC = () => (
  <Form style={{ display: "flex", justifyContent: "space-around" }}>
    <Form.Item
      style={{ width: "90%" }}
      name="email"
      rules={[
        {
          required: true,
          message: "Ce champ est obligatoire.",
        },
        {
          type: "email",
          message: "Veuillez entrer une adresse email valide.",
        },
      ]}
    >
      <Input placeholder="Votre adresse email" />
    </Form.Item>
    <Form.Item>
      <button type="submit" className="newsletter-button">
        <ArrowRightOutlined style={{ fontSize: "150%" }} />
      </button>
    </Form.Item>
  </Form>
);

export default LegalInformations;
