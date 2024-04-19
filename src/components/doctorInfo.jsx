// import React from 'react';

// const DoctorInfo = ({ data }) => {
//   const {
//     name,
//     details,
//     hospital_name: hospital, 
//     branch,
//     speciality,
//     contact_number: contact,
//     hospital_url: hospitalUrl,
//     photo_url,
//   } = data;

//   return (
//     <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
//       <div className="flex items-center space-x-4">
//         <img className="w-20 h-20 rounded-full object-cover" src={photo_url} alt="Doctor" />
//         <div className="text-xl font-bold">{name}</div>
//       </div>
//       <div className="text-gray-600 mt-2">{details}</div>
//       <div className="mt-4 flex flex-col space-y-2">
//         <div>
//           <span className="font-bold">Hospital:</span> {hospital}
//         </div>
//         <div>
//           <span className="font-bold">Branch:</span> {branch}
//         </div>
//         <div>
//           <span className="font-bold">Speciality:</span> {speciality}
//         </div>
//         <div>
//           <span className="font-bold">Contact:</span> {contact}
//         </div>
//         <div>
//           <span className="font-bold">Hospital Url:</span>{' '}
//           <a href={hospitalUrl}>
//             {hospitalUrl}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorInfo;
import React from 'react';

const DoctorInfo = ({ data }) => {
  const {
    name,
    details,
    hospital_name: hospital,
    branch,
    speciality,
    contact_number: contact,
    hospital_url: hospitalUrl,
    photo_url,
  } = data;

  return (
    <div className=' w-150 rounder-xl p-5'>
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-4 b">
      <div className="flex items-center space-x-4">
        <img className="w-25 h-20 rounded-full object-cover" src={photo_url} alt="Doctor" />
        <div className="text-xl font-bold">{name}</div>
      </div>
      <div className="text-gray-600">{details}</div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-bold">Hospital:</span>
          <span className="font-normal">{hospital}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold">Branch:</span>
          <span className="font-normal">{branch}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold">Speciality:</span>
          <span className="font-normal">{speciality}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold">Contact:</span>
          <span className="font-normal">{contact}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-bold">Hospital Url:</span>
          <a href={hospitalUrl} target="_blank" rel="noopener noreferrer">
            {hospitalUrl}
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default DoctorInfo;
