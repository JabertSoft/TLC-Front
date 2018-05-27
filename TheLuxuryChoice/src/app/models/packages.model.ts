export class travel_package{
    

constructor(public id:number, 
            public title:string, 
            public subtitle:string, 
            public from:Date, 
            public to:Date, 
            public description:string, 
            public promotion:boolean, 
            public imageUrl
        )
{

}

public static getDummySales():Array<travel_package>
{
    var sales = [
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, "'paquete-1.png'"),
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, ""),
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, ""),
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, ""),
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, ""),
                 new travel_package(1234,"15 dias de lujo en Canarias", "Hotel Paraiso XVI",  new Date(), new Date(),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quibusdam voluptatibus sequi, esse ullam quas. Saepe quo quibusdam velit facilis libero natus possimus maiores cumque qui, consequuntur laborum nobis nulla?",true, ""),
                ]
                return sales;
}

}