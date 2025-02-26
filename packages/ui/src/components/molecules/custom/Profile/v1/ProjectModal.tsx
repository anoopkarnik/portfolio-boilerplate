import React, { useState } from 'react'
import { Dialog } from '../../../shadcn/dialog'
import { DialogContent, DialogTrigger } from '@radix-ui/react-dialog'
import { CiCircleInfo } from 'react-icons/ci'
import { projectProps } from '@repo/ts-types/profile/project'
import { useDeviceType } from '../../../../../hooks/use-device'
import { cn } from '../../../../../lib/utils'
import ProjectDetails1 from './ProjectDetails1'
import ProjectDetails2 from './ProjectDetails2'

const ProjectModal = ({ project }: { project: projectProps }) => {
    const [open, setOpen] = useState(false)
    const device = useDeviceType()

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <CiCircleInfo size={30} className='opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer' />
            </DialogTrigger>

            {/* Blurred Background */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40 ${open ? "visible" : "invisible"}`} />

            {/* Modal Content */}
            <DialogContent 
                className={cn(`
                    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col
                     shadow-lg p-4 rounded-md 
                    max-h-[90vh] w-[95%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
                    overflow-hidden
                `)}
            >
                {/* Scrollable Content */}
                <div className={cn(`  px-2`,
                    device === 'tablet' && 'overflow-y-auto scrollbar-thin scrollbar-track-accent scrollbar-thumb-sidebar',
                    device === 'mobile' && 'overflow-y-auto scrollbar-thin scrollbar-track-accent scrollbar-thumb-sidebar'
                )}>
                    <div className={cn('flex justify-center my-10 gap-10 mx-6',
                        device === 'tablet' && 'flex-col items-center ',
                        device === 'mobile' && 'flex-col items-center '
                    )}>
                        <ProjectDetails1 project={project} />
                        <ProjectDetails2 project={project} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectModal
