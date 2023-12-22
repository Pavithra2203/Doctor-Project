const userService = require("../Services/userService");
// const doctorModel = require("../Models/userModel");

const createDoctorData = async(req,res) => {
    const doctorData = await userService.createDoctorData(req.body);
    res.send(doctorData);
};

const getAllDoctorData = async(req,res) => {
    const doctorData = await userService.getAllDoctorData();
    res.send(doctorData);
};

const getSpecificDoctorData = async(req,res) => {
    const doctorData = await userService.getSpecificDoctorData(req.params.id);
    res.send(doctorData);
};

const updateDoctorData = async(req,res) => {
    const doctorData = await userService.updateDoctorData(req.params.id,req.body);
    res.send(doctorData);
};

const deleteDoctorData = async(req,res) => {
    const doctorData = await userService.deleteDoctorData(req.params.id);
    res.send(doctorData);
};

const createNurseData = async(req,res) => {
    const nurseData = await userService.createNurseData(req.body);
    res.send(nurseData);
};

const getAllNurseData = async(req,res) => {
    const nurseData = await userService.getAllNurseData();
    res.send(nurseData);
};

const getSpecificNurseData = async(req,res) => {
    const nurseData = await userService.getSpecificNurseData(req.params.id);
    res.send(nurseData);
};

const updateNurseData = async(req,res) => {
    const nurseData = await userService.updateNurseData(req.params.id,req.body);
    res.send(nurseData);
};

const deleteNurseData = async(req,res) => {
    const nurseData = await userService.deleteNurseData(req.params.id);
    res.send(nurseData);
};

const doctorLogin = async(req,res) => {
    
    const { email, password } = req.body;

    try {
        const existingDoctor = await doctorModel.findOne({ email });

        if (!existingDoctor || existingDoctor.password !== password) {
            // Respond with a 401 Unauthorized status code and an error message
            return res.status(401).json({ error: "Incorrect email or password" });
        }

        // Respond with a 200 OK status code and the doctor information
        return res.status(200).json(existingDoctor);
    } catch (error) {
        console.error("Error during login:", error);
        
        // Respond with a 500 Internal Server Error status code and an error message
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = {
    createDoctorData,
    getAllDoctorData,
    getSpecificDoctorData,
    updateDoctorData,
    deleteDoctorData,
    createNurseData,
    getAllNurseData,
    getSpecificNurseData,
    updateNurseData,
    deleteNurseData,
    doctorLogin,
}