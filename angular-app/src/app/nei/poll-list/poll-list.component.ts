import { Component, OnInit } from '@angular/core';
import { PollService, Poll } from '../services/poll.service';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@Component({
  selector: 'nei-poll-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzCardModule, NzButtonModule,RouterModule,NzProgressModule ],
  templateUrl: './poll-list.component.html',
  styleUrl: './poll-list.component.css'
})
export class Nei_PollListComponent {
  polls: Poll[] = [];
  count1 = [0,0,0];
  allcount = 0;
  psview: number[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getPolls().subscribe((data) => {
      this.polls = data;
      this.psviewCount();

    });
  }
  vote(pollId: number,pollQuestion: string,pollthcount: number): void {
    this.polls[pollId-1].thcount++;
    this.allcount++;
    this.psviewCount();
  //  alert(`投票ID ${pollId} : ${pollQuestion}投票成功！`);
  }
  voteclear(): void {
    for (let i = 0; i < this.polls.length; i++) {
      this.polls[i].thcount = 0;
    }
    this.allcount = 0;
    this.psviewCount();
    alert(`全ての投票結果をクリアしました！`);
  }
  voteupdate(): void {
    // 投票結果を更新する処理 
    this.pollService.updatePoll(this.polls).subscribe(
  response => {
    console.log('Update successful', response);
    alert(`全ての投票結果を保存しました！`);
  },
  error => {
    console.error('Update failed', error);
  }
);
  }
  psviewCount(): void {
      this.allcount = this.polls.reduce((sum, poll) => sum + poll.thcount, 0);
      for (let i = 0; i < this.polls.length; i++) {
        if (this.allcount === 0) {
          this.psview[i] = 0; // 全体の投票数が0
       } else {
          // 各投票の割合を計算 
           this.psview[i] = Math.round(this.polls[i].thcount/ this.allcount * 100);
       }
      }
  }
  voteReturn(): void {
  }

}

