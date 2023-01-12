import {
  addConsultation,
  editConsultation,
  getConsultationById,
} from "../controllers/consultation.js";
import {
  addPatient,
  editPatient,
  getPatient,
  deletePatient,
  getPatientById,
} from "../controllers/patient.js";
const routes = (app) => {
  app.route("/patient").get(getPatient).post(addPatient);
  app
    .route("/patient/:id")
    .get(getPatientById)
    .delete(deletePatient)
    .put(editPatient);
  app.route("/consultation").get(getConsultationById).post(addConsultation);
  app
    .route("/consultation/:id")
    .put(editConsultation)
    .delete(deletePatient)
    .get(getConsultationById);
};

export default routes;
