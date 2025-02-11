/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('Jobs').del()
  await knex('Jobs').insert([
    {
      id: 1,
      jobDate: '17/12/2025',
      product: 'sample',
      applicationRate: '750g/Ha',
      pickup: '0435',
      docketNumber: '0001990',
      orderNumber: '1990',
      truckNumber: 'HSL 63',
      driver: 'Rob',
      cropType: 'cow manure',
      reasonsForFailure: 'Cows came home too soon',
    },
  ])
}
