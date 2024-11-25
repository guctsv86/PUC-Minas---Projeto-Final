import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoteirosService } from '../services/roteiros.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-selecao-roteiro',
  templateUrl: './selecao-roteiro.component.html',
  styleUrls: ['./selecao-roteiro.component.scss'],
})
export class SelecaoRoteiroComponent implements OnInit {
  rota = {
    origem: '',
    destino: '',
    data: '',
  };

  roteiros: any[] = []; // Lista de roteiros carregados
  errorMessage: string = ''; // Mensagem de erro
  isLoading: boolean = true; // Controle de estado de carregamento
  noDataMessage: string = ''; // Mensagem de lista vazia

  constructor(
    private roteirosService: RoteirosService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true; // Ativa o estado de carregamento

    try {
      const data = await firstValueFrom(this.roteirosService.getRoteiros());
      this.roteiros = data;

      if (this.roteiros.length === 0) {
        this.noDataMessage = 'Nenhum roteiro disponível no momento.';
      }
    } catch (error) {
      this.errorMessage =
        'Erro ao carregar os roteiros. Verifique sua conexão e tente novamente.';
    } finally {
      this.isLoading = false; // Desativa o estado de carregamento
    }
  }

  // Redireciona para a tela de assentos
  escolherRoteiro(idRoteiro: string): void {
    this.router.navigate(['/assentos', idRoteiro]);
  }

  // Validação simples do formulário
  validarFormulario(): boolean {
    return (
      this.rota.origem.trim() !== '' &&
      this.rota.destino.trim() !== '' &&
      this.rota.data.trim() !== ''
    );
  }

  onSubmit(): void {
    if (!this.validarFormulario()) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }
  
    // Aqui você pode adicionar lógica para buscar roteiros com base na entrada do formulário
    console.log('Buscando roteiros para:', this.rota);
  
    // Exemplo para limpar mensagens de erro caso a validação passe
    this.errorMessage = '';
  }  
}
