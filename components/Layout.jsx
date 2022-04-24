import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
