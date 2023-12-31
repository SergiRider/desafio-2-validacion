import { FaGithubAlt } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

const SocialButton = ({github=false, facebook=false, instagram=false}) =>{
    return(
        <>
            {facebook ? <FaFacebookF className='socialicon'/> : null}
            {github ? <FaGithubAlt className='socialicon'/> : null}
            {instagram ? <FaInstagram className='socialicon'/> : null}
        </>
    )
}


export default SocialButton;