import { Component } from '@angular/core';
import { IQuestion } from '../../models/faq';
import { questions } from '../../data/faqs';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent {
  questions: IQuestion[] = questions;
}
