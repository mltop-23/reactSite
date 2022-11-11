import React, {useState} from 'react';
import BallItemPrice from "./BallItemPrice";
import OneBall from "../OneBall/OneBall";

const BallItemComponent = (props) => {
    const [modalVisible, setModalVisible] = useState(false)

    let ballInfo
    if (props.showInfo){
        ballInfo =
        <div className={'ball_item_info'}>
            <div>
                <h6>Бренд:</h6>
                <div className={'ball_item_info_value'}>
                    {props.ball.ball_info.brand.value}
                </div>
            </div>
            <div>
                <h6>Звезд:</h6>
                <div className={'ball_item_info_value'}>
                    {props.ball.ball_info.star.value}
                </div>
            </div>
        </div>
    }

    const routingToBallPage = (event) => {
        event.stopPropagation()
        if (props.allowRouteOnClick)
            setModalVisible(true)
    }

    const imageRoutingToBallPage = (event) => {
        event.stopPropagation()
        setModalVisible(true)
    }

    const closeModal = (event) => {
        event.stopPropagation()
        setModalVisible(false)
    }

    return (
        <div className={`ball_item ${props.ballItemClassName}`}
             onClick={(event)=>{routingToBallPage(event)}}>

            <img className={'ball_item_image'}
                 onClick={(event)=>{imageRoutingToBallPage(event)}}
                 src={process.env.REACT_APP_API_URL + props.ball.image}/>

                <div className={props.ballItemInfoClassName}>
                    <div className={'ball_item_all_info'}>
                        <div className={'ball_item_name'}>
                            {props.showInfo ?
                                <h4>{props.ball.name}</h4> :
                                <div>{props.ball.name}</div>
                            }
                        </div>
                        {ballInfo}
                        <BallItemPrice price={props.price} />
                    </div>

                    {props.children}
                </div>
            <OneBall ball={props.ball} visible={modalVisible} showBasketButton={props.showBasketButton} setVisible={closeModal}/>
        </div>
    );
};

export default BallItemComponent;