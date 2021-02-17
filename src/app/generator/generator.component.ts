import { ChangeDetectorRef, Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
