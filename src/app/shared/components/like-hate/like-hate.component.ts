import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LikeHate } from 'src/app/models/like-hate';

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent implements OnInit
{
  @Input() score = 0;

  @Output() voteEvent = new EventEmitter<LikeHate>();

  constructor() { }

  ngOnInit(): void
  {
  }

  like() { this.voteEvent.emit(LikeHate.Like); }

  hate() { this.voteEvent.emit(LikeHate.Hate); }
}
