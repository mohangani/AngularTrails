import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { TestComponent } from './test/test.component';
import { ComponentNameComponent } from '../component-name/component-name.component';


@NgModule({
  declarations: [TestComponent, ComponentNameComponent],
  imports: [
    CommonModule,
    TestModuleRoutingModule
  ]
})
export class TestModuleModule { }
