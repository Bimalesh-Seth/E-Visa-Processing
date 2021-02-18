const router = require('express').Router();
const {
    AllRequests,
    ApplyNewVisa,
    getPerson,
    UpdateRequest,
    DeleteRequest,
    IssueVisa,
    AllVisas,
    getOneVisa,
    UpdateVisa,
    DeleteVisa,
    getPersonVisa
} = require('../Controllers/visa');


router
    .route('/request')
    .get(AllRequests)
    .post(ApplyNewVisa);


router
    .route('/request/:id')
    .get(getPerson)
    .put(UpdateRequest)
    .delete(DeleteRequest);

router
    .route('/visa')
    .get(AllVisas)
    .post(IssueVisa);

router
    .route('/visa/:id')
    .get(getOneVisa)
    .put(UpdateVisa)
    .delete(DeleteVisa);

router.get('/person/visa/:id', getPersonVisa);


module.exports = router;