import { Component, OnInit } from '@angular/core';
import { PollService, Poll ,Answerlist } from '../services/poll.service';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'nei-poll-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzCardModule, NzButtonModule,RouterModule,NzProgressModule,
            NzModalModule,NzSelectModule, FormsModule, NzImageModule,NzGridModule],
  templateUrl: './poll-list.component.html',
  styleUrl: './poll-list.component.css'
})
export class Nei_PollListComponent {
  polls: Poll[] = [];
  answerlist: Answerlist[] = []; // 投票者の回答を格納する配列
  answerlistget: Answerlist[] = []; // 投票者の回答を格納する配列
  count1 = [0,0,0];
  allcount = 0;
  psview: number[] = [];
  isVisibleT = true; // 投票モーダルの表示状態を管理
  isVisibleview = true; // 投票結果のみ確認ボタンの表示状態を管理
  isVisibleviewtohyo = false; // 投票画面に戻るボタンの表示状態を管理
  selectedSex = null;
  sexview: number[] = [];
  sexss = [
    { label: '男性　　', value: 'man' },
    { label: '女性　　', value: 'woman' }
  ];
  selectedAge = null;
  Ages = [
    { label: '20代以下', value: '20' },
    { label: '30代～40代', value: '30' },
    { label: '50代以上', value: '50' }
  ];

  // グラフ表示用
  formatOne: (percent: number) => string = (percent: number) => `犬派男性${percent}%`;
  formatTwo: (percent: number) => string = (percent: number) => `犬派女性${percent}%`;
  formatThree: (percent: number) => string = (percent: number) => `猫派男性${percent}%`;
  formatFour: (percent: number) => string = (percent: number) => `猫派女性${percent}%`;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.getPolls().subscribe((data) => {
      this.polls = data;
      this.psviewCount();
    });

    // 投票者の回答統計を表示するメソッドを呼び出す
    this.onswerlistView();
  }
  vote(pollId: number,pollQuestion: string,pollthcount: number): void {

    if (this.selectedSex === null || this.selectedAge === null) {
      alert('回答者の性別と年齢を選択してください。');
      return;
    }

    this.polls[pollId-1].thcount++;
    this.allcount++;
    this.psviewCount();
    // 投票結果を更新する処理
    this.voteupdate(pollId);
  
    this.isVisibleT = false; // 投票モーダルの表示状態を管理
    this.isVisibleview = false; // 投票結果のみ確認ボタンの表示状態を管理
    this.isVisibleviewtohyo = false; // 投票画面に戻る

    alert(`「${pollQuestion}」投票成功！！ 投票結果を表示します。`);
  }
  voteclear(): void {
    for (let i = 0; i < this.polls.length; i++) {
      this.polls[i].thcount = 0;
    }
    this.allcount = 0;
    this.psviewCount();
    alert(`全ての投票結果をクリアしました！`);
  }
  voteupdate(pollId: number): void {
    // 投票結果を更新する処理 
    this.pollService.updatePoll(this.polls).subscribe(
      response => {
       console.log('Update successful', response);
       // alert(`全ての投票結果を保存しました！`);
      },
      error => {
        console.error('Update failed', error);
      }
    );
    // 投票者を登録する処理
    if (!this.answerlist[0]) {
       this.answerlist[0] = { sex: '', age: '', select_num: 0 };
    }
    this.answerlist[0].age = this.selectedAge !== null ? this.selectedAge : '';
    this.answerlist[0].sex = this.selectedSex !== null ? this.selectedSex : '';
    this.answerlist[0].select_num = pollId; // 選択肢

    this.pollService.insertAnswerlist(this.answerlist[0]).subscribe(
      response => {
       console.log('insert successful', response);
       // 投票者の回答統計を表示するメソッドを呼び出す
       this.onswerlistView();
      },
      error => {
        console.error('insert failed', error);
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

  voteView(): void {
    this.isVisibleview = false; // 投票結果のみ確認ボタンの表示状態を管理
    this.isVisibleT = false; // 投票モーダルの表示状態を管理
    this.isVisibleviewtohyo = true; // 投票画面に戻るボタンの表示状態を管理
  }
  voteViewtohyo(): void {
    this.isVisibleview = true; // 投票結果のみ確認ボタンの表示状態を管理
    this.isVisibleT = true; // 投票モーダルの表示状態を管理
    this.isVisibleviewtohyo = false; // 投票画面に戻るボタンの表示状態を管理
  }
  
  // 投票者の回答統計を表示するメソッド
  onswerlistView(): void {
    let countSex = [0,0,0,0];
    let countall = 0;
    this.pollService.getAnswerlist().subscribe((data) => {
      this.answerlistget = data;
      console.log("answerlistget:" + this.answerlistget);
      // answerlistgetのデータが取得
      for (let i = 0; i < this.answerlistget.length; i++) {
        if (this.answerlistget[i].sex === "man" && this.answerlistget[i].select_num === 1) {
          countSex[0]++;
        } else if (this.answerlistget[i].sex === "woman" && this.answerlistget[i].select_num === 1) {
          countSex[1]++;
        } else if (this.answerlistget[i].sex === "man" && this.answerlistget[i].select_num === 2) {
          countSex[2]++;
        } else if (this.answerlistget[i].sex === "woman" && this.answerlistget[i].select_num === 2) {
          countSex[3]++;
        }
      }
      countall = countSex.reduce((sum, count) => sum + count, 0);
      this.sexview[0] = Math.round(countSex[0] / countall * 100);
      this.sexview[1] = Math.round(countSex[1] / countall * 100);
      this.sexview[2] = Math.round(countSex[2] / countall * 100);
      this.sexview[3] = Math.round(countSex[3] / countall * 100);

      this.formatOne(this.sexview[0]);
      this.formatTwo(this.sexview[1]);
      this.formatThree(this.sexview[2]);
      this.formatFour(this.sexview[3]);

    });
    

  }

}

