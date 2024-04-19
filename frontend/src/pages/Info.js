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
     </div>
  )
}

export default Info
