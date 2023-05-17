/*
Props:
  - name: string
  - description: string
  - price: number
*/

import './ProductListItem.css';

const ProductListItem = (props) => {
  console.log(props);

  return (
    <div className="product-list-item">
      <div className="product-header">
        <h2>Name: { props.name }</h2>
        <h3>Price: ${ props.price }</h3>
      </div>
      <hr/>
      <h3>Description: { props.description }</h3>
    </div>
  );
};

export default ProductListItem;

ProductListItem.defaultProps = {
  name: 'Apples',
  description: 'Many different colours available',
  price: 2.65
};
