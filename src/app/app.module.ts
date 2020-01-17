import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProductAlertsComponent } from './product-list/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule} from '@angular/router';



@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        TopBarComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
