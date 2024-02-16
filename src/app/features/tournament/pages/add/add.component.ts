import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeIcons } from 'primeng/api';
import { HasForm } from 'src/app/core/interfaces/has-form';
import { CompareValidators } from 'src/app/core/validators/compare.validators';
import { CategoryEnum } from '../../enums/category.enum';
import { tournamentForm } from '../../forms/tournament.form';
import { TournamentService } from '../../services/tournament.service';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, HasForm {

  fg!: FormGroup;
  isLoading: boolean = false;
  CategoryEnum = CategoryEnum;

  constructor(
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _tournamentService: TournamentService,
    private readonly _messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({ ...tournamentForm }, { validators: (control) => this.validateEndOfRegistration(control) });
    const eloMinControl = this.fg.get('eloMin'); 
    const eloMaxControl = this.fg.get('eloMax'); 

    eloMaxControl?.addValidators(CompareValidators.greaterOrEqualThan(eloMinControl, 'Elo Minimum'));
    eloMinControl?.valueChanges.subscribe(() => eloMaxControl?.updateValueAndValidity());

    const minPlayerControl = this.fg.get('minPlayers'); 
    const maxPlayerControl = this.fg.get('maxPlayers'); 

    maxPlayerControl?.addValidators(CompareValidators.greaterOrEqualThan(minPlayerControl, 'Nombre de joueurs minimums'));
    minPlayerControl?.valueChanges.subscribe(() => maxPlayerControl?.updateValueAndValidity());
  }


  onSubmit() {
    Object.keys(this.fg.controls).forEach((key) => {
      this.fg.controls[key].markAsDirty();
    });
    if(this.fg.invalid) {
      return;
    }
    this.isLoading = true;
    this._tournamentService.add(this.fg.value).subscribe({
      next: () => {
        this._router.navigate(['/tournament']);
        this._messageService.add({ severity: 'success', icon: PrimeIcons.CHECK_CIRCLE, detail: 'Données sauvegardées' });
        this.isLoading = false;
        this.fg.markAsPristine();
      }, error: () => {
        this.isLoading = false;
      }
    });
  }

  validateEndOfRegistration(control: AbstractControl) {
    const dateControl = this.fg?.get('endOfRegistrationDate');
    const minPlayersControl = this.fg?.get('minPlayers');

    if(!dateControl || !minPlayersControl || !dateControl.value || !minPlayersControl.value) {
      return null;
    }

    let need = new Date().getTime() + 86400000 * minPlayersControl.value;

    if(dateControl.value.getTime() < need) {
      return { invalidEndOfRegistrationDate: true }
    }
    return null;
  }
}
