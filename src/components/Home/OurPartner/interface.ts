export interface ourPartnerTextInterface {
    heading1: string
    heading2: string
    imagesList: ImageInfo[]
}

export interface ImageInfo {
    pathName: string;
    urlName: string;
}
  
export interface ourPartnerProps {
    ourPartnerSectionText: ourPartnerTextInterface
}
