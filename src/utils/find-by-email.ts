import { Response } from "express";
import doctormodel from "../models/doctor-schema";
import nurseModel from "../models/nurses-schema";
import patientModel from "../models/patient-schema";



const findByEmail = async (res: Response, email: string) => {
  // teb3a l update email
  const [doctorex, nurseex, patientex] = await Promise.all([
    doctormodel.findOne({ email }),
    nurseModel.findOne({ email }),
    patientModel.findOne({ email }),
  ]);
  const isUserExist = doctorex || nurseex || patientex;
  if (isUserExist) {
    res.status(400).send("User already exists");
    return true;
  } else {
    return false;
  }
};

export default findByEmail;