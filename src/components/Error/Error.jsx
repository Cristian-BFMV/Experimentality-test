import errormessage from '../../assets/error.svg';
import './Error.css';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message-container">
      <div className="error-message-header">
        <img src={errormessage} alt="Error Message" className="error-message-image" />
      </div>
      <div className="error-message-body">
        <h2 className="error-message-title">Lo sentimos, ha ocurrido un problema</h2>
        <p className="error-message-description">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
