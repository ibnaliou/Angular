import{ NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,MatMenuModule,      
        
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  ,
     MatGridListModule  } from '@angular/material';



@NgModule({
   imports: [MatButtonModule, MatToolbarModule,MatMenuModule,MatIconModule,MatCardModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  ,
    MatGridListModule,

],
   exports: [MatButtonModule,MatToolbarModule,MatMenuModule,MatIconModule,MatCardModule,MatButtonModule, MatToolbarModule,MatMenuModule,MatIconModule,MatCardModule,      
    MatIconModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  ,
    MatGridListModule,
 ],
})

export class MaterialModule {

}