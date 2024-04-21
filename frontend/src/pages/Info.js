import React from 'react'

const Info = () => {
  return (
    <div>
      <h1 className='text-4xl text-blue-950 text-center p-5'>Disease Detection</h1>
      <div className='p-10'>
        <h2 className='text-3xl text-center p-4'>DIABETES</h2>
        <div className=' flex items-center justify-center'>
        <img className='h-100 w-80 ' src="http://aditidiabetes.com/wp-content/uploads/2018/03/diabetes-type-1-diabetes-vs-type-2-diabetes_52fdbc414cd34_w1500-1.jpg" />
        </div>
        <div className='flex items-center justify-center'>
        <div className='p-10'>
        <h3>Here are some common symptoms of diabetes:</h3>
        <li>Increased thirst</li>
        <li>Frequent urination</li>
        <li>Fatigue</li>
        <li>Blurred vision</li>
        <li>Slow healing sores</li>
        <li>Unexplained weight loss</li>
        </div>
        </div>
        <h2 className='text-center'>For more information, visit: <a  href='https://www.who.int/health-topics/diabetes#tab=tab_1' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.who.int/health-topics/diabetes#tab=tab_1</a></h2>
      </div>

      <div className='p-10'>
        <h2 className='text-3xl text-center p-4'>HEART </h2>
        <div className=' flex items-center justify-center'>
        <img className='h-100 w-80 ' src="https://www.udmi.net/wp-content/uploads/2020/02/UDMI_Cardiovascular-Disease.png" />
        </div>
        <div className='flex items-center justify-center'>
        <div className='p-10'>
        <h3>Here are some common symptoms of heart diseases:</h3>
        <li>Chest pain or discomfort</li>
        <li>Shortness of breath</li>
        <li>Palpitations (irregular heartbeats)</li>
        <li>Swelling in legs, ankles, or feet</li>
        <li>Fatigue</li>
        <li>Dizziness or fainting</li>
        </div>
        </div>
        <h2 className='text-center'>For more information, visit: <a  href='https://www.who.int/health-topics/cardiovascular-diseases#tab=tab_1' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.who.int/health-topics/cardiovascular-diseases#tab=tab_1</a></h2>
      </div>

      <div className='p-10'>
        <h2 className='text-3xl text-center p-4'>PARKINSONS </h2>
        <div className=' flex items-center justify-center'>
        <img className='h-100 w-80 ' src="https://hohmanrehab.com/wp-content/uploads/2020/11/Parkinson%E2%80%98s-Disease-scaled.jpg" />
        </div>
        <div className='flex items-center justify-center'>
        <div className='p-10'>
        <h3>Here are some common symptoms of parkinsons diseases:</h3>
        <li>Tremors (shaking)</li>
        <li>Bradykinesia (slowness of movement)</li>
        <li>Muscle stiffness</li>
        <li>Impaired posture and balance</li>
        <li>Speech changes</li>
        <li>Writing changes (smaller handwriting)</li>
        </div>
        </div>
        <h2 className='text-center'>For more information, visit: <a  href='https://www.who.int/news-room/fact-sheets/detail/parkinson-disease#:~:text=Parkinson%20disease%20(PD)%20is%20a,muscle%20contractions%20and%20difficulty%20speaking' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.who.int/news-room/fact-sheets/detail/parkinson-disease#:~:text=Parkinson%20disease%20(PD)%20is%20a,muscle%20contractions%20and%20difficulty%20speaking</a></h2>
      </div>

      <div className='p-10'>
        <h2 className='text-3xl text-center p-4'>LIVER DISEASES</h2>
        <div className='flex items-center justify-center'>
            <img className='h-100 w-80' src="https://www.mcisaachealthsystems.com/wp-content/uploads/2020/01/Fatty-Liver-Disease-1.jpg" alt="Liver Diseases" />
        </div>
        <div className='flex items-center justify-center'>
            <div className='p-10'>
                <h3>Here are some common symptoms of liver diseases:</h3>
                    <li>Yellowing of the skin and eyes (jaundice)</li>
                    <li>Abdominal pain and swelling</li>
                    <li>Swelling in the legs and ankles</li>
                    <li>Itchy skin</li>
                    <li>Dark urine color</li>
                    <li>Pale stool color</li>
                    <li>Chronic fatigue</li>
                    <li>Nausea or vomiting</li>
            </div>
        </div>
        <h2 className='text-center'>For more information, visit: <a href='https://www.mayoclinic.org/diseases-conditions/liver-problems/symptoms-causes/syc-20374502' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.mayoclinic.org/diseases-conditions/liver-problems/symptoms-causes/syc-20374502</a></h2>
      </div>

      <div className='p-10'>
          <h2 className='text-3xl text-center p-4'>BREAST CANCER</h2>
          <div className='flex items-center justify-center'>
              <img className='h-100 w-80' src="https://2.bp.blogspot.com/-esJ35F-3xww/WmSRpPtEldI/AAAAAAAAAK0/gbLdc1Wm4nc-4kTJ-Ggu8b9lYRYBtFOVwCLcBGAs/s1600/1111.png" alt="Breast Cancer" />
          </div>
          <div className='flex items-center justify-center'>
              <div className='p-10'>
                  <h3>Here are some common symptoms of breast cancer:</h3>
                      <li>A lump or thickening in the breast or underarm area</li>
                      <li>Change in breast size or shape</li>
                      <li>Unexplained swelling or shrinkage of the breast</li>
                      <li>Changes to the skin over the breast, such as dimpling</li>
                      <li>A nipple that turns inward (inverted)</li>
                      <li>Redness or pitting of the breast skin</li>
                      <li>Scaly or swollen skin around the nipple</li>
                      <li>Nipple discharge (other than breast milk)</li>
              </div>
          </div>
          <h2 className='text-center'>For more information, visit: <a href='https://www.cancer.gov/types/breast' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.cancer.gov/types/breast</a></h2>
        </div>

        <div className='p-10'>
          <h2 className='text-3xl text-center p-4'>CHRONIC KIDNEY DISEASE</h2>
          <div className='flex items-center justify-center'>
              <img className='h-100 w-80' src="https://drvinantbhargava.weebly.com/uploads/1/1/7/0/117092865/kidney-diseases_orig.jpg" alt="Chronic Kidney Disease" />
          </div>
          <div className='flex items-center justify-center'>
              <div className='p-10'>
                  <h3>Here are some common symptoms of chronic kidney disease:</h3>
                  <ul>
                      <li>Feeling tired or fatigued</li>
                      <li>Swelling of feet and ankles</li>
                      <li>Puffiness around eyes, especially in the morning</li>
                      <li>Frequent urination, especially at night</li>
                      <li>Changes in urine color or foamy urine</li>
                      <li>Blood in urine</li>
                      <li>Increased or decreased frequency of urination</li>
                      <li>High blood pressure</li>
                      <li>Itching and dry skin</li>
                  </ul>
              </div>
          </div>
          <h2 className='text-center'>For more information, visit: <a href='https://www.kidney.org/' className="text-blue-500 hover:text-blue-700 ml-2 underline">https://www.kidney.org/</a></h2>
        </div>

     </div>
  )
}

export default Info
