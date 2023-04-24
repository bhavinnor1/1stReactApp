import React from "react";

const Services = (props) => {
    return (
        <div className="card-center">
            <h1 style={{ marginTop: '80px', textAlign: 'center' }}>Our Services</h1>
            <div className="grid3">
                {props.datas.map((data, index) => (
                    <div className="card" key={index} style={{ color: props.mode === 'white' ? 'black' : 'black' }}>
                        <img src={data.img} alt="" width='100%' className="card-img" />
                        <div className="info">
                            <div className="title">{data.title}</div>
                            <div className="content">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                            <a>CHECK HERE</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Services;