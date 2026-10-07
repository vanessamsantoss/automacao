import { test, expect } from '@playwright/test';
// login com usuario válido
// Acessar a página inicial., informar standard_user e secret_sauce
// Resultado esperado: o sistema navega para vitrine (inventory.)

async function login(page:Page, nome: string, senha: string) {
    await page.getByPlaceholder('Password').fill(senha);
    await page.getByRole('button', {name: 'Login' }).click();


}



