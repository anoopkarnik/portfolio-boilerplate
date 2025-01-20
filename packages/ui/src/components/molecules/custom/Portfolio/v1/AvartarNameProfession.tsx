import Image from 'next/image'
import useDevice from '../../../../../hooks/use-device'
import { cn } from '../../../../../lib/utils'

const AvartarNameProfession = ({imagePath, fullName, title}:{imagePath:string, fullName:string, title:string}) => {
  const device = useDevice() 
  return (
    <div className={cn('flex items-center justify-center gap-4 mt-16',
      device === 'desktop' && 'flex-col gap-4'
    )}>
        <Image src={imagePath} width={100} height={100} alt='logo' className='rounded-2xl '/>
        <div className='flex flex-col items-center justify-center gap-4'>
          <p className='text-center text-2xl'>
              {fullName}
          </p>
          <p className='text-center text-sm font-extralight bg-accent px-4 rounded-sm'>
              {title}
          </p>
        </div>
    </div>
  )
}

export default AvartarNameProfession