import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show('Settings has been Updated', {
      cssClass: 'alert-success', timeout: 4000
  });

  }
}
