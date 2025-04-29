const formValidation = () => {
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener(
      'submit',event => {
        event.preventDefault()
          if(!form.checkVisibility()) {
            event.stopPropagation()
          }
          form.classList.add('was-validated')
      },
      false
    )
  })
}

module.exports = {formValidation}