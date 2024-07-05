import React, { useState } from "react";

import open from "../public/icon-plus.svg";
import close from "../public/icon-minus.svg";

function Questions({ question, answer }) {
  // Component logic

  const [show, setShow] = useState(false);

  return (
    <div>
      <header className="header-flex">
        <h2>{question}</h2>
        <button className="btn" onClick={() => setShow(!show)}>
          <img src={show ? close : open} alt="open button/close button" />
        </button>
      </header>

      {show && <p className="prag">{answer}</p>}
      <hr />
    </div>
  );
}
export default Questions;
