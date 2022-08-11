let form = document.getElementById("form1");

async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("contacme__form__status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Thanks for your message!";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"].map((error) => error["message"]).join(", ");
                    } else {
                        status.innerHTML = "Oops! Sorry, your message couldn't by send";
                    }
                });
            }
        })
        .catch((error) => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
}
form.addEventListener("submit", handleSubmit);
