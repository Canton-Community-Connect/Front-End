import WizardFormFirstPage from "../../components/opportunity/WizardFormFirstPage";
import WizardFormSecondPage from "../../components/opportunity/WizardFormSecondPage";
import WizardFormThirdPage from "../../components/opportunity/WizardFormThirdPage";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import {Component} from "react";
import PropTypes from "prop-types";

class CreateEvent extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({page: this.state.page + 1})
    }

    previousPage() {
        this.setState({page: this.state.page - 1})
    }

    render() {
        const {onSubmit} = this.props
        const {page} = this.state
        return (
            <>
                <Seo pageTitle="Create Event"/>
                {/* <!--
      =============================================
      Theme Default Menu
      ==============================================
      --> */}
                <DefaulHeader/>

                {/*
        =============================================
        Feature Section Fifty One
        ==============================================
        */}
                <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 text-center m-auto wow fadeInUp">
                                <div className="title-style-five mb-65 lg-mb-40">
                                    <h4 className="fw-500 tx-dark">
                                        Add Volunteer Opportunity in Canton.
                                    </h4>
                                    <h6>*Organization account required</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container */}
                    <img
                        src="/images/shape/shape_172.svg"
                        alt="shape"
                        className="lazy-img shapes shape-two"
                    />
                </div>

                {/*
        =============================================
        Create Event
        ==============================================
        */}
                <div className="contact-section-one mt-60 lg-mt-30">
                    <div className="container"></div>
                    {/* End .container */}

                    <div className="user-data-section">
                        <div className="row">
                            <div className="col-xl-11 m-auto">
                                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
                                {page === 2 &&
                                    <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                                {page === 3 &&
                                    <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>}
                            </div>
                        </div>
                    </div>
                    {/* End .container */}
                </div>

                {/*
        =============================================
        Contact Section One
        ==============================================
        */}
                <DefaultFooter/>
            </>
        )
    }
}

/*CreateEvent.propTypes = {
    onSubmit: PropTypes.func.isRequired
}*/

export default CreateEvent
