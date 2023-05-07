import React from 'react'
import {Field, reduxForm, getFormValues} from 'redux-form'
import {connect} from "react-redux";
import validate from './validate'

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

const renderColorSelector = ({input, meta: {touched, error}}) => (
    <div>
        <select {...input}>
            <option value="">Select a color...</option>
            {colors.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)

const FetchValues = connect(state => ({
    values: getFormValues('create-event')(state),
}))(({values}) =>
    <div className="row">
        <div className="col-6">
            <h4>Organization Information</h4>
            <div className=" create-event-report-field">
                <h6>Organization Name:</h6> <p>{values.name}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Organization Email:</h6> <p>{values.email}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Organization Numbers:</h6> <p>{values.phone}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Organization Zip-Code:</h6> <p>{values.zipCode}</p>
            </div>
        </div>
        <div className="col-6">
            <h4>Event Details</h4>
            <div className=" create-event-report-field">
                <h6>Location:</h6> <p>{values.volunteerLocation}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Spot Available:</h6> <p>{values.spotsAvailable}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Requirements:</h6> <p>{values.requirements}</p>
            </div>
            <div className="create-event-report-field">
                <h6>Available times:</h6> <p>{values.volunteerTimes}</p>
            </div>
        </div>
    </div>
)

const WizardFormThirdPage = (props) => {
    const {handleSubmit, pristine, previousPage, submitting} = props
    return (
        <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
            <FetchValues/>

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
                    disabled={pristine || submitting}
                >
                    Finish
                </button>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'create-event', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(WizardFormThirdPage)
