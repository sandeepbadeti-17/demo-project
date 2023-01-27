import { Link } from "react-router-dom";
import "../styles/home.css";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
export default function Home() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="app">
      <div className="container home">
        <div className="home_menu1">
          <button className="home_menu1_btn1 btn">Westpac Academy</button>
          <button className="home_menu_btn2 btn">User Help</button>
        </div>
        <div className="row">
          <div className="col-md-8 ">
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              eaque, placeat dicta eum adipisci, reiciendis hic accusantium.
            </div>
            <div className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              eaque, placeat dicta eum adipisci, reiciendis hic accusantium.
            </div>
          </div>
          <div className=" col-md-4">
            <div className="home_navigate">Navigate: </div>
            <Link to="/update" className="text-white text-decoration-none">
              <button className="btn home_navigate_btn">
                Retrieve & Update
              </button>
            </Link>
            <br />
            <button className="btn home_navigate_btn">Reports</button>
          </div>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              authCtx.logout();
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
