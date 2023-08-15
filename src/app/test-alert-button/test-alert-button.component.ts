import { Component } from '@angular/core';

@Component({
  selector: 'app-test-alert-button',
  templateUrl: './test-alert-button.component.html',
  styleUrls: ['./test-alert-button.component.less'],
})
export class TestAlertButtonComponent {
  hideContent = true;
  content = 'you have been warned!';

  showAlert() {
    this.hideContent = !this.hideContent;
  }
}
