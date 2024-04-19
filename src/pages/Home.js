import React from 'react'

const Home = () => {
  return (
    <div className='bg-green-50'>
        <h2 className='text-3xl text-blue-950 text-center p-10'>Your Health, Our Priority</h2>
        <h3 className='text-xl text-wrap px-20  pb-5'>Welcome to our one stop solution to all your problems and doubts. Now you can check your symptoms and compare ait with different diseases and finally check for the disease markers. Browse through our prepared doctor pannel for experienced personel sessions.</h3>
        <h3 className='text-xl text-wrap px-20 pb-5'>Welcome to our Disease Detection Website, where state-of-the-art machine learning methods are combined with medical diagnostics to transform the accuracy and accessibility of healthcare. With the prevalence of diseases rising around the world, early detection is essential to reducing risks and enhancing patient outcomes. We have created an innovative platform that is intended to anticipate and diagnose a variety of health disorders with previously unheard-of precision and efficiency by utilizing the insights from recent research publications.</h3>
        <h3 className='text-xl text-wrap px-20 pb-5'>Our website combines the most recent machine learning algorithms, motivated by the approaches described in the publications that we have cited, to provide users with a complete disease detection solution. Whether it's neurological conditions like Parkinson's disease, cardiovascular ailments, or diabetes, our platform uses data-driven insights to empower both patients and medical professionals.</h3>

        <div className='ps-20 pt-3 pb-10'>
            <h2 className='text-2xl p-2'>Our Services</h2>
            <li>Diabete Detection: Test if you have diabetes or not now!.</li>
            <li>Cardiology: Specialized care for heart diseases and conditions.</li>
            <li>Parkinsons: Treat it with specialised personel help.</li>
            <li>Information: Learn the symptoms and the intricicies of your disease.</li>
        </div>

        <div className='ps-20 pb-10'>
            <h2 className='text-2xl'>Contact Us</h2>
            <ul>Phone: +91-997-456-7890</ul>
        </div>
    </div>
  )
}

export default Home
