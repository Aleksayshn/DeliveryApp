import { useContext } from "react";
import "./Home.css";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router";
import Backdrop from "@mui/material/Backdrop";
import { CartContext } from "../Context/CartContext";
import CircularProgress from "@mui/material/CircularProgress";

 const Home = () => {
  const { categories } = useContext(ProductContext);
  const { addFilterCategory, clearCategory } = useContext(CartContext);
  const navigate = useNavigate();
  const categoryHandler = (category) => {
    clearCategory();
    addFilterCategory(category);
    navigate("/products");
  };

  return categories.length === 0
    ? (
    <Backdrop
      sx={{ color: "#cdc1c1", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      // onClick={handleClose}
      >
        <CircularProgress color="primary" size={150} />
    </Backdrop>
    )
    : (
      <>
        <div className="sectionContainer">
          <section className="category">
            <h2>CHOOSE YOUR SHOP</h2>
            <ul className="landing-ul">
              {categories.map(
                ({ _id, categoryName, description, categoryImage }) => (
                  <li 
                    onClick={() => categoryHandler(categoryName)}
                    key={_id}
                    style={{
                      backgroundImage: `url(${categoryImage})`,
                    }}
                  >
                    <p className="category-text">Check out our {description}</p>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>

    </>
  );
};

export default Home;