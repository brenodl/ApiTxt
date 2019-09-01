package br.com.breno.ws.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.com.breno.ws.model.Cliente;
import br.com.breno.ws.service.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;

	public Cliente cadastrar(Cliente cliente) {

		return clienteRepository.save(cliente);
	}

	public Collection<Cliente> listaClientes() {

		return clienteRepository.findAll();
	}

	public Cliente buscarId(Integer id) {

		return clienteRepository.getOne(id);
	}

	public void excluir(Integer id) {

		clienteRepository.deleteById(id);
	

	}

}
