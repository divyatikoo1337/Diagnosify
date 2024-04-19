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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4 text-center p-5">Parkinson's Disease Detection Data Form</h1>
      <h3  className='px-20'>         The input format is explained as follows:  </h3>
      <h3  className='px-20'> - MDVP Fo(Hz): Mean frequency (in Hz) of the fundamental frequency measured from the acoustic signal.</h3>
      <h3  className='px-20'>  - MDVP Fhi(Hz): Maximum frequency (in Hz) of the fundamental frequency measured from the acoustic signal.</h3>
      <h3  className='px-20'> - MDVP Flo(Hz): Minimum frequency (in Hz) of the fundamental frequency measured from the acoustic signal.</h3>
      <h3  className='px-20'>  - MDVP Jitter(%): Measures variation in fundamental frequency as a percentage.</h3>
      <h3  className='px-20'>  - MDVP Jitter(Abs): Absolute measure of variation in fundamental frequency.</h3>
      <h3  className='px-20'> - MDVP RAP: Relative average perturbation, another measure of variation in fundamental frequency.</h3>
      <h3  className='px-20'> - MDVP PPQ: Five-point period perturbation quotient.</h3>
      <h3  className='px-20'> - Jitter DDP: A measure derived from Jitter RAP and PPQ.</h3>
      <h3  className='px-20'>  - MDVP Shimmer: Measures variation in amplitude of the acoustic signal.</h3>
      <h3  className='px-20'> - MDVP Shimmer(dB): Shimmer in decibels.</h3>
      <h3  className='px-20'> - Shimmer APQ3, Shimmer APQ5: Measures derived from Shimmer for amplitude perturbation.</h3>
      <h3  className='px-20'>  - MDVP APQ: Another measure related to amplitude perturbation.</h3>
      <h3  className='px-20'> - Shimmer DDA: Another measure derived from Shimmer.</h3>
      <h3  className='px-20'> - NHR(Noise-to-Harmonics Ratio): A measure related to noise in the voice signal.</h3>
      <h3  className='px-20'> - HNR(Harmonic-to-Noise Ratio): A measure related to the clarity of the voice signal.</h3>
      <h3  className='px-20'> - RPDE(Recurrence Period Density Entropy): A measure related to the complexity of the voice signal.</h3>
      <h3  className='px-20'> - DFA(Detrended Fluctuation Analysis): A measure related to the self-similarity of the voice signal.</h3>
      <h3  className='px-20'> - spread1, spread2, D2, PPE: Various nonlinear dynamical complexity measures derived from the voice signal.</h3>


      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          {/* MDVP:Fo(Hz) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpFo" className="mb-2 font-bold">
              MDVP:Fo(Hz)
            </label>
            <input
              type="number"
              id="mdvpFo"
              name="mdvpFo"
              placeholder="Enter MDVP:Fo(Hz)"
              value={formData.mdvpFo}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Fhi(Hz) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpFhi" className="mb-2 font-bold">
              MDVP:Fhi(Hz)
            </label>
            <input
              type="number"
              id="mdvpFhi"
              name="mdvpFhi"
              placeholder="Enter MDVP:Fhi(Hz)"
              value={formData.mdvpFhi}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Flo(Hz) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpFlo" className="mb-2 font-bold">
              MDVP:Flo(Hz)
            </label>
            <input
              type="number"
              id="mdvpFlo"
              name="mdvpFlo"
              placeholder="Enter MDVP:Flo(Hz)"
              value={formData.mdvpFlo}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Jitter(%) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpJitter" className="mb-2 font-bold">
              MDVP:Jitter(%)
            </label>
            <input
              type="number"
              id="mdvpJitter"
              name="mdvpJitter"
              placeholder="Enter MDVP:Jitter(%)"
              value={formData.mdvpJitter}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Jitter(Abs) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpJitterAbs" className="mb-2 font-bold">
              MDVP:Jitter(Abs)
            </label>
            <input
              type="number"
              id="mdvpJitterAbs"
              name="mdvpJitterAbs"
              placeholder="Enter MDVP:Jitter(Abs)"
              value={formData.mdvpJitterAbs}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:RAP */}
          <div className="flex flex-col">
            <label htmlFor="mdvpRAP" className="mb-2 font-bold">
              MDVP:RAP
            </label>
            <input
              type="number"
              id="mdvpRAP"
              name="mdvpRAP"
              placeholder="Enter MDVP:RAP"
              value={formData.mdvpRAP}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:PPQ */}
          <div className="flex flex-col">
            <label htmlFor="mdvpPPQ" className="mb-2 font-bold">
              MDVP:PPQ
            </label>
            <input
              type="number"
              id="mdvpPPQ"
              name="mdvpPPQ"
              placeholder="Enter MDVP:PPQ"
              value={formData.mdvpPPQ}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Jitter:DDP */}
          <div className="flex flex-col">
            <label htmlFor="jitterDDP" className="mb-2 font-bold">
              Jitter:DDP
            </label>
            <input
              type="number"
              id="jitterDDP"
              name="jitterDDP"
              placeholder="Enter Jitter:DDP"
              value={formData.jitterDDP}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Shimmer */}
          <div className="flex flex-col">
            <label htmlFor="mdvpShimmer" className="mb-2 font-bold">
              MDVP:Shimmer
            </label>
            <input
              type="number"
              id="mdvpShimmer"
              name="mdvpShimmer"
              placeholder="Enter MDVP:Shimmer"
              value={formData.mdvpShimmer}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:Shimmer(dB) */}
          <div className="flex flex-col">
            <label htmlFor="mdvpShimmerdB" className="mb-2 font-bold">
              MDVP:Shimmer(dB)
            </label>
            <input
              type="number"
              id="mdvpShimmerdB"
              name="mdvpShimmerdB"
              placeholder="Enter MDVP:Shimmer(dB)"
              value={formData.mdvpShimmerdB}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Shimmer:APQ3 */}
          <div className="flex flex-col">
            <label htmlFor="shimmerAPQ3" className="mb-2 font-bold">
              Shimmer:APQ3
            </label>
            <input
              type="number"
              id="shimmerAPQ3"
              name="shimmerAPQ3"
              placeholder="Enter Shimmer:APQ3"
              value={formData.shimmerAPQ3}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Shimmer:APQ5 */}
          <div className="flex flex-col">
            <label htmlFor="shimmerAPQ5" className="mb-2 font-bold">
              Shimmer:APQ5
            </label>
            <input
              type="number"
              id="shimmerAPQ5"
              name="shimmerAPQ5"
              placeholder="Enter Shimmer:APQ5"
              value={formData.shimmerAPQ5}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* MDVP:APQ */}
          <div className="flex flex-col">
            <label htmlFor="mdvpAPQ" className="mb-2 font-bold">
              MDVP:APQ
            </label>
            <input
              type="number"
              id="mdvpAPQ"
              name="mdvpAPQ"
              placeholder="Enter MDVP:APQ"
              value={formData.mdvpAPQ}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* Shimmer:DDA */}
          <div className="flex flex-col">
            <label htmlFor="shimmerDDA" className="mb-2 font-bold">
              Shimmer:DDA
            </label>
            <input
              type="number"
              id="shimmerDDA"
              name="shimmerDDA"
              placeholder="Enter Shimmer:DDA"
              value={formData.shimmerDDA}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* NHR */}
          <div className="flex flex-col">
            <label htmlFor="nhr" className="mb-2 font-bold">
              NHR
            </label>
            <input
              type="number"
              id="nhr"
              name="nhr"
              placeholder="Enter NHR"
              value={formData.nhr}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* HNR */}
          <div className="flex flex-col">
            <label htmlFor="hnr" className="mb-2 font-bold">
              HNR
            </label>
            <input
              type="number"
              id="hnr"
              name="hnr"
              placeholder="Enter HNR"
              value={formData.hnr}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* RPDE */}
          <div className="flex flex-col">
            <label htmlFor="rpde" className="mb-2 font-bold">
              RPDE
            </label>
            <input
              type="number"
              id="rpde"
              name="rpde"
              placeholder="Enter RPDE"
              value={formData.rpde}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* DFA */}
          <div className="flex flex-col">
            <label htmlFor="dfa" className="mb-2 font-bold">
              DFA
            </label>
            <input
              type="number"
              id="dfa"
              name="dfa"
              placeholder="Enter DFA"
              value={formData.dfa}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* spread1 */}
          <div className="flex flex-col">
            <label htmlFor="spread1" className="mb-2 font-bold">
              spread1
            </label>
            <input
              type="number"
              id="spread1"
              name="spread1"
              placeholder="Enter spread1"
              value={formData.spread1}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* spread2 */}
          <div className="flex flex-col">
            <label htmlFor="spread2" className="mb-2 font-bold">
              spread2
            </label>
            <input
              type="number"
              id="spread2"
              name="spread2"
              placeholder="Enter spread2"
              value={formData.spread2}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* D2 */}
          <div className="flex flex-col">
            <label htmlFor="d2" className="mb-2 font-bold">
              D2
            </label>
            <input
              type="number"
              id="d2"
              name="d2"
              placeholder="Enter D2"
              value={formData.d2}
              onChange={handleChange}
              className="rounded-md border border-gray-400 px-2 py-1"
            />
          </div>
          {/* PPE  */}
          <div className="flex flex-col">
            <label htmlFor="ppe" className="mb-2 font-bold">
              PPE
            </label>
            <input
              type="text"
              id="ppe"
              name="ppe"
              placeholder="Enter PPE"
              value={formData.ppeStatus}
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

export default MLParkinsonsPredictor
