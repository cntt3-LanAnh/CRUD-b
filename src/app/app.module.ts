import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ExamComponent } from './exam/exam.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ExamComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
