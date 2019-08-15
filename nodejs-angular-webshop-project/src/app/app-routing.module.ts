import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrderAdminComponent } from './page/order-admin/order-admin.component';


const routes: Routes = [
<<<<<<< HEAD
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'admin/order',
    component: OrderAdminComponent
  },
  {
    path: '**',
    component: IndexComponent
  }
=======
  {path: '', component: IndexComponent},
  {path: 'admin/order', component: OrderAdminComponent},
  {path: '**', component: IndexComponent}
>>>>>>> 144301cba7e18638c5a0bba2887f52b0be221d99
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
