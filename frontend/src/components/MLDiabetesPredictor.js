import React, { useState } from "react";
import axios from "axios";

function MLDiabetesPredictor() {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/diabetes", formData);
      setPrediction(response.data.prediction[0]);
      console.log(response.data.prediction[0]);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };
  const getPredictionText = () => {
    if (prediction === 0) {
      return <p className="font-bold text-red-600">This person does not have diabetes</p>;
    } else if (prediction === 1) {
      return <p className="font-bold text-green-600">This person has diabetes</p>;
    } else {
      return null;
    }}
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Diabetes Disease detection data form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          {/* ... (existing form fields are removed) ... */}

          {/* Pregnancies */}
          <div className="flex flex-col">
            <label htmlFor="pregnancies" className="mb-2 font-bold">
              Pregnancies
            </label>
            <input
              type="number"
              id="pregnancies"
              name="pregnancies"
              placeholder="Enter Pregnancies"
              value={formData.pregnancies}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Glucose */}
          <div className="flex flex-col">
            <label htmlFor="glucose" className="mb-2 font-bold">
              Glucose
            </label>
            <input
              type="number"
              id="glucose"
              name="glucose"
              placeholder="Enter Glucose"
              value={formData.glucose}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Blood Pressure */}
          <div className="flex flex-col">
            <label htmlFor="bloodPressure" className="mb-2 font-bold">
              Blood Pressure
            </label>
            <input
              type="number"
              id="bloodPressure"
              name="bloodPressure"
              placeholder="Enter Blood Pressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Skin Thickness */}
          <div className="flex flex-col">
            <label htmlFor="skinThickness" className="mb-2 font-bold">
              Skin Thickness
            </label>
            <input
              type="number"
              id="skinThickness"
              name="skinThickness"
              placeholder="Enter Skin Thickness"
              value={formData.skinThickness}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Insulin */}
          <div className="flex flex-col">
            <label htmlFor="insulin" className="mb-2 font-bold">
              Insulin
            </label>
            <input
              type="number"
              id="insulin"
              name="insulin"
              placeholder="Enter Insulin"
              value={formData.insulin}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* BMI */}
          <div className="flex flex-col">
            <label htmlFor="bmi" className="mb-2 font-bold">
              BMI
            </label>
            <input
              type="number"
              id="bmi"
              name="bmi"
              placeholder="Enter BMI"
              value={formData.bmi}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Diabetes Pedigree Function */}
          <div className="flex flex-col">
            <label htmlFor="diabetesPedigreeFunction" className="mb-2 font-bold">
              Diabetes Pedigree Function
            </label>
            <input
              type="number"
              id="diabetesPedigreeFunction"
              name="diabetesPedigreeFunction"
              placeholder="Enter Diabetes Pedigree Function"
              value={formData.diabetesPedigreeFunction}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="age" className="mb-2 font-bold">
              Age - Integer (e.g., 67)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter Age"
              value={formData.age}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

        

        </div>
        <div className='flex justify-center '>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 " onClick={handleSubmit}>Submit</button>
          {getPredictionText()}
        </div>
      </form>
    </div>
  );
};
export default MLDiabetesPredictor;