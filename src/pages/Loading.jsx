import React from 'react';
import ReactLoading from 'react-loading';

const Example = ({ spinningBubbles, color  }) => (
   <ReactLoading type={spinningBubbles} color="#000000" height={300} width={200} />
);

export default Example; 