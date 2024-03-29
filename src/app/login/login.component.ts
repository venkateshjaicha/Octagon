import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, AuthenticationService } from '@app/core';
import { ToastrService } from 'ngx-toastr';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  isLoading = false;
  authuser = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == '12345') {
      this.isLoading = true;
      this.authenticationService
        .login(this.loginForm.value)
        .pipe(
          finalize(() => {
            this.loginForm.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          credentials => {
            log.debug(`${credentials.username} successfully logged in`);
            this.route.queryParams.subscribe(params =>
              this.router.navigate([params.redirect || '/'], { replaceUrl: true })
            );
          },
          error => {
            log.debug(`Login error: ${error}`);
            this.error = error;
          }
        );
      this.authuser = true;
      this.toastr.success('Logged In as: ' + this.loginForm.value.username, 'Login success');
    } else {
      this.authuser = false;
    }
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true
    });
  }
}
