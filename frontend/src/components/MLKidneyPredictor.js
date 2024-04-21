import React, { useState } from "react";
import axios from "axios";

function MLKidneyPredictor() {
  const [formData, setFormData] = useState({
    age: '',
    bloodPressure: '',
    specificGravity: '',
    albumin: '',
    sugar: '',
    bloodGlucoseRandom: '',
    bloodUrea: '',
    serumCreatinine: '',
    sodium: '',
    potassium: '',
    hemoglobin: '',
    packedCellVolume: '',
    whiteBloodCells: '',
    redBloodCells: '',
    redBloodCellsNormal: '',
    pusCellsNormal: '',
    pusCellClumps: '',
    bacteria: '',
    hypertension: '',
    diabetesMellitus: '',
    coronaryArteryDisease: '',
    appetite: '',
    pedalEdema: '',
    anemia: '',
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
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/ckd", {
        age: parseInt(formData.age),
        bloodPressure: parseInt(formData.bloodPressure),
        specificGravity: parseFloat(formData.specificGravity),
        albumin: parseInt(formData.albumin),
        sugar: parseInt(formData.sugar),
        bloodGlucoseRandom: parseInt(formData.bloodGlucoseRandom),
        bloodUrea: parseInt(formData.bloodUrea),
        serumCreatinine: parseFloat(formData.serumCreatinine),
        sodium: parseInt(formData.sodium),
        potassium: parseFloat(formData.potassium),
        hemoglobin: parseFloat(formData.hemoglobin),
        packedCellVolume: parseFloat(formData.packedCellVolume),
        whiteBloodCells: parseInt(formData.whiteBloodCells),
        redBloodCells: parseFloat(formData.redBloodCells),
        redBloodCellsNormal: formData.redBloodCellsNormal,
        pusCellsNormal: formData.pusCellsNormal,
        pusCellClumps: formData.pusCellClumps,
        bacteria: formData.bacteria,
        hypertension: formData.hypertension,
        diabetesMellitus: formData.diabetesMellitus,
        coronaryArteryDisease: formData.coronaryArteryDisease,
        appetite: formData.appetite,
        pedalEdema: formData.pedalEdema,
        anemia: formData.anemia,

      });
      setPrediction(response.data.prediction[0]);
      console.log(response.data.prediction[0]);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };
  const getPredictionText = () => {
    if (prediction === 0) {
      return <p className="font-bold text-red-600">This person does have kindey disease</p>;
    } else if (prediction === 1) {
      return <p className="font-bold text-green-600">This person has chronic kidney disease</p>;
    } else {
      return null;
    }
  };
  return (

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Heart Disease detection data form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          
          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="age" className="mb-2 font-bold">
              Age (yrs) - Integer (e.g., 67)
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
          {/* Blood Pressure */}
          <div className="flex flex-col">
            <label htmlFor="bloodPressure" className="mb-2 font-bold">
              Blood Pressure (mm/Hg) - Integer (e.g., 120)
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
          {/* Specific Gravity */}
          <div className="flex flex-col">
            <label htmlFor="specificGravity" className="mb-2 font-bold">
              Specific Gravity - Float (e.g., 1.020)
            </label>
            <input
              type="number"
              id="specificGravity"
              name="specificGravity"
              placeholder="Enter Specific Gravity"
              value={formData.specificGravity}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Albumin */}
          <div className="flex flex-col">
            <label htmlFor="albumin" className="mb-2 font-bold">
              Albumin - Integer (e.g., 4)
            </label>
            <input
              type="number"
              id="albumin"
              name="albumin"
              placeholder="Enter Albumin"
              value={formData.albumin}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Sugar */}
          <div className="flex flex-col">
            <label htmlFor="sugar" className="mb-2 font-bold">
              Sugar - Integer (e.g., 0)
            </label>
            <input
              type="number"
              id="sugar"
              name="sugar"
              placeholder="Enter Sugar"
              value={formData.sugar}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Blood Glucose Random */}
          <div className="flex flex-col">
            <label htmlFor="bloodGlucoseRandom" className="mb-2 font-bold">
              Blood Glucose Random (mgs/dL) - Integer (e.g., 100)
            </label>
            <input
              type="number"
              id="bloodGlucoseRandom"
              name="bloodGlucoseRandom"
              placeholder="Enter Blood Glucose Random"
              value={formData.bloodGlucoseRandom}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"

            />
          </div>
          {/* Blood Urea */}
          <div className="flex flex-col">
            <label htmlFor="bloodUrea" className="mb-2 font-bold">
              Blood Urea (mgs/dL) - Integer (e.g., 50)
            </label>
            <input
              type="number"
              id="bloodUrea"
              name="bloodUrea"
              placeholder="Enter Blood Urea"
              value={formData.bloodUrea}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Serum Creatinine */}
          <div className="flex flex-col">
            <label htmlFor="serumCreatinine" className="mb-2 font-bold">
              Serum Creatinine (mgs/dL) - Float (e.g., 1.4)
            </label>
            <input
              type="number"
              id="serumCreatinine"
              name="serumCreatinine"
              placeholder="Enter Serum Creatinine"
              value={formData.serumCreatinine}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Sodium */}
          <div className="flex flex-col">
            <label htmlFor="sodium" className="mb-2 font-bold">
              Sodium (mEq/L) - Integer (e.g., 135)
            </label>
            <input
              type="number"
              id="sodium"
              name="sodium"
              placeholder="Enter Sodium"
              value={formData.sodium}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Potassium */}
          <div className="flex flex-col">
            <label htmlFor="potassium" className="mb-2 font-bold">
              Potassium (mEq/L) - Float (e.g., 4.2)
            </label>
            <input
              type="number"
              id="potassium"
              name="potassium"
              placeholder="Enter Potassium"
              value={formData.potassium}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Hemoglobin */}
          <div className="flex flex-col">
            <label htmlFor="hemoglobin" className="mb-2 font-bold">
              Hemoglobin (gms) - Float (e.g., 15.2)
            </label>
            <input
              type="number"
              id="hemoglobin"
              name="hemoglobin"
              placeholder="Enter Hemoglobin"
              value={formData.hemoglobin}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Packed Cell Volume */}
          <div className="flex flex-col">
            <label htmlFor="packedCellVolume" className="mb-2 font-bold">
              Packed Cell Volume - Float (e.g., 44)
            </label>
            <input
              type="number"
              id="packedCellVolume"
              name="packedCellVolume"
              placeholder="Enter Packed Cell Volume"
              value={formData.packedCellVolume}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* White Blood Cells */}
          <div className="flex flex-col">
            <label htmlFor="whiteBloodCells" className="mb-2 font-bold">
              White Blood Cells (cells/cmm) - Integer (e.g., 8000)
            </label>
            <input
              type="number"
              id="whiteBloodCells"
              name="whiteBloodCells"
              placeholder="Enter White Blood Cells"
              value={formData.whiteBloodCells}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Red Blood Cells */}
          <div className="flex flex-col">
            <label htmlFor="redBloodCells" className="mb-2 font-bold">
              Red Blood Cells (millions/cmm) - Float (e.g., 5.2)
            </label>
            <input
              type="number"
              id="redBloodCells"
              name="redBloodCells"
              placeholder="Enter Red Blood Cells"
              value={formData.redBloodCells}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Red Blood Cells: normal */}
          <div className="flex flex-col">
            <label htmlFor="redBloodCellsNormal" className="mb-2 font-bold">
              Red Blood Cells: normal
            </label>
            <select
              id="redBloodCellsNormal"
              name="redBloodCellsNormal"
              value={formData.redBloodCellsNormal}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Pus Cells: normal */}
          <div className="flex flex-col">
            <label htmlFor="pusCellsNormal" className="mb-2 font-bold">
              Pus Cells: normal
            </label>
            <select
              id="pusCellsNormal"
              name="pusCellsNormal"
              value={formData.pusCellsNormal}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Pus Cell Clumps */}
          <div className="flex flex-col">
            <label htmlFor="pusCellClumps" className="mb-2 font-bold">
              Pus Cell Clumps: present
            </label>
            <select
              id="pusCellClumps"
              name="pusCellClumps"
              value={formData.pusCellClumps}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Present</option>
              <option value="0">Not Present</option>
            </select>
          </div>
          {/* Bacteria */}
          <div className="flex flex-col">
            <label htmlFor="bacteria" className="mb-2 font-bold">
              Bacteria: present
            </label>
            <select
              id="bacteria"
              name="bacteria"
              value={formData.bacteria}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Present</option>
              <option value="0">Not Present</option>
            </select>
          </div>
          {/* Hypertension */}
          <div className="flex flex-col">
            <label htmlFor="hypertension" className="mb-2 font-bold">
              Hypertension: yes
            </label>
            <select
              id="hypertension"
              name="hypertension"
              value={formData.hypertension}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Diabetes Mellitus */}
          <div className="flex flex-col">
            <label htmlFor="diabetesMellitus" className="mb-2 font-bold">
              Diabetes Mellitus: yes
            </label>
            <select
              id="diabetesMellitus"
              name="diabetesMellitus"
              value={formData.diabetesMellitus}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Coronary Artery Disease */}
          <div className="flex flex-col">
            <label htmlFor="coronaryArteryDisease" className="mb-2 font-bold">
              Coronary Artery Disease: yes
            </label>
            <select
              id="coronaryArteryDisease"
              name="coronaryArteryDisease"
              value={formData.coronaryArteryDisease}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Appetite */}
          <div className="flex flex-col">
            <label htmlFor="appetite" className="mb-2 font-bold">
              Appetite: poor
            </label>
            <select
              id="appetite"
              name="appetite"
              value={formData.appetite}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Poor</option>
              <option value="0">Good</option>
            </select>
          </div>
          {/* Pedal Edema */}
          <div className="flex flex-col">
            <label htmlFor="pedalEdema" className="mb-2 font-bold">
              Pedal Edema: yes
            </label>
            <select
              id="pedalEdema"
              name="pedalEdema"
              value={formData.pedalEdema}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          {/* Anemia */}
          <div className="flex flex-col">
            <label htmlFor="anemia" className="mb-2 font-bold">
              Anemia: yes
            </label>
            <select
              id="anemia"
              name="anemia"
              value={formData.anemia}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
         
        </div>
        <div className='flex justify-center '>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 " onClick={handleSubmit}>Submit</button>
          {prediction && <p>Prediction: {prediction}</p>}
        </div>
      </form>
    </div>
  );
};
export default MLKidneyPredictor;