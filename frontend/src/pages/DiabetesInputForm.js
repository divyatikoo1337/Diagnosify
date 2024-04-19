import React, { useState } from 'react';

const DiabetesInputForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: '',
    outcome:'',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData); // You can submit the data to your backend here
    setFormData({
      pregnancies: '',
      glucose: '',
      bloodPressure: '',
      skinThickness: '',
      insulin: '',
      bmi: '',
      diabetesPedigreeFunction: '',
      age: '',
      outcome: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Diabetes Detection Data Form</h1>
      <h4 className='px-20'> The inputs should be of the format:</h4>
      <h4 className='px-20'>- Pregnancies: Number of times the paitient has been pregnent.</h4>
      <h4 className='px-20'>- Glucose: This represents the plasma glucose concentration after 2 hours in an oral glucose tolerance test.</h4>
      <h4 className='px-20'> - BloodPressure: The blood pressure of the patient(mm Hg).</h4>
      <h4 className='px-20'> - SkinThickness: The thickness of the skin of the patient (mm) at the triceps.</h4>
      <h4 className='px-20'>- Insulin: This represents the serum insulin level (mu U/ml).</h4>
      <h4 className='px-20'>- BMI: This represents the Body Mass Index</h4>
      <h4 className='px-20'> - DiabetesPedigreeFunction: This represents a function that scores the likelihood of diabetes based on family history.</h4>
      <h4 className='px-20'>- Age: Represents the age of the patient.</h4>
      <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          {/* Pregnancies */}
          <div className="flex flex-col">
            <label htmlFor="pregnancies" className="mb-2 font-bold">
              Pregnancies 
            </label>
            <input
              type="number"
              id="pregnancies"
              name="pregnancies"
              placeholder="Enter Number of Pregnancies"
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
              placeholder="Enter Glucose Level"
              value={formData.glucose}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Blood Pressure */}
          <div className="flex flex-col">
            <label htmlFor="bloodPressure" className="mb-2 font-bold">
              Blood Pressure(mm hg)
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
              Skin Thickness (mm)
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
              Insulin (mu U/ml)
            </label>
            <input
              type="number"
              id="insulin"
              name="insulin"
              placeholder="Enter Insulin Level"
              value={formData.insulin}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* BMI */}
          <div className="flex flex-col">
            <label htmlFor="bmi" className="mb-2 font-bold">
              BMI (Body Mass Index)
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
              Age
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
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 ">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default DiabetesInputForm;
