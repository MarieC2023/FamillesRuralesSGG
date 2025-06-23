import React, { useState, useEffect } from "react";
import "./FormulaireContact.css";

const FormulaireContact = ({ id, titre, action }) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Honeypot anti-bot
    if (data.get("website")) return;

    // Sécurité : détection script
    const scriptRegex = /<\s*script\b[^>]*>(.*?)<\s*\/\s*script>/gi;
    let hasMaliciousContent = false;
    for (let [_, value] of data.entries()) {
      if (typeof value === "string" && scriptRegex.test(value)) {
        hasMaliciousContent = true;
        break;
      }
    }

    if (hasMaliciousContent) {
      setSuccess(false);
      setMessage("Le contenu du formulaire contient du code interdit.");
      return;
    }

    try {
      setIsSubmitting(true);
      form.setAttribute("aria-busy", "true");

      const response = await fetch(action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSuccess(true);
        setMessage("Votre message a bien été envoyé !");
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setSuccess(false);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
      form.removeAttribute("aria-busy");
    }
  };

  return (
    <form
      className="contact-form carte-activite"
      action={action}
      method="POST"
      onSubmit={handleSubmit}
      id={`form-${id}`}
      aria-busy="false"
    >
      <h3>{titre}</h3>
      <div className="form-group">
        <label htmlFor={`nom-${id}`}>Nom et Prénom</label>
        <input type="text" id={`nom-${id}`} name="nom" required />
      </div>
      <div className="form-group">
        <label htmlFor={`email-${id}`}>Email</label>
        <input type="email" id={`email-${id}`} name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor={`message-${id}`}>Message</label>
        <textarea id={`message-${id}`} name="message" rows="5" required />
      </div>
      <div className="honeypot hidden-honeypot">
        <label htmlFor={`website-${id}`}>Ne pas remplir ce champ</label>
        <input type="text" id={`website-${id}`} name="website" />
      </div>
      <button type="submit" className="bouton mt-3" disabled={isSubmitting}>
        {isSubmitting ? "Envoi..." : "Envoyer"}
      </button>
      {message && (
        <div
          className={`form-message ${
            success ? "form-message--success" : "form-message--error"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default FormulaireContact;
