import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Card } from '../models/card.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
})
export class CardEditComponent implements OnInit {
  id: number;
  card: Card;
  private sub: any;
  cardsArray$: Observable<Card>;
  cardKeys: Array<any>;
  cardEditor: FormGroup;
  newImageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private fb: FormBuilder
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
    });
    this.cardsArray$ = this.cardService
      .getCards()
      .pipe(pluck(String(this.id - 1)));
  }

  updateCard(cardEditor: FormGroup) {
    console.log(cardEditor.getRawValue());
  }
  previewImage(event: any) {
    if (event.target.files && event.target.files[0].type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.newImageUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    console.log('Inappropriate file');
  }
  ngOnInit(): void {
    this.cardsArray$.subscribe(card => {
      this.card = card;
    });
    this.cardKeys = Object.keys(this.card).filter(key => key !== 'id');

    this.cardEditor = this.fb.group({
      id: new FormControl(''),
      topic: new FormControl(''),
      wordEn: new FormControl(''),
      exampleEn: new FormControl(''),
      contextEn: new FormControl(''),
      img: new FormControl(''),
      wordRu: new FormControl(''),
      exampleRu: new FormControl(''),
      contextRu: new FormControl(''),
    });
  }
}
