import { useState } from "react";
import api from "./services/Api";
import Header from "./components/Header";
import UrlInput from "./components/UrlInput";
import ReportCard from "./components/ReportCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeWebsite = async (url) => {
    setLoading(true);
    setError("");
  
    try {
      // Validate URL
      new URL(url);
  
      const response = await api.post("/analyze", {
        url,
      });
  
      setReport(response.data.data);
    } catch (error) {
      // Clear previous report
      setReport(null);
  
      if (error instanceof TypeError) {
        setError("Please enter a valid website URL.");
      } else {
        setError(
          error.response?.data?.message || "Unable to analyze this website."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="container">

      <Header />

      <UrlInput onAnalyze={analyzeWebsite} />

      {loading && <Loading />}

      <ErrorMessage message={error} />

      <ReportCard report={report} />

    </div>

  );
}

export default App;