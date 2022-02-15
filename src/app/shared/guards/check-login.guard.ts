import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { map,take, tap } from 'rxjs/operators';
// import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private atuhService: NbAuthService, private router: Router){}

  canActivate(){
    return this.atuhService.isAuthenticated()
    .pipe(
      tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['auth/login']);
        }
      }),
    );
  }
}
