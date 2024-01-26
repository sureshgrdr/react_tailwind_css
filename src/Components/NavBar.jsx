export const NavBar = () => {
  const togglefun = () => {
    document.querySelector(".chbox").toggleAttribute("checked");
  };
  return (
    <>
      <div className="container ">Navbar</div>
    </>
  );
};
