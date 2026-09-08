export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="affiliate-disclosure-box">
        <svg className="disclosure-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p className="affiliate-disclosure">
          Một số liên kết trên trang có thể là liên kết affiliate.
        </p>
      </div>

      <p className="footer-copyright">
        &copy; {currentYear} <strong>Dane Reviews</strong>. All rights reserved.
      </p>
    </footer>
  );
}
