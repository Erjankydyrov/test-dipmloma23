import Nav from "../Nav/Nav";
import logo from "../../assets/logo.png";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <Nav />
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    </div>
  );
}
