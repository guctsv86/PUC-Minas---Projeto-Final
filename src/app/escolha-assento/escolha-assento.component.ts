import { Component, OnInit } from '@angular/core';
import { AssentosService } from '../services/assentos.service';

interface Assento {
  id: string;
  numero: string;
  disponivel: boolean;
  selecionado: boolean; // Para controle no front-end
}

@Component({
  selector: 'app-escolha-assento',
  templateUrl: './escolha-assento.component.html',
  styleUrls: ['./escolha-assento.component.scss']
})
export class EscolhaAssentoComponent implements OnInit {
  assentos: Assento[] = []; // Lista de assentos dinamicamente carregada
  loading: boolean = false; // Indica carregamento
  errorMessage: string = ''; // Mensagem de erro

  constructor(private assentosService: AssentosService) {}

  ngOnInit(): void {
    this.carregarAssentos();
  }

  carregarAssentos(): void {
    this.loading = true;
    this.assentosService.getAssentos().subscribe(
      (data: Assento[]) => {
        this.assentos = data.map((assento) => ({
          ...assento,
          selecionado: false, // Adiciona propriedade de controle para seleção
        }));
        this.loading = false;
      },
      (error) => {
        console.error('Erro ao carregar assentos:', error);
        this.errorMessage = 'Não foi possível carregar os assentos. Tente novamente mais tarde.';
        this.loading = false;
      }
    );
  }

  selecionarAssento(index: number): void {
    this.assentos[index].selecionado = !this.assentos[index].selecionado;
  }

  confirmarEscolha(): void {
    const selecionados = this.assentos.filter((assento) => assento.selecionado);
    if (selecionados.length === 0) {
      alert('Selecione pelo menos um assento.');
      return;
    }

    console.log('Assentos escolhidos:', selecionados);

    // Aqui você pode integrar com um serviço para enviar os assentos selecionados
    // Exemplo:
    // this.assentosService.reservarAssento(...);
  }
}
