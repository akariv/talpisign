import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name: string = '';
  phone: string = '';
  approved = false;

  get legalese(): string {
    return 'מילוי טופס זה מהווה אישור חתימה על מכתב בוגרי ובוגרות תלפיות המתנגד לרפורמה המשפטית בתצורתה הנוכחית.';
  }

  get to(): string {
    return 'talpis4democracy@gmail.com';
  }

  get subject(): string {
    return encodeURIComponent(`[SIGN] ${this.name}`);
  }

  get body(): string {
    return encodeURIComponent(`${this.legalese} הנני מאשר את חתימתי.\n\n${this.name}\n${this.phone}\n\nאפשר להוסיף למייל מידע נוסף שתרצו לספר לנו.`);
  }

  get gmailurl(): string {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.to}&su=${this.subject}&body=${this.body}`;
  }
  
  get emailurl(): string {
    return `mailto:${this.to}?subject=${this.subject}&body=${this.body}`;
  }

  ready() {
    return this.name.length > 5 && this.phone.length > 7 && this.approved;
  }
}
