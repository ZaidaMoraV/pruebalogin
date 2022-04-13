import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';

const appRoutes = [
    { path: '', component: AppComponent, pathMatch: "full" },
    { path: "login", component: LoginComponentComponent, pathMatch: 'full'},
    { path: "register", component: RegisterComponentComponent, pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);