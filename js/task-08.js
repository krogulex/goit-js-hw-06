const form = document.querySelector('.login-form')

function login(event) {

    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      }
      const object = {
        Email: email.value, Password: password.value
      }
      console.log(object);

      event.currentTarget.reset();

    }

form.addEventListener('submit', login)