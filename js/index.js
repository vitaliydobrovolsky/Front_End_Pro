class FormValidator {
    constructor(Form) {
        this.form = form;
        this.fields = Array.from(this.form.querySelectorAll("[data-validate]"));
        this.init();
    }

    init() {
        this.form.addEventListener("submit", (event) => this.handleSubmit(event));
        this.fields.forEach((filed) =>{
            filed.addEventListener("input", () => this.validateFiled(filed));
        })
    }

    validateRequired(filed, rule) {
        const minLength = pareInt(rule.split(":")[1]);
        return filed.value.trim().length >= minLength
        ? ""
        : `min length: ${minLength} symbols`;
    }

    


}