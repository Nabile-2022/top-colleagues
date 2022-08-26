import { Injectable } from '@angular/core';
import { Colleague } from '../models/colleague';

@Injectable({
  providedIn: 'root'
})
export class ColleagueService
{
  private colleagues: Colleague[];

  constructor()
  {
    this.colleagues = [];

    for (let i = 0; i < 10; i++)
    {
      this.colleagues.push({
        pseudo: 'Test',
        score: 1000 * Math.sign(Math.random() - 0.5),
        photo: 'assets/logo.svg'
      });
    }
  }

  list(): Colleague[]
  {
    return this.colleagues;
  }
}
