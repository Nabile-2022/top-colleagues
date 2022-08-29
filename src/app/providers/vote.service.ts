import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
import { ReactionService } from './reaction.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService
{
  private votes: Vote[] = [];

  constructor(private reactionService: ReactionService) { }

  list(): Vote[] { return this.votes; }

  add(vote: Vote)
  {
    this.votes.unshift(vote);
    this.reactionService.react(vote.vote);
  }

  delete(vote: Vote)
  {
    this.votes.splice(this.votes.indexOf(vote), 1);
  }
}
