import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./FormulaireContact.css";

const FormulaireContact = ({ templateId, titre }) => {
  const formRef = useRef(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const sanitizeInput = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.(fr|com|net|org|io|edu)$/.test(email.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending || message.type === "success") return;

    const name = sanitizeInput(formRef.current["name"].value.trim());
    const email = sanitizeInput(formRef.current["email"].value.trim());
    const messageContent = sanitizeInput(formRef.current["message"].value.trim());

    if (!name || !email || !messageContent) {
      setMessage({ type: "error", text: "Tous les champs sont requis." });
      return;
    }

    if (!isValidEmail(email)) {
      setMessage({ type: "error", text: "Adresse email invalide." });
      return;
    }

    if (messageContent.length > 500) {
      setMessage({ type: "error", text: "Le message ne doit pas dépasser 500&nbsp;caractères." });
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        "service_9e3bj7r", // L'ID de service EmailJS
        templateId,        // Template dynamique selon prop
        {
          name,
          email,
          message: messageContent,
        },
        "klfDOC9gzu82rwmUT" // La clé publique EmailJS
      );

      setMessage({ type: "success", text: "Message envoyé avec succès." });
      formRef.current.reset();

      setTimeout(() => {
        setMessage({ type: "", text: "" });
        setIsSending(false);
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi&nbsp;:", error);
      setMessage({ type: "error", text: "Erreur lors de l'envoi du message." });
      setIsSending(false);
    }
  };

  return (
    <section className="contact-form carte-activite">
      <h3>{titre}</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" id={`contact-form-${templateId}`}>
        <div className="form-group">
          <label htmlFor={`name-${templateId}`}>Nom et prénom&nbsp;:</label>
          <input
            type="text"
            id={`name-${templateId}`}
            name="name"
            required
            placeholder="Entrez votre nom et prénom"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`email-${templateId}`}>Adresse email&nbsp;:</label>
          <input
            type="email"
            id={`email-${templateId}`}
            name="email"
            required
            placeholder="exemple@domaine.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor={`message-${templateId}`}>Message&nbsp;:</label>
          <textarea
            id={`message-${templateId}`}
            name="message"
            rows="5"
            required
            placeholder="Écrivez votre message ici…"
          />
        </div>

        <button type="submit" className="bouton mt-3" disabled={isSending}>
          {isSending ? "Envoi en cours…" : "Envoyer"}
        </button>

        {message.text && (
          <div
            className={`form-message ${message.type === "success" ? "form-message--success" : "form-message--error"
              }`}
            role="alert"
            data-cy={`${message.type}-message`}
          >
            {message.text}
          </div>
        )}
      </form>
    </section>
  );
};

export default FormulaireContact;
