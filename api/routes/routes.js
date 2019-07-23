module.exports = (app)=>{
    const developers = require('../controllers/controllers');

    app.route('/developers')
    .get(developers.list_all_developers)
    .post(developers.add_developer);

    app.route('/developers/:developerId')
    .get(developers.read_a_developer)
    .put(developers.update_all_developers_details)
    .patch(developers.update_some_developers_details)
    .delete(developers.delete_a_developer);

    app.route('/developers/:developersStack')
    .get(developers.list_all_devloper_in_same_stack);
};