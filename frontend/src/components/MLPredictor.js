import React, { useState } from "react";
import axios from "axios";

function MLPredictor() {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", {
        age: parseInt(formData.age),
        sex: parseInt(formData.sex),
        cp: parseInt(formData.cp),
        trestbps: parseInt(formData.trestbps),
        chol: parseInt(formData.chol),
        fbs: parseInt(formData.fbs),
        restecg: parseInt(formData.restecg),
        thalach: parseInt(formData.thalach),
        exang: parseInt(formData.exang),
        oldpeak: parseFloat(formData.oldpeak),
        slope: parseInt(formData.slope),
        ca: parseInt(formData.ca),
        thal: parseInt(formData.thal),
      });
      setPrediction(response.data.prediction[0]);
      console.log(response.data.prediction[0]);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Heart Disease detection data form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          
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
          {/* Sex */}
          <div className="flex flex-col">
            <label htmlFor="sex" className="mb-2 font-bold">
              Sex - 0 for Male, 1 for Female
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>
          {/* Chest Pain Type */}
          <div className="flex flex-col">
            <label htmlFor="cp" className="mb-2 font-bold">
              Chest Pain Type - 0: typical, 1: atypical, 2: non-anginal, 3: asymptomatic
            </label>
            <input
              type="number"
              id="cp"
              name="cp"
              placeholder="Enter Chest Pain Type"
              value={formData.cp}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Resting Blood Pressure */}
          <div className="flex flex-col">
            <label htmlFor="trestbps" className="mb-2 font-bold">
              Resting Blood Pressure - Integer (e.g., 145)
            </label>
            <input
              type="number"
              id="trestbps"
              name="trestbps"
              placeholder="Enter Resting Blood Pressure"
              value={formData.trestbps}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Serum Cholesterol */}
          <div className="flex flex-col">
            <label htmlFor="chol" className="mb-2 font-bold">
              Serum Cholesterol - Integer (e.g., 233)
            </label>
            <input
              type="number"
              id="chol"
              name="chol"
              placeholder="Enter Serum Cholesterol"
              value={formData.chol}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Fasting Blood Sugar */}
          <div className="flex flex-col">
            <label htmlFor="fbs" className="mb-2 font-bold">
              Fasting Blood Sugar `{'>'}` 120 mg/dl - 1 for true, 0 for false
            </label>
            <select
              id="fbs"
              name="fbs"
              value={formData.fbs}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">True</option>
              <option value="0">False</option>
            </select>
          </div>
          {/* Resting Electrocardiographic Results */}
          <div className="flex flex-col">
            <label htmlFor="restecg" className="mb-2 font-bold">
              Resting Electrocardiographic Results - 0: Normal, 1: ST-T wave abnormality, 2: Left ventricular hypertrophy
            </label>
            <input
              type="number"
              id="restecg"
              name="restecg"
              placeholder="Enter Resting Electrocardiographic Results"
              value={formData.restecg}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Maximum Heart Rate Achieved */}
          <div className="flex flex-col">
            <label htmlFor="thalach" className="mb-2 font-bold">
              Maximum Heart Rate Achieved - Integer (e.g., 150)
            </label>
            <input
              type="number"
              id="thalach"
              name="thalach"
              placeholder="Enter Maximum Heart Rate Achieved"
              value={formData.thalach}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Exercise Induced Angina */}
          <div className="flex flex-col">
            <label htmlFor="exang" className="mb-2 font-bold">
              Exercise Induced Angina - 1: Yes, 0: No
            </label>
            <select
              id="exang"
              name="exang"
              value={formData.exang}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* ST Depression Induced by Exercise */}
          <div className="flex flex-col">
            <label htmlFor="oldpeak" className="mb-2 font-bold">
              ST Depression Induced by Exercise - Example values: 2.3, 3.5, 1.4
            </label>
            <input
              type="number"
              id="oldpeak"
              name="oldpeak"
              placeholder="Enter ST Depression Value"
              value={formData.oldpeak}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Slope of the peak exercise ST segment */}
          <div className="flex flex-col">
            <label htmlFor="slope" className="mb-2 font-bold">
              Slope of the peak exercise ST segment - 0: Upsloping, 1: Flat, 2: Downsloping
            </label>
            <input
              type="number"
              id="slope"
              name="slope"
              placeholder="Enter Slope"
              value={formData.slope}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Major vessels colored by flourosopy */}
          <div className="flex flex-col">
            <label htmlFor="ca" className="mb-2 font-bold">
              Major vessels colored by flourosopy - Integer (0, 1, 2)
            </label>
            <input
              type="number"
              id="ca"
              name="ca"
              placeholder="Enter Major Vessels Count"
              value={formData.ca}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Thalassemia */}
          <div className="flex flex-col">
            <label htmlFor="thal" className="mb-2 font-bold">
              Thalassemia - 0: normal, 1: fixed defect, 2: reversable defect, 3: not described
            </label>
            <input
              type="number"
              id="thal"
              name="thal"
              placeholder="Enter Thalassemia Value"
              value={formData.thal}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
         

        </div>
        <div className='flex justify-center '>
          {/* <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 ">
            Submit
          </button> */}

        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 " onClick={handleSubmit}>Submit</button>
            {prediction && <p>Prediction: {prediction}</p>}
          </div>
      </form>
    </div>
  );
};
export default MLPredictor;
