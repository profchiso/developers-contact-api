module.exports = (app)=>{
    const developers = require('../controllers/controllers');

    //route to view all developer and also to add a developer
    app.route('/developers')
    .get(developers.list_all_developers)
    .post(developers.add_developer);

    //route to vie a particular developer by id
    app.route('/developers/:developerId')
    .get(developers.read_a_developer)
    .put(developers.update_all_developers_details)
    .patch(developers.update_some_developers_details)
    .delete(developers.delete_a_developer);

    //route to view all developers in same stack
    app.route('/developers/stack/:developersStack')
    .get(developers.list_all_developer_in_same_stack);

    
};