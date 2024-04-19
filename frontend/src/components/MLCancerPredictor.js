import React, { useState } from "react";
import axios from "axios";

function MLCancerPredictor() {
  const [formData, setFormData] = useState({
    radius_mean: '',
    texture_mean: '',
    perimeter_mean: '',
    area_mean: '',
    smoothness_mean: '',
    compactness_mean: '',
    concavity_mean: '',
    concave_points_mean: '',
    symmetry_mean: '',
    fractal_dimension_mean: '',
    radius_se: '',
    texture_se: '',
    perimeter_se: '',
    area_se: '',
    smoothness_se: '',
    compactness_se: '',
    concavity_se: '',
    concave_points_se: '',
    symmetry_se: '',
    fractal_dimension_se: '',
    radius_worst: '',
    texture_worst: '',
    perimeter_worst: '',
    area_worst: '',
    smoothness_worst: '',
    compactness_worst: '',
    concavity_worst: '',
    concave_points_worst: '',
    symmetry_worst: '',
    fractal_dimension_worst: ''
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
      const response = await axios.post("http://localhost:5000/breast_cancer", formData);
      setPrediction(response.data.prediction[0]);
      console.log(response.data.prediction[0]);
    } catch (error) {
      console.error("Error predicting:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Breast Cancer Disease detection data form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          {/* radius_mean */}
          <div className="flex flex-col">
            <label htmlFor="radius_mean" className="mb-2 font-bold">
              Radius Mean
            </label>
            <input
              type="number"
              id="radius_mean"
              name="radius_mean"
              placeholder="Enter Radius Mean"
              value={formData.radius_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* texture_mean */}
          <div className="flex flex-col">
            <label htmlFor="texture_mean" className="mb-2 font-bold">
              Texture Mean
            </label>
            <input
              type="number"
              id="texture_mean"
              name="texture_mean"
              placeholder="Enter Texture Mean"
              value={formData.texture_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* perimeter_mean */}
          <div className="flex flex-col">
            <label htmlFor="perimeter_mean" className="mb-2 font-bold">
              Perimeter Mean
            </label>
            <input
              type="number"
              id="perimeter_mean"
              name="perimeter_mean"
              placeholder="Enter Perimeter Mean"
              value={formData.perimeter_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* area_mean */}
          <div className="flex flex-col">
            <label htmlFor="area_mean" className="mb-2 font-bold">
              Area Mean
            </label>
            <input
              type="number"
              id="area_mean"
              name="area_mean"
              placeholder="Enter Area Mean"
              value={formData.area_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* smoothness_mean */}
          <div className="flex flex-col">
            <label htmlFor="smoothness_mean" className="mb-2 font-bold">
              Smoothness Mean
            </label>
            <input
              type="number"
              id="smoothness_mean"
              name="smoothness_mean"
              placeholder="Enter Smoothness Mean"
              value={formData.smoothness_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* compactness_mean */}
          <div className="flex flex-col">
            <label htmlFor="compactness_mean" className="mb-2 font-bold">
              Compactness Mean
            </label>
            <input
              type="number"
              id="compactness_mean"
              name="compactness_mean"
              placeholder="Enter Compactness Mean"
              value={formData.compactness_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concavity_mean */}
          <div className="flex flex-col">
            <label htmlFor="concavity_mean" className="mb-2 font-bold">
              Concavity Mean
            </label>
            <input
              type="number"
              id="concavity_mean"
              name="concavity_mean"
              placeholder="Enter Concavity Mean"
              value={formData.concavity_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concave_points_mean */}
          <div className="flex flex-col">
            <label htmlFor="concave_points_mean" className="mb-2 font-bold">
              Concave Points Mean
            </label>
            <input
              type="number"
              id="concave_points_mean"
              name="concave_points_mean"
              placeholder="Enter Concave Points Mean"
              value={formData.concave_points_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* symmetry_mean */}
          <div className="flex flex-col">
            <label htmlFor="symmetry_mean" className="mb-2 font-bold">
              Symmetry Mean
            </label>
            <input
              type="number"
              id="symmetry_mean"
              name="symmetry_mean"
              placeholder="Enter Symmetry Mean"
              value={formData.symmetry_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* fractal_dimension_mean */}
          <div className="flex flex-col">
            <label htmlFor="fractal_dimension_mean" className="mb-2 font-bold">
              Fractal Dimension Mean
            </label>
            <input
              type="number"
              id="fractal_dimension_mean"
              name="fractal_dimension_mean"
              placeholder="Enter Fractal Dimension Mean"
              value={formData.fractal_dimension_mean}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* radius_se */}
          <div className="flex flex-col">
            <label htmlFor="radius_se" className="mb-2 font-bold">
              Radius SE
            </label>
            <input
              type="number"
              id="radius_se"
              name="radius_se"
              placeholder="Enter Radius SE"
              value={formData.radius_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* texture_se */}
          <div className="flex flex-col">
            <label htmlFor="texture_se" className="mb-2 font-bold">
              Texture SE
            </label>
            <input
              type="number"
              id="texture_se"
              name="texture_se"
              placeholder="Enter Texture SE"
              value={formData.texture_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* perimeter_se */}
          <div className="flex flex-col">
            <label htmlFor="perimeter_se" className="mb-2 font-bold">
              Perimeter SE
            </label>
            <input
              type="number"
              id="perimeter_se"
              name="perimeter_se"
              placeholder="Enter Perimeter SE"
              value={formData.perimeter_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* area_se */}
          <div className="flex flex-col">
            <label htmlFor="area_se" className="mb-2 font-bold">
              Area SE
            </label>
            <input
              type="number"
              id="area_se"
              name="area_se"
              placeholder="Enter Area SE"
              value={formData.area_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* smoothness_se */}
          <div className="flex flex-col">
            <label htmlFor="smoothness_se" className="mb-2 font-bold">
              Smoothness SE
            </label>
            <input
              type="number"
              id="smoothness_se"
              name="smoothness_se"
              placeholder="Enter Smoothness SE"
              value={formData.smoothness_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* compactness_se */}
          <div className="flex flex-col">
            <label htmlFor="compactness_se" className="mb-2 font-bold">
              Compactness SE
            </label>
            <input
              type="number"
              id="compactness_se"
              name="compactness_se"
              placeholder="Enter Compactness SE"
              value={formData.compactness_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concavity_se */}
          <div className="flex flex-col">
            <label htmlFor="concavity_se" className="mb-2 font-bold">
              Concavity SE
            </label>
            <input
              type="number"
              id="concavity_se"
              name="concavity_se"
              placeholder="Enter Concavity SE"
              value={formData.concavity_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concave_points_se */}
          <div className="flex flex-col">
            <label htmlFor="concave_points_se" className="mb-2 font-bold">
              Concave Points SE
            </label>
            <input
              type="number"
              id="concave_points_se"
              name="concave_points_se"
              placeholder="Enter Concave Points SE"
              value={formData.concave_points_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* symmetry_se */}
          <div className="flex flex-col">
            <label htmlFor="symmetry_se" className="mb-2 font-bold">
              Symmetry SE
            </label>
            <input
              type="number"
              id="symmetry_se"
              name="symmetry_se"
              placeholder="Enter Symmetry SE"
              value={formData.symmetry_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* fractal_dimension_se */}
          <div className="flex flex-col">
            <label htmlFor="fractal_dimension_se" className="mb-2 font-bold">
              Fractal Dimension SE
            </label>
            <input
              type="number"
              id="fractal_dimension_se"
              name="fractal_dimension_se"
              placeholder="Enter Fractal Dimension SE"
              value={formData.fractal_dimension_se}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* radius_worst */}
          <div className="flex flex-col">
            <label htmlFor="radius_worst" className="mb-2 font-bold">
              Radius Worst
            </label>
            <input
              type="number"
              id="radius_worst"
              name="radius_worst"
              placeholder="Enter Radius Worst"
              value={formData.radius_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* texture_worst */}
          <div className="flex flex-col">
            <label htmlFor="texture_worst" className="mb-2 font-bold">
              Texture Worst
            </label>
            <input
              type="number"
              id="texture_worst"
              name="texture_worst"
              placeholder="Enter Texture Worst"
              value={formData.texture_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* perimeter_worst */}
          <div className="flex flex-col">
            <label htmlFor="perimeter_worst" className="mb-2 font-bold">
              Perimeter Worst
            </label>
            <input
              type="number"
              id="perimeter_worst"
              name="perimeter_worst"
              placeholder="Enter Perimeter Worst"
              value={formData.perimeter_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* area_worst */}
          <div className="flex flex-col">
            <label htmlFor="area_worst" className="mb-2 font-bold">
              Area Worst
            </label>
            <input
              type="number"
              id="area_worst"
              name="area_worst"
              placeholder="Enter Area Worst"
              value={formData.area_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* smoothness_worst */}
          <div className="flex flex-col">
            <label htmlFor="smoothness_worst" className="mb-2 font-bold">
              Smoothness Worst
            </label>
            <input
              type="number"
              id="smoothness_worst"
              name="smoothness_worst"
              placeholder="Enter Smoothness Worst"
              value={formData.smoothness_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* compactness_worst */}
          <div className="flex flex-col">
            <label htmlFor="compactness_worst" className="mb-2 font-bold">
              Compactness Worst
            </label>
            <input
              type="number"
              id="compactness_worst"
              name="compactness_worst"
              placeholder="Enter Compactness Worst"
              value={formData.compactness_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concavity_worst */}
          <div className="flex flex-col">
            <label htmlFor="concavity_worst" className="mb-2 font-bold">
              Concavity Worst
            </label>
            <input
              type="number"
              id="concavity_worst"
              name="concavity_worst"
              placeholder="Enter Concavity Worst"
              value={formData.concavity_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* concave_points_worst */}
          <div className="flex flex-col">
            <label htmlFor="concave_points_worst" className="mb-2 font-bold">
              Concave Points Worst
            </label>
            <input
              type="number"
              id="concave_points_worst"
              name="concave_points_worst"
              placeholder="Enter Concave Points Worst"
              value={formData.concave_points_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* symmetry_worst */}
          <div className="flex flex-col">
            <label htmlFor="symmetry_worst" className="mb-2 font-bold">
              Symmetry Worst
            </label>
            <input
              type="number"
              id="symmetry_worst"
              name="symmetry_worst"
              placeholder="Enter Symmetry Worst"
              value={formData.symmetry_worst}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* fractal_dimension_worst */}
          <div className="flex flex-col">
            <label htmlFor="fractal_dimension_worst" className="mb-2 font-bold">
              Fractal Dimension Worst
            </label>
            <input
              type="number"
              id="fractal_dimension_worst"
              name="fractal_dimension_worst"
              placeholder="Enter Fractal Dimension Worst"
              value={formData.fractal_dimension_worst}
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

export default MLCancerPredictor;