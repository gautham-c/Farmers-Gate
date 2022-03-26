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
                        <p className="services-card">The state has 0.3 million ha under rice cultivation which covers irrigated and rainfed hill rice areas. The current state average productivity is about 2 tonnes/ha and the major constraints in production are unsustainable intensive rice-wheat production systems in tarai areas, decreasing organic carbon content in soils, imbalanced fertilizer use, biotic stresses due to weeds, bacterial leaf blight, stem borer (tarai) and blast (hill area). The suitable interventions include Growing hybrids, Pant Sankar Dhan 1, Pant Sankar Dhan 3, Narendra Sankar Dhan 2, KRH 2,DRRH 2 in Tarai region ,Growing of scented rice hybrids Pusa RH 10 and basmati varieties ,Growing blast tolerant varieties, VL Dhan 39, Pant Dhan 16 in hilly areas and  Growing of improved Pusa Basmati 1 for bacterial blight tolerance.</p>
                    </Popup>   
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-heart logo-small"></span>
                    <h4>{t("services.wheat")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>Uttarakhand consists of hilly tracts as well as tarai areas where wheat is an important crop during rabi. It has a contribution of 1.51% towards national production from 1.07 % of wheat-growing area of the country with a productivity of 1.9 tonnes/ha. This is due to the fact that wheat in hills is mainly rainfed as compared to irrigated crop in the tarai. The total area under wheat is 0.4 million ha, with a total production of 0.8 tonnes and productivity of 1.9 tonnes/ha, over the last five years. The constraints are water scarcity in hills and Tarai areas, low soil organic carbon status, high nutrient mining, imbalanced fertilization, and infestation of powdery mildew and Karnal bunt diseases. Suitable technological interventions are Improved varieties for tarai region , Improved varieties for hilly region , Resource conservation technologies such as zero tillage, FIRBS, laser land levelling and Balanced and recommended fertilizer doses ... and more!</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-lock logo-small"></span>
                    <h4>{t("services.Sugarcane")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>Sugarcane is grown in 21.5 lakh ha with total cane production of 1,255 lakh tonnes. About 40% of cane production is diverted to gur and khandsari industry and 48% is crushed for sugar production, which is about 57.8 lakh tonnes. Cane productivity is about 65 tonnes/ha. The major constraints in production are inadequate availability of quality seed of improved varieties, red rot and wilt diseases, low crop productivity due to poor soil fertility and imbalanced fertilizer application, lesser attention to ratoon crop management. The important interventions are Growing sugarcane varieties CoSe 96234, CoSe 96436 in flood-prone eastern UP , Mass scale production of quality seed of improved varieties through 3-tier seed programme ,Adoption of ratoon management practices to increase productivity ,Appropriate sanitation of setts as well as practice of integrated pest management in autumn planted sugarcane and Grow potato, mustard, lentil, rajmash, mungbean, cowpea, coriander, radish, berseem, senji and oat as intercrop</p>
                    </Popup>
                </div>
            </div>
            <br /><br />
            <div className="row slideanim">
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-leaf logo-small"></span>
                    <h4>{t("services.Maize")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>Area under maize cultivation under rainfed conditions is almost constant (33,000 ha). The production and productivity is 44,000 tonnes and 1,330 kg/ha respectively. It is mainly used for food and as green cob. QPM provides nutritious food to resource poor population in hills. The constraints in production are cultivation of local varieties due to non-availability of required quantity of early maturing quality seed at proper time. The importance interventions to improve productivity are High-yielding hybrids and composites, Vivek Hybrid 9, Vivek 15, Vivek 17, Vivek 23, HQPM 1 and Seed production in fertile areas of plains to meet requirement of seed</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-certificate logo-small"></span>
                    <h4>{t("services.Soybean")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>A wide range of agroclimatic conditions of the state are suitable for off-season production of vegetables for sustainable income to farmers. The area under vegetables is 72,800 ha and production is 9.52 lakh tonnes. The average productivity is 13.1 tonnes/ha, which is low, and can be doubled with the following technological interventions:Tomato : Use of hybrids Arka Vardan, Avinash 2, JKTH 3055, Nun 7730, TH 01462 and BSS 20 and varieties Arka Vikash, Sel 7, Arka Saurabh, Pant T 3 and BT 12 , Planting on raised bed with integrated nutrient management , Raising nursery under protected conditions and Adoption of fertigation and staking.Cauliflower : Use of hybrids DCH 541, Summer King and varieties KT 25, K 1,Root dipping in Azospirillum/Azotobacter/PSB slurry and Planting on raised bed with mulch.</p>
                    </Popup>
                </div>
                <div className="col-sm-4">
                    <span className="glyphicon glyphicon-wrench logo-small"></span>
                    <h4 style={{color: '#303030'}}>{t("services.Pulses")}</h4>
                    <Popup trigger={<button className="btn btn-default btn-lg p-0 m-0"> {t("services.ReadMore")}</button>} modal>
                        <p>Uttar Pradesh has witnessed progressive decline in area and production of chickpea during the past three decades. While area has gone down from 17.26 lakh ha in 1975-76 to 7.40 lakh ha in 2005-06, the production has decreased from 12.50 lakh tonnes to 6.61 lakh tonnes. However, the productivity has increased from 724 to 893 kg/ha with wide fluctuation between 446 and 1,035 kg/ha. The major constraints in productivity are due to heavy damages by Fusarium wilt, wet root rot, botrytis grey mould and gram pod borer; poor seed replacement rate, low and unbalanced use of fertilizers, excessive vegetative growth and lodging in eastern Uttar Pradesh and high moisture stress and terminal drought in Bundelkhand region. Suggested interventions are Growing high-yielding and wilt resistant varieties, KWR 108, DCP 92-3, Pusa 256, Vardan,JG 315, Alok, Karnal Chana 1 and Surya under normal planting condition and Udai, Pusa 372,and Pusa 256 under late sown condition . Pigeonpea occupies 3.82 lakh ha with annual production of 3.62 lakh tonnes and average productivity of 961 kg/ha. During the last three decades , pigeonpea had witnessed gradual decline in area from 5.28 lakh ha to 3.82 lakh ha, production from 7.75 lakh tonnes to 3.67 lakh tonnes and yield from 1,467 to 961 kg/ha. Mostly, long duration varieties are grown under intercrops in eastern as well as south-west region. Short durationUttar Pradesh is the largest producer of pea, occupying 4.44 lakh ha with annual production of 5.76 lakh tonnes and average productivity of 1,297 kg/ha. While there is no significant change in area in the last three decades, the production has registered significant increase due to improvement in productivity. There is further scope for improvement in productivity by addressing some of the major constraints like powdery mildew, and rust and adoption of better crop management practices. Interventions are Growing of high-yielding, short duration, powdery mildew resistant varieties, DDR 27, Adarsh, Prakash, HUPD 15 and SwatiIntegrated nutrient management including biofertilizers, 20 kg/ha sulphur, 25 kg ZnSO4 along with NPK</p>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Services;