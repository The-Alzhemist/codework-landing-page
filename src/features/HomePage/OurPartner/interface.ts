export interface ourPartnerTextInterface {
    heading1: string
    heading2: string
    imagesList: ImageInfo[]
}

export interface ImageInfo {
    pathName: string;
    urlName: string;
    alt: string
}
  
export interface ourPartnerProps {
    ourPartnerSectionText: ourPartnerTextInterface
}
