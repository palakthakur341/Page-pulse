import { useState } from "react";

function UrlInput({ onAnalyze }) {
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    onAnalyze(url);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Analyze
      </button>
    </div>
  );
}

export default UrlInput;