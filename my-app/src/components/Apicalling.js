// import axios from 'axios';
// import React, { useState } from 'react';
// // import './Apicalling.css';

// export const Apicalling = () => {
//     const [data, setData] = useState([]);

//     const handleApicalling = async () => {
//         try {
//             const res = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
//             console.log("res=>", res);
//             setData(res.data.data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     return (
//         <div>
//             <h1>Apicalling</h1>
//             <div className='btn btn-success' onClick={handleApicalling}>Click</div>
//             <table>
//                 <thead>
//                     <tr className='col'>
//                         <th className='id'>ID</th>
//                         <th className='id'>Name</th>
//                         <th className='id'>Salary</th>
//                         <th className='id'>Age</th>
//                         <th className='id'>Image</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <div className='colm'>
//                     {/* {data.map(employee => ( */}
//                     {data.filter(employee => employee.employee_name.startsWith('G')).map(employee =>
//                      (
//                         <tr key={employee.id}>
//                             <td>{employee.id}</td>
//                             <td>{employee.employee_name}</td>
//                             <td>{employee.employee_salary}</td>
//                             <td>{employee.employee_age}</td>
//                             <td>{employee.profile_image || 'N/A'}</td>
//                         </tr>
                      
//                     ))}
//                       </div>
//                 </tbody>
//             </table>
//         </div>
//     );
// };
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Apicalling.css';

export const Apicalling = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedLetter, setSelectedLetter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
                setData(res.data.data);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchData();
    }, []);

    const handleLetterClick = (letter) => {
        setSelectedLetter(letter);
        const filtered = data.filter(employee => employee.employee_name.startsWith(letter));
        setFilteredData(filtered.length > 0 ? filtered : null);
    };

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <div>
            <h1>Apicalling</h1>
            <div className='button-group'>
                {alphabet.map(letter => (
                    <button
                        key={letter}
                        className={`btn btn-${letter === selectedLetter ? 'primary' : 'success'}`}
                        onClick={() => handleLetterClick(letter)}
                    >
                        {letter}
                    </button>
                ))}
            </div>
            <table>
                <thead>
                    <tr className='col'>
                        <th className='id'>ID</th>
                        <th className='id'>Name</th>
                        <th className='id'>Salary</th>
                        <th className='id'>Age</th>
                        <th className='id'>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData ? (
                        filteredData.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.employee_name}</td>
                                <td>{employee.employee_salary}</td>
                                <td>{employee.employee_age}</td>
                                <td>{employee.profile_image || 'N/A'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No names found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};