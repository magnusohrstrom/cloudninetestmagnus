import React, { Component } from 'react';
import RatingStars from './RatingStars';
import {CSSTransition, TransitionGroup, Transition } from 'react-transition-group';

class SingleSalon extends Component {
    state = {
        sheduleIsVisible:false,
        infoIsVisible:true
    }

    setStateToShowCorrectElementOnClick = (x) => {
        x === "info" ? this.setState({
            sheduleIsVisible:false,
            infoIsVisible:true
        }):this.setState({
            sheduleIsVisible:true,
            infoIsVisible:false
        }) 
    }

    render() {
        
        return (
            
            <section className = "single-salon-section">
                <section className = "single-salon-hero">
                    <svg onClick={this.props.onClick} className = "arrow-icon" width="11px" height="19px" viewBox="0 0 11 19" version="1.1" xmlns="http://www.w3.org/2000/svg"> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Lista" transform="translate(-14.000000, -33.000000)" stroke="white"> <polyline id="Path-5" points="24.1432489 51.3847763 15 42.1432489 24.1432489 33"></polyline> </g> </g> </svg>
                    <svg  className ="heart-icon" width="34px" height="30px" viewBox="0 0 34 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc> <defs> <path d="M341.640789,31 C343.075637,31 344.513002,31.5755607 345.62415,32.7384226 L347.61583,34.8262629 C347.827997,35.0504493 348.181887,35.0602329 348.406073,34.8480666 C348.413621,34.8410782 348.421168,34.8335308 348.428156,34.8262629 L350.411171,32.7557537 C352.633468,30.43003 356.146932,30.43003 358.369228,32.7557537 C360.591524,35.0817571 360.591524,38.8336639 358.369228,41.1593877 C354.91782,44.7712479 351.468929,48.3881398 348.017521,52 L337.666093,41.1507221 C335.445474,38.822203 335.443797,35.0641464 337.666093,32.7384226 C338.777241,31.5755607 340.20594,31 341.640789,31 Z" id="path-1"></path> <filter x="-31.2%" y="-26.2%" width="162.4%" height="171.4%" filterUnits="objectBoundingBox" id="filter-2"> <feMorphology radius="0.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology> <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset> <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology> <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset> <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite> <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur> <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix> </filter> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="En-Salong" transform="translate(-331.000000, -28.000000)"> <g id="Page-1-Copy"> <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use> <use stroke="#FFFFFF" strokeWidth="1" xlinkHref="#path-1"></use> </g> </g> </g> </svg>
                    <h2>{this.props.name}</h2>
                    <RatingStars rating = {this.props.rating}/> 
                </section>
                <section className="info-shedule-switcher">
                    <div id="info" className= {
                        this.state.infoIsVisible ? 'is-active':''
                    } 
                    onClick={() => this.setStateToShowCorrectElementOnClick("info")}>
                        <h3>Info</h3>
                    </div>
                    <div id="shedule" className= {
                        this.state.sheduleIsVisible ? 'is-active':''
                    }  
                    onClick={() => this.setStateToShowCorrectElementOnClick("schedule")} >
                        <h3>Schema</h3>
                    </div>
                </section>
                <div className="single-salon-grey-divider"></div>   
                {this.state.infoIsVisible && 
                <section className={this.state.infoIsVisible ? "salon-info-section is-active":"salon-info-section"}>
                    <div> 
                        <svg width="10px" height="15px" viewBox="0 0 10 15" version="1.1" xmlns="http://www.w3.org/2000/svg" >  <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="En-Salong" transform="translate(-15.000000, -336.000000)" stroke="#202020" strokeWidth="0.5"> <g id="Group" transform="translate(15.000000, 336.000000)"> <path d="M4.7667,2.868825 C3.7422,2.868825 2.9112,3.685575 2.9112,4.693575 C2.9112,5.700825 3.7422,6.518325 4.7667,6.518325 C5.7912,6.518325 6.6222,5.700825 6.6222,4.693575 C6.6222,3.685575 5.7912,2.868825 4.7667,2.868825 Z" id="Stroke-1"></path> <path d="M9.158325,4.693275 C9.158325,2.308275 7.191825,0.374775 4.767075,0.374775 C2.341575,0.374775 0.375075,2.308275 0.375075,4.693275 C0.375075,7.078275 4.767075,14.363775 4.767075,14.363775 C4.767075,14.363775 9.158325,7.078275 9.158325,4.693275 Z" id="Stroke-3"></path> </g> </g> </g> </svg>
                        <a target="_blank" href={this.props.mapsUrl}>{this.props.adress}</a>
                        <hr/>
                    </div>
                    <div>
                        <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" >  <desc>Created with Sketch.</desc> <defs> <path d="M0.267857143,7.23214286 C0.267857143,10.7775 3.15107143,13.6607143 6.69642857,13.6607143 C10.2417857,13.6607143 13.125,10.7775 13.125,7.23214286 C13.125,3.68571429 10.2417857,0.803571429 6.69642857,0.803571429 C3.15107143,0.803571429 0.267857143,3.68571429 0.267857143,7.23214286 Z" id="path-1"></path> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="En-Salong" transform="translate(-15.000000, -382.000000)"> <g id="Page-1" transform="translate(15.000000, 381.000000)"> <g id="Group-3" transform="translate(0.000000, 0.535714)"> <mask id="mask-2" fill="white"> <use xlinkHref="#path-1"></use> </mask> <g id="Clip-2"></g> <polygon id="Stroke-1" stroke="#202020" strokeWidth="0.5" mask="url(#mask-2)" points="-15.8035714 304.017857 385.982143 304.017857 385.982143 -410.625 -15.8035714 -410.625"></polygon> </g> <g id="Group-10" transform="translate(0.000000, 0.535714)" stroke="#202020" strokeWidth="0.5"> <path d="M6.69642857,0.803571429 C3.15107143,0.803571429 0.267857143,3.68571429 0.267857143,7.23214286 C0.267857143,10.7775 3.15107143,13.6607143 6.69642857,13.6607143 C10.2417857,13.6607143 13.125,10.7775 13.125,7.23214286 C13.125,3.68571429 10.2417857,0.803571429 6.69642857,0.803571429" id="Stroke-4"></path> <path d="M6.69642857,7.23214286 L6.69642857,3.14357143" id="Stroke-6" strokeLinecap="round"></path> <path d="M9.27289286,9.80817857 L6.69610714,7.23246429" id="Stroke-8" strokeLinecap="round"></path> </g> </g> </g> </g> </svg>
                        <p>Öppet till {this.props.openUntil} idag.</p>
                        <hr/>
                    </div>    
                    <div>
                        <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="En-Salong" transform="translate(-14.000000, -429.000000)" stroke="#202020" strokeWidth="0.5"> <path d="M22.599019,438.464543 C22.4388399,438.477892 22.2918755,438.397802 22.1451781,438.317579 C20.7970038,437.530165 19.6489199,436.408911 18.8480243,435.074085 C18.7013269,434.847031 18.5678443,434.580066 18.6212373,434.313101 C18.7145417,433.806 19.3553917,433.605777 19.5422673,433.125239 C19.7156612,432.71131 19.4888743,432.244121 19.2219091,431.883851 C18.781283,431.283179 18.2207895,430.762597 17.5799395,430.375364 C17.273063,430.188622 16.9393565,430.028443 16.57882,430.001746 C14.9638139,429.921657 14.8703761,432.618005 15.0839483,433.672518 C15.3107352,434.767075 15.8581474,435.78141 16.4988639,436.702573 C18.0072173,438.891554 20.0761977,440.747096 22.5855373,441.627948 C23.4666559,441.935091 24.4143825,442.121833 25.3219307,441.908395 C25.775905,441.801609 26.2030494,441.601385 26.5232742,441.254196 C26.8437659,440.92049 27.0172933,440.440086 26.9372037,439.986112 C26.8569807,439.518923 26.5367559,439.145305 26.2163976,438.811598 C25.7492085,438.331061 25.2284929,437.903917 24.6679994,437.530165 C24.5610798,437.463424 24.4542938,437.396683 24.3342929,437.383201 C24.2008103,437.369986 24.0806759,437.436727 23.9604081,437.503469 C23.6267016,437.690344 23.3196916,437.917131 23.0527264,438.170882 C22.9327255,438.290883 22.7992429,438.41115 22.6390638,438.437847 C22.625582,438.451062 22.6123673,438.464543 22.599019,438.464543" id="Fill-1"></path> </g> </g> </svg>
                        <p>{this.props.teleNumber}</p>
                        <hr/>
                    </div>
                    <div>
                        <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="En-Salong" transform="translate(-15.000000, -477.000000)" fill="#000000"> <g id="Page-1" transform="translate(15.000000, 477.000000)"> <path d="M11.1518895,10.6395349 L13.9261919,10.6395349 C12.9696802,12.5947674 11.1503198,14.0452326 8.9606686,14.4985465 C9.50956395,14.1073256 9.99444767,13.5081977 10.3834012,12.7597674 C10.7024128,12.145814 10.9614244,11.4280814 11.1518895,10.6395349 L11.1518895,10.6395349 Z M7.67450581,10.6395349 L10.7976453,10.6395349 C10.6146802,11.3724419 10.3659593,12.0319186 10.0727616,12.5963372 C9.44031977,13.8130814 8.59962209,14.5566279 7.67450581,14.6401744 L7.67450581,10.6395349 Z M4.20235465,10.6395349 L7.3256686,10.6395349 L7.3256686,14.6401744 C6.40020349,14.5566279 5.55950581,13.8130814 4.92723837,12.5963372 C4.6340407,12.0319186 4.38531977,11.3724419 4.20235465,10.6395349 L4.20235465,10.6395349 Z M1.07380814,10.6395349 L3.84811047,10.6395349 C4.03857558,11.4280814 4.29758721,12.145814 4.61659884,12.7597674 C5.00555233,13.5081977 5.49061047,14.1073256 6.0393314,14.4985465 C3.84950581,14.0452326 2.03031977,12.5947674 1.07380814,10.6395349 L1.07380814,10.6395349 Z M11.5117151,7.6744186 L14.6456686,7.6744186 C14.6235174,8.6005814 14.4314826,9.48401163 14.0897965,10.2906977 L11.2336919,10.2906977 C11.4034012,9.47895349 11.5007267,8.59709302 11.5117151,7.6744186 L11.5117151,7.6744186 Z M7.67450581,7.6744186 L11.1627035,7.6744186 C11.1513663,8.60110465 11.0484593,9.4847093 10.8738663,10.2906977 L7.67450581,10.2906977 L7.67450581,7.6744186 Z M3.83712209,7.6744186 L7.3256686,7.6744186 L7.3256686,10.2906977 L4.12613372,10.2906977 C3.9515407,9.4847093 3.84863372,8.60110465 3.83712209,7.6744186 L3.83712209,7.6744186 Z M0.354331395,7.6744186 L3.48828488,7.6744186 C3.49927326,8.59709302 3.59642442,9.47895349 3.76630814,10.2906977 L0.910203488,10.2906977 C0.56869186,9.48401163 0.37630814,8.6005814 0.354331395,7.6744186 L0.354331395,7.6744186 Z M11.2336919,4.70930233 L14.0897965,4.70930233 C14.4314826,5.51581395 14.6235174,6.3994186 14.6456686,7.3255814 L11.5117151,7.3255814 C11.5007267,6.40273256 11.4034012,5.52226744 11.2336919,4.70930233 L11.2336919,4.70930233 Z M7.67450581,4.70930233 L10.8738663,4.70930233 C11.0477616,5.5152907 11.1513663,6.40046512 11.1627035,7.3255814 L7.67450581,7.3255814 L7.67450581,4.70930233 Z M4.12613372,4.70930233 L7.3256686,4.70930233 L7.3256686,7.3255814 L3.83712209,7.3255814 C3.84863372,6.40046512 3.95223837,5.5152907 4.12613372,4.70930233 L4.12613372,4.70930233 Z M0.910203488,4.70930233 L3.76630814,4.70930233 C3.59642442,5.52226744 3.49927326,6.40273256 3.48828488,7.3255814 L0.354331395,7.3255814 C0.37630814,6.39924419 0.56869186,5.51581395 0.910203488,4.70930233 L0.910203488,4.70930233 Z M8.97165698,0.501453488 C11.1565988,0.957209302 12.97125,2.40837209 13.9261919,4.36046512 L11.1518895,4.36046512 C10.9614244,3.56895349 10.702936,2.84982558 10.3834012,2.23465116 C9.99671512,1.49040698 9.5165407,0.891453488 8.97165698,0.501453488 L8.97165698,0.501453488 Z M6.02834302,0.501453488 C5.48328488,0.891453488 5.0034593,1.49040698 4.61659884,2.23465116 C4.29706395,2.84982558 4.03857558,3.56895349 3.84811047,4.36046512 L1.07380814,4.36046512 C2.02875,2.40837209 3.84340116,0.957209302 6.02834302,0.501453488 L6.02834302,0.501453488 Z M7.67450581,0.359651163 C8.59962209,0.442848837 9.44031977,1.18133721 10.0727616,2.39825581 C10.3659593,2.96267442 10.6146802,3.62651163 10.7976453,4.36046512 L7.67450581,4.36046512 L7.67450581,0.359651163 Z M7.3256686,0.359651163 L7.3256686,4.36046512 L4.20235465,4.36046512 C4.38531977,3.62651163 4.6340407,2.96267442 4.92723837,2.39825581 C5.44752907,1.51918605 6.09793605,0.4725 7.3256686,0.359651163 L7.3256686,0.359651163 Z M7.50008721,0 C3.35991279,0 -8.72093023e-05,3.36 -8.72093023e-05,7.5 C-8.72093023e-05,11.64 3.35991279,15 7.50008721,15 C11.6400872,15 14.9999128,11.64 14.9999128,7.5 C14.9999128,3.36 11.6400872,0 7.50008721,0 L7.50008721,0 Z" id="Fill-1"></path> </g> </g> </g> </svg>
                        <a target="_blank" href={this.props.websiteUrl}>{this.props.websiteUrl}</a>
                        <hr/>
                    </div>
                    <div>
                        <p>{this.props.presentationText}</p>
                        <hr/>
                    </div>
                   
                </section>
               }
               {
                <section className="salon-shedule-section">

                </section>
               }
            </section>
        );
    }
}

export default SingleSalon;