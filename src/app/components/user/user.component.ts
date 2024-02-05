import { OperatingSystemsService } from './../../core/operating-systems.service';
import { OperatingSystem } from './../../interfaces/operating-system';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'user-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() occupation: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  OperatingSystemService: OperatingSystemsService = inject(OperatingSystemsService);
  OperatingSystem: OperatingSystem[] = this.OperatingSystemService.getOperatingSystems();
  username: string = "Daniel";
  DoesUserExists: boolean = true;
  isEditable: boolean = true;

  onMouseOver(osName: string): void {
    console.log(osName);
  }
  botonSaludar() {
    console.log("Hola Mundo :)");
  }
  emitToParent(): void {
    this.greet.emit("Hi! I'm your child");
  }
  receiveEmision($event: any): void {
    console.log($event);
  }
}

