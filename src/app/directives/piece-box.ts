import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { PiecesService } from '../services/pieces.service';
import { SortedPiece } from '../services/sorted-piece';
import { PieceMoveLoader } from '../services/peice-move/piece-move-loader';
import { PieceMovementInfo } from '../services/piece-movement-info';
import { SocketService } from '../services/socket.service';

@Directive({
	selector:'[PieceBox]'
})
export class PieceBox {

	private dcol;

	private drow;

	private pieceName;

	private pieceColor;

	public piece;

	public sortedPieces;

	public pieceToMove;

	public movementInfo;

	@HostListener('click') onclick() {
		let loc = this.dcol+':'+this.drow;
		let item = this.piece[this.sortedPieces[loc]];
		if (this.el.nativeElement.classList.contains('highlight')) {
			this.socketService.emit({col:this.dcol, row: this.drow, pieceToMove: this.pieceToMove});
		} else if (item && item.length) {
			for (let j = 0; j < item.length; j++) {
				if (item[j].column == this.dcol && item[j].row == this.drow) {
					item = this.piece[this.sortedPieces[loc]][j];
					break;
				}
			}

			if (item.color != this.pieceToMove.chance) {
				return false;
			}

			let obj = this.pieceMoveLoader.load(item.name);
			let nextPositions = obj.findValidPosition(item);
			this.highlightNextPositions(nextPositions);
			this.pieceMovementInfo.update('column',item.column);
			this.pieceMovementInfo.update('row',item.row);
			this.pieceMovementInfo.update('nextPositions',nextPositions);
		}
	}

	@HostListener('dragEnd') ondragend() {

	}

	@HostListener('dragStart') ondragstart() {

	}

	@HostListener('drop') ondrop() {

	}

	constructor(
		private renderer: Renderer2,
		private el: ElementRef,
		private piecesService: PiecesService,
		private sortedPiece: SortedPiece,
		private pieceMovementInfo: PieceMovementInfo,
		private pieceMoveLoader: PieceMoveLoader,
		private socketService: SocketService
	) {
		this.piecesService.piece.subscribe(message => this.piece = message);
		this.sortedPiece.pieces.subscribe(message => this.sortedPieces = message);
		this.pieceMovementInfo.data.subscribe(message => this.pieceToMove = message);
	}

	ngAfterViewInit() {
		this.dcol = this.el.nativeElement.getAttribute('data-column');
		this.drow = this.el.nativeElement.getAttribute('data-row');
		this.setPiece();
		this.socketService.movePieceInfo().subscribe(message => {
			if (this.el.nativeElement.getAttribute('data-column') == message.col && this.el.nativeElement.getAttribute('data-row') == message.row) {
				let loc = message.col+':'+message.row;
				this.pieceMovementInfo.update('column', message.pieceToMove.column);
				this.pieceMovementInfo.update('row', message.pieceToMove.row);
				this.pieceMovementInfo.update('nextPositions', message.pieceToMove.nextPositions);
				this.movementInfo = message;
				if (this.sortedPieces[loc]) {
					this.removePieceFromBlock();
				}
				let item = this.piece[this.sortedPieces[this.pieceToMove.column+':'+this.pieceToMove.row]];
				for (let i = 0; i < item.length; i++) {
					if (item[i].column == this.pieceToMove.column && item[i].row == this.pieceToMove.row) {
						let obj = this.pieceMoveLoader.load(item[i].name);
						obj.movePieceToNewPosition(message.col, message.row, i);
						break;
					}
				}
				this.setPiece();
				this.removePiece();
				this.removeHighlights();
			}
		});
	}

	setPiece() {
		if (this.sortedPieces[this.dcol+':'+this.drow]) {
			let item = this.piece[this.sortedPieces[this.dcol+':'+this.drow]];
			let i = this.renderer.createElement('i');
			this.renderer.addClass(i, 'fa');
			this.renderer.appendChild(this.el.nativeElement.children[0], i);
			this.renderer.addClass(this.el.nativeElement, 'has-piece');
			for (let j = 0; j < item.length; j++) {
				if (item[j].column == this.dcol && item[j].row == this.drow) {
					this.renderer.addClass(this.el.nativeElement, item[j].color);
					this.renderer.addClass(i, item[j].icon);
					return false;
				}
			}
		}
	}

	removePiece() {
		this.el.nativeElement.parentNode.parentNode.children[this.pieceToMove.column].children[this.pieceToMove.row].children[0].innerHTML = '';
		this.renderer.removeClass(this.el.nativeElement.parentNode.parentNode.children[this.pieceToMove.column].children[this.pieceToMove.row], 'has-piece');
	}

	highlightNextPositions (nextPositions) {
		let par = this.el.nativeElement.parentNode.parentNode.children;
		for (let i = 0; i < par.length; i++) {
			for (let j = 0; j < par[i].children.length; j++) {
				if (par[i].children[j].classList.contains('highlight')) {
					this.renderer.removeClass(par[i].children[j], 'highlight');
				}
				let x = par[i].children[j].getAttribute('data-column')+':'+par[i].children[j].getAttribute('data-row');
				if (nextPositions.indexOf(x) != -1) {
					this.renderer.addClass(par[i].children[j], 'highlight');
				}
			}
		}
	}

	removeHighlights () {
		let par = this.el.nativeElement.parentNode.parentNode.children;
		for (let i = 0; i < this.pieceToMove.nextPositions.length; i++) {
			let item = this.pieceToMove.nextPositions[i].split(":");
			this.renderer.removeClass(par[item[0]].children[item[1]], 'highlight');
		}
	}

	removePieceFromBlock () {
		let child = this.el.nativeElement.children[0];
		child.removeChild(child.childNodes[0]);
		this.renderer.removeClass(this.el.nativeElement, 'white');
		this.renderer.removeClass(this.el.nativeElement, 'black');
	}
}
