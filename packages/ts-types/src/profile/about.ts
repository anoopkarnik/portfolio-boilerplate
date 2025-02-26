

export interface whatIAmWorkingOnProps {
    imgSrc: string;
    title: string;
    description: string;
}

export interface aboutProps {
    aboutMe: string;
    myJourney: string;
    whatIAmWorkingOn: whatIAmWorkingOnProps[];
}
