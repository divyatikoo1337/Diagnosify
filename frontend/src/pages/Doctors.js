import React from 'react'
import DoctorInfo from '../components/doctorInfo'

const Doctors = () => {

    const diabetes_doctor_data = [
    {
        "name": "Dr. Rajesh Gupta",
        "details": "16 years of experience in Type 1 Diabetes.",
        "hospital_name": "Apollo Hospitals",
        "branch": "Diabetes",
        "speciality": "Type 1 Diabetes",
        "contact_number": "+91-9876543210",
        "hospital_url": "https://www.apollohospitals.com/",
        "photo_url": "https://thumbs.dreamstime.com/b/indian-doctor-25433603.jpg"
    },
    {
        "name": "Dr. Priya Sharma",
        "details": "14 years of experience in Gestational Diabetes.",
        "hospital_name": "Fortis Hospital",
        "branch": "Diabetes",
        "speciality": "Gestational Diabetes",
        "contact_number": "+91-9988776655",
        "hospital_url": "https://www.fortishealthcare.com/",
        "photo_url": "https://thumbs.dreamstime.com/z/indian-doctor-woman-23221105.jpg"
    },
    {
        "name": "Dr. Anil Kumar",
        "details": "18 years of experience in Type 2 Diabetes.",
        "hospital_name": "Max Healthcare",
        "branch": "Diabetes",
        "speciality": "Type 2 Diabetes",
        "contact_number": "+91-9876543211",
        "hospital_url": "https://www.maxhealthcare.in/",
        "photo_url": "https://www.pngitem.com/pimgs/m/194-1943739_indian-doctor-hd-png-download.png"
    },
    {
        "name": "Dr. Sunita Reddy",
        "details": "12 years of experience in Diabetic Neuropathy.",
        "hospital_name": "Medanta - The Medicity",
        "branch": "Diabetes",
        "speciality": "Diabetic Neuropathy",
        "contact_number": "+91-9876543212",
        "hospital_url": "https://www.medanta.org/",
        "photo_url": "https://c8.alamy.com/comp/EM02FC/indian-female-doctor-EM02FC.jpg"
    },
    {
        "name": "Dr. Sanjay Verma",
        "details": "20 years of experience in Diabetic Retinopathy.",
        "hospital_name": "AIIMS",
        "branch": "Diabetes",
        "speciality": "Diabetic Retinopathy",
        "contact_number": "+91-9876543213",
        "hospital_url": "https://www.aiims.edu/",
        "photo_url": "https://thumbs.dreamstime.com/b/indian-doctor-25433603.jpg"
    }
]

const cardiology_doctor_data = [
    {
        "name": "Dr. Ramesh Gupta",
        "details": "18 years of experience in coronary artery disease.",
        "hospital_name": "Apollo Hospitals",
        "branch": "Cardiology",
        "speciality": "Coronary Artery Disease",
        "contact_number": "987-654-3211",
        "hospital_url": "https://www.apollohospitals.com/",
        "photo_url": "https://www.pngitem.com/pimgs/m/194-1943739_indian-doctor-hd-png-download.png"
    },
    {
        "name": "Dr. Priya Sharma",
        "details": "15 years of experience in arrhythmias.",
        "hospital_name": "Fortis Hospital",
        "branch": "Cardiology",
        "speciality": "Arrhythmias",
        "contact_number": "987-654-3212",
        "hospital_url": "https://www.fortishealthcare.com/",
        "photo_url": "https://thumbs.dreamstime.com/z/indian-doctor-woman-23221105.jpg"
    },
    {
        "name": "Dr. Sanjay Patel",
        "details": "20 years of experience in heart failure.",
        "hospital_name": "Medanta - The Medicity",
        "branch": "Cardiology",
        "speciality": "Heart Failure",
        "contact_number": "987-654-3213",
        "hospital_url": "https://www.medanta.org/",
        "photo_url": "https://thumbs.dreamstime.com/b/indian-doctor-25433603.jpg"
    },
    {
        "name": "Dr. Anjali Reddy",
        "details": "12 years of experience in congenital heart defects.",
        "hospital_name": "Narayana Health",
        "branch": "Cardiology",
        "speciality": "Congenital Heart Defects",
        "contact_number": "987-654-3214",
        "hospital_url": "https://www.narayanahealth.org/",
        "photo_url": "https://c8.alamy.com/comp/EM02FC/indian-female-doctor-EM02FC.jpg"
    },
    {
        "name": "Dr. Mohan Verma",
        "details": "17 years of experience in valvular heart disease.",
        "hospital_name": "Max Healthcare",
        "branch": "Cardiology",
        "speciality": "Valvular Heart Disease",
        "contact_number": "987-654-3215",
        "hospital_url": "https://www.maxhealthcare.in/",
        "photo_url": "https://www.pngitem.com/pimgs/m/194-1943739_indian-doctor-hd-png-download.png"
    }
]

const parkinsons_doctor_data = [
        {
            "name": "Dr. Anika Patel",
            "details": "16 years of experience in Parkinson's tremor management.",
            "hospital_name": "Mumbai Parkinson's Clinic",
            "branch": "Parkinson's",
            "speciality": "Tremor Management",
            "contact_number": "91-1234567890",
            "hospital_url": "https://www.uhhospitals.org/-/media/UH/images/services/cardiology-and-vascular/cardiology/doctors/doctor-pictures/john-m-smith-md-uh-cardiologist.jpg",
            "photo_url": "https://thumbs.dreamstime.com/z/indian-doctor-woman-23221105.jpg"
        },
        {
            "name": "Dr. Rajesh Kumar",
            "details": "14 years of experience in Parkinson's gait disorders.",
            "hospital_name": "Delhi Neurology Center",
            "branch": "Parkinson's",
            "speciality": "Gait Disorders",
            "contact_number": "91-9876543210",
            "hospital_url": "https://www.uhhospitals.org/-/media/UH/images/services/cardiology-and-vascular/cardiology/doctors/doctor-pictures/john-m-smith-md-uh-cardiologist.jpg",
            "photo_url": "https://thumbs.dreamstime.com/b/indian-doctor-25433603.jpg"
        },
        {
            "name": "Dr. Priya Sharma",
            "details": "12 years of experience in Parkinson's speech disorders.",
            "hospital_name": "Chennai Speech Therapy Hospital",
            "branch": "Parkinson's",
            "speciality": "Speech Disorders",
            "contact_number": "91-8765432109",
            "hospital_url": "https://www.uhhospitals.org/-/media/UH/images/services/cardiology-and-vascular/cardiology/doctors/doctor-pictures/john-m-smith-md-uh-cardiologist.jpg",
            "photo_url": "https://c8.alamy.com/comp/EM02FC/indian-female-doctor-EM02FC.jpg"
        },
        {
            "name": "Dr. Vikram Singh",
            "details": "18 years of experience in Parkinson's cognitive impairment.",
            "hospital_name": "Bangalore Brain Health Center",
            "branch": "Parkinson's",
            "speciality": "Cognitive Impairment",
            "contact_number": "91-7654321098",
            "hospital_url": "https://www.uhhospitals.org/-/media/UH/images/services/cardiology-and-vascular/cardiology/doctors/doctor-pictures/john-m-smith-md-uh-cardiologist.jpg",
            "photo_url": "https://thumbs.dreamstime.com/b/indian-doctor-25433603.jpg"
        },
        {
            "name": "Dr. Meera Nair",
            "details": "20 years of experience in Parkinson's sleep disorders.",
            "hospital_name": "Hyderabad Sleep Disorders Clinic",
            "branch": "Parkinson's",
            "speciality": "Sleep Disorders",
            "contact_number": "91-6543210987",
            "hospital_url": "https://www.uhhospitals.org/-/media/UH/images/services/cardiology-and-vascular/cardiology/doctors/doctor-pictures/john-m-smith-md-uh-cardiologist.jpg",
            "photo_url": "https://thumbs.dreamstime.com/z/indian-doctor-woman-23221105.jpg"
        }
    ]


  return (
    <div>
      <div>
        <h2 className='text-3xl text-center text-green-800 p-4  text-bold'>Diabetes specialists</h2>
        {diabetes_doctor_data.map((data) => <DoctorInfo data={data} />)}

        <h2 className='text-3xl text-center text-green-800 p-4 text-bold'>Heart specialists</h2>
        {cardiology_doctor_data.map((data) => <DoctorInfo data={data} />)}

        <h2 className='text-3xl text-center text-green-800 p-4 text-bold'>Parkinsons specialists</h2>
        {parkinsons_doctor_data.map((data) => <DoctorInfo data={data} />)}
      </div>
    </div>
  )
}

export default Doctors
