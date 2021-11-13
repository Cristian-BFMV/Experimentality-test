import './ProductCard.css';

const formatPrice = price => {
  return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

const ProductCard = props => {
  return (
    <article className="product-card">
      <div className="product-card-header">
        <img src={props.thumbnail} alt="Product" className="product-card-image" />
      </div>
      <div className="product-card-body">
        <h4>{props.title}</h4>
        <div className="product-card-prices">
          <p className={`product-card-price ${props.sale_price && `product-sale`}`}>${formatPrice(props.price)}</p>
          <p className="product-card-sale-price">{props.sale_price && `$${formatPrice(props.sale_price)}`}</p>
        </div>
        <button className="product-card-button">Agregar al carrito</button>
      </div>
    </article>
  );
};

export default ProductCard;
