import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'tc-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit
{
  clients = new Array<Personne>();
  client = new Personne();

  constructor() { }

  ngOnInit(): void
  {
  }

  addClient()
  {
    this.clients.push({...this.client}); // {...} implicitly makes a copy.
  }
}
