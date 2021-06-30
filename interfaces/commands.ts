export interface Command {
  label: string;
  description: string;
  img?: DataImg;
  showTriangle?: boolean;
}

export interface DataImg {
  urlImage: string;
  widthImg: number;
  heightImg: number;
}
