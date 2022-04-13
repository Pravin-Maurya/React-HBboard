import { HiClock } from 'react-icons/hi'
import Progress_bar from '../ProgressBar'

import './index.css'

const PeopleItem=props=>{
    const{peopleDetails} = props
    const {imgUrl, name, designation, percentageComplete}=peopleDetails

    return(
        <li className='people-details-container'>
            <div className='image-container'>
                <img src={imgUrl} alt='profile' className='profile-image' />
            </div>
            <p className='text-name'>{name}</p>
            <p className='text-designstion'>{designation}</p>
            <div className='progress-container'>
                <HiClock className='progress-icon'/>
                <Progress_bar bgcolor="#5e5f63" progress={percentageComplete} height={10} width={200} className='progress-bar' />
                <p className='complete'>{percentageComplete}%</p>
            </div>
        </li>
    )
}
export default PeopleItem