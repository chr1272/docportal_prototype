export class globals {
    id:number;
    Valuestring:string;
    Valueint:number;
    Name:string;
}

export const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

export const GLassetsPath = "/assets/userdoc/";

export const GLapiPath = "https://localhost:44357/api/";