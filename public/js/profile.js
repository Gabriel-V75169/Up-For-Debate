const newAccountForm = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    localStorage.setItem("name", name);

    const storedName = localStorage.getItem("name");
    document.getElementById("name").textContent = storedName;

    console.log(name);

    const response = await fetch(`/api/user/login`, {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

document
  .querySelector(".account-form")
  .addEventListener("submit", newAccountForm);
