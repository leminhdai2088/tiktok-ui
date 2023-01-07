import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
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

export default HeaderOnly;
