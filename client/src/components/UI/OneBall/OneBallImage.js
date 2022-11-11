import React from 'react';

const OneBallImage = ({ballImage}) => {
    return (
        <img src={process.env.REACT_APP_API_URL + ballImage}
             className={'Ball_Page_Image'}
             height={500}
             width={500}/>
    );
};

export default OneBallImage;