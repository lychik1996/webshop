import { Link } from "react-router-dom"
export default function Staff({staff}){
    return(
        <>
        <div className="staff">
            <div><img src={staff.img} alt="" /></div>
            <h3>{staff.name}</h3>
            <p>{staff.info}</p>
            <ul>
                <li><Link><img src="/about/twiter.svg" alt="" /></Link></li>
                <li><Link><img src="/about/inst.svg" alt="" /></Link></li>
                <li><Link><img src="/about/link.svg" alt="" /></Link></li>
            </ul>
        </div>
        </>
    )
}