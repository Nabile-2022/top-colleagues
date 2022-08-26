import { Component, Input, OnInit } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit
{
  @Input() votes!: Array<Vote>;

  constructor() { }

  ngOnInit(): void
  {
    this.votes = [];
    const noms = ['Sylvie', 'Robert'];

    for (let i = 0; i < 4; i++)
    {
      this.votes.push({
        colleague: {
          pseudo: noms[Math.floor(Math.random() * noms.length)],
          photo: '/assets/logo.svg',
          score: Math.floor(Math.random() * 1000)
        },
        vote: Math.floor(Math.random() * 2)
      });
    }
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
    this.votes.splice(this.votes.indexOf(vote), 1);
  }
}
