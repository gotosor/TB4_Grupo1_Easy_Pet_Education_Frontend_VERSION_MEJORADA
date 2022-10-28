import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminViewComponent, SidebarComponent, MenuComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AdminViewComponent, SidebarComponent, MenuComponent],
})
export class AdminViewModule {}
