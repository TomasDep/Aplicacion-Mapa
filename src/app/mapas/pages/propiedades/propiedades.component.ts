import { Component } from '@angular/core';

interface Propiedad {
  titulo     : string,
  descripcion: string,
  lngLat     : [number, number]
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent  {

  propiedades: Propiedad[] = [
    {
      titulo     : 'Casa residencial, Canadá',
      descripcion: 'Bella propiedad de Katana, Canadá',
      lngLat     : [-75.92722289474008, 45.280015511264466]
    },
    {
      titulo     : 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat     : [-99.9128772907991, 16.828940930185748]
    },
    {
      titulo     : 'Apartamento, Argentina',
      descripcion: 'Lujoso aparatamento en el corazón de Buenos Aires, Argentina',
      lngLat     : [-58.3430166677283445, -34.57150108832866]
    },
    {
      titulo     : 'Local comercial, España',
      descripcion: 'Local coemrcial disponible en Madrid, España',
      lngLat     : [-3.7112735618380177, 40.42567285425766]
    }
  ];
}
