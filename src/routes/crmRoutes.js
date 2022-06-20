import { addNewContact, getContacts, getContactWithID } from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request from: ${req.method}`)
            next();
        }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)
        .put((req, res) =>
            res.send('PUT request successfull!')  
        )
        .delete((req, res) =>
            res.send('DELETE request successfull!')  
        );
}

export default routes;