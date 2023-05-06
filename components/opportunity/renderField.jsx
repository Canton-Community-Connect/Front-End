import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="input-group-meta mb-25">
        <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
    </div>

)

export default renderField
