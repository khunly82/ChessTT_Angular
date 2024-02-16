import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeIcons } from 'primeng/api';
import { HasForm } from 'src/app/core/interfaces/has-form';
import { AsyncValidators } from 'src/app/core/validators/async.validators';
import { GenderEnum } from '../../enums/gender.enum';
import { registerForm } from '../../forms/register.form';
import { MemberService } from '../../services/member.service';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, HasForm {

  fg!: FormGroup;
  isLoading: boolean = false;
  GenderEnum = GenderEnum;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _messageService: MessageService,
    private readonly _memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group(registerForm);

    this.fg.get('email')?.addAsyncValidators(AsyncValidators.uniqueById(null, (email, id) => this._memberService.checkEmail(email, id)));
    this.fg.get('username')?.addAsyncValidators(AsyncValidators.uniqueById(null, (username, id) => this._memberService.checkUsername(username, id)));
  }

  onSubmit() {
    Object.keys(this.fg.controls).forEach((key) => {
      this.fg.controls[key].markAsDirty();
    });
    if(this.fg.invalid) {
      return;
    }
    this.isLoading = true;
    this._memberService.register(this.fg.value).subscribe({
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

}
