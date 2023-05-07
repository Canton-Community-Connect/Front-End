import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({meta: {touched, error}}) => touched && error ?
    <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
    const {handleSubmit, previousPage} = props
    return (
        <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
            <div className="mt-3 form-style-one">
                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Volunteer Name*"
                            name="volunteerName"
                            required="required"
                            data-error="Volunteer Name is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Volunteer Location*"
                            name="volunteerLocation"
                            required="required"
                            data-error="Volunteer Location is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Spots Available ( optional )"
                            name="spotsAvailable"
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Requirements"
                            name="requirements"
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Volunteer Times*"
                            name="volunteerTimes"
                            required="required"
                            data-error="Volunteer Times is required."
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>

                <div className="col-12">
                    <div className="input-group-meta form-group mb-10">
                        <Field
                            component={renderField}
                            placeholder="Social media links"
                            name="socialMediaLinks"
                        />
                        <div className="help-block with-errors"/>
                    </div>
                </div>
            </div>
            <div className="wizard-buttons">

                <button
                    className="button btn-navigate-form-step btn-twentyOne fw-500 tran3s d-inline-block me-3"
                    type="button"
                    onClick={previousPage}
                >
                    Back
                </button>
                <button
                    className="button btn-navigate-form-step btn-twentyOne fw-500 tran3s d-inline-block"
                    type="submit"
                    step_number="3"
                >
                    Next
                </button>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'create-event',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormSecondPage)
