import {BiGridAlt, BiSearch} from "react-icons/bi"
import {FaUsers} from 'react-icons/fa'
import {BsFillBarChartFill, BsBagPlusFill, BsArrowUpShort} from 'react-icons/bs'
import {IoIosChatboxes} from 'react-icons/io'
import {MdKeyboardArrowRight, MdSupportAgent} from 'react-icons/md'
import {AiOutlineSearch, AiFillDollarCircle} from 'react-icons/ai'
import {HiOutlineSelector, HiAdjustments} from 'react-icons/hi'
import {VscBellDot} from 'react-icons/vsc'

import PeopleItem from "../PeopleItem"
import ProjectItem from '../ProjectItem'

import './index.css'

const componentArray=[
    {
        id:10001,
        imgUrl: 'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
        name:'Jane Cooper',
        designation:'Art Director',
        percentageComplete:80,

    },
    {
        id:10002,
        imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
        name:'Wade Warren',
        designation:'Motion Designer',
        percentageComplete:65,
    },
    {
        id: 10003,
        imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
        name:'Ralph Edwards',
        designation:'Product Designer',
        percentageComplete:50,
    },
   

]

const componentArrayLower= [ {
    id:10004,
    imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
    name:'Jenny Wilson',
    designation:'Graphic Designer',
    percentageComplete:70
},
{
    id:10005,
    imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
    name:'Albert Flores',
    designation:'Graphic Designer',
    percentageComplete:75

},
{
    id:10006,
    imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
    name:'Kriston Watson',
    designation:'Product Designer',
    percentageComplete:75

},
{
    id:10007,
    imgUrl:'https://brandeps.com/icon-download/M/Man-icon-vector-02.svg',
    name:'Devon Lane',
    designation:'Motion Designer',
    percentageComplete:75

},]

const projectList=[
    {
        id:'project-1',
        projectStatus:'Total',
        quantity:201
    },
    {
        id:'project-2',
        projectStatus:'Completed',
        quantity:67
    },
    {
        id:'project-3',
        projectStatus:'In Progress',
        quantity:78
    },
    {
        id:'project-4',
        projectStatus:'Waiting',
        quantity:56
    }

]

const Dashboard=()=>(
        <div className="app-container">
            <div className="cards-container">
                <div className="dashboard-container">
                    <h1 className="dashboard-title">HBoard</h1>
                    <p className="text-tool">Tools</p>
                    <ul className="dashboard-item-container">
                        <li className="list-items">
                            <BiGridAlt className='icon'/>
                            <p className="dashboard-text">Dashboard</p>
                        </li>
                        <li className="list-items">
                            <AiFillDollarCircle className='icon'/>
                            <p className="dashboard-text">Finance</p>
                        </li>
                        <li className="list-items">
                            <FaUsers className='icon'/>
                            <p className="dashboard-text">People</p>
                        </li>
                        <li className="list-items">
                            <BsFillBarChartFill className='icon'/>
                            <p className="dashboard-text">Statics</p>
                        </li>
                        <li className="list-items">
                            <BsBagPlusFill className='icon'/>
                            <p className="dashboard-text">Documents</p>
                        </li>
                    </ul>
                    <p className="other-text">Other</p>
                    <ul className="dashboard-item-container">
                        <li className="list-items">
                        <IoIosChatboxes className='icon'/>
                        <p className="dashboard-text">Chat</p>
                        <button type="button" className="count-button">3</button>
                        </li>
                        <li className="list-items">
                            <MdSupportAgent className='icon'/>
                            <p className="dashboard-text">Support</p>
                        </li>
                    </ul>
                </div>
                <div className="details-container">
                    <div className="team-title-container">
                        <p className="title-people">People</p>
                        <MdKeyboardArrowRight className='arrow-icon'/>
                        <p className="team-text">Design Team</p>
                    </div>
                        <p className="main-heading">30 People</p>
                    <div className="box-container">
                        <div className="search-box-container">
                            <AiOutlineSearch className='search-icon'/>
                            <input type='search' placeholder='search' className="search-box"/>
                        </div>
                        <div className="text-container">
                            <p className="text">Position</p>
                            <HiOutlineSelector className='box-icon'/>
                        </div>
                        <div className="text-container">
                            <p className="text">More</p>
                            <HiAdjustments className='box-icon'/>
                        </div>
                    </div>
                        <ul className="people-item-container">
                            {componentArray.map(eachPeople =>(
                                <PeopleItem peopleDetails={eachPeople} key={eachPeople.id}/>
                            ))}
                        </ul>
                        <div className="list-container">
                            <img src="https://res.cloudinary.com/dunnzyptg/image/upload/v1649819900/Tasty-Kitchen/mobile-image-app_rdznaq.png" alt='work mobile' className="mobile-work-image" />
                            <ul className="people-item-container">
                            {componentArrayLower.map(eachPeople =>(
                                <PeopleItem peopleDetails={eachPeople} key={eachPeople.id}/>
                            ))}
                        </ul>
                        </div>
                </div>
                <div className="statics-container">
                    <div className="icons-continer">
                        <div className="icons-card"><BiSearch className='static-icon'/></div>
                        
                        <div className="icons-card"><VscBellDot className='static-icon'/></div>
                    </div>
                    <div className="static-indicator-container">
                        <h1 className="title-static">Statics</h1>
                        <div className="time-log-card">
                            <div className="log-container">
                            <p className="title-time-log">Time log</p>
                            <h1 className="time-log-percentge">80%</h1>
                            <p className="increase-title">+32% <span><BsArrowUpShort className='up-arrow-icon'/></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="project-details-container">
                        <h1 className="project-title">Projects</h1>
                        <ul className="project-item-container">
                            {projectList.map(eachProject=>(
                                <ProjectItem key={eachProject.id} projectDetails={eachProject} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
export default Dashboard