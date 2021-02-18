const { Person, Visa } = require('../Models/visa');

const AllRequests = async (req, res) => {
    const persons = await Person.find();
    return res.send(persons);
}

const ApplyNewVisa = async (req, res) => {
    const person = new Person(req.body);
    // {
    //     "name": "Bimalesh Seth",
    //     "mobile": "7039581571",
    //     "email": "sethbimalesh@gmail.com",
    //     "address": "Nalasopara",
    //     "city": "Mumbai",
    //     "pincode": "401203",
    //     "passportNo": "MA79864",
    //     "passportIssueCity": "Mumbai",
    //     "passportIssueDate": "21/03/2020",
    //     "passportExpiryDate": "21/03/2035",
    //     "documentDetails": "Nothing",
    //     "pastTourDetails": "Nothing"
    // }
    await person.save();
    return res.json({
        message: 'Data added successfully.',
        person
    });
}

const getPerson = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findById(id);
    return res.json({
        message: 'Person found successfully!',
        person
    });
}

const UpdateRequest = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findByIdAndUpdate(id, req.body, { new: true });

    return res.json({
        message: 'Data updated successfully.',
        updatedPerson: person
    });
}

const DeleteRequest = async (req, res) => {
    const { id } = req.params;
    const person = await Person.findByIdAndDelete(id);
    return res.json({
        message: 'Data deleted successfully.',
        deletePerson: person
    });
}


const AllVisas = async (req, res) => {
    const persons = await Visa.find();
    return res.send(persons);
}

const getOneVisa = async (req, res) => {
    const { id } = req.params;
    const visa = await Visa.findById(id);
    return res.json({
        message: 'Visa found successfully!',
        visa
    });
}

const IssueVisa = async (req, res) => {
    // {
    //     "personId": "602d3f9fbd7a7d32f0b72e88",
    //     "visaIssueDate": "15/03/2021",
    //     "days": "10",
    //     "travelDate": "20/03/2021",
    //     "returnDate": "30803/2021",
    //     "projectName": "Nothing",
    //     "workingPeriod": "8 Hours",
    //     "workingPlace": "Tokyo",
    //     "jobDescription": "Engineer",
    //     "otherDetails": "Nothing"
    // }
    const person = await Person.findById(req.body.personId);
    const visa = new Visa({ ...req.body, name: person.name });
    await visa.save();
    return res.json({
        message: 'Visa issued successfully.',
        visa
    });
}


const UpdateVisa = async (req, res) => {
    const { id } = req.params;
    const visa = await Visa.findByIdAndUpdate(id, req.body, { new: true });

    return res.json({
        message: 'Visa updated successfully.',
        updatedVisa: visa
    });

}

const DeleteVisa = async (req, res) => {
    const { id } = req.params;
    const visa = await Visa.findByIdAndDelete(id);
    return res.json({
        message: 'Data deleted successfully.',
        deletedVisa: visa
    });
}

const getPersonVisa = async (req, res) => {
    const { id } = req.params;
    const visas = await Visa.find({ personId: id });
    return res.json({
        message: 'Visas found successfully!',
        visas
    });
}


module.exports = {
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
};