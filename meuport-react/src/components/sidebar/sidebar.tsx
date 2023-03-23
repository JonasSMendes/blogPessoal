import { FaBeer } from "@react-icons/all-files/fa/FaBeer";


type props ={
    icon:string
}

export const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg">

            <i>A</i>
            <i>B</i>
            <i>C</i> 
            <i>D</i>
            <i>E</i>
             
        </div>
    )
}


const SideBarIcon = ({icon}:props) =>{
    <div className="sidebar-icon">
        {icon}
    </div>
}