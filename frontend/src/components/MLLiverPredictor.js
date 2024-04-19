import React, { useState } from "react";
import axios from "axios";

function MLLiverPredictor() {
  const [formData, setFormData] = useState({
    Age: '',
    gender: '',
    tb: '',
    db: '',
    alkphos: '',
    sgpt: '',
    sgot: '',
    tp: '',
    alb: '',
    agRatio: '',
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
        const response = await axios.post("http://localhost:5000/liver", formData);
      setPrediction(response.data.prediction[0]);
      console.log(response.data.prediction[0]);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Liver Disease detection data form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">

          {/* Age */}
          <div className="flex flex-col">
            <label htmlFor="Age" className="mb-2 font-bold">
              Age
            </label>
            <input
              type="number"
              id="Age"
              name="Age"
              placeholder="Enter Age"
              value={formData.Age}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label htmlFor="gender" className="mb-2 font-bold">
              Gender - 0 for Female, 1 for Male
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            >
              <option value="">Select...</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>
          </div>

          {/* Total Bilirubin (tb) */}
          <div className="flex flex-col">
            <label htmlFor="tb" className="mb-2 font-bold">
              Total Bilirubin (tb)
            </label>
            <input
              type="number"
              id="tb"
              name="tb"
              placeholder="Enter tb"
              value={formData.tb}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Direct Bilirubin (db) */}
          <div className="flex flex-col">
            <label htmlFor="db" className="mb-2 font-bold">
              Direct Bilirubin (db)
            </label>
            <input
              type="number"
              id="db"
              name="db"
              placeholder="Enter db"
              value={formData.db}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Alkaline Phosphatase (alkphos) */}
          <div className="flex flex-col">
            <label htmlFor="alkphos" className="mb-2 font-bold">
              Alkaline Phosphatase (alkphos)
            </label>
            <input
              type="number"
              id="alkphos"
              name="alkphos"
              placeholder="Enter alkphos"
              value={formData.alkphos}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* SGPT (sgpt) */}
          <div className="flex flex-col">
            <label htmlFor="sgpt" className="mb-2 font-bold">
              SGPT (sgpt)
            </label>
            <input
              type="number"
              id="sgpt"
              name="sgpt"
              placeholder="Enter sgpt"
              value={formData.sgpt}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* SGOT (sgot) */}
          <div className="flex flex-col">
            <label htmlFor="sgot" className="mb-2 font-bold">
              SGOT (sgot)
            </label>
            <input
              type="number"
              id="sgot"
              name="sgot"
              placeholder="Enter sgot"
              value={formData.sgot}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Total Proteins (tp) */}
          <div className="flex flex-col">
            <label htmlFor="tp" className="mb-2 font-bold">
              Total Proteins (tp)
            </label>
            <input
              type="number"
              id="tp"
              name="tp"
              placeholder="Enter tp"
              value={formData.tp}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* Albumin (alb) */}
          <div className="flex flex-col">
            <label htmlFor="alb" className="mb-2 font-bold">
              Albumin (alb)
            </label>
            <input
              type="number"
              id="alb"
              name="alb"
              placeholder="Enter alb"
              value={formData.alb}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>

          {/* A/G Ratio */}
          <div className="flex flex-col">
            <label htmlFor="agRatio" className="mb-2 font-bold">
              A/G Ratio
            </label>
            <input
              type="number"
              id="agRatio"
              name="agRatio"
              placeholder="Enter agRatio"
              value={formData.agRatio}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
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

export default MLLiverPredictor;