declare module "workExData.json" {
    const value: {
      heading: string;
      data: {
        organization: string;
        duration: string;
        skills: string[];
        role: string;
        description: string[];
        type: string[];
      }[];
      links: {
        [key: string]: string;
      };
    };
    export default value;
  }
