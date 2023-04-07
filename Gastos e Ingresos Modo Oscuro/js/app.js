let account = [
  {
    id: 1,
    name: "Paga enero",
    quantity: 100,
  },
  {
    id: 2,
    name: "Compra Pantalon",
    quantity: -40,
  },
  {
    id: 3,
    name: "Juego FIFA 23",
    quantity: -40,
  },
];

const expenseList = document.querySelector("#expenses-list")
const inputName = document.querySelector("#name");
const inputQuantity = document.querySelector("#quantity");
const conceptList = document.querySelector("#concepts-list");
const inputTypeConcept = document.querySelector("#type-concept");
let toggle = document.getElementById("switch");


let body = document.body;

toggle.addEventListener("click", function () {
  body.classList.toggle("dark")
});
function renderAccount() {
  conceptList.innerHTML = "";
  let total = 0;
  account.forEach((e) => {
    total += e.quantity;
    conceptList.innerHTML += `
            <tr>
                <td>${e.name}</td>
                <td id="quantity" style="color:green">${e.quantity>0?e.quantity+"€":"-"}</td>
                <td id="quantity" style="color:red">${e.quantity<0?e.quantity+"€":"-"}</td>
            </tr>
        `;
  });
  conceptList.innerHTML += `
            <tr>
                <td colspan="3" style="text-aling:center">Total Cuenta ${total}</td>
            </tr>
        `;
}

function addConcept(event){
  // Previene el envio de datos a una URL que no existe
  event.preventDefault();
  let income = (inputTypeConcept.options[inputTypeConcept.selectedIndex].value=="income")
  const concept={
      "id":account.length+1,
      "name":inputName.value,
      "quantity":parseFloat(inputQuantity.value) * (income?1:-1),
  }
  account.push(concept);
  renderAccount();
}

function addIncome() {
  const concept = {
    "id": account.length + 1,
    "name": inputName.value,
    "quantity": parseFloat(inputQuantity.value),
  };
  account.push(concept);
  renderAccount(); //Modificamos la estructura y luego modificamos la interfaz de usuario
}

function addExpense() {
  const concept = {
    "id": account.length + 1,
    "name": inputName.value,
    "quantity": -parseFloat(inputQuantity.value),
  };

  account.push(concept);
  renderAccount();
}

function init() {
  renderAccount();
  const formConcept = document.querySelector("#form-concept");
  formConcept.addEventListener("submit", function(event){
      addConcept(event);
  });
}

init();


