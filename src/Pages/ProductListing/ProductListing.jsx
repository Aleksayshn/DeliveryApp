import { useContext, useState } from "react";
import "./ProductListing.css";
import { Filter } from "../../components/Filter/Filter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { AiFillFilter } from "react-icons/ai";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import Drawer from "@mui/material/Drawer";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

 const ProductListing = () => {
  const { products } = useContext(ProductContext);
  const { filter } = useContext(CartContext);

  const [showFilter, setShowFilter] = useState(false);
  const sortOrder = (order) => {
    if (order === "LTH")
      return (a, b) => a.discounted_price - b.discounted_price;
    else return (a, b) => b.discounted_price - a.discounted_price;
  };

  const applyFilter = () => {
    const { category, userRating, sortby, searchQuery, price } = filter;
    let filteredCategory = products;
    if (category.length !== 0) {
      filteredCategory = products.filter(({ category_name }) =>
        category.includes(category_name)
      );
    }
    let filteredRating = filteredCategory;
    if (userRating) {
      filteredRating = filteredCategory.filter(
        ({ rating }) => rating >= userRating
      );
    }
    let filteredPrice = filteredRating.filter(
      ({ discounted_price }) => discounted_price <= price
    );

    let filteredSorted = filteredPrice;
    if (sortby) {
      filteredSorted = filteredPrice.sort(sortOrder(sortby));
    }

    let filteredSearch = filteredSorted.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return filteredSearch;
  };

  const displayProduct = applyFilter();

  return (
    <>
      <aside>
        <Filter />
      </aside>

      <div className={`filter-mobile-view ${showFilter && `show-filter`} `}>
        <Filter />
      </div>

      <Drawer
        anchor={"bottom"}
        open={showFilter}
        onClose={() => setShowFilter(!showFilter)}
        className="show-filter"
      >
        <Filter />
      </Drawer>

      {products.length === 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
            <CircularProgress color="primary" size={150} />
        </Backdrop>
      ) : (
        <section className="listing">
          <h3 className="listing-heading">
            Showing All products
            <span className="product-count">
              ( Showing {displayProduct.length} products )
            </span>
            <button
              className="filter-mobile-view-btn"
              onClick={() => setShowFilter(!showFilter)}
            >
              <AiFillFilter />
            </button>
          </h3>
          {displayProduct.length === 0 ? (
            <p className="empty-productlist">No products to display</p>
          ) : (
            <ul className="product-card-li">
              {displayProduct.map((product) => (
                <li key={product._id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </>
  );
};

export default ProductListing;
