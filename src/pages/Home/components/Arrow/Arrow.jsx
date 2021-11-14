import './Arrow.css';

const Arrow = ({ className, image, onClick }) => {
  return (
    <div className={className}>
      <img src={image} alt="Arrow" className="arrow-image" onClick={onClick} />
    </div>
  );
};

export default Arrow;
