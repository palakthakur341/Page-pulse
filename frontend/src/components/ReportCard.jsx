function ReportCard({ report }) {
    if (!report) return null;
  
    return (
      <div className="report-card">
  
        <h2>Analysis Report</h2>
  
        <div className="row">
          <strong>HTTP Status</strong>
          <span>{report.status}</span>
        </div>
  
        <div className="row">
          <strong>Response Time</strong>
          <span>{report.responseTime} ms</span>
        </div>
  
        <div className="row">
          <strong>Page Title</strong>
          <span>{report.title}</span>
        </div>
  
        <div className="row">
          <strong>Meta Description</strong>
          <span>{report.metaDescription}</span>
        </div>
  
        <div className="row">
          <strong>H1 Count</strong>
          <span>{report.h1Count}</span>
        </div>
  
        <div className="row">
          <strong>Missing Alt Images</strong>
          <span>{report.missingAlt}</span>
        </div>
  
        <div className="row">
          <strong>Word Count</strong>
          <span>{report.wordCount}</span>
        </div>
  
      </div>
    );
  }
  
  export default ReportCard;