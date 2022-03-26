import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import App from '../App';
import '../App.css';
import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();
    return (
        <div id="services" className="container-fluid text-center">
            <h2>{t("services.header")}</h2>
            <h4>{t("services.subheader")}</h4>
            <h5>{t("services.subsubheader")}</h5>
            <br />
            <div className="row slideanim">
                <div
                 className="col-sm-4">
                    <span className="glyphicon glyphicon-off logo-small"></span>
                    <h4>{t("services.rice")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p className="services-card">lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>   
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-heart logo-small"></span>
                    <h4>{t("services.wheat")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-lock logo-small"></span>
                    <h4>{t("services.Sugarcane")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
            </div>
            <br /><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-leaf logo-small"></span>
                    <h4>{t("services.Maize")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-certificate logo-small"></span>
                    <h4>{t("services.Soybean")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-wrench logo-small"></span>
                    <h4 style={{color: '#303030'}}>{t("services.Pulses")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipislorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</p>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Services;