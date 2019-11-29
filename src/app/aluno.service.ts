import {Injectable} from '@angular/core';
import {Aluno} from './aluno';
import {ALUNOS} from './mock-alunos'

@Injectable ({
  providedIn: 'root',
})

export class AlunoService{
  
  constructor(){};

  getAlunos(): Aluno[]{
  return ALUNOS;
}
};

