import { Injectable } from '@angular/core';

import { Place } from "../Models/Place";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    private places: Place[] = [
        {
            id: 1,
            name: 'Alberta, Canadá',
            brief: 'Los maravillosos senderos escarpados y nevados de Jasper y Banff, dos de los parques nacionales más antiguos del mundo, deberían ser motivo suficiente para agregar a Alberta a la lista de mejores destinos fríos',
            img: '../../assets/images/Alberta Canadá.jpg'
        },
        {
            id: 2,
            name: 'Armenia',
            brief: 'La República de Armenia, es un país del Cáucaso Sur y sin salida al mar localizado entre Europa Oriental y Asia Occidental',
            img: '../../assets/images/Armenia.jpg'
        },
        {
            id: 3,
            name: 'Berlín',
            brief: 'El próximo año marca el trigésimo aniversario de la caída del Muro de Berlín y el calendario cultural de la ciudad refleja su crecimiento',
            img: '../../assets/images/Berlín.jpg'
        },
        {
            id: 4,
            name: 'Camboya',
            brief: 'La mayoría de las visitas a Camboya se centran en explorar Siem Reamp y los templos de Angkor Wat',
            img: '../../assets/images/Camboya.jpg'
        },
        {
            id: 5,
            name: 'Egipto',
            brief: 'Cada yacimiento, templo o valle es una lección de historia donde el Antiguo Egipto cobra vida',
            img: '../../assets/images/Egipto.jpg'
        },
        {
            id: 6,
            name: 'Cayos de la Florida',
            brief: 'Un año después del huracán Irma, los Cayos de Florida se recuperan, con una serie de aperturas de hoteles que demuestran el atractivo perdurable de la región',
            img: '../../assets/images/Cayos de la Florida.jpg'
        },
        {
            id: 7,
            name: 'Georgia',
            brief: 'Desde sus verdes valles extendidos con viñedos hasta sus antiguas iglesias y torres de vigilancia encaramadas en un fantástico paisaje montañoso, Georgia es uno de los países más bellos del mundo y un lienzo maravilloso para caminantes, ciclistas, esquiadores y viajeros de todo tipo',
            img: '../../assets/images/Georgia.jpg'
        },
        {
            id: 8,
            name: 'El Gran Cañón',
            brief: 'En 2019, el parque dedicado a la maravilla geológica más famosa de Estados Unidos celebrará su centenario con una serie de charlas, conciertos y exposiciones especiales durante todo el año',
            img: '../../assets/images/El Gran Cañón.jpg'
        },
        {
            id: 9,
            name: 'Helsinki, Finlandia',
            brief: 'La capital de Finlandia continúa construyendo sobre su reputación como la meca del arte y diseño',
            img: '../../assets/images/Helsinki Finlandia.jpg'
        },
        {
            id: 10,
            name: 'Isquia, Italia',
            brief: 'A solo una hora de Nápoles en hidroala y uno de los favoritos de los europeos que buscan spas termales, playas llenas de sombrillas y agradables ciudades turísticas, el refugio abunda en encanto de la vieja escuela',
            img: '../../assets/images/Isquia Italia.jpg'
        },
        {
            id: 11,
            name: 'Los Cabos, México',
            brief: 'Rodeadas del Mar de Cortés, las playas de Los Cabos se sitúan en la Península de Baja California Sur, donde los resorts más exclusivos esperan a los viajeros',
            img: '../../assets/images/Los Cabos México.jpg'
        },
        {
            id: 12,
            name: 'Namibia',
            brief: 'Pocos países en África pueden igualar la belleza natural de Namibia. El nombre del país deriva de su desierto más antiguo (y el del mundo), el Namib, y hay pocos reinos desérticos más emocionantes en el planeta',
            img: '../../assets/images/Namibia.jpg'
        },
        {
            id: 13,
            name: 'Praga',
            brief: 'Las galerías de arte de Praga pueden no tener el encanto del Louvre, pero el arte bohemio ofrece mucho que admirar, desde los brillantes retablos góticos en el Convento de Santa Inés, hasta el delicioso art nouveau de Alfons Mucha',
            img: '../../assets/images/Praga.jpg'
        },
        {
            id: 14,
            name: 'Escocia',
            brief: 'Escocia tiene muchos tesoros amontonados en su territorio compacto: grandes cielos, arquitectura antigua, vida salvaje espectacular, excelentes mariscos y personas hospitalarias y con los pies en la tierra',
            img: '../../assets/images/Escocia.jpg'
        },
        {
            id: 15,
            name: 'Sharja, Ciudad en los Emiratos Árabes',
            brief: 'Abu Dhabi y Dubai son dos de los centros culturales más dinámicos del Golfo, pero este año, vale la pena explorar otra parte del país que se está convirtiendo silenciosamente en un destino artístico internacional',
            img: '../../assets/images/Ciudad en los Emiratos Árabes.jpg'
        },
        {
            id: 16,
            name: 'Singapur',
            brief: 'Aprovechando su crisol de culturas, Singapur finalmente está obteniendo algo de chispa, y se está convirtiendo rápidamente en uno de los destinos favoritos de Asia',
            img: '../../assets/images/Singapur.jpg'
        },
        {
            id: 17,
            name: 'Toronto',
            brief: 'Brillante y bulliciosa, Toronto es una ciudad cosmopolita cuyos residentes tienen raíces en todo el mundo. Arte, comida, playas, vida nocturna: Toronto, lo ofrece todo',
            img: '../../assets/images/Toronto.jpg'
        },
        {
            id: 18,
            name: 'Túnez',
            brief: 'Con la reciente llegada de marcas de hoteles de lujo, los visitantes están regresando lenta pero seguramente a este atractivo país del norte de África',
            img: '../../assets/images/Túnez.jpg'
        },
        {
            id: 19,
            name: 'Uttarakhand, India',
            brief: 'A menudo llamado la Tierra de los Dioses, el estado norteño de Uttarakhand en la India está salpicado de templos antiguos y picos nevados',
            img: '../../assets/images/Uttarakhand India.jpg'
        },
        {
            id: 20,
            name: 'Montañas de Adirondack, Nueva York',
            brief: 'Los expertos de la publicación especializada en viajes “Travel + Leisure” realizaron un ranking con los destinos para conocer en el 2019. El primero es uno de los primeros destinos de vacaciones de Estados Unidos. La región de la montaña Adirondack de Nueva York ha atraído a los viajeros del mundo desde finales del siglo XIX',
            img: 'assets/images/Montañas de Adirondack Nueva York.jpg'
        },
    ];

    constructor() {
        console.log('Service ready')

    }

    getAllData(): Place[] {
        return this.places;
    }

    getData(id: number) {
        // return this.heroes[idx];
        let lugar: Place;
        for (let place of this.places) {
            if (place.id == id) {
                lugar = place;
            }
        }
        return lugar;
    }

    searchPlaces(text: string): Place[] {
        let vPlaces: Place[] = [];
        text = text.toLowerCase();

        for (let place of this.places) {
            let name = place.name.toLowerCase();

            if (name.indexOf(text) >= 0) {

                vPlaces.push(place);
            }
        }
        return vPlaces;
    }
}
