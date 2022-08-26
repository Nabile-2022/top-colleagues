import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit
{
  @Input() colleagues!: Array<Colleague>;
  @Input() votes!: Array<Vote>;

  constructor() { }

  ngOnInit(): void
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

  onVote(vote: Vote)
  {
    this.votes.unshift({...vote});
  }
}
