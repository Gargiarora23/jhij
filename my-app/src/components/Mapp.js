import React from 'react'

export const Mapp = () => {

    const Mappdata = [
        { name: "Gargi", des: "Designing" },
        { name: "Bhoomi", des: "Software Developer" },
        { name: "Khushi", des: "Mobile app" },
    ];
    return (
        <>
            <div className='heading'>INFLUENCER MARKETING</div>
            <div className='B'>
                {/* {
                    Mappdata?.map((item, index) => (
                        <div key={index}>
                           <h1>{item?.name}</h1> 
                           <p>{item?.des}</p>
                        </div>
                    ))
                } */}
            </div>
        </>
    );
};

