import Patient from '../models/patient.js';
import {generate} from 'password-hash';

export const addPatient = async (req,res) => {
    req.body.password = generate("12345678");
    console.log(req.body);
    const patient = new Patient(req.body);
    patient.save((err,patient)=> {
        if(err){
            res.status(500).json(err);
        }else {
            console.log(patient);
            res.status(201).json(patient);
        }
    })
}

export const editPatient = async (req,res) => {
    
}

export const deletePatient = async (req,res) => {
    Patient.remove({
        _id : req.params.id
    }, function (err,coach){
     if (err) {
        res.status(404).json({
            error: { errors: 
                    [{ domain: 'global',
                       reason: 'notFound',
                       message: 'Not Found', 
                       description: 'Couldn\'t find the requested coachId \'' + req.params.id + '\''
                     }],
                    err,
                    code: 404 }
        });
     } else {
        res.status(204).json({message: 'coach successfully deleted'});
     }   
    })
}

export const getPatient = async (req,res) => {
    res.header('Content-Range', 'patient 0-20/20')
    res.header('Access-Control-Expose-Headers', 'X-Total-Count')
    res.header('X-Total-Count',10)
    
    Patient.find({},(err,patient) => {
        console.log(err);
        console.log(patient);
        if(err){
            console.log(err);
        }else {
            console.log(patient);
            res.status(200).json(patient);
        }
    })
}

export const getPatientById = async (req,res) => {

}