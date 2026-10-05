import { test, expect } from '@playwright/test';

async function login(page: page, username: string, password: string) {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill(username);
    await page.getByPlaceholder("Password").fill(password);
    await page.getByRole("button", {name: "Login"}).click();
};

test("login com credenciais validas", async ({page}) => {
await page.goto("https://www.saucedemo.com/");
});

// refatorar: melhorar o codigo, deixar organizado.
test("login com credenciais invalidas", async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
});

test.describe("Login", async() => {
    test("login com credenciais validas", async ({page}) => {
        await page.goto("https://www.saucedemo.com");
    });

    test("login com credenciais invalidos", async ({page}) => {
        await page.goto("https://www.saucedemo.com");
    });
});

test.describe("products", async() => {
    test.beforeEach(async ({page}) => {
        await login(page, "standard_user", "secret_sauce");
    });
    test("verificar se o usuario esta logado", async ({page}) => {
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    });
});

