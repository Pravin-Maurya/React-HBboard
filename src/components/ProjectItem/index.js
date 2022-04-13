import './index.css'
const ProjectItem=props=>{
    const {projectDetails} = props
    const {projectStatus, quantity}=projectDetails
    let projectClassName=''
    
    switch (projectStatus) {
        case 'Total':
            projectClassName='total';
            break;
        case 'Completed':
            projectClassName='completed';
            break;
        case 'In Progress':
            projectClassName='in-progress'
            break;
        case 'Waiting':
            projectClassName='waiting'
            break;
    }

    return(
        <li className='project-item'>
            <p className='project-status'>{projectStatus}</p>
            <button type='button' className={`quantity-btn ${projectClassName}`}>{quantity}</button>
        </li>
    )
}
export default ProjectItem