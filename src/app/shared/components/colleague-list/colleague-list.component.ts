import { Component, Input, OnInit } from '@angular/core';
import { Colleague } from 'src/app/models/colleague';
import { Vote } from 'src/app/models/vote';
import { ColleagueService } from 'src/app/providers/colleague.service';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent implements OnInit
{
  /**
   *
   * @param colleagueService Dependency injection of a service
   */
  constructor(public colleagueService: ColleagueService, public voteService: VoteService) { }

  ngOnInit(): void
  {
  }

  onVote(vote: Vote)
  {
    this.voteService.add(vote);
  }
}
