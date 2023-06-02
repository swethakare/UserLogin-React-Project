import React from 'react';
import './PWDRequisite.css';
import tickImage from './images/pwdright.png';
import wrongImage from './images/pwdwrng.png';
const PWDRequisite = ({ capflag, lenflag, numflag, splflag }) => {
  return (
    <div>
      <p className={capflag}>
        <i className={capflag}/>
        {capflag === 'valid' ? (
          <img src={tickImage} alt="Valid" className="tick-image" />
        ) : (
          <img src={wrongImage} alt="Invalid" className="wrong-image" />
        )}
        Must contain at least one capital letter
      </p>

      <p className={lenflag}>
      {lenflag === 'valid' ? (
          <img src={tickImage} alt="Valid" className="tick-image" />
        ) : (
          <img src={wrongImage} alt="Invalid" className="wrong-image" />
        )}
        Password should be 8 characters long
      </p>
      <p className={numflag}>
      {numflag === 'valid' ? (
          <img src={tickImage} alt="Valid" className="tick-image" />
        ) : (
          <img src={wrongImage} alt="Invalid" className="wrong-image" />
        )}
        Must contain at least 1 number
      </p>
      <p className={splflag}>
      {splflag === 'valid' ? (
          <img src={tickImage} alt="Valid" className="tick-image" />
        ) : (
          <img src={wrongImage} alt="Invalid" className="wrong-image" />
        )}
        Must contain at least 1 special character
      </p>
    </div>
  );
};

export default PWDRequisite;
