
  
  export interface OurServiceSectionTextInterface{
    heading1: string;
    heading2: string;
    productSolutionsList: ProductSolution[];
  }

  export interface ProductSolution {
    name: string;
    description: string;
  }

  export interface OurServiceProps {
    ourServiceSectionText: OurServiceSectionTextInterface
  }
  
