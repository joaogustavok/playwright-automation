const { test, expect } = require("@playwright/test");
const { createUserData } = require("../../utils/userUtils");

test("Fazer uma requisição de criação de usuário para uma API (POST)", async ({
  request,
}) => {
  const apiUrl = "https://automationexercise.com/api/createAccount";
  const userData = await createUserData();
  try {
    const response = await request.post(apiUrl, {
      form: userData,
    });
    const responseJson = await response.json();
    const status = await responseJson.responseCode;
    const responseText = await response.text();
    console.log("Resposta da API:", responseText);
    expect(status).toBe(201);
    expect(responseText).toContain("User created!");
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
});
