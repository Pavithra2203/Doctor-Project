const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");


// Doctor post,get,update,delete
router.route("/create/doctor").post(userController.createDoctorData);
router.route("/get/doctor/all").get(userController.getAllDoctorData);
router.route("/get/specific/doctor/data/:id").get(userController.getSpecificDoctorData);
router.route("/update/doctor/data/:id").put(userController.updateDoctorData);
router.route("/delete/doctor/data/:id").delete(userController.deleteDoctorData);

// Nurse post,get,update,delete
router.route("/create/nurse").post(userController.createNurseData);
router.route("/get/nurse/all").get(userController.getAllNurseData);
router.route("/get/specific/nurse/data/:id").get(userController.getSpecificNurseData);
router.route("/update/nurse/data/:id").put(userController.updateNurseData);
router.route("/delete/nurse/data/:id").delete(userController.deleteNurseData);

// Doctor login using email and password
router.route("/doctor/login").post(userController.doctorLogin);

module.exports = router;