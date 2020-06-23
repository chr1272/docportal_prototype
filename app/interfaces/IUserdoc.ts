export class IUserdoc {
    id:number;
    title:string;
    index:string;
    type:string;
    shortdesc?:string;
    tools?:tool[];
    spares?:spare[];
    consumables?:consumable[];
    perskill:perskill;
    warnings?:warning[];
    links?:link[];
}

export class tool {
    name:string;
    ref:string;
}
export class consumable {
    name:string;
    ref:string;
}
export class spare {
    name:string;
    ref:string;
}
export class perskill {
    trade:string;
    person:string;
    number:number;
    duration:string;
}

export class link {
    path:string;
    file:string;
}

export class warning {
    id:number;
    type:string;
    header:string;
    content:string;
}