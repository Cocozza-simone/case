import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatDialog } from '@angular/material/dialog';

import { EntraComponent } from './entra/entra.component';
import { AboutComponent } from './about/about.component';

import { AccessoSitoComponent } from './accesso-sito/accesso-sito.component';
import { EntraListComponent } from './entra-list/entra-list.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet, HomeComponent,AboutComponent,EntraComponent,AccessoSitoComponent,EntraListComponent,PasswordRecoveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public dialog: MatDialog) {}

  openEntraDialog(): void {
    const dialogRef = this.dialog.open(EntraComponent, {
      width: 'auto', // Larghezza del popup
      panelClass: 'login-container' // Aggiungi una classe per rimuovere il bordo
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Il dialogo è stato chiuso', result);
    });
  }
}
