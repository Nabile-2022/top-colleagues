import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LikeHate } from '../models/like-hate';

@Injectable({
  providedIn: 'root'
})
export class ReactionService
{
  private reaction = new Subject<LikeHate>();

  constructor() { }

  get reactionObservable() { return this.reaction.asObservable(); }

  react(reaction: LikeHate) { this.reaction.next(reaction); }
}
