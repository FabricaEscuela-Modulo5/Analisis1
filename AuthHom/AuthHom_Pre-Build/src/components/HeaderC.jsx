import '../Header.css';
function HeaderC({ showUser }) {
  const userAvatar = showUser ? (
    <div className="header-useravatar">
      <img
        src="https://stonegatesl.com/wp-content/uploads/2021/01/avatar.jpg"
        alt="User Avatar"
      />
      <p>Nombre de Usuario</p>
    </div>
  ) : (
    <></>
  );
  return (
    <header className="header-component">
      <img src="src\assets\logo_UdeA.png" alt="Logo UdeA" />
      {userAvatar}
    </header>
  );
}

export default HeaderC;
