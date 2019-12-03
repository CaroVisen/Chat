import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    { path: '**', pathMatch:'full', redirectTo: 'chat' }
];

export const appRouting = RouterModule.forRoot(routes);