export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="affiliate-disclosure">
        Một số liên kết trên trang có thể là liên kết affiliate.
      </p>
      <p className="footer-copyright">
        &copy; {currentYear} Dane Reviews. All rights reserved.
      </p>
    </footer>
  );
}
