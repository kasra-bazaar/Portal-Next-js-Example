import { useState } from "react";
import { createPortal } from "react-dom";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal((prev) => !prev)}>
        Click for the Portal
      </button>
      {showModal &&
        createPortal(
          <div className="modal">
            <h2>
              hello guys :D , sorry for the simple css :D , its just an example
              for learning how is createPortals in the next js14{" "}
            </h2>
            <button onClick={() => setShowModal((prev) => !prev)}>
              click to close
            </button>
          </div>,
          document.querySelector("#modal")
        )}
    </>
  );
}


