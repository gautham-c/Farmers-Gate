import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Services = () => {
    return (
        <div id="services" className="container-fluid text-center">
            <h2>CROPS</h2>
            <h4>Types of Crops</h4>
            <h5>Click on the crop for more information</h5>
            <br />
            <div className="row slideanim">
                <div
                 className="col-sm-4">
                    <span className="glyphicon glyphicon-off logo-small"></span>
                    <h4>Rice</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>   
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-heart logo-small"></span>
                    <h4>Wheat</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-lock logo-small"></span>
                    <h4>Sugarcane</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
            </div>
            <br /><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-leaf logo-small"></span>
                    <h4>Maize</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-certificate logo-small"></span>
                    <h4>Soybean</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-wrench logo-small"></span>
                    <h4 style={{color: '#303030'}}>Pulses</h4>
                    <Popup trigger={<button> Read More</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Services;