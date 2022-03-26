import React from 'react';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="jumbotron text-center">
            <h1>{t("hero.main")}</h1>
            <p>{t("hero.sub")}</p>
            {/* <form className="form-inline">
                <div className="input-group">
                    <input type="email" className="form-control" size="50" placeholder="Email Address" required />
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-danger">Subscribe</button>
                    </div>
                </div>
            </form> */}
        </div>
    )
}

export default Hero;

