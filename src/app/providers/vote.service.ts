import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService
{
  private votes: Vote[] = [];

  constructor() { }

  list(): Vote[] { return this.votes; }

  add(vote: Vote)
  {
    this.votes.unshift(vote);
  }

  delete(vote: Vote)
  {
    this.votes.splice(this.votes.indexOf(vote), 1);
  }
}
