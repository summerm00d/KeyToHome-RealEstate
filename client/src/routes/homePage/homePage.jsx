import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Next Home</h1>
          <p>
            Discover thousands of verified listings. Whether you're buying or renting, we make the journey simple, secure, and tailored to you.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>25+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>500</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1M+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
