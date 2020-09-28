import React from 'react';
import './Guerra.css';
import cocapi from '../../Services/cocapi';

const Guerra: React.FC = () => {
  cocapi.members().then(res => console.log(res));

  return (
    <div className="Guerra">
      Guerra Component
    </div>
  );
}

export default Guerra;
