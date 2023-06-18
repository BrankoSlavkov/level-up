import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

import { fetchData } from '../src/api/fetchDate';
import { CATEGORIES_URL, STATES_URL } from '../src/constants/urls';

import { Category } from '../src/store/category/categoryTypes';
import { State } from '../src/store/state/stateTypes';

test.describe('Create Product', () => {
  let categories: Category[] = [];
  let states: State[] = [];

  test.beforeAll(async () => {
    categories = await fetchData(CATEGORIES_URL);
    states = await fetchData(STATES_URL);
  });

  // test.afterAll(async ({ page }) => {
  //   await page.waitForTimeout(1000);
  //   await page.close();
  // });

  test('test', async ({ page }) => {
    const productName = faker.commerce.productName();
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];

    await page.goto('/products');
    await page.getByRole('button', { name: 'Add Product' }).click();
    await page.locator('select[name="stateId"]').selectOption(randomState.id);
    await page
      .locator('select[name="categoryId"]')
      .selectOption(randomCategory.id);
    await page.getByPlaceholder('Title').fill(productName);
    await page.getByPlaceholder('Price').fill(faker.commerce.price({ min: 4 }));
    await page.getByPlaceholder('Image url').fill(
      faker.image.urlLoremFlickr({
        category: randomCategory.name,
      }),
    );
    await page
      .getByPlaceholder('Description')
      .fill(faker.commerce.productDescription());
    await page.getByRole('button', { name: /Submit/i }).click();

    expect(
      page.getByRole('link', {
        name: new RegExp(`${productName}`, 'gi'),
      }),
    ).not.toBeNull();
  });
});
