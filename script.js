let products = JSON.parse(localStorage.getItem("products")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

function renderProducts() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";
  products.forEach((p, i) => {
    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>${p.price}</td>
        <td><button onclick="deleteProduct(${i})">Delete</button></td>
      </tr>`;
  });
}

function renderUsers() {
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  users.forEach((u, i) => {
    table.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td><button onclick="deleteUser(${i})">Delete</button></td>
      </tr>`;
  });
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  if (!name || !price) return;
  products.push({ name, price });
  saveProducts();
  renderProducts();
}

function addUser() {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;
  if (!name || !email) return;
  users.push({ name, email });
  saveUsers();
  renderUsers();
}

function deleteProduct(index) {
  products.splice(index, 1);
  saveProducts();
  renderProducts();
}

function deleteUser(index) {
  users.splice(index, 1);
  saveUsers();
  renderUsers();
}

renderProducts();
renderUsers();
