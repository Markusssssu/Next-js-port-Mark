import Link from "next/link"
import {FaGitlab, FaTelegram, FaDiscord, FaDonate} from "react-icons/fa"

const socials = [
    {icon: <FaGitlab/>, path: "https://gitlab.com/mark2911527/mark/-/learn_gitlab" },
    {icon: <FaDiscord/>, path: "https://discordapp.com/users/896039036517507152/ ", },
    {icon: <FaYoutube/>, path: "https://youtu.be/b1Qbw82cDCk?t=231", },
    
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
