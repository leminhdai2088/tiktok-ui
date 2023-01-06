import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        {/* conten truyền bên ngoài vào */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
