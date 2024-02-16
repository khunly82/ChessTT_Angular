import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService, PrimeIcons } from 'primeng/api';
import { sessionStart } from 'src/app/core/states/session.reducer';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _store: Store,
    private readonly _messageService: MessageService,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      username: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    Object.keys(this.fg.controls).forEach((key) => {
      this.fg.controls[key].markAsDirty();
    });
    if(this.fg.invalid) {
      return;
    }
    this.isLoading = true;
    this._authService.login(this.fg.value).subscribe({
      next: response => {
        this._store.dispatch(sessionStart(response));
        this._messageService.add({ severity: 'info', icon: PrimeIcons.INFO_CIRCLE, detail: `Bienvenue ${response.username}` });
        this._router.navigate(['tournament']);
        this.isLoading = false;
      }, error: () => {
        this._messageService.add({ severity: 'error', icon: PrimeIcons.TIMES_CIRCLE, detail: `Connection Impossible` });
        this.isLoading = false;
      }
    })
  }

}
