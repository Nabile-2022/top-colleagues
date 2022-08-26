import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';
import { VoteService } from 'src/app/providers/vote.service';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit
{
  constructor(public voteService: VoteService) { }

  ngOnInit(): void
  {
  }

  getVoteText(vote: Vote): String
  {
    let adjective = '';
    let emote = '';

    switch (vote.vote)
    {
      case LikeHate.Like:
        adjective = 'aimée';
        emote = ':)';
        break;
      case LikeHate.Hate:
        adjective = 'détestée';
        emote = ':(';
        break;
    }

    return `${vote.colleague.pseudo} est ${adjective}, elle a désormais un score de ${vote.colleague.score} ${emote}`;
  }

  delete(vote: Vote)
  {
    this.voteService.delete(vote);
  }
}
