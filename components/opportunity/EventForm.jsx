const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    if (typeof document !== "undefined") {
        /**
         * Define a function to navigate betweens form steps.
         * It accepts one parameter. That is - step number.
         */
        const navigateToFormStep = (stepNumber) => {
            /**
             * Hide all form steps.
             */
            document.querySelectorAll(".form-step").forEach((formStepElement) => {
                formStepElement.classList.add("d-none");
            });
            /**
             * Mark all form steps as unfinished.
             */
            document
                .querySelectorAll(".form-stepper-list")
                .forEach((formStepHeader) => {
                    formStepHeader.classList.add("form-stepper-unfinished");
                    formStepHeader.classList.remove(
                        "form-stepper-active",
                        "form-stepper-completed"
                    );
                });
            /**
             * Show the current form step (as passed to the function).
             */
            document.querySelector("#step-" + stepNumber).classList.remove("d-none");
            /**
             * Select the form step circle (progress bar).
             */
            const formStepCircle = document.querySelector(
                'li[step="' + stepNumber + '"]'
            );
            /**
             * Mark the current form step as active.
             */
            formStepCircle.classList.remove(
                "form-stepper-unfinished",
                "form-stepper-completed"
            );
            formStepCircle.classList.add("form-stepper-active");
            /**
             * Loop through each form step circles.
             * This loop will continue up to the current step number.
             * Example: If the current step is 3,
             * then the loop will perform operations for step 1 and 2.
             */
            for (let index = 0; index < stepNumber; index++) {
                /**
                 * Select the form step circle (progress bar).
                 */
                const formStepCircle = document.querySelector(
                    'li[step="' + index + '"]'
                );
                /**
                 * Check if the element exist. If yes, then proceed.
                 */
                if (formStepCircle) {
                    /**
                     * Mark the form step as completed.
                     */
                    formStepCircle.classList.remove(
                        "form-stepper-unfinished",
                        "form-stepper-active"
                    );
                    formStepCircle.classList.add("form-stepper-completed");
                }
            }
        };
        /**
         * Select all form navigation buttons, and loop through them.
         */
        document
            .querySelectorAll(".btn-navigate-form-step")
            .forEach((formNavigationBtn) => {
                /**
                 * Add a click event listener to the button.
                 */
                formNavigationBtn.addEventListener("click", () => {
                    /**
                     * Get the value of the step.
                     */
                    const stepNumber = parseInt(
                        formNavigationBtn.getAttribute("step_number")
                    );
                    /**
                     * Call the function to navigate to the target form step.
                     */
                    navigateToFormStep(stepNumber);
                });
            });
    }
    return (
        <div>
            <div id="multi-step-form-container">
                <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                    <li
                        className="form-stepper-active text-center form-stepper-list"
                        step="1"
                    >
                        <a className="mx-2">
              <span className="form-stepper-circle">
                <span>
                  <img src="/images/logo/Plogo11.png" alt="" width={95}/>
                </span>
              </span>
                            <div className="label">Organization Information</div>
                        </a>
                    </li>
                    <li
                        className="form-stepper-unfinished text-center form-stepper-list"
                        step="2"
                    >
                        <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>
                  <img src="/images/logo/Plogo12.png" alt="" width={95}/>
                </span>
              </span>
                            <div className="label text-muted">Event Details</div>
                        </a>
                    </li>
                    <li
                        className="form-stepper-unfinished text-center form-stepper-list"
                        step="3"
                    >
                        <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>
                  <img src="/images/logo/Plogo13.png" alt="" width={95}/>
                </span>
              </span>
                            <div className="label text-muted">Confirm Details</div>
                        </a>
                    </li>
                </ul>
                <form
                    id="userAccountSetupForm"
                    name="userAccountSetupForm"
                    encType="multipart/form-data"
                    method="POST"
                >
                    <section id="step-1" className="form-step">
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
                            <button
                                className="button btn-navigate-form-step btn-twentyOne fw-500 tran3s"
                                type="button"
                                step_number="2"
                            >
                                Next
                            </button>
                        </div>
                    </section>
                    <section id="step-2" className="form-step d-none">
                        <div className="mt-3 form-style-one">
                            <div className="col-12">
                                <div className="input-group-meta form-group mb-10">
                                    <input
                                        type="Volunteer Name"
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
                                    <input
                                        type="Volunteer Location"
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
                                    <input
                                        type="Spots Available"
                                        placeholder="Spots Available ( optional )"
                                        name="spotsAvailable"
                                    />
                                    <div className="help-block with-errors"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="input-group-meta form-group mb-10">
                                    <input
                                        type="Requirements"
                                        placeholder="Requirements"
                                        name="requirements"
                                    />
                                    <div className="help-block with-errors"/>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="input-group-meta form-group mb-10">
                                    <input
                                        type="Volunteer Times"
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
                                    <input
                                        type="Social media links"
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
                                step_number="1"
                            >
                                Back
                            </button>
                            <button
                                className="button btn-navigate-form-step btn-twentyOne fw-500 tran3s d-inline-block"
                                type="button"
                                step_number="3"
                            >
                                Next
                            </button>
                        </div>
                    </section>
                    <section id="step-3" className="form-step d-none">
                        <div className="mt-3">Organization Information</div>
                        <div className="mt-3">Event Details</div>
                        <div className="mt-3 form-style-one">
                            <button
                                className="button btn-navigate-form-step btn-twentyOne fw-500 tran3s"
                                type="button"
                                step_number="2"
                            >
                                Back
                            </button>
                            <button
                                className="button submit-btn btn-twentyOne fw-500 tran3s"
                                type="submit"
                                step_number="1"
                            >
                                Finish
                            </button>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
