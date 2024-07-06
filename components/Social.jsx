import Link from "next/link"
import {FaGitlab, FaTelegram, FaDiscord, FaDonate} from "react-icons/fa"

const socials = [
    {icon: <FaGitlab/>, path: "https://gitlab.com/mark2911527/mark/-/learn_gitlab" },
    {icon: <FaTelegram/>, path: ""},
    {icon: <FaDiscord/>, path: "https://discordapp.com/users/896039036517507152/ ", },
    {icon: <FaDonate/>, path: "https://www.donationalerts.com/r/mark_339", },
    
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social