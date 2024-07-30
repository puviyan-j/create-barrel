import { Link } from 'react-router-dom';
import './css/home.css';





function Home({kitchen,drinkware}) {


    return (
        <div className="main" >
            <div className="box">
                <video className="mainvideo" autoPlay loop muted >
                    <source type="video/mp4" src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230410_OutdoorHero.mp4" ></source>
                </video>

                <div class="col1 absul">
                    <p className="renew__medium">create your outdoor oasis </p>
                    <p className="crate-bold">SHOP OUTDOOR COLLECTIONS </p>
                </div>
            </div>
            <Link to="/h">
            <div className="box" onClick={kitchen} >
              
                    <div>
                        <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_OtdrKitchen?wid=1440&qlt=80&op_sharpen=1" alt=""></img>
                    </div>

                    <div className="kitchen_sub absul">
                        <p className=" renew__medium cms-black">talk about good bones </p>
                        <p className="crate-bold cms1-black" >SHOP NEW OUTDOOR KITCHENS </p>
                    </div>
                    <div className="kitchen-sub2 absul">
                        <p class="crate-secondary">Modern, modular and built to <br />last with outdoor-rated materials. </p>
                    </div>
              

            </div>  </Link>

            <div className="box" onClick={drinkware}>
                <Link to="/h">
                    <div>
                        <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230421_TourPromo_2?wid=1440&qlt=80&op_sharpen=1" alt=""></img>
                    </div>
                    <div className="absul glass">
                        <p class="renew__medium cms-black ">20% off Tour Glassware </p>
                        <p className="crate-bold cms1-black" >SHOP TOUR COLLECTION </p>
                    </div>
                    <div className="absul glass2">
                        <p class="crate-secondary ">Bestseller on sale.<br />Save on the gorgeous <br />angles everyone loves. </p>
                    </div>
                </Link>
            </div>

            <div className="box">
                <div>
                    <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230416_EarthDay?wid=1440&qlt=90&op_sharpen=1" alt=""></img>
                </div>

                <div className="absul future">
                    <p class=" renew__medium cms-black ">the path to a better future </p>
                    <p class="crate-roman ">For us, every week is Earth Week. <br />Learn  about our commitment to protecting <br />people and our planet’s natural resources </p>
                </div>
                <div className="absul Fcs">
                    <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230416_EarthDay_FSC?wid=149&qlt=80&fmt=png-alpha&op_sharpen=1" alt=""></img>
                </div>
            </div>

            <div className="box">
                <div>
                    <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Pacific?wid=1440&qlt=90&op_sharpen=1" alt=""></img>
                </div>

                <div className="absul trend">
                    <p class="renew__medium cms-black">Our look this season <br />is inspired by the lifestyle <br />& natural beauty of the <br />Pacific coast. </p>
                    <p class="crate-bold cms1-black">SHOP THE TREND </p>
                </div>
            </div>

            <div className="box">
                <div><img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Sofas?wid=1440&qlt=80&op_sharpen=1" alt=""></img></div>

                <div className="absul sofa">
                    <p className="renew__medium cms-black ">top rated &amp; built to last </p>
                    <p className="crate-bold cms1-black">SOFAS &amp; SECTIONALS </p>

                </div>

                <div className="absul sofa-1">
                    <hr className="hr" />
                    <p className="crate-secondary ">Peyton’s frame is made <br />from FSC<sup>®</sup>-certified <br />solid hardwood. </p>
                </div>
            </div>

            <div>
                <div><video autoPlay loop muted src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230410_LuciaEames.mp4"></video></div>

            </div>

            <div className="box">
                <div><img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230406_Dining?wid=1440&qlt=80&op_sharpen=1" alt=""></img></div>

                <div className="absul dining">
                    <p className="renew__medium cms-black">bring craftsmanship home </p>
                    <p className="crate-bold cms1-black" >SHOP DINING FURNITURE</p>
                </div>

                <div className="absul dining-1">
                    <hr className="hr" />
                    <p class="crate-secondary" >Our Lakin table is handcrafted <br />from recycled teakwood. </p>
                </div>
            </div>

            <div className="box">
                <div>
                    <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_BdrmFrntr?wid=1440&qlt=80&op_sharpen=1" alt=""></img>
                </div>

                <div className="absul bedroom">
                    <p class="renew__medium cms-black ">timeless quality </p>
                    <p class="crate-bold cms1-black">SHOP BEDROOM FURNITURE </p>
                </div>
            </div>

            <div className="box">
                <div> <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Decor?wid=1440&qlt=80&op_sharpen=1" alt=""></img> </div>
                <div className="absul decor">
                    <p class="renew__medium cms-black ">artfully made ways to wow </p>
                    <p class="crate-bold cms1-black">SHOP DECOR </p>
                </div>
                <div className="absul decor1">
                    <hr className="hr" />
                    <p class="crate-secondary" >New vases start <br />at $18.95. </p>
                </div>
            </div>

            <div className="box">

                <div>
                    <video autoPlay loop controls muted src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230407_MothersDay_v3.mp4"></video>
                </div >

                <div className=" absul guid">
                    <h2 class="renew__medium cms-black " >mother’s day gifts she’ll love </h2>
                    <p class="crate-bold cms1-black">SHOP THE GUIDE </p>
                </div>
                <div className=" absul guid1">
                    <hr className="hr"></hr>
                    <p class="crate-secondary">Mother’s Day is May 14. Find <br />beautiful gifts at every price. </p>

                </div>
            </div>

            <div className="test">

                <div className="img">
                    <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Kristen_LivingRoom?wid=720&qlt=80" alt=""></img>
                </div>
                <div className="video box" >
                    <video autoPlay loop muted src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230330_Kristen.mp4"></video>
                    <div className="absul test-img ">
                        <img className="" src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_DesignDesk_Logo?wid=600&qlt=90&fmt=png-alpha&op_sharpen=1" alt=""></img>
                    </div>
                    <div className="absul test2">
                        <p class=" renew__body cms-black tc">Mom of 5, @raisingfivekind, challenged The Design Desk to give <br />her living room a revamp. See how she used our free services. </p>
                        <p class="crate-bold cms1-black">SEE THE TRANSFORMATION </p>
                    </div>
                </div>
            </div>

            <div className="box">
                <div> <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_MediaFrntr?wid=1440&qlt=80&op_sharpen=1" alt=""></img></div>
                <div className="absul storage ">
                    <p class="renew__medium cms-black " >get the custom look </p>
                    <p class="crate-bold cms1-black" >SHOP MODULAR STORAGE </p>
                </div>
                <div className="absul storage1">
                    <hr className="hr" />
                    <p class="crate-secondary">New. FSC<sup>®</sup>-certified <br />Keane gives you the <br />look of custom built-ins. </p>
                </div>
            </div>

            <div className="box">
                <div><img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Entertaining?wid=1440&qlt=80&op_sharpen=1" alt=""></img></div>

                <div className="absul dinnerwear">
                    <p class="renew__medium cms-black ">now trending: <br />pops of color </p>
                    <p class="crate-bold cms1-black">SHOP DINNERWARE </p>
                </div>

                <div className="absul dinnerwear1">
                    <hr className="hr" />
                    <p class="crate-secondary">New. Craft dinnerware starts at <br />$4.95. Layer with Cafe bowls in <br />natural-inspired hues. </p>
                </div>
            </div>

            <div className="box">
                <div><img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_KtchByCrate?wid=1440&qlt=80&op_sharpen=1" alt=""></img></div>
                <div className="absul premium">
                    <img className="premium-img" src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_KtchByCrate_Logo?wid=518&qlt=80&fmt=png-alpha&op_sharpen=1" alt="" />
                    <p className="roman-white">Our exclusive line of premium cookware <br />and tools was designed in-house to make <br />cooking a beautiful experience </p>
                </div>
            </div>
            {/*
      <div>
        <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Coffee?wid=1440&qlt=80&op_sharpen=1" alt=""></img>
      </div>
      <div>
        <img src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Partyslate?wid=1440&qlt=90&op_sharpen=1" alt=""></img>
      </div>
       caosoul 
      <div>
        <img src="	https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_Kids?wid=1440&qlt=80&op_sharpen=1" alt=""></img>
      </div>*/}
            <div className="box">
                <div><video autoPlay loop muted src="https://s7d5.scene7.com/is/content/Crate/Video/cb_dHP_20230102_BabyRegistry.mp4"></video></div>
                <div className="absul registry">
                    <div><img className="amp-img" src="https://cb.scene7.com/is/image/Crate/cb_dHP_20230330_BRLogo_White?wid=288&qlt=90&fmt=png-alpha&op_sharpen=1" alt=""></img></div>
                    <p class="crate-bold ">CREATE YOUR REGISTRY </p>
                </div>
            </div>

        </div>
    );
}
export { Home };