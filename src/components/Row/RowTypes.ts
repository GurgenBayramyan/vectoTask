export interface IRow{
    title:string
}
export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl?: string;
    Description: string;
    img: string;
  } 
  export interface IRowData {
    Featured: IMovie;
    TendingNow: IMovie[];
  }