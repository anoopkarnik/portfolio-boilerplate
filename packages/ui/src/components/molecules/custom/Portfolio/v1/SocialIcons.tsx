import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa'

const SocialIcons = ({githubLink, linkedinLink, instagramLink, twitterLink, discordLink, youtubeLink }:{
    githubLink?:string, linkedinLink?:string, instagramLink?:string, twitterLink?:string,
    discordLink?:string, youtubeLink?:string
}) => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap  mt-2'>
        {githubLink && 
            <a href={githubLink} target='_blank' className='hover:opacity-45'>
                <FaGithub size={16} />
            </a>
        }
        {linkedinLink && 
            <a href={linkedinLink} target='_blank' className='hover:opacity-45'>
                <FaLinkedin size={16} />
            </a>
        }
        {instagramLink && 
            <a href={instagramLink} target='_blank' className='hover:opacity-45'>
                <FaInstagram size={16} />
            </a>
        }
        {twitterLink && 
            <a href={twitterLink} target='_blank' className='hover:opacity-45'>
                <FaTwitter size={16} />
            </a>
        }
        {discordLink && 
            <a href={discordLink } target='_blank' className='hover:opacity-45'>
                <FaDiscord size={16} />
            </a>
        }
        {youtubeLink && 
            <a href={youtubeLink} target='_blank' className='hover:opacity-45'>
                <FaYoutube size={16} />
            </a>
        }

    </div>
  )
}

export default SocialIcons