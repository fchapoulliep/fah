/**
 * Import React and CSS
 */
import React from "react";
import "../css/AuthPage.css";
import { useState } from "react";

/**
 * Importing Ant Design components
 */
import { Form, Input, Checkbox } from "antd";

/**
 * Importing Ant Design Icons
 */
import { ShoppingOutlined } from "@ant-design/icons";

/**
 * This component represents the sign in page of the application.
 * It displays a form with fields for email, password, and a submit button.
 */
const SignInPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true); // true for sign-in, false for sign-up

  /**
   * This function is called when the user clicks on the sign-in or sign-up button.
   * It toggles the value of isSignIn.
   */
  const handleButtonClick = (isSignIn: boolean, button: HTMLButtonElement) => {
    setIsSignIn(isSignIn);
    button.classList.add("active");
    if (isSignIn) {
      document.querySelector(".sign-up-button")?.classList.remove("active");
    } else {
      document.querySelector(".sign-in-button")?.classList.remove("active");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page-follow">
        <ShoppingOutlined style={{ fontSize: "200%" }} />
        <h2>SUIVRE LA COMMANDE</h2>
        <p>
          Vous avez hâte de recevoir votre commande ? Consultez son statut pour
          savoir où elle se trouve.
        </p>
      </div>

      {/* Header of the sign-in page, contains button to redirect to account connexion or creation */}
      <div className="auth-page-header">
        <div className="sign-in-button">
          <button
            onClick={() =>
              handleButtonClick(
                true,
                document.querySelector(".sign-in-button") as HTMLButtonElement
              )
            }
          >
            Se connecter
          </button>
        </div>
        <div className="sign-up-button">
          <button
            onClick={() =>
              handleButtonClick(
                false,
                document.querySelector(".sign-up-button") as HTMLButtonElement
              )
            }
          >
            Créer un compte
          </button>
        </div>
      </div>

      {/* Form to connect */}
      {isSignIn ? (
        <div className="sign-in-form-container">
          <Form
            name="signIn"
            initialValues={{ remember: true }}
            layout="vertical"
            className="sign-in-form"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Ce champ est obligatoire." }]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Ce champ est obligatoire." }]}
            >
              <Input.Password placeholder="Mot de passe" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Enregistrer mes informations</Checkbox>
            </Form.Item>

            <Form.Item>
              <button type="submit" className="form-button">
                Se connecter
              </button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <div className="sign-up-form-container">
          <Form
            name="signUp"
            initialValues={{ remember: true }}
            layout="vertical"
            className="sign-up-form"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Ce champ est obligatoire." }]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Ce champ est obligatoire." }]}
            >
              <Input.Password placeholder="Mot de passe" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Ce champ est obligatoire.",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Les mots de passe ne correspondent pas.")
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirmer le mot de passe" />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Enregistrer mes informations</Checkbox>
            </Form.Item>

            <Form.Item>
              <button type="submit" className="form-button">
                Créer un compte
              </button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
