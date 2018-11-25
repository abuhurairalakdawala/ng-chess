import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { AppRoutingModule } from './app-routing.module';

import { PieceBox } from './directives/piece-box';

@NgModule({
declarations: [
		AppComponent,
		BoardComponent,
		PieceBox
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		DragAndDropModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
