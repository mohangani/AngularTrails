export interface IEmployee{

        id: number,
        name : string,
        age: number,
        gender:  Gender
        
}

export enum Gender{

    Male= 1,
    Female=2

}