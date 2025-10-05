import React, { useState } from 'react'
import { PrintingData, PrintingDataYear } from '../../Data/MemberShipContent';
import { Link } from 'react-router-dom';

interface ItemContent {
    item1: string;
    item2: string;
    item3: string;
    item4?: string; 
    item5?: string; 
  }
  
  interface PrintingDataItem {
    title: string;
    price: string;
    duration: string;
    description: string;
    img: string;
    itemcontent: ItemContent;
    btn: string;
  }

const TabView = () => {
    const [activeTab, setActiveTab] = useState('yearly');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="fn__pricing_tables" data-active={activeTab}>
                    <div className="pt_filter">
                        <div className="pt_filter_in">
                            <Link to="#" onClick={() => handleTabClick('monthly')} className={activeTab === 'monthly' ? 'monthly active' : 'monthly'}>Monthly</Link>
                            <Link to="#" onClick={() => handleTabClick('yearly')} className={activeTab === 'yearly' ? 'active yearly' : 'yearly'}>Yearly</Link>
                            <span className="ccc"></span>
                        </div>
                    </div>
                    <div className="pt_content">
                        {
                            activeTab === 'monthly' ?
                                (
                                    <ul className="pt_list">
                                        {
                                            PrintingData.map((items: PrintingDataItem, index: number) => {
                                                return (
                                                    <li key={index} className="pt_list_item pt_list_item_monthly">
                                                        <div className="fn__pricing_table_item">
                                                            <div className="item_header">
                                                                <div className="plan">
                                                                    <span>{items.title}</span>
                                                                </div>
                                                                <div className="pricing">
                                                                    <h3 className="price">{items.price}</h3>
                                                                    <span className="price_text">{items.duration}</span>
                                                                </div>
                                                                <div className="desc">
                                                                    <p>{items.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className="item_content">
                                                                <ul>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text" >{items.itemcontent.item1}</span>
                                                                    </li>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text" >{items.itemcontent.item2}</span>
                                                                    </li>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{items.itemcontent.item3}</span>
                                                                    </li>
                                                                   { items.itemcontent.item4 ?
                                                                   <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{items.itemcontent.item4}</span>
                                                                    </li>
                                                                    : ""
                                                                    }
                                                                     { items.itemcontent.item5 ?
                                                                   <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{items.itemcontent.item5}</span>
                                                                    </li>
                                                                    : ""
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <div className="item_footer">
                                                                <Link to="#" className="fn__btn medium"><span>Sign Up for free</span></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                ) : (

                                    <ul className='pt_list'>
                                        {
                                            PrintingDataYear.map((item: PrintingDataItem, index: number) => {
                                                return (
                                                    <li key={index} className="pt_list_item pt_list_item_yearly" >
                                                        <div className="fn__pricing_table_item">
                                                            <div className="item_header">
                                                                <div className="plan">
                                                                    <span>{item.title}</span>
                                                                </div>
                                                                <div className="pricing">
                                                                    <h3 className="price">{item.price}</h3>
                                                                    <span className="price_text">{item.duration}</span>
                                                                </div>
                                                                <div className="desc">
                                                                    <p>{item.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className="item_content">
                                                                <ul>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{item.itemcontent.item1}</span>
                                                                    </li>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{item.itemcontent.item2}</span>
                                                                    </li>
                                                                    <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{item.itemcontent.item3}</span>
                                                                    </li>
                                                                    {
                                                                        item.itemcontent.item4 ?
                                                                        <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{item.itemcontent.item4}</span>
                                                                    </li>
                                                                    : ""
                                                                    }
                                                                    {
                                                                        item.itemcontent.item5 ?
                                                                        <li>
                                                                        <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                                            width="450.000000pt" height="412.000000pt" viewBox="0 0 450.000000 412.000000"
                                                                            preserveAspectRatio="xMidYMid meet">
                                                                            <g transform="translate(0.000000,412.000000) scale(0.100000,-0.100000)"
                                                                                stroke="none">
                                                                                <path d="M3873 4110 c-67 -27 -429 -294 -653 -480 -566 -472 -1156 -1079
                                                                                -1633 -1681 -72 -92 -136 -168 -140 -168 -4 -1 -225 151 -490 336 -265 185
                                                                                -491 342 -502 350 -11 7 -35 13 -54 13 -32 0 -51 -16 -213 -177 -220 -220
                                                                                -216 -204 -101 -362 533 -735 1090 -1543 1253 -1818 40 -69 63 -97 88 -109 38
                                                                                -18 82 -12 105 14 8 9 66 103 128 207 505 853 1145 1798 1673 2470 326 415
                                                                                568 690 897 1017 242 241 259 260 259 294 0 46 -14 70 -50 89 -24 12 -76 15
                                                                                -287 14 -142 0 -268 -4 -280 -9z"/>
                                                                            </g>
                                                                        </svg>
                                                                        <span className="text">{item.itemcontent.item5}</span>
                                                                    </li>
                                                                    : ""
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <div className="item_footer">
                                                                <Link to="#" className="fn__btn medium"><span>Sign Up for free</span></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                )
                        }
                    </div>
                    <div className="pt_footer">
                        <p>Already have an account? <Link to="/sign-in">Sign in</Link></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TabView
