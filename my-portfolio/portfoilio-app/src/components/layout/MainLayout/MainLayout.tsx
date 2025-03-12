import MainRoute from '../../routes/MainRoute';
import Footer from '../Footer';
import Header from '../Header';
//import SideMenu from '../SideMenu';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className='MainLayout'>
      <header>
        <Header />
      </header>
     {/*  <aside>
        <SideMenu />
      </aside> */}
      <main>
        <MainRoute />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
