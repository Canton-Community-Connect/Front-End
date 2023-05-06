import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) => touched && error ?
    <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={renderField} label="Email"/>
            <div>
                <label>Sex</label>
                <div>
                    <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
                    <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                    <Field name="sex" component={renderError}/>
                </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">Next</button>
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
