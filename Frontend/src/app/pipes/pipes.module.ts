import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    CommonModule
  ],
  entryComponents: [SearchPipe],
  exports: [SearchPipe]
})
export class PipesModule { }