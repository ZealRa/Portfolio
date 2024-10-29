import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contactez-moi</h2>
      <p>
        Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste
        ou pour passer le temps pendant ce confinement ? Remplissez le
        formulaire ci-dessous, je vous contacterai dès que possible.
      </p>
      <form>
        <div>
          <label>Sujet</label>
          <input type="text" name="subject" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
