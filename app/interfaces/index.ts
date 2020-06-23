/*
export class html{
    head:htmlhead;
    body:htmlbody;
}

export class htmlhead {
    meta:htmlmeta;
    link:htmllink;
    title:string;
}

export class htmlbody {
    h1:htmlh1;
    div:htmldiv;
}

export class htmlh1 {
    class:string;
    span:htmlspan;
}

export class htmldiv {
    ul:htmlul;
}

export interface htmlul {
    class?:string;
    children?:htmlli[];
}

export interface htmlli {
    class?:string;
    a?:htmla;
    ul?:htmlul;
    content?:string;
}

export class htmla {
    href: string;
    content: string;
}

export class htmlspan {
    class:string;
}

export class htmlmeta {
    name:string;
    httpequiv:string;
    content:string;
}

export class htmllink {
    rel:string;
    type:string;
    href:string;
}
*/
export class Chapter {
    name?: string;
    url?: string;
    docid?: number;
    shortdesc?:string;
    children?: Chapter[];
  }

 export interface link {
    name: string;
    url?: string;
    hasChildren?:boolean;
    link?:link[];
  }