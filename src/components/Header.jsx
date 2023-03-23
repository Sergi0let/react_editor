const Header = ({ title }) => {
  return (
    <header className="h-16 flex items-center border-b-2 px-8 ">
      <span className="font-semibold text-lg">{title}</span>
    </header>
  );
};

export default Header;
