import {FaCookie,FaBullseye,FaComments,FaFeather,FaDragon} from 'react-icons/fa'


type props ={
    icon: any
    text?: string
}

export const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg">

            <SideBarIcon text='Trabalhos' icon={<FaDragon size='28'/>}/>
            <SideBarIcon text='Bate-papo' icon={<FaComments size='28'/>}/>
            <SideBarIcon text='Sobre' icon={<FaFeather size='28'/>}/>
            <SideBarIcon text='Game' icon={<FaBullseye size='28'/>}/>
            <SideBarIcon text='biscoito' icon={<FaCookie size='28'/>}/>
             
        </div>
    )
}


const SideBarIcon = ({icon, text='tooltip'}:props) =>{
    return(
    <div className="sidebar-icon group">
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
    )
}