import React from 'react'
import {Field, reduxForm} from 'redux-form'
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

const WizardFormThirdPage = (props) => {
    const {handleSubmit, pristine, previousPage, submitting} = props
    return (
        <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
            <div className="mt-3">Organization Information</div>
            <div className="mt-3">Event Details</div>

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
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)
