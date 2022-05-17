import Footer from './footer/Footer';

const Layout = (props) => {
  return (
    <>
      <div>{props.children}</div>
      <Footer/>
    </>
  );
}

export default Layout;
