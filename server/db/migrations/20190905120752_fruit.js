/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('Jobs', (table) => {
    table.increments('id')
    table.string('jobDate')
    table.string('product')
    table.string('applicationRate')
    table.string('pickup')
    table.string('docketNumber')
    table.string('orderNumber')
    table.string('truckNumber')
    table.string('driver')
    table.string('cropType')
    table.string('reasonsForFailure')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('Jobs')
}
