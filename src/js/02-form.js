const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const storageData = JSON.parse(savedData);
  form.elements.email.value = storageData.email || "";
  form.elements.message.value = storageData.message || "";
};

form.addEventListener("input", () => {
    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    
    event.preventDefault();

    const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };

    console.log("Form Data: ", formData);

    localStorage.removeItem(localStorageKey);

    form.reset();
});