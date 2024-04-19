import React from 'react'

const MLParkinsonsPredictor = () => {

    const [formData, setFormData] = useState({
  mdvpFo: '',
  mdvpFhi: '',
  mdvpFlo: '',
  mdvpJitter: '',
  mdvpJitterAbs: '',
  mdvpRAP: '',
  mdvpPPQ: '',
  jitterDDP: '',
  mdvpShimmer: '',
  mdvpShimmerdB: '',
  shimmerAPQ3: '',
  shimmerAPQ5: '',
  mdvpAPQ: '',
  shimmerDDA: '',
  nhr: '',
  hnr: '',
  rpde: '',
  dfa: '',
  spread1: '',
  spread2: '',
  d2: '',
  ppeStatus: '',
  Status: '',
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
    const response = await axios.post("http://localhost:5000/predict", {
      mdvpFo: parseFloat(formData.mdvpFo),
      mdvpFhi: parseFloat(formData.mdvpFhi),
      mdvpFlo: parseFloat(formData.mdvpFlo),
      mdvpJitter: parseFloat(formData.mdvpJitter),
      mdvpJitterAbs: parseFloat(formData.mdvpJitterAbs),
      mdvpRAP: parseFloat(formData.mdvpRAP),
      mdvpPPQ: parseFloat(formData.mdvpPPQ),
      jitterDDP: parseFloat(formData.jitterDDP),
      mdvpShimmer: parseFloat(formData.mdvpShimmer),
      mdvpShimmerdB: parseFloat(formData.mdvpShimmerdB),
      shimmerAPQ3: parseFloat(formData.shimmerAPQ3),
      shimmerAPQ5: parseFloat(formData.shimmerAPQ5),
      mdvpAPQ: parseFloat(formData.mdvpAPQ),
      shimmerDDA: parseFloat(formData.shimmerDDA),
      nhr: parseFloat(formData.nhr),
      hnr: parseFloat(formData.hnr),
      rpde: parseFloat(formData.rpde),
      dfa: parseFloat(formData.dfa),
      spread1: parseFloat(formData.spread1),
      spread2: parseFloat(formData.spread2),
      d2: parseFloat(formData.d2),
      ppeStatus: parseFloat(formData.ppeStatus),
      Status: parseFloat(formData.Status),
    });
    setPrediction(response.data.prediction[0]);
    console.log(response.data.prediction[0]);
  } catch (error) {
    console.error("Error predicting:", error);
  }
};

  return (
    <div>
      
    </div>
  )
}

export default MLParkinsonsPredictor
