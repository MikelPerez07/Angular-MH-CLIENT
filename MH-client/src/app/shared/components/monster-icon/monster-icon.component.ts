import { Component, inject, Input, OnInit } from '@angular/core';
import { monsterIconData } from '../../../core/models/auxiliaries';
import { MonsterIconService } from '../../../core/services/monster-icon.service';
import { MonsterIcon } from '../../../core/models/entities';
import { GLOBAL } from '../../../core/environments/global';

@Component({
  selector: 'app-monster-icon',
  imports: [],
  templateUrl: './monster-icon.component.html',
  styleUrl: './monster-icon.component.css'
})
export class MonsterIconComponent implements OnInit {
  ngOnInit(): void {
    this.url = GLOBAL.url_monster_icon + this.monsterData.icon;

  }

  @Input() monsterData: monsterIconData;
  url: string = "";



}
