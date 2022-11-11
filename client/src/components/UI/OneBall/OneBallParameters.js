import React from 'react';

const OneBallParameters = ({ballInfo}) => {
    try {
        return (
            <div className={'Ball_Page_Params'}>
                <h3 className={'Ball_Page_Params_Title'}>Характеристики:</h3>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Бренд:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.brand.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Тип:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.type.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Звезд:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.star.value}</p>
                </div>
                <div className={'Ball_Page_Parameter'}>
                    <h5 className={'Ball_Page_Parameter_Title'}>Страна производитель:</h5>
                    <p className={'Ball_Page_Parameter_Value'}>{ballInfo.producer_country.value}</p>
                </div>
            </div>
        );
    }catch (error){
        if (!ballInfo)
            console.log('Еще не заргузилось')
        else
            console.log(error.message)
    }
};

export default OneBallParameters;