import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/model-cliente';
import { Storage } from '@ionic/storage';


@Injectable()
export class ClienteProvider {

  url: string = 'https://operahouse.net.br/kl/api/cliente/';

  constructor(public http: HttpClient,  public storage: Storage) {
    //console.log('Hello ClienteProvider Provider');
  }

  //storage banco offline
  setStorage(chave, valor) {
    this.storage.set(chave, valor);
  }

  getStorage(chave) {
    return this.storage.get(chave);
  }

  //metodo para adicionar
  cadastroCliente(data: Cliente) {
    return this.http.post<Cliente>(this.url + 'cadastro', data);
  }
  //metodo para atualizar
  showCliente(data: Cliente) {
    return this.http.get<Cliente>(this.url + 'perfil?id=' +data.id);
  }
  //metodo para logar
  
  loginCliente(data: Cliente) {
    return this.http.post<Cliente>(this.url + 'login', data);
  }
  
  //metodo para editar
  editCliente(data: Cliente) {
    return this.http.put<Cliente>(this.url + data.id, data);
  }
  

}
