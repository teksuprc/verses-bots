import { Directive, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appCesium]'
})

export class CesiumDirective implements OnInit {

  constructor(private el:ElementRef) { }


  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement, {
      sceneMode: Cesium.SceneMode.SCENE2D,
      mapMode2D: Cesium.MapMode2D.ROTATE
    });

    const scene = viewer.scene;

    scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(0.0, 0.0, 50000000.0),
      orientation: {
        heading: Cesium.Math.toRadians(0)
      }
    });

  }
}
