exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: '123456789', make:'Ford', model:'F-150', mileage:'134'},
        {vin: '987654321', make:'Dodge', model:'Challenger', mileage:'1482', transmission:'T40', title_status:'Clean'},
        {vin: '876432120', make:'Ford', model:'Bronco', mileage:'85932', transmission:'T45', title_status:'Salvaged'},
        {vin: '234234', make:'Mitsubishi', model:'Eclipse', mileage:'1', transmission:'T45'}
      ]);
    });
};