import React, { useState } from 'react'
import { AccordionData } from '../../Data/MemberShipContent';

interface AcoordionProps {
    id: number;
    title: string;
    img: string;
    description: string;
}

// const [open, setOpen] = useState<boolean>(false)
// const handleClick = (id: number | React.SetStateAction<undefined> | null | boolean) => {
//     if (open === id) {
//         setOpen(open)
//     } else {
//         setOpen(false)
//     }

// }

const Testimonials = () => {

    const [open, setOpen] = useState<number | null>(null);

    const handleShow = (id: number) => {
        setOpen(id === open ? null : id);
    };
    return (
        <React.Fragment>
            <section className="section_faqs">
                <div className="container">
                    <div className="fn__max_800">
                        <h3 className="faq_title">FAQs</h3>
                        <div className="fn__accordion">
                            {
                                AccordionData.map((item: AcoordionProps, index: number) => {
                                    return (
                                        <div key={index} className={`fn__accordion_item ${open === item.id ? 'active' : ''}`}>
                                            <div className="accordion_header" onClick={() => handleShow(item.id)}>
                                                <h3 className="fn__title">{item.title}</h3>
                                                <span className="icon">
                                                    <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                        preserveAspectRatio="xMidYMid meet">

                                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                            stroke="none">
                                                            <path d="M2450 5098 c-44 -17 -77 -44 -171 -137 -144 -143 -163 -177 -164
                                                            -286 0 -58 5 -91 19 -120 13 -27 333 -355 995 -1018 l976 -977 -977 -978
                                                            c-760 -760 -982 -987 -997 -1022 -14 -30 -21 -67 -21 -110 0 -103 29 -153 168
                                                            -291 98 -97 127 -119 175 -137 73 -28 131 -28 204 -1 56 20 108 71 1230 1193
                                                            1297 1296 1223 1214 1223 1346 0 132 74 50 -1223 1346 -1123 1123 -1174 1173
                                                            -1230 1193 -72 26 -136 26 -207 -1z"/>
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="accordion_content" style={{ display: `${open === item.id ? "block" : "none"}` }}>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div >

                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Testimonials



