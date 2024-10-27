async function createUserData() {
  const timestamp = Date.now();
  const email = `user_${timestamp}@example.com`;
  const mobile_number = `+5541${Math.floor(
    100000000 + Math.random() * 900000000
  )}`;

  const userData = {
    name: "João Gustavo",
    email: email,
    password: "Test123",
    title: "Mr",
    birth_date: "10",
    birth_month: "12",
    birth_year: "1990",
    firstname: "João",
    lastname: "Gustavo",
    company: "Empresa Exemplo",
    address1: "Rua Test, 123",
    address2: "Apto 456",
    country: "Canada",
    zipcode: "12345",
    state: "Estado Test",
    city: "Cidade Test",
    mobile_number: mobile_number,
  };

  return userData;
}

module.exports = { createUserData };
