import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('test', async ({ page }) => {
  const productName = faker.commerce.productName();

  await page.goto('/products');
  await page.getByRole('button', { name: 'Add Product' }).click();
  await page.locator('select[name="stateId"]').selectOption('1u4JNjlJf9APT');
  await page.locator('select[name="categoryId"]').selectOption('iwg36e9Vrh6j2');
  await page.getByPlaceholder('Title').fill(productName);
  await page.getByPlaceholder('Price').fill(faker.commerce.price({ min: 4 }));
  await page
    .getByPlaceholder('Image url')
    .fill(faker.image.urlLoremFlickr({ category: 'Furniture' }));
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
