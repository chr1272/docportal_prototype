import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginstateService} from '../loginstate.service';

export interface DialogData {
  loggedin: boolean;
  user: string;
  pw: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loggedin: boolean;
  user: string;
  pw: string;

  

  constructor(public dialog: MatDialog, public logserv:LoginstateService) {}

  openDialog(): void {
    if (!this.user) {this.loggedin = false} else {this.loggedin = true}
    const dialogRef = this.dialog.open(MyLoginDialog, {
      width: '250px',
      data: { user: this.user, pw: this.pw, loggedin: this.loggedin }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.user = result;
      if (result != "") {
        this.loggedin = true;
        this.logserv.setloginstate(result, true);
      } 
      else { 
        this.logserv.setloginstate(result, false);
        this.loggedin = false;
      }
    });
  }
}

@Component({
  selector: 'login-dialog',
  templateUrl: 'dialog.html',
})
export class MyLoginDialog {

  constructor(
    public dialogRef: MatDialogRef<MyLoginDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}