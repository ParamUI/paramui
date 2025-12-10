import React from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={() => alert("Hello!")}
      >
        Hello
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
