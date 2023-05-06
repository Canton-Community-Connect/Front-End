import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className="user-data-form mt-40 lg-mt-30">
            <div className="row">
                <div className="col-12">
                    <div className="input-group-meta mb-25">
                        <label>test</label>
                        <input name="firstName"  type="text" />

                    </div>
                </div>
               {/* <div className="col-12">
                    <Field name="firstName" type="text" component={renderField} label="First Name"/>
                </div>*/}
                <div className="col-12">
                    <Field name="lastName" type="text" component={renderField} label="Last Name"/>
                </div>
                <div>
                    <button type="submit" className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">Next</button>
                </div>
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
