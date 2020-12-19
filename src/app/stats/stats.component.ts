import { AfterViewChecked, Component, HostListener, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Member } from '../models/member/Member';
import { MemberService } from '../services/member.service';
import { TrainerService } from '../services/trainer.service';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'urpg-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements AfterViewChecked, OnInit {

  public tab:string;
  public member:Member;

  public resizeTimeout;

  @ViewChild('header', {static: false})
  header: ElementRef;

  @ViewChild('content', {static: false})
  content: ElementRef;

  @ViewChild('menuBar', {static:false})
  menuBar: ElementRef;

  constructor(private trainerService : TrainerService,
    private memberService:MemberService,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.tab = "gyms";
    this.memberService.findByName("Elrond").subscribe(member => {
      this.member = plainToClass(Member, member);
      console.log("Printed from stats/stats.component.ts:");
      console.log(this.member);
    });
  }

  ngAfterViewChecked(): void {
    this.updateContentPadding();
  }

  showTab(tab: string) {
    this.tab = tab;
  }

  @HostListener('window:resize')
  onWindowResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout((() => {
        this.updateContentPadding();
        
      }).bind(this), 500);
  }

  updateContentPadding() {
    if (this.header !== undefined) {
      let height = this.header.nativeElement.offsetHeight;
      this.renderer.setStyle(this.content.nativeElement, 'margin-top', `${height}px`);
      this.renderer.setStyle(this.menuBar.nativeElement, 'margin-top', `${height+56}px`);
    }
  }

}
