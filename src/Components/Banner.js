import { BsFillCheckCircleFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import {IoIosWarning} from 'react-icons/io'


export default function Banner({ status, children }) {

    const [firstChild, ...restChildren] = Array.isArray(children) ? children : [children]
    const statOptions = ['success', 'warning', 'error', 'info']
    const stat = status && statOptions.includes(status.toLowerCase())? status.toLowerCase() : null;

    let statusIcon = '';

    if (status) {
        if (stat === 'success') {
            statusIcon = <BsFillCheckCircleFill className={`${stat}-icon`}/>;
        } else if (stat=== 'warning') {
            statusIcon = <IoIosWarning className={`${stat}-icon`}/>;
        } else if (stat === 'error') {
            statusIcon = <AiFillCloseCircle className={`${stat}-icon`}/>;
        } else if (stat === 'info') {
            statusIcon = <BsFillInfoCircleFill className={`${stat}-icon`}/>;
        } else {
            statusIcon = '';
        }
    }


    return firstChild && stat && (
            <div className ={`banner ${stat}`} >
                {statusIcon}
                <div className="banner-message">
                <div className={`banner-text banner-title ${stat}-title`}>
                        {firstChild}
                    </div>
                    {restChildren.length > 0 &&
                    <div className={`banner-text banner-body ${stat}-body`}>
                            {restChildren}
                        </div>
                    }
                </div>
            </div >
        
    )
}