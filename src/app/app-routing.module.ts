import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { FormComponent } from './pages/form/form.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'perfil/:id', component: ProfileComponent },
  { path: 'editar/:id', component: EditContactComponent },
  { path: 'addContact', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
