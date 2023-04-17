import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Tarefa1Service {
  tarefa1: any[] = [];
  key = 'tarefa1';

  constructor() { }

  salvar(tarefa: any, callback: (() => void) | null = null) {
    tarefa.feito = false;

    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      this.tarefa1.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(this.tarefa1));
    }
    else {
      let collection: any[] = JSON.parse(value);
      collection.push(tarefa);
      localStorage.setItem(this.key, JSON.stringify(collection));
    }
    if (callback != null) {
      callback();
    }


  }

  listar() {
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return [];
    }

    let collection: any[] = JSON.parse(value);
    return collection
  }

  delete(tarefa: any, callback: (() => void) | null = null) {
    ;
    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return;
    }

    let collection: any[] = JSON.parse(value);

    let resultcollection = collection.filter(item => { return item.tarefa != tarefa.tarefa });

    localStorage.setItem(this.key, JSON.stringify(resultcollection));


    if (callback != null) {
      callback();
    }
  }

  atualizar(tarefa: any, callback: (() => void) | null = null) {


    let value = localStorage.getItem(this.key);

    if (value == null || value == undefined) {
      return
    }
    else {
      let collection: any[] = JSON.parse(value);

      collection.forEach(item => {
        if (item.tarefa == tarefa.tarefa) {
          item.feito = tarefa.feito;
        }
      })

      localStorage.setItem(this.key, JSON.stringify(collection));
    }
    if (callback != null) {
      callback();
    }


  }
}
