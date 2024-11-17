import { Component, OnInit } from '@angular/core';
import { RoteirosService } from '../services/roteiros.service';

@Component({
  selector: 'app-selecao-roteiro',
  templateUrl: './selecao-roteiro.component.html',
  styleUrls: ['./selecao-roteiro.component.scss']
})
export class SelecaoRoteiroComponent implements OnInit {
  roteiros: any[] = [];

  constructor(private roteirosService: RoteirosService) {}

  ngOnInit(): void {
    this.roteirosService.getRoteiros().subscribe(
      (data) => (this.roteiros = data),
      (error) => console.error(error)
    );
  }
}