import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import slider from'../../assets/faqswrapper.png'
import '../../App.css';

const Faqs = () => {
    return (
        <div id="Faqs">
            <div className="about-wrapper" id="faq">
                <img src={slider} alt="Faqs"  className='faqsimg' />
            </div>
            <div className="container Faqs-content text-light">
                <div className="row">
                    <div className="col-sm-12 col-10" style={{ marginTop: '9rem' }}>
                        <h2>FAQs</h2>
                    </div>
                    <div className="col-sm-12 col-10 pt-5">
                        <h1>COMMONLY ASKED QUESTIONS</h1>
                    </div>
                    <div className="col-sm-12 col-10 mt-5">
                        <div className="accordion" id="accordionFlushExample">
                            <div className="accordion-item" style={{ border: 'none' }}>
                                <h2 className="accordion-header " id="flush-headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ backgroundColor: 'black', color: '#dd4242' }}>
                                        We need to add new users to our team. How will that be billed?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ border: 'none' }}>
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ backgroundColor: 'black', color: '#dd4242' }}>
                                        How do I pay for the essentials or premium plan?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body" >You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ border: 'none' }} >
                                <h2 className="accordion-header" id="flush-headingThree" >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ backgroundColor: 'black', color: '#dd4242' }}>
                                        Do you offer discounts for non-profit organizations or educational institutions?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body" >You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ border: 'none' }} >
                                <h2 className="accordion-header" id="flush-headingFour" >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{ backgroundColor: 'black', color: '#dd4242' }}>
                                        Can I cancel my essentials or premium plan subscription at any time?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body" >You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ border: 'none' }} >
                                <h2 className="accordion-header" id="flush-headingFive" >
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" style={{ backgroundColor: 'black', color: '#dd4242' }}>
                                        My teams wants to cancel its subscription. How do we do that? Can we get a refund?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body" >You can pay with a credit card or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs;
