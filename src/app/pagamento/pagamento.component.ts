import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss']
})
export class PagamentoComponent {

  metodoPagamento: string = '';
  valor: number = 0;

  confirmarPagamento() {
    console.log(`Método de Pagamento: ${this.metodoPagamento}`);
    console.log(`Valor Total: ${this.valor}`);
    alert('Pagamento confirmado!');
  }
}
