const updateValue = (e) => {
    document.querySelector(`#name-output`).textContent 
    = e.target.value === " " ? "Anonymus" : e.target.value;
}
document.querySelector(`#name-input`).addEventListener("input", updateValue);
