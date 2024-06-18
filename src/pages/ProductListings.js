import AllProducts from "../components/AllProducts";
import Product4 from "../components/Product4";
import Product3 from "../components/Product3";
import Product2 from "../components/Product2";
import Product1 from "../components/Product1";
import "./ProductListings.css";

const ProductListings = () => {
  return (
    <div className="product-listings">
      <main className="product-listings3">
        <div className="categories">
          <div className="categories-wrapper">
            <div className="categories1">Categories</div>
          </div>
          <AllProducts />
        </div>
        <section className="search">
          <div className="search-bar">
            <h1 className="featured-cards">Featured Cards</h1>
            <div className="search-input">
              <div className="search-field">
                <div className="search-for-brands">
                  Search for brands or products
                </div>
                <img
                  className="search-normal-icon"
                  alt=""
                  src="/searchnormal.svg"
                />
              </div>
            </div>
          </div>
          <div className="card-grid">
            <Product4 pngwing1="/pngwing-12@2x.png" />
            <Product4
              pngwing1="/pngwing-1-12@2x.png"
              propLeft="458px"
              propTop="0px"
              propBackground="linear-gradient(180deg, #fee5b1, #fff06e)"
              propWidth="128.9px"
              propHeight="21.6px"
              propMinWidth="unset"
            />
            <Product4
              pngwing1="/pngwing-1-22@2x.png"
              propLeft="916px"
              propTop="0px"
              propBackground="linear-gradient(180deg, #ff8796, #feba95)"
              propWidth="unset"
              propHeight="unset"
              propMinWidth="107.5px"
            />
            <Product4
              pngwing1="/pngwing-1-32@2x.png"
              propLeft="0px"
              propTop="503px"
              propBackground="linear-gradient(180deg, #cba1f9, #eab4ff)"
              propWidth="unset"
              propHeight="unset"
              propMinWidth="107.5px"
            />
            <Product3 image1="/image-12@2x.png" />
            <div className="product3">
              <div className="card-design">
                <div className="card-design-fenty">
                  <div className="card-design-fenty-child" />
                  <img
                    className="mask-group-icon"
                    loading="lazy"
                    alt=""
                    src="/mask-group@2x.png"
                  />
                  <div className="usd-100-1000-wrapper">
                    <div className="usd-100-1000">USD $100 -$1000</div>
                  </div>
                </div>
              </div>
              <h3 className="popular-card">Popular Card</h3>
              <div className="background-parent">
                <div className="background">
                  <div className="container">
                    <div className="online">Online</div>
                  </div>
                </div>
                <div className="background1">
                  <div className="container1">
                    <div className="in-store">In-Store</div>
                  </div>
                </div>
              </div>
              <div className="adidas-wrapper">
                <div className="adidas">Adidas</div>
              </div>
            </div>
            <Product2 />
            <Product1
              rectangle50="/rectangle-502@2x.png"
              kidsToys="Kids Toys"
              needs={`& Needs`}
            />
            <Product3
              image1="/image-1@2x.png"
              propTop="1006px"
              propLeft="916px"
              propBorderRadius="6px"
              propBackground="linear-gradient(180deg, #cba1f9, #eab4ff)"
            />
            <div className="product31">
              <div className="card-design1">
                <div className="card-design-playstation">
                  <div className="image-mask-wrapper">
                    <div className="image-mask">$50</div>
                  </div>
                  <img
                    className="mask-group-icon1"
                    loading="lazy"
                    alt=""
                    src="/mask-group-1@2x.png"
                  />
                  <div className="wrapper-vector-1">
                    <img
                      className="wrapper-vector-1-child"
                      alt=""
                      src="/vector-11.svg"
                    />
                  </div>
                </div>
              </div>
              <h3 className="popular-card1">Popular Card</h3>
              <div className="background-group">
                <div className="background2">
                  <div className="container2">
                    <div className="online1">Online</div>
                  </div>
                </div>
                <div className="background3">
                  <div className="container3">
                    <div className="in-store1">In-Store</div>
                  </div>
                </div>
              </div>
              <div className="adidas-container">
                <div className="adidas1">Adidas</div>
              </div>
            </div>
            <Product3
              image1="/image-1-2@2x.png"
              propTop="1509px"
              propLeft="458px"
              propBorderRadius="6px"
              propBackground="linear-gradient(180deg, #ceef51, #efffa7)"
            />
            <Product1
              rectangle50="/rectangle-50-11@2x.png"
              kidsToys={`Shoes &`}
              needs="Wallets"
              propTop="1509px"
              propLeft="916px"
              propHeight="72.2px"
              propDisplay="inline-block"
              propColor="#fff"
            />
            <Product1
              rectangle50="/rectangle-50-21@2x.png"
              kidsToys="Shopping"
              needs="Spree"
              propTop="2012px"
              propLeft="0px"
              propHeight="unset"
              propDisplay="unset"
              propColor="#1d1d1d"
            />
            <div className="product32">
              <div className="card-design2">
                <div className="card-design-spotify">
                  <b className="b">$60</b>
                  <div className="wrapper-vector-11">
                    <img
                      className="wrapper-vector-1-item"
                      alt=""
                      src="/vector-1-1.svg"
                    />
                  </div>
                  <img
                    className="pngwing-1-icon"
                    loading="lazy"
                    alt=""
                    src="/pngwing-1-4@2x.png"
                  />
                </div>
              </div>
              <h3 className="popular-card2">Popular Card</h3>
              <div className="background-container">
                <div className="background4">
                  <div className="container4">
                    <div className="online2">Online</div>
                  </div>
                </div>
                <div className="background5">
                  <div className="container5">
                    <div className="in-store2">In-Store</div>
                  </div>
                </div>
              </div>
              <div className="adidas-frame">
                <div className="adidas2">Adidas</div>
              </div>
            </div>
            <div className="product33">
              <div className="card-design3">
                <div className="card-design-starbucks">
                  <div className="wrapper">
                    <div className="div">$60</div>
                  </div>
                  <div className="pngwing-4-wrapper">
                    <img
                      className="pngwing-4-icon"
                      loading="lazy"
                      alt=""
                      src="/pngwing-4@2x.png"
                    />
                  </div>
                  <img
                    className="card-design-starbucks-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                </div>
              </div>
              <h3 className="popular-card3">Popular Card</h3>
              <div className="frame-div">
                <div className="background6">
                  <div className="container6">
                    <div className="online3">Online</div>
                  </div>
                </div>
                <div className="background7">
                  <div className="container7">
                    <div className="in-store3">In-Store</div>
                  </div>
                </div>
              </div>
              <div className="adidas-wrapper1">
                <div className="adidas3">Adidas</div>
              </div>
            </div>
            <Product1
              rectangle50="/rectangle-50-31@2x.png"
              kidsToys="Travel"
              needs="GiftCards"
              propTop="2515px"
              propLeft="0px"
              propHeight="unset"
              propDisplay="unset"
              propColor="#a7a7a7"
            />
            <div className="product34">
              <div className="card-design4">
                <div className="card-design-ubereats">
                  <div className="card-design-ubereats-inner">
                    <div className="empty-parent">
                      <div className="empty">$100</div>
                      <img
                        className="mask-group-icon2"
                        loading="lazy"
                        alt=""
                        src="/mask-group-2@2x.png"
                      />
                    </div>
                  </div>
                  <img
                    className="card-design-ubereats-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-2-1@2x.png"
                  />
                </div>
              </div>
              <h3 className="popular-card4">Popular Card</h3>
              <div className="background-parent1">
                <div className="background8">
                  <div className="container8">
                    <div className="online4">Online</div>
                  </div>
                </div>
                <div className="background9">
                  <div className="container9">
                    <div className="in-store4">In-Store</div>
                  </div>
                </div>
              </div>
              <div className="adidas-wrapper2">
                <div className="adidas4">Adidas</div>
              </div>
            </div>
            <Product2 propTop="2515px" propLeft="916px" />
            <Product4
              pngwing1="/pngwing-1-22@2x.png"
              propLeft="0px"
              propTop="3018px"
              propBackground="linear-gradient(180deg, #ff8796, #feba95)"
              propWidth="unset"
              propHeight="unset"
              propMinWidth="107.5px"
            />
          </div>
          <div className="pagination">
            <div className="pagination1">
              <img
                className="pagination-block-icon"
                loading="lazy"
                alt=""
                src="/pagination-block.svg"
              />
              <div className="pagination-block">
                <div className="page-link">
                  <div className="current-page">1</div>
                </div>
                <div className="other-pages" />
              </div>
              <div className="pagination-block1">
                <div className="div1">2</div>
                <div className="pagination-block-child" />
              </div>
              <div className="pagination-block2">
                <div className="div2">3</div>
                <div className="pagination-block-item" />
              </div>
              <img
                className="pagination-block-icon1"
                loading="lazy"
                alt=""
                src="/pagination-block-1@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductListings;
