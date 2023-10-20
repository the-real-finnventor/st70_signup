
function add() {
    const email = document.getElementById("addEmail");
    const multiselect = document.getElementById("emails");
    if (email.value) {
        const opt = document.createElement("option");
        opt.text = email.value;
        multiselect.add(opt)
        email.value = ""
    }
}

function delete_item() {
    for (const option of document.getElementById("emails").options) {
        if (option.selected) {
            option.remove()
        }
    }
}