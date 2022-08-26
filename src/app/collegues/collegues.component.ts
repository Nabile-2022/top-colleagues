import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tc-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})
export class ColleguesComponent implements OnInit
{
  image = "assets/logo.svg";
  field = "i am a typescript field";
  twoWayField!: string; // ! = Non-null assertion operator. Makes the compiler ignore supposedly undefined vars.

  @Input() nom = ""; // html tag attribute set on instantiaton by html code.
  @Input("prenom") firstName = ""; // Alias.

  @Output() outputEmitter = new EventEmitter<string>(); // Output delegates the handling of some data to the calling module via an event given via an attribute, and triggered here.

  constructor() { } // Components get instantiated when their tag is added to the DOM.

  ngOnInit(): void
  {
    this.twoWayField = this.nom;
    console.log(this.firstName);
  }

  onChange(input: string)
  {
    this.field = input;
  }

  fireOutputEmitter()
  {
    this.outputEmitter.emit(this.field);
  }
}
