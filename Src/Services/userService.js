
const doctorModel = require("../Models/userModel");
const nurseModel = require("../Models/nurseModel");

const createDoctorData = async(body) => {
    const doctorData = await doctorModel.create(body);
    return doctorData;
};
const getAllDoctorData = async() => {
    const doctorData = await doctorModel.find({});
    return doctorData;
};

const getSpecificDoctorData = async(id) => {
    // const doctorData = await doctorModel.findById({_id:id});
    // return doctorData;

    const doctorData = await doctorModel.aggregate([
        {
            $match:{
                _id:id
            },
        },
        {
            $lookup:{
                from:"nurses",
                localField:"_id",
                foreignField:"doctorId",
                as:"nurseData",
                pipeline:[
                    {
                        $project:{
                            
                            password:0,
                            active:0,
                            __v:0,
                            doctorId:0,

                        },
                    },
                ]
            },
        },
        {
            $project:{
                password:0,
                active:0,
                __v:0,
                
            },
        },
    ]);
    return doctorData[0];
    
};

const updateDoctorData = async(id,body) => {
    const checkId = await doctorModel.findById({_id:id});

    if(!checkId) {
        console.log("not found");
    };

    const doctorData = await doctorModel.findByIdAndUpdate({_id:id},body,{new:true});
    return doctorData;
};

const deleteDoctorData = async(id) => {
    const checkId = await doctorModel.findById({_id:id});

    if(!checkId){
        console.log("not found");
    };

    const doctorData = await doctorModel.findByIdAndDelete({_id:id});
    return doctorData;
};

const createNurseData = async(body) =>{
    const nurseData = await nurseModel.create(body);
    return nurseData;
};

const getAllNurseData = async() => {
    const nurseData = await nurseModel.find({});
    return nurseData;
};

const getSpecificNurseData = async(id) => {
    const nurseData = await nurseModel.findById({_id:id});
    return nurseData;
};

const  updateNurseData = async(id,body) => {
    const checkId = await nurseModel.findById({_id:id});

    if(!checkId){
        console.log("not found");
    };

    const nurseData = await nurseModel.findByIdAndUpdate({_id:id},body,{new:true});
    return nurseData;
};

const deleteNurseData = async(id) => {
    const checkId = await nurseModel.findById({_id:id});

    if(!checkId){
        console.log("not found");
    };

    const nurseData = await nurseModel.findByIdAndDelete({_id:id});
    return nurseData;
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
    
}