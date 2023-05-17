/*
Props:
  - products: array
*/

import './ProductList.css';

import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  console.log(props);

  const mappedProducts = props.products.map((product) => {
    return <ProductListItem
      name={ product.name }
      description={ product.description }
      price={ product.price }
    />;
  }); 

  return (
    <div>
      <h2>ProductList component</h2>
      <div className="product-list">
        { props.products.length === 0 && <h2>Loading your products, please wait...</h2> }

        { mappedProducts }
      </div>
    </div>
  );
};

export default ProductList;

ProductList.defaultProps = {
  // products: [
  //   {
  //     name: 'Canteloupe',
  //     description: 'Bring a knife',
  //     price: 8.65,
  //   },
  //   {
  //     name: 'Honeydew',
  //     description: 'Great for sharing with friends',
  //     price: 4.65,
  //   },
  //   {
  //     name: 'Grapes',
  //     description: 'Lots for sharing',
  //     price: 3.99,
  //   },
  // ]
  products: []
};
