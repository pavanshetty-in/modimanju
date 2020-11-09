import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top text-center" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;