import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        <Fragment>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 text-justify">
                        <h2>{t("about.about")}</h2><br />
                        <h4>{t("about.heading")}</h4><br />
                        <p>{t("about.details")}</p>
                        <br /><button className="btn btn-default btn-lg p-0 m-0"><a className="text-dark p-0 m-0" href="#contact">{t("about.button")}</a></button>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-exclamation-sign logo"></span>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2><br />
                        <h4><strong>MISSION:</strong> Our Mission is to engage , inspire and motivate people through statistical learning , so that we could equip our future generations with balanced and informed insight into farming , food production and the environment. </h4><br />
                        <p><strong>VISION:</strong> Our Mission is to engage , inspire and motivate people through statistical learning , so that we could equip our future generations with balanced and informed insight into farming , food production and the environment. We are here to mobilise farmers and educators to bring food production, farming and the environment into a learning context and embed an appreciation of farming into everyday life.</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default About;
