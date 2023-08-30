import { TransitionProvider } from '../context/TransitionContext';
import Header from '../components/Header';
import TransitionComponent from '../components/Transition';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <TransitionProvider>
        <div className="content-container">
          <TransitionComponent>{children}</TransitionComponent>
        </div>
      </TransitionProvider>
    </div>
  );
};

export default Layout;
