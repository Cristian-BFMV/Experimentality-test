import categoriainfantil from '../../../../assets/categoria-infantil.png';
import categoriaproteccion from '../../../../assets/categoria-proteccion.png';
import './Category.css';

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-card">
        <img src={categoriainfantil} alt="Infantil" className="category-image" />
        <p className="category-card-title">INFANTIL</p>
      </div>
      <div className="category-card">
        <img src={categoriaproteccion} alt="Protección" className="category-image" />
        <p className="category-card-title">PROTECCIÓN</p>
      </div>
    </div>
  );
};

export default Category;
