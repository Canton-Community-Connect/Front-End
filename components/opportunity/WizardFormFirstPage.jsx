import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
            <div className="mt-3 form-style-one">
                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <input
                            type="text"
                            placeholder="Organization Name*"
                            name="name"
                            required="required"
                            data-error="Organization name is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <input
                            type="Organization Email"
                            placeholder="Organization Email*"
                            name="email"
                            required="required"
                            data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <input
                            type="Phone Number"
                            placeholder="Phone Number*"
                            name="phone"
                            required="required"
                            data-error="Valid phone number is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>


                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <input
                            type="Zip Code"
                            placeholder="Zip Code*"
                            name="zipCode"
                            required="required"
                            data-error="Valid Zip Code is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>
            </div>

            <div className="mt-3">
                <button type="submit" className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">Next</button>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'create-event',                 // <------ same form name
    destroyOnUnmount: false,        // <------ preserve form data
    forceUnregisterOnUnmount: false,  // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)
