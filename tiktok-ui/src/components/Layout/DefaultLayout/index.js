import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />

        {/* conten truyền bên ngoài vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
