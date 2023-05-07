import React from 'react'

const renderField = ({ input, label,placeholder, type, meta: { touched, error } }) => (
    <div className="input-group-meta mb-25">
            <input {...input} placeholder={placeholder} type={type}/>
            {touched && error && <span>{error}</span>}
    </div>

)

export default renderField
