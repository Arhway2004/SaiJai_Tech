export interface NavbarData{
    leftText:string;
    rightText:string;
}
// should I alway have interface

export interface MockData{
    // 
    [key:string]: NavbarData;
}