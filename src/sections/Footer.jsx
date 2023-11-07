const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer bg-house-black px-10 py-4 text-lg pt-60">
        <div className="items-center justify-center">
          <p className="text-center text-white">
            <span className="">&copy; {new Date().getFullYear()} - </span>
            <span className="font-heavy">House 58</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
