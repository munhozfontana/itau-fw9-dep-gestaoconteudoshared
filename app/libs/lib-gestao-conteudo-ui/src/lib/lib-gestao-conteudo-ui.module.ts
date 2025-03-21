import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloWorldComponent, HelloWorldComponent],
  exports: [HelloWorldComponent],
})
export class LibGestaoConteudoUiModule {}
