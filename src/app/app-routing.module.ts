import { NgModule } from "@angular/core";

import { routes } from "./app.routes";
import { RouterModule } from "@angular/router"; // Import RouterModule from the '@angular/router' package




@NgModule({
    imports: [RouterModule.forRoot(routes)// Add the aboutComponent to the imports array
        ],
    exports: [RouterModule],
})

export class AppRoutingModule {
  
}