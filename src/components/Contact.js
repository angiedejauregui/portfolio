import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a7atkhe",
      "template_whs2xuq",
      form.current,
      "TnGx1MfoXP3u5-Ahj"
    );
    e.target.reset();
  };

  return (
    <ContactContainer id="contact">
      <h2>{props.t("contact.title")}</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder={props.t("contact.name")}
          required
        />
        <input
          type="text"
          name="email"
          placeholder={props.t("contact.mail")}
          required
        />
        <textarea
          name="message"
          placeholder={props.t("contact.message")}
          rows="5"
          required
        ></textarea>
        <button type="submit">{props.t("contact.send")}</button>
      </form>
    </ContactContainer>
  );
}

export default Contact;

const ContactContainer = styled.section`
  text-align: center;
  h2 {
    margin: 70px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 1.2rem;
    margin-bottom: 70px;

    input,
    textarea {
      background-color: ${({ theme }) => theme.secondary};
      width: 50%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      border: 2px solid var(--primary-color);
      color: ${({ theme }) => theme.text};
      resize: none;
    }
    input::placeholder,
    textarea::placeholder {
      color: ${({ theme }) => theme.text};
    }
    button {
      background-color: var(--primary-color);
      border-radius: 0.5rem;
      border: none;
      padding: 1rem;
      width: 50%;
      font-size: 1.2rem;
      color: var(--bg-color);
    }
    button:hover {
      transform: scale(0.98);
    }
  }
`;
