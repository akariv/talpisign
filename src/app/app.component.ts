import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name: string = '';
  phone: string = '';
  year: string = '';
  approved = false;
  approved2 = false;

  get legalese(): string {
    return 'אני מאשר/ת את חתימתי על מכתב בוגרי ובוגרות תלפיות המתנגד לרפורמה המשפטית בתצורתה הנוכחית.';
  }

  get legalese2(): string {
    return 'אני מאשר/ת שהשתחררתי משירות קבע.';
  }

  get to(): string {
    return 'talpis4democracy@gmail.com';
  }

  get subject(): string {
    return encodeURIComponent(`[SIGN] ${this.name}`);
  }

  get body(): string {
    return encodeURIComponent(`${this.legalese}\n\n${this.legalese2}\n\n${this.name} (${this.year})\n${this.phone}\n\nאפשר להוסיף למייל מידע נוסף שתרצו לספר לנו.`);
  }

  get gmailurl(): string {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.to}&su=${this.subject}&body=${this.body}`;
  }
  
  get emailurl(): string {
    return `mailto:${this.to}?subject=${this.subject}&body=${this.body}`;
  }

  ready() {
    return this.name.length > 5 && this.phone.length > 7 && this.approved && this.approved2;
  }
}
