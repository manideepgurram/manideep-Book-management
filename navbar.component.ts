import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogModel,
} from '../confirmation-dailog/confirmation-dailog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  loggedin: any;
  result: string = '';
  constructor(private tokenService: TokenService,public dialog: MatDialog,private route:Router) {}

  ngOnInit(): void {
    this.loggedin = localStorage.getItem('loggedin');
    console.log(this.loggedin);
    this.username = localStorage.getItem('username');
  }

  logout(): void {
    this.route.navigateByUrl('/home')
    this.tokenService.signOut();
    // window.location.reload();

  }
  confirmDialog(): void {
    const message = `Do you want to logout?`;

    const dialogData = new ConfirmationDialogModel('Are you Sure', message);

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      maxWidth: '600px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
      console.log(this.result, 'result');

      if (this.result) {
        this.logout();
      }
    });
  }
}
